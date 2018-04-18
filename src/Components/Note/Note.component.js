import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import { withHandlers } from 'recompose';

import WithTransform from '../../Components/WithTransform/WithTransform.component'
import './Note.component.css';

const Note = ({ id ,note, onRemove }) => {
  return (
    <WithTransform>
      {
        ({top, left, transform}) =>
          <div className="note" style={{top, left, transform}}>
            <form>
              <div className="controls">
                <button onClick={onRemove}><FaTrash /></button>
              </div>
              <textarea placeholder={note} required/>
            </form>
          </div>
      }
    </WithTransform>
  )
};

export default withHandlers({
  onRemove: ({ onRemoveNote, id }) => event => {
    onRemoveNote({ id }, event);
  }
})(Note);
