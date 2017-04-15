import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PlaylistForm extends Component {
  constructor() {
    super();
    this.state = {
      tracklist: `Radiohead / Desert Island Disk
Floating Points / Vacuum Boogie
Percussions / Digital Arpeggios
Arnie Love & The Lovettes / We've Had Enough
Daphni / Ye Ye
Osborn / Afrika
Debbie Gibson / Only In My Dreams
Literon / Freak Funktion
Four Tet / For These Times
Ricardo Villalobos / Alterverwalter
Célia / Odavi
Azymuth / Jazz Carnival`,
    };
  }

  handleChange(e) {
    this.setState({tracklist: e.target.value});
  }

  handleSubmit(e) {
    this.props.serachPlaylist(this.state.tracklist);
  }

  render() {
    const textareaStyle = {
      fontFamily: "'Sanchez', serif",
      fontSize: '13px',
      padding: '10px',
    };

    const buttonStyle = {
      margin: '20px auto',
      width: '140px',
      display: 'block',
    };

    return (
      <div className="PlaylistForm">
        <TextField
          name="tracklist"
          value={this.state.tracklist}
          multiLine={true}
          rows={10}
          fullWidth={true}
          onChange={e => this.handleChange(e)}
          style={textareaStyle}
        />
        <RaisedButton
          label="Search"
          onClick={e => this.handleSubmit(e)}
          style={buttonStyle}
        />
      </div>
    );
  }
}

export default PlaylistForm;
