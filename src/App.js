import { useDispatch, useSelector } from 'react-redux';
import { addDsBook, subDsBook ,inputDsBook} from './Redux/actions';
import './App.css';


function App() {


  const dispatch = useDispatch();
  const count = useSelector(state => state.books.dsBookCount);
  return (
      <div>
      <h2>DS Book Count: {count}</h2>
      <button onClick={() => dispatch(addDsBook())}>Add Book</button>
      <button onClick={() => dispatch(subDsBook())}>Remove Book</button>
       <input
        type="number"
        onChange={(e) => dispatch(inputDsBook(Number(e.target.value)))}
        placeholder="Enter number"
      />
    </div>
  );
}

export default App;