import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice/CounterSlice.js";

// counterSlice안에 있는 reducer들 UP, DOWN 등등, 이것들은 하나로 합쳐 하나로 만든 리듀서를 자동으로 만들어진 하나의 리듀서가 -> counterSlice.reducer 이거임
// configureStore에 reducer로 전달하면서 counterSlice.reducer 이거는 counter에 대한 리듀서이다. 라고 설정 한것.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
