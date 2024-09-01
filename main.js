// activelink

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}
// /input/ 
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// alert box
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering as a donor!');
});

document.getElementById('request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your blood request has been submitted!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});


/*===== Work Popup =====*/
// Event listener for clicking on a bank button
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("bank__button")) {
        toggleBankPopup();
        bloodItemDetails(e.target.parentElement);
    }
});

// Function to toggle the bb popup
function toggleBankPopup() {
    document.querySelector(".bloodbank__popup").classList.toggle("open");
}

// Event listener for closing the bb popup
document.querySelector(".bloodbank__popup-close").addEventListener("click", toggleBankPopup);

// Function to display bb item details in the popup
function bloodItemDetails(bbItem) {
    document.querySelector(".pp__thumbnail img").src = bbItem.querySelector(".bank__img").src;
    document.querySelector(".bloodbank__popup-subtitle span").innerHTML = bbItem.querySelector(".bank__title").innerHTML;
    document.querySelector(".bloodbank__popup-body").innerHTML = bbItem.querySelector(".bb__item-detials").innerHTML;
}


const toggleBtn = document.querySelector('.nav__toggle')
const toggleBtnIcon = document.querySelector('.nav__toggle i')
const dropDownMenu = document.querySelector('.dropdown__menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
   ? 'uil uil-times'
    :'uil uil-bars'

}