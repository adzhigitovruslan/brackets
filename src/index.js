module.exports = function check(str, bracketsConfig) {
  let OPEN_BRACKETS = [];
  let PAIR_BRACKETS = {};
  let stack = [];

  bracketsConfig.forEach(el => {
    OPEN_BRACKETS.push(el[0]);
    PAIR_BRACKETS[el[1]] = el[0];
  });

  for(let i = 0; i < str.length; i++) {
    let top = stack[stack.length - 1];
    (stack.length !== 0) && PAIR_BRACKETS[str[i]] === top ? stack.pop() : stack.push(str[i])
  }
  return stack.length === 0;
}
