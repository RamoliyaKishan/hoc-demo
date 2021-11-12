import React from 'react';

const FetchWrapper = (OldComponent, slug) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: [],
			};
		}
		componentDidMount() {
			fetch(`https://jsonplaceholder.typicode.com/${slug}`)
				.then((response) => response.json())
				.then((json) => this.setState({ ...this.state, data: json }));
		}

		render() {
			const dataList = this.state.data.slice(0, 10).map((d) => {
				return (
					<div key={d.id}>
						{slug === 'users' ? <h3>{d.name}</h3> : <h3>{d.title}</h3>}
					</div>
				);
			});
			return (
				<OldComponent data={this.state.data}>
					<h1>i am a {slug}</h1>
					{dataList}
				</OldComponent>
			);
		}
	};
};

export default FetchWrapper;
