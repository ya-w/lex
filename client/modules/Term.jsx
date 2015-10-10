Term = React.createClass({
  propTypes: {
    term: React.PropTypes.object.isRequired
  },

  deleteThisTerm() {
    Meteor.call("removeTerm", this.props.term._id);
  },

  render() {
    // Give terms a different className when they are checked off,
    // so that we can style them nicely in CSS
    // Add "checked" and/or "preview" to the className when needed
    const termClassName = "";

    return (
      <div className="list-group-item {termClassName}">

        <button type="button" className="close" onClick={this.deleteThisTerm}>
          <span className="glyphicon glyphicon-trash"></span>
        </button>

        <h4 className="list-group-item-heading">
          {this.props.term.slug}
        </h4>

        <p className="list-group-item-text">
          {this.props.term.description}
        </p>


      </div>
    );
  }
});
