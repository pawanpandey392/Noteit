import { useHistory } from 'react-router';

import NoteForm from './Noteit';
import Card from './ui/Card'; 

function CreateNote() {

  const history = useHistory();

  function createNoteHandler(noteData) {
    console.log(noteData);
    fetch(
      'https://reactapp-7ccf1-default-rtdb.firebaseio.com/notes.json', 
      {
        method: 'POST',
        body: JSON.stringify(noteData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/notes');
    }).catch(() => {
      console.log('This is a catch block..');
    });
  }

  return (
    <Card>
      <NoteForm onCreateNote={createNoteHandler} />
    </Card>
  );
}

export default CreateNote;