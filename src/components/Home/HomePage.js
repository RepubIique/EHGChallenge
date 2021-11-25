import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './Navbar'
import { Card } from '../Card/Card'

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Card />
      <Footer />
    </React.Fragment>
  )
}
