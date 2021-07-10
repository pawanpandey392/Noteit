import { createContext, useState } from 'react';

const PinnedNotesContext = createContext({
  pinnedNotes: [],
  totalPinnedNotes: 0,
  addPinnedNote: (pinnedNote) => {},
  removePinnedNote: (pinnedNoteId) => {},
  isNotePinned: (pinnedNoteId) => {}
});

export function PinnedNotesContextProvider(props) {

  const [userPinnedNotes, setPinnedNotes] = useState([]);

  function addPinnedNoteHandler(pinnedNote) {
    setPinnedNotes((previousPinnedNote) => {
      return previousPinnedNote.concat(pinnedNote);
    });
  }

  function removePinnedNoteHandler(pinnedNoteId) {
    setPinnedNotes((previousPinnedNote) => {
      return previousPinnedNote.filter(note => {
        return note.id !== pinnedNoteId;
      });
    });
  }

  function isNotePinnedHandler(pinnedNoteId) {
    return userPinnedNotes.some(note => {
      return note.id === pinnedNoteId;
    })
  }

  const context = {
    pinnedNotes: userPinnedNotes,
    totalPinnedNotes: userPinnedNotes.length,
    addPinnedNote: addPinnedNoteHandler,
    removePinnedNote: removePinnedNoteHandler,
    isNotePinned: isNotePinnedHandler
  };

  return <PinnedNotesContext.Provider value={context}>
    {props.children}
  </PinnedNotesContext.Provider>
}

export default PinnedNotesContext;