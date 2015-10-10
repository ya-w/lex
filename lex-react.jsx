// Define a collection to hold our Terms
Terms = new Mongo.Collection("terms");

if (Meteor.isClient) {

  Meteor.subscribe("terms");

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  // Only publish Terms that are public or belong to the current user
  Meteor.publish("terms", function () {
    return Terms.find();
  });
}

Meteor.methods({
  addTerm(term) {
    Terms.insert({
      slug: term.slug,
      description: term.description,
      createdAt: new Date()
    });
  },

  removeTerm(termId) {
    Terms.remove(termId);
  },

  setPreview(termId, setToPreview) {
    const term = Terms.findOne(termId);

    Terms.update(termId, { $set: { preview: setToPreview } });
  }

});
