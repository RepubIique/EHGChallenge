import React from 'react'

export const NavBar = () => {
  return (
    <header
      className="navbar"
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#2546CE',
      }}
    >
      <div className="container">
        <div className="navbar-logo">
          <h4 className="navbar-logo-link">EHG Coding Challenge</h4>
        </div>
      </div>
    </header>
  )
}
