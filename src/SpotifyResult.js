import React, {Component} from 'react';
import spotifyLogo from './spotifyLogo.svg';

class SpotifyResult extends Component {
  render() {
    const imgStyle = {
      width: '16px',
      height: '16px',
      verticalAlign: 'middle',
      marginLeft: '6px',
    };

    const listStyle = {
      margin: '4px',
    };

    const list = this.props.results.map((result, index) => {
      return (
        <li key={index} style={listStyle}>
          {result.artists.join(', ')}
          &nbsp;/&nbsp;
          <a href={result.url} target="_blank">{result.trackName}</a>
          <a href={result.app_uri}>
            <img src={spotifyLogo} alt="logo" style={imgStyle} />
          </a>
        </li>
      );
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default SpotifyResult;
