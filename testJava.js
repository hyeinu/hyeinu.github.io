$.ajax({
  url: "httpbin.org/post",
  success: createDiv,
});

function createDiv() {
  var divContainer = document.createElement("div");
  divContainer.className = "container";
  var divAvatar = document.createElement("div");
  $.get('http://api.github.com/users/hyeinu', function(value) {
    var avatar = $('<img />', {
      id: 'myAvatar',
      src: value.avatar_url,
      width: 150,
    });
    avatar.appendTo(divAvatar);
    var username = $('<h1>' + value.login + '</h1>')
    var name  = $('<h2>' + value.name + '</h2>')
	username.appendTo(divAvatar);
    name.appendTo(divAvatar);
  })
  divContainer.appendChild(divAvatar)
  document.body.appendChild(divContainer)
}
