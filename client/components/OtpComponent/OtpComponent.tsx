import React from 'react'
import styles from '../../styles/otp.module.scss'

const OtpComponent = () => {
  return (
    <div className={styles.otpPage}>
      <h1>OTP</h1>
      <p>Verify your account</p>
      <input type="number" />
      <button>Enter</button>
      <div><p>Not yet received?</p> <p style={{marginLeft: '10px'}}>Resent OTP</p></div>
      
    </div>
  )
}

export default OtpComponent
