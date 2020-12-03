import Dialogs from "./Dialogs";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/dialogs-selectors";

let mapStateToProps = (state) => {
	return {
		dialogsPage: getDialogsPage(state),
	}
};
let mapDispatchToProps = {
	sendMessage: sendMessageCreator,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);