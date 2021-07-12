import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from './ui/Card';
import classes from './NoteCard.module.css';
import PinnedNotesContext from './../store/pinned-notes-context';

function NoteCard(props) {

  const pinNoteCtx = useContext(PinnedNotesContext);
  const isNotePinned = pinNoteCtx.isNotePinned(props.id);

  function togglePinHandler() {
    if (isNotePinned) {
      pinNoteCtx.removePinnedNote(props.id);
    } else {
      pinNoteCtx.addPinnedNote({
        id: props.id,
        title: props.title,
        author: props.author,
        description: props.description
      });
    }
  }

  return (
    <Card>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
          <div className="float-right">
            <span>
              <Link onClick={togglePinHandler} to="#">
                {isNotePinned ? 'unpin' : 'pin'}
              </Link>
            </span>
            <span className={classes.dotSeparator}> . </span>
            <span>
              <Link to="#">edit</Link>
            </span>
            <span className={classes.dotSeparator}> . </span>
            <span>
              <Link to="#">delete</Link>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default NoteCard;