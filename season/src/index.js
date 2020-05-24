import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { latitude: null, err: '' };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ latitude: position.coords.latitude });
			},
			(err) => this.setState({ err: err.message })
		);
	}
	render() {
		if (this.state.latitude != null) {
			return (
				<div className="ui container">
					<SeasonDisplay />
					<div>atitude: {this.state.latitude}</div>
				</div>
			);
		}
		if (this.state.err != '') {
			return (
				<div className="ui container">
					<SeasonDisplay />
					<div>Error Message: {this.state.err}</div>
				</div>
			);
		} else {
			return (
				<div className="ui container">
					<SeasonDisplay />
					<div>Loding...</div>
				</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
