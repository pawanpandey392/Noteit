import Card from './ui/Card';

function NoteCard(props) {
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
            <span><a href="#">pin</a></span>
            <span> | </span>
            <span><a href="#">update</a></span>
            <span> | </span>
            <span><a href="#">delete</a></span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default NoteCard;