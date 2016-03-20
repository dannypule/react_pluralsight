var Forum = React.createClass({
    displayName: "Forum",


    getInitialState: function () {

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
                }
            }
        };
    },

    render: function () {

        return React.createElement(
            "div",
            null,
            React.createElement(ForumHeader, null),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(ForumQuestion, null),
                React.createElement("hr", null),
                React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
                React.createElement("hr", null),
                React.createElement(
                    "h4",
                    null,
                    "Add an answer"
                ),
                React.createElement(ForumAddAnswerBox, null)
            )
        );
    }

});