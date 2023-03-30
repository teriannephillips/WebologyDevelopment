// Get references to the buttons and content element
let btn2 = document.getElementById('projects');
let btn3 = document.getElementById('about');
let btn4 = document.getElementById('contact');
let content = document.getElementById('content');
let contact = document.getElementById ('contactImg');


console.log(contact);


// Add event listeners to the buttons
btn2.addEventListener('click', loadPage);
btn3.addEventListener('click', loadPage);
btn4.addEventListener('click', loadPage);
contact.addEventListener('click', loadPage)

function loadPage(event) {
  // Get the URL of the page to load based on the button ID
  var url;
  if (event.target == btn2) {
    url = './projects.html';
  } else if (event.target === btn3) {
    url = 'about.html';
  } else if ((event.target === btn4) || (event.target === contact)) {
  url = 'contact.html';

}
fetch(url)
.then(response => response.text())
.then(data => {
  // Update the body content with the new content
  content.innerHTML = data;
})
.catch(error => console.error(error));
}


