import React from 'react'
import king from './components/img/king.png'
import queen from './components/img/b.png'
const Piece = () => {
  return (
    <><div className='chess_pieces'>
      <div className='piece'>
        <h1>Moves of the king</h1>
        <img src={king} />
      </div>
    </div><div className='piece'>
        <h1>Moves of a queen</h1>
        <img src={queen} />
      </div></>
  )
}

export default Piece