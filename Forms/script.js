document.addEventListener("DOMContentLoaded", function () {
    let formData = {
      name: "",
      phone: "",
      email: "",
      status: "Active",
      gender: "Male"
    };
  
    const nameEl = document.getElementById("name");
    const nameErrMsgEl = document.getElementById("nameErrMsg");
  
    const phoneEl = document.getElementById("phone");
    const phoneErrMsgEl = document.getElementById("phoneErrMsg");
  
    const emailEl = document.getElementById("email");
    const emailErrMsgEl = document.getElementById("emailErrMsg");
  
    const statusEl = document.getElementById("status");
    const genderMaleEl = document.getElementById("genderMale");
    const genderFemaleEl = document.getElementById("genderFemale");
    const formEl = document.getElementById("myForm");
  
    nameEl.addEventListener("input", function (event) {
      formData.name = event.target.value;
      nameErrMsgEl.textContent = formData.name === "" ? "Required*" : "";
    });
  
    phoneEl.addEventListener("input", function (event) {
      formData.phone = event.target.value;
      phoneErrMsgEl.textContent = formData.phone === "" ? "Required*" : "";
    });
  
    emailEl.addEventListener("input", function (event) {
      formData.email = event.target.value;
      emailErrMsgEl.textContent = formData.email === "" ? "Required*" : "";
    });
  
    statusEl.addEventListener("change", function (event) {
      formData.status = event.target.value;
    });
  
    genderMaleEl.addEventListener("change", function () {
      formData.gender = "Male";
    });
  
    genderFemaleEl.addEventListener("change", function () {
      formData.gender = "Female";
    });
  
    formEl.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Simple validation before submission
      if (formData.name === "" || formData.phone === "" || formData.email === "") {
        nameErrMsgEl.textContent = formData.name === "" ? "Required*" : "";
        phoneErrMsgEl.textContent = formData.phone === "" ? "Required*" : "";
        emailErrMsgEl.textContent = formData.email === "" ? "Required*" : "";
        return;
      }
  
      submitFormData(formData);
    });
  
    function submitFormData(data) {
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer 4453f57d262f29cbb725282e7bbae168458c1eb7335cf9965d52739529133681"
        },
        body: JSON.stringify(data)
      };
  
      fetch("https://gorest.co.in/public-api/users", options)
        .then((response) => response.json())
        .then((jsonData) => {
          console.log("API Response:", jsonData);
  
          if (jsonData.code === 422 && jsonData.data?.[0]?.message === "email has already been taken") {
            emailErrMsgEl.textContent = "Email already exists!*";
          } else if (jsonData.code === 201) {
            alert("Form submitted successfully!");
          } else {
            alert("Something went wrong.");
          }
        });
    }
  });
  