// Function to handle the submission of the form
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the input value from the form
  const didInput = document.getElementById('didInput');
  const did = didInput.value;

  // Perform validation on the DID
  const isValid = validateDid(did);

  // Display the validation result
  const validationMessage = document.getElementById('validationMessage');
  if (isValid) {
    validationMessage.textContent = 'Valid DID';
  } else {
    validationMessage.textContent = 'Invalid DID';
  }
}

// Function to validate a DID
function validateDid(did) {
  // Add your validation logic here
  // This is just a basic example
  return did.startsWith('did:');
}

// Add an event listener to the form
const form = document.getElementById('didForm');
form.addEventListener('submit', handleFormSubmission);
