$(function () {
	var $content_zero = $('#jsonBehance-0');
	var $content_one = $('#jsonBehance-1');
	var $content_two = $('#jsonBehance-2');
	var $content_three = $('#jsonBehance-3');
	var $content_four = $('#jsonBehance-4');
	var $content_five = $('#jsonBehance-5');
	var $content_six = $('#jsonBehance-6');
	var $content_seven = $('#jsonBehance-7');
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["0"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["0"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_zero.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["1"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["1"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_one.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["2"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["2"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_two.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["3"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["3"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_three.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["4"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["4"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_four.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["4"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["4"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_five.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["4"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["4"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_six.html(output);
	    }
	});
	$.ajax({
	    url: "https://api.behance.net/v2/users/ernesto-garcia/projects?client_id=ycN420C1IQyzg3vaclQ5uXOMhx0toixh",
	    dataType: 'jsonp',
	    success: function(results){
	    	console.log(results.projects)
	    	var output;

	    	var project_one = results.projects["0"].name;
	    	output = '<a href="' + results.projects["4"].url + '" data-lightbox="roadtrip" title="Project Eight - Lorem Ipsum"><img class="grayscale" src="' + results.projects["4"].covers[404] + '" alt="Portfolio Item"></a>';
    		$content_seven.html(output);
	    }
	});
});
