TermList = React.createClass({
  render: function() {
    var terms = this.props.data.map((term) => {
      return (
        <Term
          key={term._id}
          term={term}
        />
      );
    });
    return (
      <div className="list-group">
        {terms}
      </div>
    );
  }
});
