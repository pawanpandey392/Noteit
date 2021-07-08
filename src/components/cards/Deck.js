import { useState } from 'react';

import Pin from './pin/Pin';

function Deck() {

  let [isPinModalOpen, setPinModalIsOpen] = useState(false);

  function pinHandler() {
    console.log(isPinModalOpen);
    setPinModalIsOpen(true);
    console.log(isPinModalOpen);
  }

  return (
    <div className="card-deck mt-3">
      <div className="card">
        {/* <img className="card-img-top" src="http://via.placeholder.com/100" alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
          <div className="float-right">
            {/* <span><a href="#" onClick={pinHandler}>pin</a></span> */}
            <button className="btn" onClick={pinHandler}>pin</button>
            {/* <span><a href="#" onClick={pinHandler}>pin</a></span> */}
            <span> | </span>
            {/* <span><a href="#">update</a></span> */}
            <button className="btn">update</button>
            <span> | </span>
            {/* <span><a href="#">delete</a></span> */}
            <button className="btn">delete</button>
          </div>
        </div>
      </div>
      {/* {isPinModalOpen && <Pin />} */}
      {isPinModalOpen ? <Pin /> : null}
    </div>
  );
}

export default Deck;