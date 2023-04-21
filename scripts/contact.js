// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const form = document.querySelector('form');
const submitButton = document.querySelector('#submit-button');
const contactPage = document.querySelector('#contact-page');
const thankYouMessage = document.createElement('p');
thankYouMessage.textContent = 'Thank you for your message';
thankYouMessage.classList.add('hide');
contactPage.appendChild(thankYouMessage);

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    form.reset();
    contactPage.removeChild(form);
    thankYouMessage.classList.remove('hide');
});