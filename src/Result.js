import React, {Component} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import SpotifyResult from './SpotifyResult';
import CircularProgress from 'material-ui/CircularProgress';

class Result extends Component {
  render() {
    const spotifyResult = this.props.spotifyResult;
    let spotify = null;
    if (spotifyResult) {
      spotify = <SpotifyResult results={spotifyResult} />;
    } else {
      spotify = <CircularProgress size={16} thickness={1.5} />;
    }

    const rowStyle = {
      whiteSpace: 'normal',
    };

    return (
      <TableRow>
        <TableRowColumn style={rowStyle && {width: '2em'}}>
          {this.props.trackId}
        </TableRowColumn>
        <TableRowColumn style={rowStyle}>{this.props.query}</TableRowColumn>
        <TableRowColumn style={rowStyle}>{spotify}</TableRowColumn>
      </TableRow>
    );
  }
}

export default Result;
