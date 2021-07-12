import { useContext } from 'react';
import {Link} from 'react-router-dom';

// import Loader from './../components/Loader';
import NoteCardList from '../components/NoteCardList';
import Breadcrumb from '../components/layout/Breadcrumb';
import PinnedNotesContext from '../store/pinned-notes-context';

function PinnedNotesPage() {

  const pinNoteCtx = useContext(PinnedNotesContext);

  let content;

  if (pinNoteCtx.totalPinnedNotes === 0) {
    content = (
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="alert alert-warning" role="alert">
            No pinned notes yet. <Link to="/notes" className="alert-link">Click here to pin Notes</Link>.
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    );
  } else {
    content = <NoteCardList notes={pinNoteCtx.pinnedNotes} />
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumb pageTitle="Pinned Notes Page" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {content}
        </div>
      </div>
    </div>
  );
}

export default PinnedNotesPage;