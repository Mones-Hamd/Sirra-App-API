export const setName = (value) => {
  localStorage.setItem('name', value);
};
export const getName = () => {
  const name = localStorage.getItem('name');
  return name;
};
