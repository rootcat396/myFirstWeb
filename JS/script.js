// toggle the link css for different devices
function toggleStylesheet() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth >= 1024) { // Desktop
        document.getElementById("stylesheet").setAttribute("href", "CSS/default.css");
        // } else if (screenWidth >= 768) { // Tablet
        //     document.getElementById("stylesheet").setAttribute("href", "CSS/tablets.css");
    } else { // Mobile
        document.getElementById("stylesheet").setAttribute("href", "CSS/tablets.css");
    }
}


// Call the function on page load and window resize
window.onload = toggleStylesheet;
window.onresize = toggleStylesheet;


// slide image box
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// this code for preveous nav function
function myHamburger() {
    let my_Nav = document.querySelector('.nav');
    if (my_Nav.style.display === "" || my_Nav.style.display === "none") {
        my_Nav.style.display = "block";
    } else {
        my_Nav.style.display = "none";
    }
}

// function myHamburger() {
//     let myNav = document.querySelector('.nav');
//     myNav.classList.toggle('active');
// }


// function to scrolltop
function onTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


//type writing text
// Array list containing the text values
var textList = ["I Am Arpan Lohar ", "I Love Coding ", "Welcome to my website "];

function typewriterEffect() {
    var element = document.querySelector('.typeWriter'); // Get the element with class "typeWriter"
    var textArrayIndex = 0; // Initialize the array index

    function typeNextLetter() {
        var text = textList[textArrayIndex]; // Get the current text from the array
        var currentText = element.innerHTML; // Get the current text inside the element
        var length = currentText.length; // Get the length of the current text

        if (length < text.length) {
            // If the length is less than the text length, add the next letter
            element.innerHTML = text.substr(0, length + 1);
            setTimeout(typeNextLetter, 200); // Delay before typing the next letter
        } else {
            // If the length reaches the text length, erase the text
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        var currentText = element.innerHTML; // Get the current text inside the element
        var length = currentText.length; // Get the length of the current text

        if (length > 0) {
            // If the length is greater than 0, erase the last letter
            element.innerHTML = currentText.substr(0, length - 1);
            setTimeout(eraseText, 50); // Delay before erasing the next letter
        } else {
            // If the length reaches 0, move to the next text in the array
            textArrayIndex = (textArrayIndex + 1) % textList.length; // Increment and wrap around the array index
            setTimeout(typeNextLetter, 500); // Delay before typing the next text
        }
    }

    typeNextLetter(); // Start the typewriter effect
}

typewriterEffect(); // Call the typewriter function





