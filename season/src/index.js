import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	state = { latitude: null, err: '' };

	componentDidMount() {
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
				<div>
					<SeasonDisplay lat={this.state.latitude} />
				</div>
			);
		}
		if (this.state.err != '') {
			return (
				<div>
					<div>Error Message: {this.state.err}</div>
				</div>
			);
		} else {
			return (
				<div>
					<div>Loding...</div>
				</div>
			);
		}
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
