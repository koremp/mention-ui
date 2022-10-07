export const debounce = (func, time = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), time);
  };
};

// todo: delete this
export const blab = '';
