import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, multiplication } from './state/Counter/CounterSlice';
function App() {
  let dispatch = useDispatch(); 
  let count = useSelector((State)=>{
    return State.counter.value
  })
  return (
    <div>
      <p>The value is :{count}</p>
      <div>
        <button onClick={()=>{dispatch(increment())}}>Increase</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
        <button onClick={()=>{dispatch(multiplication(10))}}>multiply</button>
      </div>
    </div>

  );
}

export default App;
