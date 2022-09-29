async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // check the response status
        if (response.ok) {
            // console.log('success');
            document.location.replace('/');
        } else {
            alert('Username or email already in use. Please log in, or sign up with a different username and email address.');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);