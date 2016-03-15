var Forum = React.createClass({

    getInitialState: function(){

        return {
            allAnswers: {
                "1": {
                    body: "React is awesome.",
                    correct: false
                },
                "2": {
                    body: "React and flux rock.",
                    correct: false
                },
                "3": {
                    body: "React is pretty cool.",
                    correct: false
                },
            }
        }

    },

	render: function(){

		return React.createElement(
			'div',
			null,
			React.createElement(ForumHeader, { allAnswers: this.state.allAnswers })
		);

	}

});
