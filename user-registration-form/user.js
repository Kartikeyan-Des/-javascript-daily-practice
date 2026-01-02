const form = document.querySelector('#userForm');

const message = document.querySelector('#message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  message.textContent = '';

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const age = document.querySelector('#age').value;

  if (!name || !email || !password || !age) {
    message.textContent = 'All fields are required';
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Invalid Email';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password is too short';
    return;
  }

  const user = {
    name,
    email,
    age
  };


  console.log('Registered User:', user);
  message.textContent = 'Registration successful 🎉';
})