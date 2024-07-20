import React, {useState} from 'react'
import InputCard from '../components/InputCard';
import ButtonLong from '../components/ButtonLong';
import VerificationSwitchLink from '../components/VerificationSwitchLink';
import ErrorMessage from '../components/ErrorMessage';
import NavBeforeLanding from '../components/NavBeforeLanding';

import SuccessMessage from '../components/SuccessMessage';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Registration = () => {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rePasswordValue, setRePasswordValue] = useState('');

  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const [errormsg, setErrormsg] = useState("Your details do not match any account on record. Please check and re-enter your details or create an account.");

  const navigate = useNavigate();

  const inputCards = [
    { type: 'text', placeholder: 'Your name', value: textValue, onChangeFunc: setTextValue },
    { type: 'email', placeholder: 'Your email', value: emailValue, onChangeFunc: setEmailValue },
    { type: 'password', placeholder: 'Your password', value: passwordValue, onChangeFunc: setPasswordValue },
    { type: 'password', placeholder: 'Re-enter your password', value: rePasswordValue, onChangeFunc: setRePasswordValue }
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    clearMessages();

    if (passwordValue !== rePasswordValue) {
      setErrormsg("Passwords do not match.");
      setErrorVisible(true);
      return;
    }

    const data = {
      name: textValue,
      email: emailValue,
      password: passwordValue
    };



    axios.post('http://localhost:3000/api/users/', data)
      .then(() => {
        setSuccessVisible(true);
        navigate('/landing', { state: { name: textValue } });
      })
      .catch((error) => {
        setErrormsg(error.response?.data?.message || "An error occurred.");
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
        <h2>Registration</h2>
        <div id='input-container'>
        {
            successVisible &&  <SuccessMessage message={"User created successfully"}/>
           }
           {
            errorVisible &&   <ErrorMessage verError={errormsg}/>
           }
        {inputCards.map((inputProps, index) => (
       <input key={index} type={inputProps.type} placeholder={inputProps.placeholder} value={inputProps.value} onChange={(e)=> inputProps.onChangeFunc(e.target.value) } onClick={()=> clearMessages()}/>
      ))}
      <button type="submit">Submit details</button>
      <VerificationSwitchLink text={'Already have an account? Log in.'} goTo={'/'}/>
        </div>
      </form>
    </section>
    </>
  )
}



export default Registration