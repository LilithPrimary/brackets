module.exports = 
function check(str, bracketsConfig) {
  const pair = Object.fromEntries(bracketsConfig);
  const openBrack = Object.keys(pair);
  const simBrack = bracketsConfig.reduce((acc, el) => {
    if (el[0]===el[1])
      acc.push(el[0])
    return acc;
  }, [])
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (simBrack.includes(str[i])) {
      if (str[i] === stack[stack.length-1]) {
        stack.pop()
      } else {
        stack.push(str[i])
      }
    } else if (openBrack.includes(str[i])) {
      stack.push(str[i])
    } else if (str[i] === pair[stack[stack.length-1]]){
        stack.pop()
    } else {
      stack.push(str[i]);
      break};
  }
  return !stack.length;
}