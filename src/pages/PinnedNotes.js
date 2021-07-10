import { useContext } from 'react';

// import Loader from './../components/Loader';
import PinnedNotesContext from '../store/pinned-notes-context';
import NoteCardList from '../components/NoteCardList';

function PinnedNotesPage() {

  const pinNoteCtx = useContext(PinnedNotesContext);

  let content;

  if (pinNoteCtx.totalPinnedNotes === 0) {
    content = <p>No pinned notes yet. Start adding some?</p>
  } else {
    content = <NoteCardList notes={pinNoteCtx.pinnedNotes} />
  }

  return (
    <section className="mt-3">
      {/* <div>Pinned Notes Page.</div> */}
      {content}
    </section>
  );
}

export default PinnedNotesPage;