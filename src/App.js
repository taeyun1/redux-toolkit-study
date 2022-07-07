import React from "react";
import "./App.css";
// import { legacy_createStore as createState } from 'redux';
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./app/store.js";
// import counterSlice from './counterSlice/CounterSlice.js';
import { UP } from "./counterSlice/CounterSlice.js";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Count />
      </div>
    </Provider>
  );
}

const Count = () => {
  const count = useSelector(({ counter }) => counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>카운트 페이지</h2>
      <button
        onClick={() => {
          // counterSliceTest와 일치하는 Slice에 속해있는 리듀서에 UP과 일치하는 부분을 실행
          // dispatch({ type: 'counterSliceTest/UP', step: 2 });
          // dispatch(counterSlice.actions.UP(2)); // 위랑 같음
          dispatch(UP(2)); // 임포트 하여 간략하게 위랑 같음
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counterSliceTest/DOWN", step: 2 });
        }}
      >
        -
      </button>{" "}
      {count}
    </>
  );
};
