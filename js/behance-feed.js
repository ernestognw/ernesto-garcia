var apiKey = 'ycN420C1IQyzg3vaclQ5uXOMhx0toixh'; // Your API Key/Client ID. 
// If you don't have one, go get it here: https://www.behance.net/dev/register
var user = 'ramotion'; // This is your behance username
var projectsPerRow = 3; // Select 4 or 6
var projectsPerColumn = 2; // Select whatever you want

$(function () {
	$.ajax({
	    url: "https://api.behance.net/v2/users/" + user + "/projects?client_id=" + apiKey,
	    dataType: 'jsonp',
	    success:
	    function(results){
	    	var projectsArray = new Array();
	    	for (var i = 0 ; i < projectsPerRow*projectsPerColumn; i++) {
		    	var project = results.projects[i];

		    	var output;
		    	output = '<div class="col-md-4 col-sm-6"><div class="overlay-effect effects clearfix"><div class="img"><a href="' + project.url + '" target="blank_" title="' + project.name + '"><div class="portfolio-img-hover"><div class="img-backdrop"></div><div class="description-container"><h3>' + project.name + '</h3></div></div><img class="grayscale" src="' + project.covers[404] + '" alt="Portfolio Item"></a></div></div></div>';
		    	projectsArray.push(output);
	    	}
		    var $content = $('#behance-feed');
		    $content.html(projectsArray);
	    }
	});
});
