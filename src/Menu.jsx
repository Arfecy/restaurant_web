import { Link } from "react-router-dom"
function Menu() {
  return (
    <>
      <div className='header'>
        <img src='/tapas.svg'></img>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='About'>About</Link>
      </div>
      <h1>Menu</h1>
    </>
  )
}

export default Menu
