
function DeckCard () {
  return (
    <div className="card float-left" style={{"width": "18rem", "margin": "5px"}}>
    <img className="card-img-top" src="http://via.placeholder.com/100" alt="Card image cap 1" style={{"width": "286px", "height": "180px"}} />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  );
}

export default DeckCard;