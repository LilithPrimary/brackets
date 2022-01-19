module.exports = 
function check(str, bracketsConfig) {
  const pairs = Object.fromEntries(bracketsConfig);
  const openBracks = Object.keys(pairs);
  const simBracks = bracketsConfig.reduce((acc, el) => {
    if (el[0]===el[1])
      acc.push(el[0])
    return acc;
  }, [])
  let stack = [];
  loop:
  for (let i = 0; i < str.length; i++) {
    switch (true) {
      case simBracks.includes(str[i]): str[i] === stack[stack.length-1] ? stack.pop() : stack.push(str[i]); break;
      case openBracks.includes(str[i]): stack.push(str[i]); break;
      case str[i] === pairs[stack[stack.length-1]]: stack.pop(); break;
      default: stack.push(str[i]); break loop;
    }
  }
  return !stack.length;
}