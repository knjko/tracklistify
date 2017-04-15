import React, {Component} from 'react';
import PlaylistForm from './PlaylistForm';
import ResultList from './ResultList';
import Spotify from 'spotify-web-api-js';

class Tracklistify extends Component {
  constructor() {
    super();
    this.state = {
      resultData: [],
    };
  }

  handlePlayListFromSubmit(text) {
    let data = this.state.resultData;
    data = [];
    const queries = text.split(/\r\n|\r|\n/).filter(String);
    queries.forEach((query, index) => {
      data.push({trackId: index + 1, query: query});
      this.setState({resultData: data});
    });

    this.searchTracks(queries);
  }

  searchTracks(queries) {
    const tasks = queries.map((task, index) => this.searchSpotify(task, index));
    tasks.reduce(function(prev, curr, index, array) {
      return prev.then(curr);
    }, Promise.resolve());
  }

  searchSpotify(query, index) {
    const spotifyApi = new Spotify();
    spotifyApi.searchTracks(query, {limit: 3}).then(
      data => {
        this.setResultData(index, data);
      },
      err => {
        console.error(err);
      },
    );
  }

  setResultData(index, result) {
    const data = this.state.resultData;
    data[index].spotifyResult = this.formatSpotifyResponse(result);
    this.setState({resultData: data});
  }

  formatSpotifyResponse(response) {
    return response.tracks.items.map(item => {
      const artists = item.artists.map(artist => {
        return artist.name;
      });
      return {
        trackName: item.name,
        artists: artists,
        url: item.external_urls.spotify,
        app_uri: item.uri,
      };
    });
  }

  render() {
    const introStyle = {
      lineHeight: '24px',
    };

    const intro = `
    Bulk search Spotify tracks. Paste your tracklist and search.<br>
    <i>The tracklist on placeholder is taken from the last part of
    <a href='https://www.mixesdb.com/w/2016-10-28_-_Four_Tet_@_Far_Away,_Los_Angeles' target="_blank">
      Far Away Los Angeles 28th October 2016 by Four Tet
    </a></i>.`;

    return (
      <div className="Tracklistify">
        <h2>Tracklistify</h2>
        <p
          className="Intro"
          dangerouslySetInnerHTML={{__html: intro}}
          style={introStyle}
        />
        <PlaylistForm serachPlaylist={e => this.handlePlayListFromSubmit(e)} />
        <ResultList results={this.state.resultData} />
        <footer />
      </div>
    );
  }
}

export default Tracklistify;
