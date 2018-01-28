from flask import Flask
from flask import request, jsonify
from config import config
import spotipy
import spotipy.util as util
from random import *


app = Flask(__name__)

username = 'sarahkemi'
scope = 'playlist-modify-private playlist-modify-public'
auth = util.prompt_for_user_token(username, scope, client_id=config['spotify_id'], client_secret=config['spotify_secret'], redirect_uri=config['spotify_uri'])


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
            playlist = {'playlist_url': 'none'}

            songs = get_songs_from_content(sp, content, pref)

            if songs:
                playlist = build_playlist(sp, songs.keys(), 10)

            output = {"songs": songs, "playlist": playlist}
            return jsonify(output)

        return 'yo playlist'
    return 'nada'


def get_songs_from_content(sp, content, pref):
    output = {}
    for feeling in pref:
                if feeling.lower() in content.lower():
                    artist_id = get_artist_id(sp, pref[feeling])
                    if artist_id:
                        top_tracks = sp.artist_top_tracks(artist_id, country='US')
                        for track in top_tracks['tracks']:
                            output[track['id']] = track['name']
    return output

def get_artist_id(sp, artist):
    search = sp.search(artist, type='artist')
    if search['artists']['items']:
        return search['artists']['items'][0]['id']
    return None


def build_playlist(sp, song_ids, length):
    output = {}

    playlist_name = 'soundscape_' + str(randint(1, 1000))
    playlist = sp.user_playlist_create(username, playlist_name, public=True)
    playlist_id = playlist['id']
    playlist_url = playlist['external_urls']['spotify']
    output['create_playlist'] = playlist
    output['id'] = playlist_id
    output['playlist_url'] = playlist_url

    track_ids = song_ids

    if length < len(song_ids):
        track_ids = sample(song_ids, length)

    update_playlist = sp.user_playlist_add_tracks(username, playlist_id, track_ids)
    output['update_playlist'] = update_playlist

    return output




if __name__ == "__main__":
    app.run(debug=True)
    # app.run()
