import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyDdun9an06UdcGX-S7bWYVR4S8eBEkl8PU';
class App extends React.Component {
	state = { videos: [] };
	onSearchSubmit = async (event) => {
		const result = await youtube.get('/search', {
			params: {
				q: event,
				part: 'snippet',
				maxResults: 5,
				key: KEY
			}
		});

		this.setState({ videos: result.data.items });
	};
	render() {
		return (
			<div className=" ui container">
				<SearchBar onFormSubmit={this.onSearchSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
