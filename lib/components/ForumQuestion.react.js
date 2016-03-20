var ForumQuestion = React.createClass({
    displayName: "ForumQuestion",


    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "What is React and FLux?"
            ),
            React.createElement(
                "p",
                null,
                "Help me understand it."
            )
        );
    }

});