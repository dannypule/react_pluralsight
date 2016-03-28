var ForumHeader = React.createClass({
	displayName: "ForumHeader",


	render: function () {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default " },
			React.createElement(
				"div",
				{ className: "container-fluid" },
				React.createElement(
					"div",
					{ className: "navbar-header" },
					React.createElement(
						"a",
						{ href: "#", className: "navbar-brand" },
						"React forum"
					)
				)
			)
		);
	}
});