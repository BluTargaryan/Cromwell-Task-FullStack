import React from 'react'
import InputCard from '../components/InputCard'
import ButtonLong from '../components/ButtonLong';
import VerificationSwitchLink from '../components/VerificationSwitchLink';
import ErrorMessage from '../components/ErrorMessage';
import NavBeforeLanding from '../components/NavBeforeLanding';



const Login = () => {
  const inputCards = [
    { type: 'email', placeholder: 'Your email' },
    { type: 'password', placeholder: 'Your password' },
  ];

  return (
    <>
    <NavBeforeLanding />
    <section id='ver-section'>
      <form>
        <h2>Log in</h2>
        <div id='input-container'>
          {/* <ErrorMessage verError={"Your email does not match any email on record. Please check and re-enter your email or create an account."}/>
          <ErrorMessage verError={"Your password does not match any password on record. Please check and re-enter your password or create an account."}/> */}
        {inputCards.map((inputProps, index) => (
        <InputCard key={index} type={inputProps.type} placeholder={inputProps.placeholder} />
      ))}
      <ButtonLong />
      <VerificationSwitchLink text={'No account? Register with us.'}  goTo={'/reg'}/>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login