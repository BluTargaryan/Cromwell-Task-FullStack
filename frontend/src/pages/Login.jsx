import React, {useState, useEffect} from 'react'
import ButtonLong from '../components/ButtonLong';
import VerificationSwitchLink from '../components/VerificationSwitchLink';
import ErrorMessage from '../components/ErrorMessage';
import NavBeforeLanding from '../components/NavBeforeLanding';
import SuccessMessage from '../components/SuccessMessage';

import axios from 'axios';


import { useNavigate} from 'react-router-dom';


const Login = () => {
const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const [errormsg, setErrormsg] = useState("Your details do not match any account on record. Please check and re-enter your details or create an account.");
  const inputCards = [
    { type: 'email', placeholder: 'Your email', value: emailValue, onChangeFunc: setEmailValue },
    { type: 'password', placeholder: 'Your password', value: passwordValue, onChangeFunc: setPasswordValue },
  ];



 

  const onSubmit = (e) => {
    e.preventDefault();
    clearMessages();

    const data = {
      email: emailValue,
      password: passwordValue
    };

    axios.post('http://localhost:3000/api/user/login', data)
    .then((response) => {
      setSuccessVisible(true);
      const userId = response.data.userId;
      navigate('/landing', { state: { id:userId } });
    })
    .catch((error) => {
      setErrormsg('Error:', error.response?.data?.message || 'An error occurred.');
      setErrorVisible(true);
    });
  };

  const clearMessages = () => {
    setErrorVisible(false);
    setSuccessVisible(false);
  };


  return (
    <>
    <NavBeforeLanding />
    <section id='ver-section'>
      <form onSubmit={onSubmit}>
        <h2>Log in</h2>
        <div id='input-container'>
           {
            successVisible &&  <SuccessMessage message={"User found successfully"}/>
           }
           {
            errorVisible &&   <ErrorMessage verError={errormsg}/>
           }
         
        {inputCards.map((inputProps, index) => (
        <input key={index} type={inputProps.type} placeholder={inputProps.placeholder} value={inputProps.value} onChange={(e)=> inputProps.onChangeFunc(e.target.value) } onClick={()=> clearMessages()}/>
      ))}
      <button type="submit">Submit details</button>
      <VerificationSwitchLink text={'No account? Register with us.'}  goTo={'/reg'}/>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login