Router.route('/', function () {
  this.render('loginform');
});
Router.route('/main', function () {
  this.render('log');
});
Router.route('/success', function () {
  this.render('successform');
});
