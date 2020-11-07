export const CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME";
export const CHANGE_SECOND_NAME = "CHANGE_SECOND_NAME";

export const actionChangeFirstName = (firstName) => ({
  type: CHANGE_FIRST_NAME,
  firstName,
});

export const actionChangeSecondName = (secondName) => ({
  type: CHANGE_SECOND_NAME,
  secondName,
});
