import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.imageRef);
		this.imageRef.current.addEventListener('load', this.setSpan);
	}
	setSpan = () => {
		const height = this.imageRef.current.clientHeight;
		const span = Math.ceil(height / 10);
		this.setState({ spans: span });
	};
	render() {
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img alt={this.props.image.description} src={this.props.image.urls.regular} ref={this.imageRef} />
			</div>
		);
	}
}

export default ImageCard;
