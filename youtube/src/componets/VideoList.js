import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
	const litOfVideos = props.videos.map((video) => {
		return <VideoItem video={video} />;
	});
	return <div className="ui relaxed divided list">{litOfVideos}</div>;
};

export default VideoList;
