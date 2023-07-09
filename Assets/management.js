fetch('http://localhost:3000/contributions') // Fetch data from the specified URL
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    const contributionsDiv = document.getElementById('contributions'); // Get the contributions container element
    contributionsDiv.innerHTML = ''; // Clear existing contributions

    if (data.length === 0) { // Check if there are no contributions
      contributionsDiv.innerHTML = 'No contributions found.'; // Display a message indicating no contributions
    } else {
      const contributions = data; // Store the contributions data
      const halfLength = Math.ceil(contributions.length / 2); // Calculate half length of contributions

      const leftColumn = document.createElement('div'); // Create a new div for the left column
      leftColumn.classList.add('column'); // Add 'column' class to the left column
      contributionsDiv.appendChild(leftColumn); // Append the left column to the contributions container

      const rightColumn = document.createElement('div'); // Create a new div for the right column
      rightColumn.classList.add('column'); // Add 'column' class to the right column
      contributionsDiv.appendChild(rightColumn); // Append the right column to the contributions container

      contributions.forEach((contribution, index) => { // Iterate over each contribution
        const contributionDiv = document.createElement('div'); // Create a new div for the contribution
        contributionDiv.classList.add('contribution'); // Add 'contribution' class to the contribution div

        const header = document.createElement('div'); // Create a new div for the contribution header
        header.classList.add('contribution-header'); // Add 'contribution-header' class to the header div
        header.textContent = contribution.names.join(', '); // Set the header text content
        contributionDiv.appendChild(header); // Append the header to the contribution div

        const details = document.createElement('div'); // Create a new div for the contribution details
        details.classList.add('contribution-details'); // Add 'contribution-details' class to the details div
        details.innerHTML = ` // Set the HTML content for the details div
          <div><span>Amount:</span> $${contribution.amount}</div>
          <div><span>Date:</span> ${contribution.date}</div>
          <div><span>Payment Method:</span> ${contribution.paymentMethod}</div>
          <div><span>Email:</span> ${contribution.email}</div>
        `;
        contributionDiv.appendChild(details); // Append the details to the contribution div

        const message = document.createElement('div'); // Create a new div for the contribution message
        message.classList.add('contribution-message'); // Add 'contribution-message' class to the message div
        message.textContent = contribution.message; // Set the message text content
        contributionDiv.appendChild(message); // Append the message to the contribution div

        if (index < halfLength) {
          leftColumn.appendChild(contributionDiv); // Append the contribution to the left column
        } else {
          rightColumn.appendChild(contributionDiv); // Append the contribution to the right column
        }
      });
    }
  })
  .catch(error => {
    console.error('Error fetching contributions:', error); // Log an error message if fetching fails
    const contributionsDiv = document.getElementById('contributions'); // Get the contributions container element
    contributionsDiv.innerHTML = 'Error fetching contributions.'; // Display an error message
  });
