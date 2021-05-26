import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ProgressBar } from 'react-step-progress-bar'
import pending from '../../assets/pending.png'
import onpickup from '../../assets/pickup.png'
import pickedup from '../../assets/pickedup.png'
import inhub from '../../assets/inhub.png'
import ondelivery from '../../assets/ondelivery.png'
import delivery from '../../assets/delivery.png'

const ModalPop = ({ show, handleClose }) => {
  const { parcel } = useSelector(state => ({ ...state }))
  const [value, setValue] = useState(17)

  const {
    // eslint-disable-next-line no-unused-vars
    deliveryAssign,
    delivered,
    hubReceived,
    pickUpAssign,
    pickedUp,
    parcelCreateDateTime,
  } = parcel

  useEffect(() => {
    if (delivered.isDelivered) {
      return setValue(100)
    } else if (deliveryAssign.isDeliveryManAssigned && !delivered.isDelivered) {
      return setValue(83)
    } else if (
      hubReceived.isHubReceived &&
      !deliveryAssign.isDeliveryManAssigned
    ) {
      return setValue(66)
    } else if (pickedUp.isPickedUp && !hubReceived.isHubReceived) {
      return setValue(49)
    } else if (pickUpAssign.isPickUpManAssigned && !pickedUp.isPickedUp) {
      return setValue(33)
    }
  }, [
    delivered.isDelivered,
    deliveryAssign.isDeliveryManAssigned,
    hubReceived.isHubReceived,
    pickUpAssign.isPickUpManAssigned,
    pickedUp.isPickedUp,
  ])

  return (
    <Modal size='lg' centered show={show} onHide={handleClose}>
      <Modal.Header className='bg-warning' closeButton></Modal.Header>
      <Modal.Body className='p-2'>
        <h1 className='text-center'>Delivery on Progress by GHURI</h1>
        <br />
        <br />
        <br />
        <ProgressBar
          percent={value}
          filledBackground='linear-gradient(to right, #fefb72, #f0bb31)'
        />

        <div className='row '>
          <div className='col-md-2'>
            <div className='text-center'>
              <p>Pending</p>
              <img className='card-icon w-50' src={pending} alt='' />
              <br />
              <small>{parcelCreateDateTime}</small>
              <small>Parcel Added by Merchant</small>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center'>
              <p>On Pick up</p>
              <img className='card-icon w-50' src={onpickup} alt='' />
              <br />
              <small>{pickUpAssign.pickUpAssignDateTime}</small>
              <small>Waiting for pick up by GHURI</small>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center'>
              <p>Picked Up</p>
              <img className='card-icon w-50' src={pickedup} alt='' />
              <br />
              <small>{pickedUp.pickedUpDateTime}</small>
              <small>Picked Up by GHURI</small>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center'>
              <p>In hub</p>
              <img className='card-icon w-50' src={inhub} alt='' />
              <br />
              <small>{hubReceived.hubReceivedDateTime}</small>
              <small>Parcel in Ghuri Hub</small>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center'>
              <p>On delivery</p>
              <img className='card-icon w-50' src={ondelivery} alt='' />
              <br />
              <small>{deliveryAssign.assignedDateTime}</small>
              <small>Delivery on Progress by GHURI</small>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='text-center'>
              <p>Delivered</p>
              <img className='card-icon w-50' src={delivery} alt='' />
              <br />
              <small>{delivered.deliveredDateTime}</small>
              <small>Delivered To Customer</small>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalPop
