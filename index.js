document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-btn");
  const passwordDisplay = document.getElementById("password-display");

  generateButton.addEventListener("click", function () {
    const minLength = parseInt(document.getElementById("length").value);
    const includeSpecialChars = document.getElementById("special-chars").checked;
    const includeNumbers = document.getElementById("numbers").checked;

    const generatedPassword = generatePassword(
      minLength,
      includeSpecialChars,
      includeNumbers
    );
      if(minLength < 12){
        alert('Password must be at least 12 characters long')
      }else{
        passwordDisplay.textContent = "Generated Password: " + generatedPassword;
      }
    

  
  });

  function generatePassword(minLength, includeSpecialChars, includeNumbers) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numericChars = '0123456789';

    let validChars = lowercaseChars + uppercaseChars;

    if (includeSpecialChars) {
      validChars += specialChars;
    }

    if (includeNumbers) {
      validChars += numericChars;
    }

    let password = '';

    while (password.length < minLength) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    return password;
  }
});
