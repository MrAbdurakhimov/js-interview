const add = (a) => {
  return (b) => {
    if (b == undefined) {
      return a;
    } else {
      return add(a + b);
    }
  };
};

console.log(add(1)(2)(3)(3)(4)());
