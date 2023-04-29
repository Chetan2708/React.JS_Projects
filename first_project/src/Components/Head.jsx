import React from 'react'

import { HashLink } from 'react-router-hash-link'
const Head = () => {
  return (
    <nav>
        <h1>Asmr Techy</h1>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/#brands"}>Social media</HashLink>
    </main>
    </nav>
  )
}

export default Head