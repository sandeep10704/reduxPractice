

import { useDispatch, useSelector } from "react-redux";
import { addDsBook, subDsBook, inputDsBook } from "../Redux/actions";

function Counter() {
  const dispatch = useDispatch();
  const dsBookCount = useSelector((state) => state.dsBooks.Count);

  return (
    <div>
      <h2>DS Book Count: {dsBookCount}</h2>
      <button onClick={() => dispatch(addDsBook())}>Add DS Book</button>
      <button onClick={() => dispatch(subDsBook())}>Remove DS Book</button>
      <br />
      <input
        type="number"
        onChange={(e) => dispatch(inputDsBook(Number(e.target.value)))}
        placeholder="Enter number"
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default Counter;
