const firstName = document.getElementById('firstname_inputfield');
const lastname = document.getElementById('lastname_inputfield');
const email = document.getElementById('email_inputfield');
const tel = document.getElementById('tel_inputfield');
const subject = document.getElementById('subject_inputfield');
const message = document.getElementById('message_textarea');
const contact_us_form = document.getElementById('homeContactForm');
const correct_response_indicator = document.getElementById('correct_response');
const error_response_indicator = document.getElementById('error_response');

const SubmitContactForm = (e) =>{
    e.preventDefault();
    error_response_indicator.style.display="none";
    correct_response_indicator.style.display="none";
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/adediranstephen2000@gmail.com', {
    _subject: "Contact Form Questions/Inquiries",
    FirstName: firstName.value,
    LastName: lastname.value,
    Email: email.value,
    Phone: tel.value,
    Subject: subject.value,
    Message: message.value
    })
    .then(response => response.status == 200 ? (correct_response_indicator.style.display="block", error_response_indicator.style.display="none"): null)
    .catch(error => (console.log(error), correct_response_indicator.style.display="none", error_response_indicator.style.display="block"));
    contact_us_form.reset();
}