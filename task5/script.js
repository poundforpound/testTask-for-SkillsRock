//task 1
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log('Вызвана функция с задержкой');
}, 2000);

debouncedFunction();
debouncedFunction();

// task2
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  const objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
}

const original = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';

console.log(original.address.city);
console.log(copy.address.city);
