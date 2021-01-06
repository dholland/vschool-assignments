import React from 'react'
import Find from './Find'

const Home = (props) => {
  return (
    <div className="min-h-full flex flex-col justify-center">
      <h1 className="text-3xl text-center pb-5">Find a Favorite Vehicle</h1>
      <Find/>
    </div>
  )
}

export default Home
