function click_me() {
    var inject = document.createElement('p')
    this.innerText = "You Clicked me!";
}

function hover_me() {

    hover_item.style.width = '500px';
}

var clicked_item = document.getElementById('click_tag')
var hover_item = document.getElementById('hover_image');
var body = document.querySelector('body');
hover_item.addEventListener('mouseover', hover_me);
clicked_item.addEventListener('click', click_me);

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        body.style.background = "pink";
    }
})