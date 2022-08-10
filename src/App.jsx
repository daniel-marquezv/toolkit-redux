import { useSelector, useDispatch } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { decrement, increment, incrementByAmount , decrementByAmount} from './store/slices/counter'

function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>El contador es {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch(decrementByAmount(2))}>
            -2
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            -1
          </button>
          <button type="button" onClick={() => dispatch(increment())}>
            +1
          </button>
          <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
            +2
          </button>

        </p>
      </header>
    </div>
  )
}

export default App
