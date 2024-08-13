import { useState } from 'react'
import './App.css'
import Slider from './Slider'
import './Slider.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header' style={{ position: 'sticky', top: 0 }}>
        <h1>Tapas Tapas</h1>
        <a href='#'>Home</a>
        <a href='#'>Menu</a>
        <a href='#'>About</a>
      </div>
      <Slider />
      <section className='section'>
        <h2>Welcome to Tapas Tapas!</h2>
        <p>At Tapas Tapas, we bring you a delightful culinary experience inspired by the rich traditions of Spanish food. Nestled in the heart of Madrid, our restaurant offers a cozy ambiance, impeccable service, and a menu crafted with the freshest ingredients.

          Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, our team is dedicated to making your visit memorable. Explore our diverse menu, savor our chef's specialties, and enjoy an unforgettable dining experience.
          Come dine with us and discover the perfect blend of flavors, creativity, and hospitality. We look forward to serving you!</p>
      </section>
      <section className='comment'>
        <div className='comment-wrap'>
          <h2>Coming right up!</h2>
          <p>A tapa on the terrace? Montadito inside? Salad in the bar?
            Just let us know, we'll reserve it for you right now!</p>
        </div>
      </section>
    </>
  )
}

export default App
