var ForumAddAnswerBox = React.createClass({

    getInitialState: function(){
        return {
            value: ''
        }
    },

    _addAnswer: function(){
        this.props.onAddAnswer(this.state.value);
    },

    render: function() {

        return  (
            <div>
                <textarea id="addAnswer" className="col-md-6 col-xs-8" onChange={ this._onChange }></textarea>
                &nbsp;
                <input type="button" className="btn btn-primary" value="Add Answer" onClick={ this._addAnswer } />
            </div>
        );
    },

    _onChange: function (event) {
        this.setState({ // setState method is given to every react component
            value: event.target.value,
        });
    }
});
