// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Terms collection and puts them on this.data.Terms
  getMeteorData() {

    Meteor.subscribe("terms");

    let query = {};
    // query = {checked: {$ne: true}};

    return {
      terms: Terms.find(query, {sort: {slug: 1}}).fetch(),
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

        </header>

        <TermForm onTermSubmit={this.handleTermSubmit} />
        <TermList data={this.data.terms} />

        <footer>
          <span>serving {this.data.count} terms</span>
        </footer>
      </div>
    );
  }
});
