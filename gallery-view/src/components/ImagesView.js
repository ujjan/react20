import './ImagesView.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImagesView = (props) => {
	const imgs = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list">{imgs}</div>;
};

export default ImagesView;
