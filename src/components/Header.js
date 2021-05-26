import React, { useState } from 'react'
import SearchForm from './SearchForm'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import ModalPop from './Modal/Modal'

const Header = () => {
  const dispatch = useDispatch()
  const [trackId, setTrackId] = useState('')

  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = e => {
    e.preventDefault()
    if (trackId === '') {
      return toast.error('Please give me a tracking number')
    }
    //Handle form submit
    fetch(`${process.env.REACT_APP_API}${trackId}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'PARCEL_DETAILS',
          payload: data.parcelTracking,
        })
        handleShow()
      })
      .catch(err => {
        console.log(err)
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
      {show && <ModalPop show={show} handleClose={handleClose} />}
    </div>
  )
}

export default Header
