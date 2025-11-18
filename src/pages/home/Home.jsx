import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { obj } from '../../data/constant'
const Home = () => {
  return (
    <div>
        {/* <Sidebar /> */}
        {obj.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </div>
        ))}
    </div>
  )
}

export default Home