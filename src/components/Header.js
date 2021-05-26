import React, { useState } from 'react'
import SearchForm from './SearchForm'

const Header = () => {
  const [trackId, setTrackId] = useState('')
  const [details, setDetails] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    //Handle form submit
    fetch(`${process.env.REACT_APP_API}${trackId}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
        console.log(details)
      })
  }

  return (
    <div className='main-header'>
      <div className='container'>
        <SearchForm
          trackId={trackId}
          setTrackId={setTrackId}
          handleSubmit={handleSubmit}
        />
        <br />
        <br />
        <h3>On Demand Delivery at Your Doorstep</h3>
        <small>
          Need to send something on an emergency basis? GHURI Parcel is what you
          need!
        </small>
        <br />
        <br />
        <a
          href='https://play.google.com/store/apps/details?id=com.ghuriexpress.ghuri'
          target='__blank'
          className='btn btn-warning w-25 p-3'
        >
          <i className='fas fa-mobile-alt'></i> Download GHURI App{' '}
          <i className='fas fa-chevron-right'></i>
        </a>{' '}
        <br />
        <br />
        <a
          href='https://play.google.com/store/apps/details?id=ghuri.express.parcelfighter'
          target='__blank'
          className='btn btn-outline-dark w-25 p-3'
        >
          <i className='fas fa-money-bill-alt'></i> Earn With GHURI{' '}
          <i className='fas fa-chevron-right'></i>
        </a>
      </div>
    </div>
  )
}

export default Header
