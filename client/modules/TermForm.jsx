TermForm = React.createClass({
  displayName: "TermForm",

  getInitialState() {
    return {
      search: {
        btn: "default",
        icon: "search"
      },
      edit: {
        btn: "primary hidden",
        icon: "plus"
      },
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

  handleSearch(event) {
    if (!hasClass(this.refs.panel,"hidden")) {
      addClass(this.refs.panel,"hidden");
      addClass(this.refs.btnEdit,"btn-primary");
      removeClass(this.refs.btnEdit,"btn-success");
    }
  },

  handleEdit(event) {

    if (hasClass(this.refs.panel,"hidden")) {
      removeClass(this.refs.panel,"hidden");
      addClass(this.refs.btnEdit,"btn-success");
      removeClass(this.refs.btnEdit,"btn-primary");
      this.handleChange(event) ;
    } else {
      this.handleSubmit(event) ;
    }

  },

  handleChange(event) {
    var slug = React.findDOMNode(this.refs.slug).value.trim();
    var description = React.findDOMNode(this.refs.description).value.trim();

    var validSlug = slug.length > 2 ;
    if (validSlug) {
      removeClass(this.refs.btnEdit,"hidden");
    } else if ( hasClass(this.refs.panel,"hidden") && !hasClass(this.refs.btnEdit,"hidden" )) {
      addClass(this.refs.btnEdit,"hidden");
    }

    var validDesc = description.length > 2 ;
    if (validDesc) {
      removeClass(this.refs.btnEdit,"disabled");
    } else if (!hasClass(this.refs.btnEdit,"disabled")) {
      addClass(this.refs.btnEdit,"disabled");
    }

    this.setState({valid:( validSlug && validDesc )})


  },

  render() {

    var submit = {
      btn: "default",
      icon: "search"
    } ;

    var search = {
      btn: "default",
      icon: "search"
    } ;
    var edit = {
      btn: "primary",
      icon: "plus"
    } ;

    var panel = {
      displayClass: "hidden"
    } ;


    return (
      <form className="term-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" ref="slug" name="slug" className="form-control" placeholder="slug" tabIndex="1" value={this.props.slug} onChange={this.handleChange}/>
            <div className="input-group-btn">
              <button ref="btnSearch" className="btn btn-default" type="button" onClick={this.handleSearch} tabIndex="3">
                  <span className="glyphicon glyphicon-search" ></span>
              </button>
              <button ref="btnEdit" className="btn btn-primary hidden" type="button" onClick={this.handleEdit} tabIndex="3">
                  <span className="glyphicon glyphicon-plus" ></span>
              </button>
            </div>
          </div>
        </div>
        <div ref="panel" className={ "edit-panel form-group " + panel.displayClass }>
          <textarea ref="description" name="description" className="form-control" rows="4" tabIndex="2" placeholder="description" value={this.props.description}  onChange={this.handleChange} />
        </div>
      </form>
    );
  }

});
