document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // cancels the standard form submission
  const email = document.getElementById("Email").value; //that , what user wrote
  const password = document.getElementById("Password").value;

  //Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    //checks whether the entered email matches the pattern
    showError("Invalid email format");
    return;
  }

  //Password validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    showError("Password:min 8 characters , letters and numbers");
    return;
  }
  showFakeLoad();
});

const showError = (message) => {
  alert(message); 
};

//Fake loading and redirect
const showFakeLoad = () => {
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
};
