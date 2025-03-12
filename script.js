document.getElementById('sign-up-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.container').classList.add('hidden');
    document.querySelector('.sign-up-container').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.sign-up-container').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
});

// Optional: Add event listeners to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    alert('Login form submitted');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the sign-up form
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;

    // Check if all fields are filled (simple validation)
    if (fullName && email && password && dob && phone) {
        // Handle sign-up logic here
        console.log("Sign-up details:", {
            fullName, email, password, dob, phone
        });
        alert('Sign-up form submitted');
    } else {
        alert('Please fill in all the fields');
    }
});
