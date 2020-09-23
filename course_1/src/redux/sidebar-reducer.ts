const initialState = {
  hello: "fake" as string,
};

type InitialStateType = typeof initialState;

export const sidebarReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  return state;
};
