import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';

import WithTransform from '../../Components/WithTransform/WithTransform.component'
import './Note.component.css';

const Note = ({ note }) => {
  return (
    <WithTransform>
      {
        ({top, left, transform}) =>
          <div className="note" style={{top, left, transform}}>
            <form>
              <div className="controls">
                <button><FaTrash /></button>
              </div>
              <textarea placeholder={note} required/>
            </form>
          </div>
      }
    </WithTransform>
  )
};

export default Note;
