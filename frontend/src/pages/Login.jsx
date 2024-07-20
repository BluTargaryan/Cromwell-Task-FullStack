import React, {useState, useEffect} from 'react'
import ButtonLong from '../components/ButtonLong';
import VerificationSwitchLink from '../components/VerificationSwitchLink';
import ErrorMessage from '../components/ErrorMessage';
import NavBeforeLanding from '../components/NavBeforeLanding';
import SuccessMessage from '../components/SuccessMessage';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../actions/usersAction';
import { useNavigate, useParams } from 'react-router-dom';


const Login = () => {
const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const inputCards = [
    { type: 'email', placeholder: 'Your email', value: emailValue, onChangeFunc: setEmailValue },
    { type: 'password', placeholder: 'Your password', value: passwordValue, onChangeFunc: setPasswordValue },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.users);

  const onSubmit = (e) => {
    e.preventDefault();
    clearMessages();

    const usersArray = users.users

    const user = usersArray.find((x) => x.email === emailValue && x.password === passwordValue);

    if (user) {
      setSuccessVisible(true);
      navigate('/landing', { state: { name: user.name } });
    } else {
      setErrorVisible(true);
    }
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
            errorVisible &&   <ErrorMessage verError={"Your details does not match any account on record. Please check and re-enter your details or create an account."}/>
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