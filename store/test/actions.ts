//액션(객체)와 액션을 반환하는 함수 정의

export const REPLACE = "test/REPLACE";
type REPLACE_Payload = {
	path: (string | number)[];
	replacement: unknown;
};
export const return__REPLACE = (payload: REPLACE_Payload) => {
	return {
		type: REPLACE,
		payload: payload,
	};
};
export type REPLACE__Instance = ReturnType<typeof return__REPLACE>;
