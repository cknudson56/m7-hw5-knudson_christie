var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);

var uList = document.createElement('ul');
main.appendChild(uList);

var listItem = document.createElement('li');
uList.appendChild(listItem);

var headerText = document.createTextNode('This is the header text!');
var listItemText = document.createTextNode('This is the list item');
header.appendChild(headerText);
listItem.appendChild(listItemText);

header.classList.add('blue');