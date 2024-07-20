import React from 'react'
import Nav from '../components/Nav'

import { useLocation } from 'react-router-dom';
const Landing = () => {
  const location = useLocation();
  const {  name } = location.state || {};
  console.log(name)

  return (
    <>
    <Nav />
    <section>
<h2>Welcome</h2>
{name && <h1>{name}</h1>}
    </section>
    </>
  )
}

export default Landing