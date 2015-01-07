/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	view: function(req, res){
		if(req.path == '/') return res.view('homepage');

		Page.findOne({slug: req.param('slug')}).exec(function(error, page){
			return res.view('page', page);
		});
	}
};
