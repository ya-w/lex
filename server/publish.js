Meteor.publish("terms", function () {
  return Terms.find();
});
