module.exports = function check(str, bracketsConfig) {
  if(str.length % 2) return false;
  let brackets = {}
  bracketsConfig.forEach(i => {brackets[i[0]] = i[1]});
  let stack = [];
  for(let i = 0; i < str.length; i++)
    if(brackets[str[i]] && (brackets[str[i]] != str[i] || !stack.includes(str[i])))
      stack.push(str[i])
    else if(brackets[stack[stack.length-1]] == str[i])
      stack.pop();
    else
      return false;
  
  return true;
}