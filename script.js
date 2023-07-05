// const donateButton = document.getElementById('donateButton');
// const donateFormContainer = document.getElementById('donateForm');

// donateButton.addEventListener('click', function(event) {
//   event.preventDefault();

//   donateFormContainer.innerHTML = '';

//   const donateForm = document.createElement('form');

//   const firstNameLabel = document.createElement('label');
//   firstNameLabel.textContent = 'First name';
//   const firstNameInput = document.createElement('input');
//   firstNameInput.type = 'text';
//   firstNameInput.id = 'firstName';
//   firstNameInput.required = true;

//   const lastNameLabel = document.createElement('label');
//   lastNameLabel.textContent = 'Last name';
//   const lastNameInput = document.createElement('input');
//   lastNameInput.type = 'text';
//   lastNameInput.id = 'lastName';
//   lastNameInput.required = true;

//   const emailLabel = document.createElement('label');
//   emailLabel.textContent = 'Email address';
//   const emailInput = document.createElement('input');
//   emailInput.type = 'email';
//   emailInput.id = 'email';
//   emailInput.required = true;

//   const paymentInfoHeader = document.createElement('h4');
//   paymentInfoHeader.textContent = 'PAYMENT INFO';

//   const cardDetailsLabel = document.createElement('label');
//   cardDetailsLabel.textContent = 'Card details';
//   const cardDetailsInput = document.createElement('input');
//   cardDetailsInput.type = 'text';
//   cardDetailsInput.id = 'cardDetails';
//   cardDetailsInput.required = true;

//   const submitButton = document.createElement('button');
//   submitButton.type = 'submit';
//   submitButton.textContent = 'Donate $100';

//   donateForm.append(
//     firstNameLabel,
//     firstNameInput,
//     document.createElement('br'),
//     lastNameLabel,
//     lastNameInput,
//     document.createElement('br'),
//     emailLabel,
//     emailInput,
//     document.createElement('br'),
//     paymentInfoHeader,
//     document.createElement('br'),
//     cardDetailsLabel,
//     cardDetailsInput,
//     document.createElement('br'),
//     submitButton
//   );

//   donateFormContainer.appendChild(donateForm);
//   donateFormContainer.style.display = 'block';
// });
