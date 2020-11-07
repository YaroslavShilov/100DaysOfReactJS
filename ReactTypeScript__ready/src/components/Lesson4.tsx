import React, {Component} from 'react';

type CounterProps = {
	title?: string,
}

type CounterState = {
	count: number
}

class Counter extends Component<CounterProps, CounterState> {

	constructor(props: CounterProps) {
		super(props)

		this.state = {
			count: 0,
		}
	}

	static defaultProps: CounterProps = {
		title: "default counter: ",
	}

	static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
		return false ? {count: 2} : null;
	}

	componentDidMount(): void {

	}

	shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
		return true
	}

	handleClick = () => {
		this.setState(({ count }) => ({
			count: ++count,
		}));
	}

	render() {
		return (
			<div>
				<h1>{this.state.count} - {this.props.title}</h1>
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
}

export const Lesson4 = () => <Counter title={'hello world'}/>
