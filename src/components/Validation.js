export const validateName = (name) => {
  if (!name.trim()) return 'Name is required';
  if (name.length > 30) return 'Name must be less than 30 characters';
  if (/[-@:#]/.test(name)) return 'Name contains invalid characters (-, @, :, #)';
  return '';
};

export const validateAge = (age) => {
  if (!age) return 'Age is required';
  if (isNaN(age)) return 'Age must be a number';
  if (age % 1 !== 0) return 'Age must be a whole number';
  if (age < 1) return 'Age must be at least 1';
  if (age > 150) return 'Age must be realistic';
  return '';
};