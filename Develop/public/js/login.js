const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#staticEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: ({ 'Content-Type': 'application/json' })
        });

        console.log(response);
        if(response.ok){
        // If login information is correct, take user to the dashboard
        document.location.replace('/chat')
        } else {
        // I want the page to display "invalid username or password"
            alert('Failed to log in');
        // Needs to redirect back to login if invalid
        }
}
};

document.querySelector('#submit').addEventListener('click', loginHandler);