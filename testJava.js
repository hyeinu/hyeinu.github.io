$("profileBtn").click(function{
	$.getJSON ("https://api.github.com/users/hyeinu", function(key, value){
		var avatar = $('<img />', {
			id: 'myAvatar',
			src: value.avatar_url,
			width: 100,
		});
	avatar.appendTo(divProfile);
	});
});
