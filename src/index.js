module.exports = function check(str, bracketsConfig) {
  // your solution
  var bracketsStack = [];

  for(var i = 0; i < str.length; i++) {
    var openingIndex = getOpeningBracketIndex(str[i], bracketsConfig);
    var closingIndex = getClosingBracketIndex(str[i], bracketsConfig);
    if(openingIndex == closingIndex && openingIndex > -1) {
      if(closingIndex == bracketsStack[bracketsStack.length - 1]) {
        bracketsStack.pop();
      } else {
        bracketsStack.push(openingIndex);
      }
    } else if(openingIndex > -1) {
      bracketsStack.push(openingIndex);
    } else if(closingIndex > -1) {
      if(closingIndex == bracketsStack[bracketsStack.length - 1]) {
        bracketsStack.pop();
      } else {
        return false;
      }
    }
  }
  return bracketsStack.length == 0;
}

function getOpeningBracketIndex(bracket, bracketsConfig) {
  for(var i =0; i < bracketsConfig.length; i++) {
    if(bracketsConfig[i][0] === bracket) {
      return i;
    }
  }

  return -1;
}

function getClosingBracketIndex(bracket, bracketsConfig) {
  for(var i =0; i < bracketsConfig.length; i++) {
    if(bracketsConfig[i][1] == bracket) {
      return i;
    }
  }

  return -1;
}
