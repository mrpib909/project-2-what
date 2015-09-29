var textarea = document.getElementById("what");
var form = document.getElementsByTagName('form')[0];
textarea.addEventListener('change', function() {
	form.submit();
	var what = location.search;
	what = what.replace('?what=', '');
	what = what.replace(/\+/g, ' ');
  textarea.value = what;
}, false);
