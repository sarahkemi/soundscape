from flask import Flask
from flask import request, jsonify
from config import config
import spotipy
import spotipy.util as util


app = Flask(__name__)

user = 'sarahkemi'
scope = 'playlist-modify-private user-library-read'
auth = util.prompt_for_user_token(user, scope, client_id=config['spotify_id'], client_secret=config['spotify_secret'], redirect_uri=config['spotify_uri'])


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/playlist', methods=['GET', 'POST'])
def get_playlist():
    if auth:
        sp = spotipy.Spotify(auth=auth)
        if request.method == 'POST':
            json = request.get_json()
            content = json['content']
            pref = json['pref']

            output = {'songs': []}

            for feeling in pref:
                if feeling in content:
                    artist_id = get_artist_id(sp, pref[feeling])
                    if artist_id:
                        top_tracks = sp.artist_top_tracks(artist_id, country='US')
                        tracks = [{track['name']:track['id']} for track in top_tracks['tracks']]
                        output['songs'].extend(tracks)

            return jsonify(output)

        return 'yo playlist'
    return 'nada'


def get_artist_id(sp,artist):
    search = sp.search(artist, type='artist')
    if search['artists']['items']:
        return search['artists']['items'][0]['id']
    return None


if __name__ == "__main__":
    app.run(debug=True)
    # app.run()
