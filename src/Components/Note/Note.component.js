import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import { withHandlers, pure, compose } from 'recompose';

import WithTransform from '../../Components/WithTransform/WithTransform.component'
import './Note.component.css';

const Note = ({ id ,note , onRemove, onUpdate }) => {
  console.log('===========', id);
  return (
    <WithTransform>
      {
        ({top, left, transform}) =>
          <div className="note" style={{top, left, transform}}>
            <form>
              <div className="controls">
                <button onClick={onRemove}><FaTrash /></button>
              </div>
              <textarea defaultValue={note} required onBlur={onUpdate} />
            </form>
          </div>
      }
    </WithTransform>
  )
};

export default compose(
  pure,
  withHandlers({
    onRemove: ({ onRemoveNote, id }) => event => {
      onRemoveNote({ id }, event);
    },
    onUpdate: ({ onUpdateNote, id }) => event => {
      onUpdateNote({ id, note: event.currentTarget.value});
    }
  }),
)(Note);
