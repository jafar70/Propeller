$(document).ready(function() {
	//JSON Data From http://design.propcom.co.uk/buildtest/accordion-data.json
	var jsonData = {
		"blocks": [{
				"heading": "Section 1",
				"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis!"
			},
			{
				"heading": "Section 2",
				"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque!"
			},
			{
				"heading": "Section 3",
				"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			}
		]
	};
	
	// Assigned the JSON object to a variable 
	var json = jsonData.blocks;
	//This loop output the properites in the JSON object
	for (var key in json) {
		if (json.hasOwnProperty(key)) {
			$("#accordion").append('<div class="slide">' + '<h2>' + json[key].heading + '</h2>' + '<div class="accordion-info">' + '<p>' + json[key].content + '</p>' + '</div>' + '</div>');
		}
	}

	//This function hides the accordion content when the webpage loads
	$('div.accordion-info').hide();
	
	// When the user clicks the heading the content slides out
	$('.slide > h2').click(function() {
		$(this).next().slideToggle('fast');
		$(this).toggleClass('active');
	});


});