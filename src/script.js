export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const formatContactResponse = (name) => {
  return name
    ? `Thank you, ${name}! Your message has been received.`
    : 'Thank you! Your message has been received.';
};
