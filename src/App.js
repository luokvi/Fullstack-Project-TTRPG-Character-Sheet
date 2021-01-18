import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeCharacters } from './reducers/characterReducer'
import Characters from './Characters'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCharacters())
  }, [dispatch])

  return (
    <div>
      <h2>TTRPG Character</h2>
      <Characters />
    </div>
  )
}

export default App;
