import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../actions/userAction';

import { useLocation } from 'react-router-dom';
const Landing = () => {
  const location = useLocation();
  const {  id } = location.state || {};


    const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(loadUser(id));
    }
  }, [dispatch, id]);

  const { user } = useSelector((state) => state.user.user);

  // console.log(user)


  return (
    <>
    <Nav />
    <section>
<h2>Welcome</h2>
{user?.name && <h1>{user.name}</h1>} 
{user?.email && <h2>of {user.email}</h2>} 
    </section>
    </>
  )
}

export default Landing