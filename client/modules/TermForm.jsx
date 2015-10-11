TermForm = React.createClass({
  displayName: "TermForm",

  getInitialState() {
    return {
      notFound: false,
      edit: false,
      valid: false
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.valid){

      var slug = React.findDOMNode(this.refs.slug);
      var description = React.findDOMNode(this.refs.description);

      this.props.onTermSubmit({
        slug: slug.value.trim(),
        description: description.value.trim()
      });

      slug.value = "";
      description.value = "";

    }

  },

  handleClick(event) {
    var slug = React.findDOMNode(this.refs.slug);

    if(this.state.edit){
      this.handleSubmit(event) ;
    } else if(this.state.notFound){
      this.setState({edit:!this.state.edit}) ;
    }

  },

  handleChange(event) {
    var slug = React.findDOMNode(this.refs.slug);
    var description = React.findDOMNode(this.refs.description);

    var validComp = slug.value.trim().length > 2 ;
    this.setState({notFound:validComp}) ;

    validComp &= description.value.trim().length > 2 ;
    this.setState({valid:validComp}) ;

  },

  render() {

    var submit = {
      btn: "default",
      icon: "search"
    } ;

    var panel = {
      displayClass: "hidden"
    } ;

    if (this.state.notFound) {
      submit.btn = "primary" ;
      submit.icon = "plus" ;
    }

    if (this.state.edit) {
      submit.btn = "success disabled" ;
      submit.icon = "plus" ;
      panel.displayClass = "visible" ;
    }

    if (this.state.valid) {
      submit.btn = "success" ;
    }

    return (
      <form className="term-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" ref="slug" name="slug" className="form-control" placeholder="slug" tabIndex="1" value={this.props.slug} onChange={this.handleChange}/>
            <div className="input-group-btn">
              <button ref="btn" className={ "btn btn-" + submit.btn } type="button" onClick={this.handleClick} tabIndex="3">
                  <span className={ "glyphicon glyphicon-" + submit.icon }></span>
              </button>
            </div>
          </div>
        </div>
        <div className={ "edit-panel form-group " + panel.displayClass }>
          <textarea ref="description" name="description" className="form-control" rows="4" tabIndex="2" placeholder="description" value={this.props.description}  onChange={this.handleChange} />
        </div>
      </form>
    );
  }

});
