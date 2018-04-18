import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import Note from '../../Components/Note/Note.component';
import './Board.container.css';

class Board extends Component {
  state = {
    notes: []
  };

  async componentDidMount () {
    const { count } = this.props;
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&sentences=${count}`);
    const data = res.data[0];
    const notes =  _.split(data, '. ').map((sentence, index) => ({
        id: index,
        note: sentence.substring(0, 25)
      })
    );
    this._addNotes(notes);
  }

  _addNotes = (notes) => {
    this.setState({
      notes
    });
  };

  _onRemoveNote = ({ id }) => {
    this.setState(prevState => ({
      notes: _.filter(prevState.notes, (note => note.id !== id))
    }))
  };

  render () {
    const { notes } = this.state;
    return (
      <div className="board">
        { notes.map((prop) => <Note key={prop.id} {...prop} onRemoveNote={this._onRemoveNote}/>)}
      </div>
    )
  }
};

Board.defaultProps = {
  count: 50
};

export default Board;