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
