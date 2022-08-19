import profilePicture from '../assets/profile_image.jpeg';

export default function Info() {
  return (
    <div className="info">
      <img 
        src={profilePicture}
        alt='React Logo'
        className='info--profile_picture'
      />
      <h2 className='info--fullname'>Laura Smith</h2>
      <h4 className='info--role'>Frontend Developer</h4>
      <p className='info--website'>laurasmith.website</p>
      <div>
        <button className='info--email'>Email</button>
        <button className='info--linkedin'>LinkedIn</button>
      </div>
    </ div>
  )
}