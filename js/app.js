// Creating our function that changes the background color of the page
function change_color() {
    document.body.style.backgroundColor = 'lightblue';
}
// Creating our function that moves the element based on the number it gets from math random
function change_page_element() {
    // here we set math random to a number between 1 and 4
    var number = Math.random() * (4 - 1) + 1;
    // And then check the number and move element around accordingly
    if (number <= 2) {
        clicked_item.style.top = '150px';
        clicked_item.style.left = '150px';
    } else if (number <= 3) {
        clicked_item.style.top = '25px';
        clicked_item.style.left = '25px';
    } else if (number <= 4) {
        clicked_item.style.top = '50px';
        clicked_item.style.left = '50px';
    } else {
        console.log('Uh-oh something went wrong!');
    }

}
// Pretty self explanetory function here, it creates and element and sets the inner text
function click_me() {
    var inject = document.createElement('p')
    this.innerText = "You Clicked me!";
}
// Also a basic function that changes the hove item(image) width, it also looks terrible
function hover_me() {
    hover_item.style.width = '3 00px';
}
// Creating our parent variable and setting it so we can append it later
var parent_container = document.getElementById('page_container');
var clicked_item = document.getElementById('click_tag');
var hover_item = document.getElementById('hover_image');

// Here we actually go in and add the event listeners onto the page elements and have them call their respective functions
hover_item.addEventListener('mouseover', hover_me);
clicked_item.addEventListener('click', click_me);

// Creating variables and storing them as false globally
var clicked_s = false;
var clicked_e = false;
var clicked_c = false;
var clicked_r = false;
var clicked_e_twice = false;
var clicked_t = false;
// Here we creat an array because we have 2 'e' in our secret word so we need to check for it twice, this is just how I got it to work, im sure theres a better way
var clicked_e_array = [];


// Adding eventlistener on keydown, checking the event keys and re storing according variable to true
document.addEventListener("keydown", (event) => {
    if (event.key === 's') {
        clicked_s = true;
        // Here we push our 'e' presses to our empty variable to check them later
    } else if (event.key === 'e') {
        clicked_e_array.push('e');
    } else if (event.key === 'c') {
        clicked_c = true;
    } else if (event.key === 'r') {
        clicked_r = true;
    } else if (event.key === 't') {
        clicked_t = true;
    } else {
        console.log('This shouldnt be here!')
    }

    // Here we have two if statements to check if the first two index numbers of the array are e, if they are turn the according
    // -variables into true. We know that whenever e gets pressed it pushes e into the array, so we only need to check the first two index items
    // -since there is only two 'e' in our secret message.
    if (clicked_e_array[0] === 'e') {
        clicked_e = true;
    } else {
        console.log('Whoops');
    }
    if (clicked_e_array[1] === 'e') {
        clicked_e_twice = true;
    } else {
        console.log('Oh no!')
    }

    // And finally we check to see if all our variables are now true, if so we create and display our secret message
    if (clicked_s && clicked_e && clicked_c && clicked_r && clicked_e_twice && clicked_t) {
        var secret_message = document.createElement('h1');
        secret_message.innerText = "Congrats! You found the secret message!";
        parent_container.appendChild(secret_message);
    }

});
// Using our settimeout to change the color after 15 seconds
setTimeout(change_color, 15000);
// Set interval to call our change page element every 3 seconds(3000ms)
setInterval(change_page_element, 3000);
// Event listener that changes the body background when spacebar is pressed
document.body.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        parent_container.style.background = "pink";
    }
});