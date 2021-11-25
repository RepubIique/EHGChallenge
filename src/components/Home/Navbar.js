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
        backgroundColor: '#8ABAD3FF',
      }}
    >
      <div className="container">
        <div className="navbar-logo">
          <h4 style={{ color: '#f7ced7ff' }} className="navbar-logo-link">
            EHG Coding Challenge
          </h4>
        </div>
      </div>
    </header>
  )
}
