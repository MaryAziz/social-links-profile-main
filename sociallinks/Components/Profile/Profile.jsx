import React from 'react'
import './Profile.css'
import pic from '../../src/assets/images/avatar-jessica.jpeg'
function Profile() {
  return (
    <>
    <div id='profile'>
        <img src={pic} alt="" />
        <h4>Jessica Randall</h4>
        <h6>London, United Kingdom</h6>
        <p>"Front-end developer and avid reader."</p>
    </div>
    </>
  )
}

export default Profile