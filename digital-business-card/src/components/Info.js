import profilePicture from '../assets/profile_image.jpeg';

export default function Info() {
  return (
    <div className="info">
      <img 
        src={profilePicture}
        alt='React Logo'
        className='info--profile_picture'
      />
      <h2>Laura Smith</h2>
      <h4>Frontend Developer</h4>
      <p>Laurasmith Website</p>
    </ div>
  )
}