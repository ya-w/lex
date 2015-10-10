// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      data: []
    }
  },

  // Loads items from the Terms collection and puts them on this.data.Terms
  getMeteorData() {
    let query = {};
    // query = {checked: {$ne: true}};

    return {
      terms: Terms.find(query, {sort: {slug: -1}}).fetch(),
      count: Terms.find({}).count()
    };
  },

  handleTermSubmit: function(term) {
    Meteor.call("addTerm", term);
  },

  render() {

    return (
      <div className="app container">
        <header>

          <h1>
            <img className="logo" src="img/logo.svg"/>
            <small>crypto name dropping</small>
          </h1>



          {/*
            this.data.currentUser ?
            <form className="new-Term" >

              <div className="form-group">
                <div className="input-group">
                  <input type="text" ref="textInput" className="form-control" placeholder="Add new term"/>
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
            </form> : ''
          */}

        </header>

        <TermForm onTermSubmit={this.handleTermSubmit} />
        <TermList data={this.data.terms} />

        <footer>
          <span>ya-w / lex - 0.1.0 - {this.data.count} terms</span>
        </footer>
      </div>
    );
  }
});
