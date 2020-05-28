import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImagesView from './ImagesView';

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async (search) => {
		const response = await unsplash.get('search/photos', {
			params: { query: search }
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImagesView images={this.state.images} />
			</div>
		);
	}
}
export default App;
