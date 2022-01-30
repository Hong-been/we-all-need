// 복수의 store 를 이용할 때는 아래 // 로 코멘트처리 부분 참고

import { combineReducers } from "redux";

import { testReducer } from "./test";
// import {anotherReducer} from "./another";

const RootReducer = combineReducers({
	test: testReducer,
	// another: anotherReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
