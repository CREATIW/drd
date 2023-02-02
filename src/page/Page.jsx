import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Categories, Header, LoginModal } from '../components'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { CategoryCloseAC } from '../redux/reducers/modalReducer'

function Page(props) {
    const {children} = props
    const dispatch = useDispatch()
    const ref = useRef()
    useOnClickOutside(ref, () => dispatch(CategoryCloseAC()));
  return (
   <div>
        <Header/>
        <Categories customRef={ref} />
        <LoginModal/>
        <main>
            {children}
        </main>
        <footer>

        </footer>
   </div>
  )
}

export default Page