
function DeckCard () {
  return (
    <div className="card float-left" style={{"width": "18rem", "margin": "5px"}}>
    <img className="card-img-top" src="http://via.placeholder.com/100" alt="Card image cap" />
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  );
}

export default DeckCard;