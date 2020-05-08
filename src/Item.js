// An item element with the basic styling done for you, you can use this to
// render the tiled grocery store items. You will need to add props of course!

import React from 'react';


export default function Item() {
  return (
    <div className="tile is-parent is-4">
      <div className="tile is-child box">
        <article>
          <p className="title">Title</p>
          <p className="subtitle">Price</p>
        </article>
      </div>
    </div>
  )
}
