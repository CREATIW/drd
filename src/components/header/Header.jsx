import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'

function Header(props) {
const {open , setOpen} = props
  return (
    <>
      <HeaderTop />
      <HeaderMain open={open}  setOpen={setOpen}/>
    </>
  )
}

export default Header