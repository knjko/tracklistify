import React, {Component} from 'react';
import Result from './Result';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

class ResultList extends Component {
  render() {
    const resultListStyle = {
      marginTop: '40px',
    };

    const results = this.props.results.map(result => {
      return (
        <Result
          key={result.trackId}
          trackId={result.trackId}
          query={result.query}
          spotifyResult={result.spotifyResult}
        />
      );
    });

    return (
      <div className="ResultList" style={resultListStyle}>
        <Table style={{tableLayout: 'auto'}}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                Search Results
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={{width: '2em'}}>#</TableHeaderColumn>
              <TableHeaderColumn>Track</TableHeaderColumn>
              <TableHeaderColumn>Link</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ResultList;
