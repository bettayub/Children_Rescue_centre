let form_data = {};
form_data["vName"] = document.querySelector('#vName').value; // Get the value of the 'vName' input field
form_data["vDate"] = document.querySelector('#vDate').value; // Get the value of the 'vDate' input field
form_data["vEmail"] = document.querySelector('#vEmail').value; // Get the value of the 'vEmail' input field
form_data["vTelephone"] = document.querySelector('#vTelephone').value; // Get the value of the 'vTelephone' input field
form_data["vMessage"] = document.querySelector('#vMessage').value; // Get the value of the 'vMessage' input field

let form_elements = {};
form_elements["vName"] = document.querySelector('#vName'); // Store the 'vName' input field element
form_elements["vDate"] = document.querySelector('#vDate'); // Store the 'vDate' input field element
form_elements["vEmail"] = document.querySelector('#vEmail'); // Store the 'vEmail' input field element
form_elements["vTelephone"] = document.querySelector('#vTelephone'); // Store the 'vTelephone' input field element
form_elements["vMessage"] = document.querySelector('#vMessage'); // Store the 'vMessage' input field element

function resetForm() {
  for (let key in form_elements) {
    form_elements[key].value = ""; // Clear the value of each input field
  }
}

function submitForm() {
  if (validateForm()) {
    // Do anything you want with the form data
    document.getElementById('contact-submit').innerHTML = "Message was sent!"; // Set the submit button text
    setTimeout(function() {
      resetForm();
      alert("Thank you for reaching us! \uD83D\uDE4F"); // \uD83D\uDE4F represents a thumbs-up emoji
    }, 3000); // Wait for 3 seconds before resetting the form and showing the alert
  }
}

function validateForm() {
  form_data["vName"] = document.querySelector('#vName').value; // Update the 'vName' value in form_data
  form_data["vDate"] = document.querySelector('#vDate').value; // Update the 'vDate' value in form_data
  form_data["vEmail"] = document.querySelector('#vEmail').value; // Update the 'vEmail' value in form_data
  form_data["vTelephone"] = document.querySelector('#vTelephone').value; // Update the 'vTelephone' value in form_data
  form_data["vMessage"] = document.querySelector('#vMessage').value; // Update the 'vMessage' value in form_data

  let telephoneREGEXP = /^\+?\d{1,4}-?\d{1,12}$/; // Updated telephone number format regular expression

  let emailREGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // Email address format regular expression

  if (form_data["vName"] === "") {
    alert("Name can't be blank!");
    return false; // Return false if 'vName' is blank
  }
  if (form_data["vDate"] === "") {
    alert("Date can't be blank!");
    return false; // Return false if 'vDate' is blank
  }
  if (form_data["vEmail"] === "") {
    alert("Email can't be blank!");
    return false; // Return false if 'vEmail' is blank
  }
  if (!emailREGEXP.test(form_data["vEmail"])) {
    alert("Wrong email address!");
    return false; // Return false if 'vEmail' format is incorrect
  }
  if (form_data["vTelephone"] === "") {
    alert("Telephone can't be blank!");
    return false; // Return false if 'vTelephone' is blank
  }
  if (!telephoneREGEXP.test(form_data["vTelephone"])) {
    alert("Telephone format must be: [+]<country code>-<phone number> (1-12)");
    return false; // Return false if 'vTelephone' format is incorrect
  }
  if (form_data["vMessage"] === "") {
    alert("Message can't be blank!");
    return false; // Return false if 'vMessage' is blank
  }

  return true; // Return true if all validations pass
}

function addElement(element) {
  let header = document.createElement("h4");
  let text = document.createTextNode(element);
  header.appendChild(text);
  document.body.appendChild(header);
}
