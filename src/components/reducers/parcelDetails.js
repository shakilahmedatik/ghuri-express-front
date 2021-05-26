//parcel Reducer Function
export const parcelDetailsReducer = (
  state = {
    delivered: { isDelivered: false, deliveredDateTime: '' },
    deliveryAssign: { isDeliveryManAssigned: false, assignedDateTime: '' },
    pickedUp: { isPickedUp: false, pickedUpDateTime: '' },
    hubReceived: { isHubReceived: false, hubReceivedDateTime: '' },
    pickUpAssign: { isPickUpManAssigned: false, pickUpAssignDateTime: '' },
    parcelCreateDateTime: '',
  },
  action
) => {
  switch (action.type) {
    case 'PARCEL_DETAILS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
