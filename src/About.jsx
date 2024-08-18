import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className='header'>
        <img src='/tapas.svg'></img>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='About'>About</Link>
      </div>
      <h1>About us!</h1>
    </>
  )
}

export default About