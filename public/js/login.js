const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginstaticEmail').value.trim();
    const password = document.querySelector('#logininputPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: ({ 'Content-Type': 'application/json' })
        });

        console.log(response);
        if (response.ok) {
            // If login information is correct, take user to the dashboard
            document.location.replace('/chat')
        } else {
            // I want the page to display "invalid username or password"
            alert('Failed to log in');
            // Needs to redirect back to login if invalid
        }
    }
};

document.querySelector('#log-in').addEventListener('click', loginHandler);