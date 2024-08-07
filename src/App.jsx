import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <h1>Tapa Tapa</h1>
        <a href='#'>Home</a>
        <a href='#'>Menu</a>
        <a href='#'>About</a>
      </div>
      <section className='section'>
        <h2>Welcome to Tapa Tapa!</h2>
        <p>At Tapa Tapa, we bring you a delightful culinary experience inspired by the rich traditions of Croatian food. Nestled in the heart of Zagreb, our restaurant offers a cozy ambiance, impeccable service, and a menu crafted with the freshest ingredients.

          Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, our team is dedicated to making your visit memorable. Explore our diverse menu, savor our chef's specialties, and enjoy an unforgettable dining experience.
          Come dine with us and discover the perfect blend of flavors, creativity, and hospitality. We look forward to serving you!</p>
      </section>
    </>
  )
}

export default App
