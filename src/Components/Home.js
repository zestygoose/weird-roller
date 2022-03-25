import React from 'react'
import Nav from './Nav'
import Roller from './Roller'

export const Home = () => {
  return (
    <div>
        <Nav></Nav>
        <div className='container mx-auto'>
            <Roller></Roller>
        </div>
    </div>
  )
}
