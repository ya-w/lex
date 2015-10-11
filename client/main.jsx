const {
  Router,
  Route
} = ReactRouter;

Meteor.startup(function () {
  let history = CreateBrowserHistory() ;

  React.render((
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  ), document.getElementById("render-target"));
  
});
