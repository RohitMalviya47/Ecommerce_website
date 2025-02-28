import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import { BestSeller } from '../components/BestSeller'
import { Ourpolicy } from '../components/Ourpolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Ourpolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home;