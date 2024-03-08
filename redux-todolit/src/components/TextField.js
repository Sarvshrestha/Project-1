import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className=''>
      <label className=''>{label}</label>
      <input
        className=' '
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField