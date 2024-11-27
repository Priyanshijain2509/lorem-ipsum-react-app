class Validator {
    constructor() {
      this.errors = {};
    }
  
    validate(fields) {
      this.errors = {}; // Reset errors before validation
      fields.forEach(({ id, value }) => {
        // Determine which validation method to call based on the field ID
        switch (id) {
          case 'email':
            this.validateEmail(value, id);
            break;
          case 'firstName':
            this.validateFirstName(value, id);
            break;
          case 'lastName':
            this.validateLastName(value, id);
            break;
          case 'companyName':
            this.validateCompanyName(value, id);
            break;
          case 'password':
            this.validatePassword(value, id);
            break;
          default:
            break;
        }
      });
  
      return this.errors;
    }

    validatePassword(password, id) {
      // Regular expression for validating a password
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      // Test the password against the regex pattern
      if (!password || !passwordPattern.test(password)) {
        this.errors[id] = 'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.';
      }
    }

    validateEmail(email, id) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        this.errors[id] = 'Please enter a valid email address.';
      }
    }

    validateFirstName(firstName, id) {
      if (!firstName || firstName.length < 2) {
        this.errors[id] = 'First name must be at least 2 characters long.';
      }
    }

    validateLastName(lastName, id) {
      if (!lastName || lastName.length < 2) {
        this.errors[id] = 'Last name must be at least 2 characters long.';
      }
    }

    validateCompanyName(companyName, id) {
      if (!companyName || companyName.length < 2) {
        this.errors[id] = 'Company name must be at least 2 characters long.';
      }
    }
  }
  
  export default Validator;
  