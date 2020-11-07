export const PUT_DATA = "PUT_DATA";
export const LOAD_DATA = "LOAD_DATA";

//thunk version
export const putData = (dataFromServer) => ({
  type: PUT_DATA,
  payload: dataFromServer,
});
/*
export const loadData = () => (dispatch, getState) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      dispatch(putData(json));
    });
};
 */

//saga version
export const loadData = () => ({
  type: LOAD_DATA,
});
