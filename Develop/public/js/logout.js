const logout = async () => {
    
    const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
       // If logout successful, return to homepage/login
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
};

document.querySelector('#logout-btn').addEventListener('click', logout);