import React from 'react'

function List({ list, redirectToAbout }) {
  const redirect = (active) => {
    if (active && !!redirectToAbout) redirectToAbout()
  }

  return (
    <ul className='list-container'>
      {list.map((item) => (
        <li
          key={item.label}
          className={item.active ? 'active' : ''}
          onClick={() => redirect(item.active)}
        >
          <img width='22px' src={`assets/${item.imgPath}`} alt='' />
          <label>{item.label}</label>
          <span className='next-icon'>
            <img src='assets/next.svg' width='16px' alt='' />
          </span>
        </li>
      ))}
    </ul>
  )
}

export default List
