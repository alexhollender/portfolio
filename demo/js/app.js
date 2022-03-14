const showProject = () => {
	$('#left section').removeClass('active');
	$(event.currentTarget).toggleClass('active');
	var proj = $(event.currentTarget);
	var projId = proj[0].id;
	$('#right .container').html('');
	setTimeout(function() {
		$('#right .container').html(projects[projId]);
	}, 300 );

	$('main').addClass('show-project');
}

const closeProject = () => {
	$('main').removeClass('show-project');
	$('#left section').removeClass('active');
}

$(document).ready(function() {

});
