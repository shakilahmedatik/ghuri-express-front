import React from 'react'

const SearchForm = ({ trackId, setTrackId, handleSubmit }) => {
  console.log(process.env.REACT_APP_API)

  return (
    <div className='row'>
      <div className='col-md-6 '>
        <div style={{ paddingTop: '200px' }}>
          <div className='p-3 bg-warning rounded'>
            <p className=''>
              Enter parcel tracking number to track your parcel
            </p>
            <form onSubmit={handleSubmit} className='form-inline'>
              <div className='form-group mb-2'>
                <input
                  type='text'
                  onChange={e => setTrackId(e.target.value)}
                  value={trackId}
                  name='track-pass'
                  className='form-control'
                  id='track-pass'
                  placeholder='parcel tracking number'
                  style={{ width: '400px' }}
                />
              </div>
              <button type='submit' className='btn btn-dark ml-2 mb-2'>
                Track
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
