var last_hiring_post = null;

window.onbeforeunload = function (e) {
	return "Discard changes?";
};

setInterval(function() {
	$.ajax({
		url: 'https://www.reddit.com/r/forhire/new/',  //server script to process data
		success: completeHandler = function(d) {
		    var newHtml = $(d).find("#siteTable").html();
			$("#siteTable").html(newHtml);
			
			setTimeout(function() {
				$("p.title").each(function() {
					if($(this).find(".linkflairlabel").html() != "Hiring") return;
					if($(this).find("a").html() == last_hiring_post) return false;
					alert("New Post: "+$(this).find("a").html());
					last_hiring_post = $(this).find("a").html();
					return false;
				});
				if($("#mail").attr("title") != "no new mail") alert("New message!");
			}, 250);
			
		  
		}
  });
}, 30000);
