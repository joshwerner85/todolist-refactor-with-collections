import Backbone from 'backbone';
import ImageModel from '../models/ImageModel';

const ImageCollection = Backbone.Collection.extend({
	model: ImageModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/postArnold'
});

export default ImageCollection;
	
 