
import Dialogs from "./Dialogs";
import {sendMessageCreator, uppDateNewMessageBody} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
//dialogsPage: state.dialogsPage,

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		newMessagesBody: state.dialogsPage.newMessagesBody,
		messages: state.dialogsPage.messages,
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		uppDateNewMessageBody: text => dispatch(uppDateNewMessageBody(text)),
		sendMessageCreator: () => dispatch(sendMessageCreator()),
	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;