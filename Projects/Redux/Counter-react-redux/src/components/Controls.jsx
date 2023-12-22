import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: +(inputElement.current.value) } });
    inputElement.current.value= "";
  };
  const handleSubstract = () => {
    dispatch({ type: "SUBSTRACT", payload: { num: +(inputElement.current.value) } });
    inputElement.current.value= "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY"});
    inputElement.current.value= "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacy}
        >
          Private
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a Number"
            ref={inputElement}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
         onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
         onClick={handleSubstract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
