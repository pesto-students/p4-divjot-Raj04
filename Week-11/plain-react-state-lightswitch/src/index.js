import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./store";

// class Room extends React.Component {
//   state = {
//     isLightOn: true,
//   };

//   flipLight = () => {
//     this.setState({
//       isLightOn: !this.state.isLightOn,
//     });
//   };
export default function Room() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const classname = state ? "lit" : "dark";

  return (
    <div className={classname}>
      the room is {classname}
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE",
          });
        }}
      >
        flip
      </button>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById("root")
);
