
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const userId = () => {
  return localStorage.getItem('userId');
};