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

        return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion/>
                    <hr/>
                    <ForumAnswers allAnswers={this.state.allAnswers}/>
                    <hr/>
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox/>
                </div>
            </div>
        );

	}

});
