const form = document.getElementById('form');

form.addEventListener('submit' , e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(!firstName) {
        addErrorTo('firstname')
    } else {
        deleteErrorTo('firstname')
    }
    if(!lastName) {
        addErrorTo('lastname')
    } else {
        deleteErrorTo('lastname')
    }
    if(!isValid(email)) {
        addErrorTo('email')
    } else {
        deleteErrorTo('email')
    }
    if(!password) {
        addErrorTo('password')
    } else {
        deleteErrorTo('password')
    }
})

function addErrorTo(field) {
    form[field].parentNode.querySelector('small').style.display = 'block';
    form[field].parentNode.classList.add('error');
}

function deleteErrorTo(field) {
    form[field].parentNode.querySelector('small').style.display = 'none';
    form[field].parentNode.classList.remove('error');
}

function isValid(email) {
    // Regular Expression to validate an email address in JavaScript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}