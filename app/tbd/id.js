const web5 = require('@TBD54566975/web5-js');

async function generateDidKeys() {
  try {
    // Generate a key pair using the Elliptic Curve Cryptography (ECC)
    const keyPair = await crypto.subtle.generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256', // NIST-recommended elliptic curve
      },
      true, // Extractable private key
      ['sign', 'verify'] // Key usages
    );

    // Export the public key in JWK (JSON Web Key) format
    const publicKeyJWK = await crypto.subtle.exportKey('jwk', keyPair.publicKey);

    // Export the private key in JWK format (for demonstration purposes only)
    const privateKeyJWK = await crypto.subtle.exportKey('jwk', keyPair.privateKey);

    // Display the generated keys
    console.log('Public Key (JWK):', JSON.stringify(publicKeyJWK, null, 2));
    console.log('Private Key (JWK):', JSON.stringify(privateKeyJWK, null, 2));
  } catch (error) {
    console.error('Error generating keys:', error);
  }
}

// Call the function to generate DID keys
generateDidKeys();
