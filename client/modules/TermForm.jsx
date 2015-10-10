TermForm = React.createClass({
  displayName: 'TermForm',

  handleSubmit(event) {
    event.preventDefault();

    var slug = React.findDOMNode(this.refs.slug);
    var description = React.findDOMNode(this.refs.description);

    this.props.onTermSubmit({
      slug: slug.value.trim(),
      description: description.value.trim()
    });

    slug.value = '';
    description.value = '';

  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" ref="slug" name="slug" className="form-control" placeholder="slug"/>
        </div>
        <div className="form-group">
          <textarea ref="description" name="description" className="form-control" rows="4" placeholder="description" />
        </div>
        <div className="form-group">
          <button className="btn btn-default" type="submit">
              <span className="glyphicon glyphicon-plus"></span>
          </button>
        </div>
      </form>
    );
  }

});
