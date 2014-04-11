Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function (){
	this.route('home', {
		path: '/',
		template: 'header',
		yieldTemplates: {
			'header': {to: 'headertolayout'},
			'navbar': {to: 'navbartolayout'},
			'content': {to: 'contenttolayout'}
		}
	});

	this.route('topnav', {
		path:'/menu',
		template: 'header',
		yieldTemplates: {
			'topnav': {to: 'topnavtoheader'}
		}
	});
});