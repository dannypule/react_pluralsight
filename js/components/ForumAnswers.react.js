var ForumAnswers = React.createClass({

    render: function(){
        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers){
            answers.push( <ForumAnswer key={key} answer={allAnswers[key]} /> );
        }

        return (
            <div>
                {answers}
            </div>
        );

    }

});
