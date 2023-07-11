// Function to handle the submission of the form
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the input value from the form
  const didInput = document.getElementById('didInput');
  const did = didInput.value;

  // Perform validation on the input
  const isValid = validateInput(did);

  // Display the validation result
  const validationMessage = document.getElementById('validationMessage');
  if (isValid) {
    validationMessage.textContent = 'Valid input';
  } else {
    validationMessage.textContent = 'Invalid input';
  }
}

// Function to validate the input (DID or DWN)
function validateInput(input) {
  // Check if the input is a valid DID
  const isDid = input.startsWith('did:');

  if (isDid) {
    return validateDid(input);
  } else {
    return validateDwn(input);
  }
}

// Function to validate a DID
function validateDid(did) {
  // Add your DID validation logic here
  // This is just a basic example
  return did.startsWith('did:');
}

// Function to validate a DWN
function validateDwn(dwn) {
  // Add your DWN validation logic here
  // This is just a basic example
  return dwn.startsWith('dwn:');
}

// Add an event listener to the form
const form = document.getElementById('didForm');
form.addEventListener('submit', handleFormSubmission);

