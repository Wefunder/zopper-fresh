// Basic styling/html for the grocery store items container. You can use this,
// you will definitely have to modify it to render correct things and respond
// accordingly.

import React from 'react';
import Item from "./Item"


export default function Items() {
  return (
    <div className="container" style={{marginTop: "10px"}}>
      <h2 className="title is-2">Grocery Store Items</h2>
      <div className="tiles">
        <div className="tile is-ancestor">
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
    </div>
  )
}
