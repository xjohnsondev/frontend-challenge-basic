axios
  .get("http://localhost:3000/users")
  .then((response) => {
    // Access the response data
    let users = response.data;
    let adminRoot = document.querySelector('.admin-root');
    // Generate HTML for the table
    let tableHTML = `
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
    `;

    // Iterate over each user and create a table row
    users.forEach((user) => {
      tableHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.email}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.state}</td>
        </tr>
      `;
    });

    // Close the table
    tableHTML += `
        </tbody>
      </table>
    `;

    // Update the body content with the table
    adminRoot.innerHTML = tableHTML;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
