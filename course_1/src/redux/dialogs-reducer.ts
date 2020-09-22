const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Alesha" },
    { id: 4, name: "Gena" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "how" },
    { id: 3, message: "are" },
    { id: 4, message: "you" },
    { id: 5, message: "?" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: (+new Date()).toString(), message: body },
        ],
      };

    default:
      return state;
  }
};

type SendMessageCreatorType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};
export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorType => ({ type: SEND_MESSAGE, newMessageBody });
