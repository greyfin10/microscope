if (Posts.find().count() == 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://saschagreif.com/introducing-telescope/'
	});
	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com'
	});
	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	});
}