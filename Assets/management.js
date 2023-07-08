// fetch('db.json')
//   .then(response => response.json())
//   .then(data => {
//     const contributionsDiv = document.getElementById('contributions');
//     contributionsDiv.innerHTML = ''; // Clear existing contributions

//     if (data.contributions.length === 0) {
//       contributionsDiv.innerHTML = 'No contributions found.';
//     } else {
//       data.contributions.forEach(contribution => {
//         const contributionDiv = document.createElement('div');
//         contributionDiv.classList.add('contribution');

//         const header = document.createElement('div');
//         header.classList.add('contribution-header');
//         header.textContent = contribution.names.join(', ');
//         contributionDiv.appendChild(header);

//         const details = document.createElement('div');
//         details.classList.add('contribution-details');
//         details.innerHTML = `
//           <div><span>Amount:</span> $${contribution.amount}</div>
//           <div><span>Date:</span> ${contribution.date}</div>
//           <div><span>Payment Method:</span> ${contribution.paymentMethod}</div>
//           <div><span>Email:</span> ${contribution.email}</div>
//         `;
//         contributionDiv.appendChild(details);

//         const message = document.createElement('div');
//         message.classList.add('contribution-message');
//         message.textContent = contribution.message;
//         contributionDiv.appendChild(message);

//         contributionsDiv.appendChild(contributionDiv);
//       });
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching db.json:', error);
//     const contributionsDiv = document.getElementById('contributions');
//     contributionsDiv.innerHTML = 'Error fetching contributions.';
//   });

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const contributionsDiv = document.getElementById('contributions');
    contributionsDiv.innerHTML = ''; // Clear existing contributions

    if (data.contributions.length === 0) {
      contributionsDiv.innerHTML = 'No contributions found.';
    } else {
      const contributions = data.contributions;
      const halfLength = Math.ceil(contributions.length / 2);

      const leftColumn = document.createElement('div');
      leftColumn.classList.add('column');
      contributionsDiv.appendChild(leftColumn);

      const rightColumn = document.createElement('div');
      rightColumn.classList.add('column');
      contributionsDiv.appendChild(rightColumn);

      contributions.forEach((contribution, index) => {
        const contributionDiv = document.createElement('div');
        contributionDiv.classList.add('contribution');

        const header = document.createElement('div');
        header.classList.add('contribution-header');
        header.textContent = contribution.names.join(', ');
        contributionDiv.appendChild(header);

        const details = document.createElement('div');
        details.classList.add('contribution-details');
        details.innerHTML = `
          <div><span>Amount:</span> $${contribution.amount}</div>
          <div><span>Date:</span> ${contribution.date}</div>
          <div><span>Payment Method:</span> ${contribution.paymentMethod}</div>
          <div><span>Email:</span> ${contribution.email}</div>
        `;
        contributionDiv.appendChild(details);

        const message = document.createElement('div');
        message.classList.add('contribution-message');
        message.textContent = contribution.message;
        contributionDiv.appendChild(message);

        if (index < halfLength) {
          leftColumn.appendChild(contributionDiv);
        } else {
          rightColumn.appendChild(contributionDiv);
        }
      });
    }
  })
  .catch(error => {
    console.error('Error fetching db.json:', error);
    const contributionsDiv = document.getElementById('contributions');
    contributionsDiv.innerHTML = 'Error fetching contributions.';
  });
