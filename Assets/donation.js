    // JavaScript code to handle form submission and donation process
    
    // Function to handle form submission
    function submitForm(event) {
        event.preventDefault(); // Prevent form from submitting
        
        // Retrieve form values
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let amount = document.getElementById('amount').value;
        let paymentMethod = document.getElementById('payment').value;
        let password = document.getElementById('password').value;
        
        // Validate form inputs
        if (name === '' || email === '' || amount === '' || paymentMethod === '' || password === '') {
          alert('Please fill in all the required fields.');
          return;
        }
        
        // Validate password confirmation
        let confirmPassword = prompt('Please confirm your password:');
        if (password !== confirmPassword) {
          alert('Password confirmation does not match.');
          return;
        }
        
        // Create a data object to send with the donation details
        let donationData = {
          name: name,
          email: email,
          amount: amount,
          paymentMethod: paymentMethod
        };
        
        // Simulate an AJAX request to submit the form data to the server
        // Replace this code with your actual server-side donation processing code
        
        // Process the donation data
        console.log('Donation Data:', donationData);
        
        // Show success message to the user
        alert('Thank you for saving a child\'s life!');
        
        // Reset the form
        document.getElementById('donationForm').reset();
      }
      
      // Attach event listener to the form submit event
      document.getElementById('donationForm').addEventListener('submit', submitForm);