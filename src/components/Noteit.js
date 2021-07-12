import { useRef } from 'react';

function Neteit (props) {

  const noteTitleRef = useRef();
  const noteAuthorRef = useRef();
  const noteDescriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    // Current value of textbox
    const enteredTitle = noteTitleRef.current.value;
    const enteredAuthor = noteAuthorRef.current.value;
    const enteredDescription = noteDescriptionRef.current.value;

    const noteData = {
      title: enteredTitle,
      author: enteredAuthor,
      description: enteredDescription
    };

    props.onCreateNote(noteData);
  }

  return (
    <form className="createNoteForm" onSubmit={submitHandler}>
      <label>Got something in your mind?</label>
      <div className="form-group">
        <input ref={noteTitleRef} className="form-control" id="noteTitle" placeholder="Title" rows="6" required />
      </div>
      <div className="form-group">
        <input ref={noteAuthorRef} className="form-control" id="noteAuthor" placeholder="Author" rows="6" required />
      </div>
      <div className="form-group">
        <textarea ref={noteDescriptionRef} className="form-control" id="noteDescription" placeholder="Description" rows="6" required></textarea>
      </div>
      <button className="btn btn-primary btn-sm">Noteit</button>
      <button className="btn btn-secondary btn-sm ml-2">Discard</button>
    </form>
  );
}

export default Neteit;