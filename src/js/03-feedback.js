import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    emailInput: document.querySelector("input"),
    messageInput: document.querySelector("textarea"),
};

const formData = {
    email: "",
    message: "",
};

const KEY = "feedback-form-state"

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateFeedback();

function onFormSubmit(event) {
    event.preventDefault();
    const fdb = localStorage.getItem(KEY);
    console.log(fdb);
    localStorage.clear();
    event.currentTarget.reset();
 };
function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
    };

function populateFeedback() {
    
    const savedFbck = JSON.parse(localStorage.getItem(KEY));
    const savedEmail = savedFbck.email;
    const savedMessage = savedFbck.message;

    if (savedFbck) {
        localStorage.setItem(KEY, JSON.stringify(savedFbck));
            refs.emailInput.value = savedEmail;
            refs.messageInput.value = savedMessage;
        formData.email = savedEmail;
        formData.message = savedMessage;
    }
       
}