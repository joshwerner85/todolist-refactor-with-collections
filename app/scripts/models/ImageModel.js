import Backbone from 'backbone';

const ImageModel = Backbone.Model.extend({
	defaults: {
		 itemList: ''
	},
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/postArnold',
	idAttribute: '_id'
});

export default ImageModel;

// default
// urlRoot
// idAttribute

 