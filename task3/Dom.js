document.addEventListener("DOMContentLoaded", function() {
    // Get references to form elements
    const driverNameInput = document.getElementById("drivername");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("Email");
    const phoneInput = document.getElementById("Phone");
    const birthdayInput = document.getElementById("birthday");
    const saveButton = document.getElementById("saveButton");
    const driverEmptyLabel = document.getElementById("driverempty");
    const driverError = document.getElementById("error");
    const MobileError = document.getElementById("Merror");
    const MobileEmpty = document.getElementById("mobileEmpty");
    const emailError = document.getElementById("emailError");
    const emailEmpty = document.getElementById("emailEmpty");
    const phoneError = document.getElementById("phoneError");
    const phoneEmpty = document.getElementById("phoneEmpty");
    const birthdayError = document.getElementById("birthdayError");
    const birthdayEmpty = document.getElementById("birthdayEmpty");
    const IDInput = document.getElementById("ID");
    const jobInput = document.getElementById("Job");
    const licenseNumberInput = document.getElementById("LicenseNumber");
    const licenseTypeInput = document.getElementById("LicenseType");
    const IDError = document.getElementById("IDError");
    const IDEmpty = document.getElementById("IDEmpty");
    const jobError = document.getElementById("jobError");
    const jobEmpty = document.getElementById("JobEmpty");
    const licenseNumberError = document.getElementById("licenseNumberError");
    const licenseNumberEmpty = document.getElementById("licenseNumberEmpty");
    const licenseTypeError = document.getElementById("licenseTypeError");
    const licenseTypeEmpty = document.getElementById("licenseTypeEmpty");
    

  
    function validateDriverName() {
        const driverName = driverNameInput.value.trim();
        if (driverName === "" || driverName.length < 3) {
            console.log("The name field is required");
            driverEmptyLabel.textContent = "The name field is required";
            driverError.textContent = "*";
            return false;
        } else {
            driverEmptyLabel.textContent = "";
            driverError.textContent = "";
            return true;
        }
    }

 
    function validateMobile() {
        const mobile = mobileInput.value.trim();
        if ( mobile.length < 9) {
           /// console.log("The mobile field is required");
            MobileEmpty.textContent = "The number of mobile digits should be 9";
            MobileError.textContent = "*";
            return false;
        } else {
            MobileEmpty.textContent = "";
            MobileError.textContent = "";
            return true;
        }
    }


    function validateEmail() {
        const email = emailInput.value.trim();
        if (!validateEmailFormat(email)) {
            console.log("Invalid email");
            emailEmpty.textContent = "Invalid email";
            emailError.textContent = "*";
            return false;
        } else {
            emailEmpty.textContent = "";
            emailError.textContent = "";
            return true;
        }
    }

 
    function validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

   
    function validatePhone() {
        const phone = phoneInput.value.trim();
        const phoneRegex = /^(09|02|04)\d{7}$/; 
        if (!phoneRegex.test(phone)) {
            console.log("Invalid phone number");
            phoneEmpty.textContent = "Phone number is invalid";
            phoneError.textContent = "*";
            return false;
        } else {
            phoneEmpty.textContent = "";
            phoneError.textContent = "";
            return true;
        }
    }


    function validateBirthday() {
        const birthday = birthdayInput.value.trim();
        
       
    

      
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(birthday)) {
            birthdayEmpty.textContent = "Invalid date format (yyyy-mm-dd)";
            return false;
        }


        const parts = birthday.split("-");
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; 
        const day = parseInt(parts[2], 10);
        const date = new Date(year, month, day);

        if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
            birthdayEmpty.textContent = "Invalid date";
            return false;
        }

        return true;
    }
    // function validateID() {
    //     const ID = IDInput.value.trim();
    //     if (ID === "") {
    //         IDEmpty.textContent = "ID # is required";
    //         IDError.textContent = "*";
    //         return false;
    //     } else {
    //         IDEmpty.textContent = "";
    //         IDError.textContent = "";
    //         return true;
    //     }
    // }

    // function validateJob() {
    //     const job = jobInput.value.trim();
    //     if (job === "") {
    //         jobEmpty.textContent = "Job # is required";
    //         jobError.textContent = "*";
    //         return false;
    //     } else {
    //         jobEmpty.textContent = "";
    //         jobError.textContent = "";
    //         return true;
    //     }
    // }

    function validateLicenseNumber() {
        const licenseNumber = licenseNumberInput.value.trim();
        if (licenseNumber === "") {
            licenseNumberEmpty.textContent = "License # is required";
            licenseNumberError.textContent = "*";
            return false;
        } else {
            licenseNumberEmpty.textContent = "";
            licenseNumberError.textContent = "";
            return true;
        }
    }


    // function validateLicenseType() {
    //     const licenseType = licenseTypeInput.value.trim();
    //     if (licenseType === "") {
    //         licenseTypeEmpty.textContent = "License Type is required";
    //         licenseTypeError.textContent = "*";
    //         return false;
    //     } else {
    //         licenseTypeEmpty.textContent = "";
    //         licenseTypeError.textContent = "";
    //         return true;
    //     }
    // }
  
    


    function handleSaveButtonClick() {
   
        const isDriverNameValid = validateDriverName();
        const isMobileValid = validateMobile();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isBirthdayValid = validateBirthday();
     //   const isIDValid = validateID();
      //  const isJobValid = validateJob();
        const isLicenseNumberValid = validateLicenseNumber();
      //  const isLicenseTypeValid = validateLicenseType();
        
    
        if (isDriverNameValid && isMobileValid && isEmailValid && isPhoneValid && isBirthdayValid &&  isLicenseNumberValid ) {
            resetEmptyLabels();
            saveData();
        } else {
         
            console.log("Validation failed, data not saved.");
        }
    }
    

function resetEmptyLabels() {
    driverEmptyLabel.textContent = "";
    MobileEmpty.textContent = "";
    emailEmpty.textContent = "";
    phoneEmpty.textContent = "";
    birthdayEmpty.textContent = "";
    IDEmpty.textContent = "";
    jobEmpty.textContent = "";
    licenseNumberEmpty.textContent = "";
    licenseTypeEmpty.textContent = "";
}

function saveData() {
    resetEmptyLabels();
   
    const driverName = driverNameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const birthday = birthdayInput.value.trim();
    const ID = IDInput.value.trim();
    const job = jobInput.value.trim();
    const licenseNumber = licenseNumberInput.value.trim();
    const licenseType = licenseTypeInput.value.trim();

 
    const message = `
        Driver Name: ${driverName}
        Mobile: ${mobile}
        Email: ${email}
        Phone: ${phone}
        Birthday: ${birthday}
        ID: ${ID}
        Job: ${job}
        License Number: ${licenseNumber}
        License Type: ${licenseType}
    `;

  
    alert(message);

  
  
}

   
    saveButton.addEventListener("click", handleSaveButtonClick);

   
});
