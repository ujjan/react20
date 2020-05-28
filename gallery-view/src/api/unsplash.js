import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID KD6jQs-nKo2Aeswit6N_YGGvoXz5H3VqdbzBRxxzXHs'
	}
});
