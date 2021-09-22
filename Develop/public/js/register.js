const registerHandler = async (event) => {
    event.preventDefault();

    console.log("registerHandler");

    const username = document.querySelector('#registerstaticEmail').value.trim();
    const password = document.querySelector('#registerinputPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
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

document
    .querySelector('#register')
    .addEventListener('click', registerHandler);