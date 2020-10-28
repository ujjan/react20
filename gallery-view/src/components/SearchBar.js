import React from 'react';

class SearchBar extends React.Component {
	state = { search: '' };

	onFormSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.props.onSubmit(this.state.search);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Search Images</label>
						<input
							type="text"
							value={this.state.search}
							onChange={(e) => this.setState({ search: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
