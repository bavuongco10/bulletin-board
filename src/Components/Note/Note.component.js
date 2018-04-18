import React from 'react';

import WithTransform from '../../Components/WithTransform/WithTransform.component'
import './Note.component.css';

const Note = ({ note }) => {
  return (
    <WithTransform>
      {
        ({top, left, transform}) =>
          <div className="note" style={{top, left, transform}}>
            {note}
          </div>
      }
    </WithTransform>
  )
};

export default Note;
