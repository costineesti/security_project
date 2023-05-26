import jwtDecode from 'jwt-decode';

// Function to extract user role from the JWT token
export function extractUserRole(token) {
  console.log('Token:', token);
  const decodedToken = jwtDecode(token);
  console.log('Decoded Token:', decodedToken);
  const role = decodedToken.role;
  
  // Map the role value to the corresponding role in the frontend
  switch (role) {
    case 'USER':
      return 'USER';
    case 'ADMIN':
      return 'ADMIN';
    default:
      return '';
  }
}
