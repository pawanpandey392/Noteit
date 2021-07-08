import NoteCard from "./NoteCard";

function NoteCardList (props) {
  return (
    <div className="card-columns" style={{columnGap: '0.3rem'}}>
      {props.notes.map((note) => (
        <NoteCard 
          key={note.id} 
          id={note.id} 
          image={note.image} 
          key={note.id} 
          title={note.title} 
          description={note.description} 
        />
      ))}
    </div>
  );
}

export default NoteCardList;