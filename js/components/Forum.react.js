var Forum = React.createClass({

    getInitialState: function(){

        return {
            allAnswers: ForumStore.getAnswers()
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
