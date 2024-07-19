import React from 'react'
import InputCard from '../components/InputCard';
import ButtonLong from '../components/ButtonLong';
import VerificationSwitchLink from '../components/VerificationSwitchLink';
import ErrorMessage from '../components/ErrorMessage';
import NavBeforeLanding from '../components/NavBeforeLanding';

const Registration = () => {
  const inputCards = [
    { type: 'text', placeholder: 'Your name' },
    { type: 'email', placeholder: 'Your email' },
    { type: 'password', placeholder: 'Your password' },
    { type: 'password', placeholder: 'Re-enter your password' }
  ];

  return (
    <>
    <NavBeforeLanding />
    <section id='ver-section'>
      <form>
        <h2>Registration</h2>
        <div id='input-container'>
        {/* <ErrorMessage verError={"Your name does not match normal name patterns. Please check the name and correct it."}/>
        <ErrorMessage verError={"Your email does not match email patterns. Please check the email and correct it."}/>
        <ErrorMessage verError={"The email submitted is already in our database. Please review the email and correct or go to login page to login."}/>
        <ErrorMessage verError={"The name submitted is already in our database. Please review the name and correct or go to login page to login."}/>
        <ErrorMessage verError={"The name submitted is already in our database. Please review the name and correct or go to login page to login."}/> */}
        {inputCards.map((inputProps, index) => (
        <InputCard key={index} type={inputProps.type} placeholder={inputProps.placeholder} />
      ))}
      <ButtonLong />
      <VerificationSwitchLink text={'Already have an account? Log in.'} goTo={'/'}/>
        </div>
      </form>
    </section>
    </>
  )
}



export default Registration