import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { initializeCharacters } from './reducers/characterReducer'
import Characters from './Characters'
import Character from './Character'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCharacters())
  }, [dispatch])

  const charas = useSelector(({ characters }) => {
    return characters
})

  return (
    <Router>
      <div>
        <h2>TTRPG Character</h2>
        <Link to="/">home</Link>

        <Switch>
          <Route path="/character/:id">
            <Character charas={charas}/>
          </Route>
          <Route path="/">
            <Characters charas={charas}/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;
