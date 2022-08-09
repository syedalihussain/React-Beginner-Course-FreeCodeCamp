import reactLogo from '../images/react-icon-small.png';

export default function Navbar() {
  return (
    <nav>
      <img 
        src={reactLogo}
        alt='React Logo'
        className='nav--icon'
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h3 className="nav--title_text">React Course - Project 1</h3>
    </nav>
  )
}