
import Dialogs from "./Dialogs";
import {sendMessageCreator, uppDateNewMessageBody} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
//dialogsPage: state.dialogsPage,

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
};
let mapDispatchToProps = {
	uppDateNewMessageBody,
	sendMessageCreator,
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;