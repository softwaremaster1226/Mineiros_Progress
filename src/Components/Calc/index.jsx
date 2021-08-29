import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import { plusFunc, subFunc, calcFunc } from "../../redux/calc/calcaction";
import calcTypes from "../../redux/calc/calcTypes";

const Calc = (props) => {
  const [input, setInput] = useState({
    first: "",
    second: "",
  });
  const [op, setOp] = useState("+");
  const [result, setResult] = useState("");
  //handle input change

  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleop = (ops) => {
    setOp(ops);
  };
  const calc = () => {
    const { first, second } = input;
    props.calcFunc({ first, second, op, result });
    // switch (op) {
    //   case "+":
    //     props.plusFunc({ first, second, op });
    //     break;
    //   case "-":
    //     props.subFunc({ first, second, op });
    //     break;
    //   default:
    //     break;
    // }
  };

  useEffect(() => {
    console.log(props, "test jong");
  });

  return (
    <div>
      <input
        type="text"
        name="first"
        value={input.first}
        onChange={handleInput}
      />
      <button onClick={() => handleop("+")}>+</button>
      <button onClick={() => handleop("-")}>-</button>
      <input
        type="text"
        name="second"
        value={input.second}
        onChange={handleInput}
      ></input>
      <button onClick={() => calc()}>=</button>
      <input type="text" name="result" value={props.result}></input>
    </div>
  );
};

const mapStateToProps = ({ calcReducer }) => {
  const { first, second, op, result } = calcReducer;
  return { first, second, op, result };
};

// const mapDispatchToProps = (dispatch) => ({
//   plusFunc: () => dispatch(plusFunc()),
//   subFunc: () => dispatch(subFunc()),
// });

export default connect(mapStateToProps, { plusFunc, subFunc, calcFunc })(Calc);
