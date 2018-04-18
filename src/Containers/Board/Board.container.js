import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import axios from 'axios';

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

  _renderNote = ({ id, note }) => (
    <div>{note}</div>
  )

  render () {
    const { notes } = this.state;
    return (
      <Fragment>
        { notes.map(this._renderNote)}
      </Fragment>
    )
  }
};

Board.defaultProps = {
  count: 25
};

export default Board;