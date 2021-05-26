import React from 'react'
import pending from '../../assets/pending.png'
import onpickup from '../../assets/pickup.png'
import pickedup from '../../assets/pickedup.png'
import inhub from '../../assets/inhub.png'
import ondelivery from '../../assets/ondelivery.png'
import './FeatureCard.css'

const featureData = [
  {
    name: 'Pending',
    desc: 'Parcel Added by Merchant',
    img: pending,
  },
  {
    name: 'On Pick up',
    desc: 'Waiting for pick up by GHURI',
    img: onpickup,
  },
  {
    name: 'Picked Up',
    desc: 'Picked Up by GHURI',
    img: pickedup,
  },
  {
    name: 'In hub',
    desc: 'Parcel in Ghuri Hub',
    img: inhub,
  },
  {
    name: 'On delivery',
    desc: 'Delivery on Progress by GHURI',
    img: ondelivery,
  },
]

const Features = () => {
  return (
    <section className='w-100' style={{ backgroundColor: '#E9F3FA' }}>
      <hr className='w-25' />
      <div className='d-flex justify-content-center'>
        <div className=' row pt-2 pb-5 pl-5'>
          <div className='col-md-6 col-xl-2 text-center'>
            <img className='card-icon' src={pending} alt='' />
            <small className='text-secondary'>Time:</small>
            <h5 className='mt-3 card-heading mb-3'>Pending</h5>
            <small className='text-secondary'>Parcel Added by Merchant</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
