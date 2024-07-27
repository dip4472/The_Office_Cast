import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src = {item.character_avatar_url} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Character:</strong> {item.character}
            </li>
            <li>
              <strong>Quote:</strong> {item.quote}
            </li>
            <li>
              <strong>Quote Id:</strong> {item.id}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem