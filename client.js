'use strict';

document.addEventListener('click', function next (e) {
  var xmlhttp;

  if (window.XMLHttpRequest)
    xmlhttp = new XMLHttpRequest();
  else
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');

  xmlhttp.open('POST', '', true);
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xmlhttp.send('page=' + encodeURIComponent(document.URL) + '&x=' + e.pageX + '&y=' + e.pageY + '&w=' + window.innerWidth + '&h=' + window.innerHeight);
});