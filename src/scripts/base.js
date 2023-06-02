const Togglemenu = (e) =>{
    let nav_links = document.getElementById("nav_links");
    e.name === 'menu' ? (e.name = 'close', nav_links.style.width = "65%", document.body.classList.toggle('lock-scroll'))
    : (e.name = 'menu', nav_links.style.width = "0%", document.body.classList.toggle('lock-scroll'))
};

const subscribermail = document.getElementById('subscribermail');
const subscriberForm = document.getElementById('subscriberForm');

const SubmitSubscriberForm = (e) =>{
    e.preventDefault();
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/264ec2f177e5ee117c994f1fd07bbecb', {
    _subject: "New Subscriber",
    Subscriber: subscribermail.value,
    })
    .then(response => response.status === 200 ? (subscribermail.setCustomValidity("Successfull")): null)
    .catch(error => (console.log(error), subscribermail.setCustomValidity("Unsuccessfull")));
    subscriberForm.reset();
}
