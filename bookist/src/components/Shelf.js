import React from 'react';

const Shelf = function(props) {

  let shelfdisplay = props.shelf.map((e, i) => {
    return <p className="shelflist" key={i}>{e}</p>;
  })

  return (
    <div className="shelf">
      <h2>Your Shelf</h2>
      {shelfdisplay}
      <button className="clearshelf" onClick={() => props.clearShelfFn()}>clear shelf</button>
    </div>
  )
}

export default Shelf;