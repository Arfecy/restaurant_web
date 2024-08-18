import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Slider from './Slider'
import './Slider.css'


function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <img src='/tapas.svg'></img>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
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
      <section className='food'>
        <div className='foodItem'>
          <p>Gazpacho</p>
          <img src='/foods/Gazpacho.jpg' />
        </div>
        <div className='foodItem'>
          <p>Paella</p>
          <img src='/foods/paella.jpg' />
        </div>
        <div className='foodItem'>
          <p>Patatas Bravas</p>
          <img src='/foods/patatas-bravas.jpg' />
        </div>
        <div className='foodItem'>
          <p>Pisto</p>
          <img src='/foods/pisto.jpg' />
        </div>
        <div className='foodItem'>
          <p>Tortilla Espanola</p>
          <img src='/foods//tortilla-Espanola.jpeg' />
        </div>
        <div className='foodItem'>
          <p>Gambas Al Ajillo</p>
          <img src='/foods/gambasAlAjillo.jpg' />
        </div>
      </section>
    </>
  )
}

export default HomePage
