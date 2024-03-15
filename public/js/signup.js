document
  .querySelector(".registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;

    if (!email || !firstName || !lastName) {
      alert("Please complete all fields");
      return;
    }

    // Submit the form data
    console.log("Submitting email:", email);
    let response = axios
      .post(`http://localhost:3000/users`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
      })
      .then((res) => {
        console.log("Response:", res);
        alert("User created");
        window.location.href = "/index.html";
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  });
