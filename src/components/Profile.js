import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div class='profile'>
      <div>my name is shinnaga.</div>
      <section className='social'>
        <a href='https://www.wantedly.com/users/127147823' target='_blank' rel='noopener noreferrer'>wantedly</a>
        <a href='https://lapras.com/public/MIRTA5Z' target='_blank' rel='noopener noreferrer'>Lapras</a>
        <a href='https://github.com/sinjikoro' target='_blank' rel='noopener noreferrer'>github</a>
        <a href='https://note.com/shinnaga' target='_blank' rel='noopener noreferrer'>note</a>
      </section>
    </div>
  )
}

export default Profile;