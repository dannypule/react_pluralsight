var ForumHeader = React.createClass({

	render: function() {
		console.log(this.props.allAnswers);
		return 	(
			<nav className="navbar navbar-default ">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="#" className="navbar-brand">
							React forum
						</a>
					</div>
				</div>
			</nav>
		);
	}
});
