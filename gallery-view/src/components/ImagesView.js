import React from 'react';

const ImagesView = (props) => {
	const imgs = props.images.map((image) => {
		return <img src={image.urls.regular} key={image.id} alt={image.description} />;
	});
	return <div>{imgs}</div>;
};

export default ImagesView;
