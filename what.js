var post = document.getElementById('post');
var form = document.getElementsByTagName('form')[0];
post.addEventListener('click', function() {
		var what = location.search;
		form.submit();
		what = what.replace('?what=', '');
		what = what.replace(/\+/g, ' ');
		what = decodeURIComponent(what);
		textarea.innerHTML = what;
}, false);
