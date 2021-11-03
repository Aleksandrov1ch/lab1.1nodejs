module.exports.caesarCipher = function caesarCipher(numbers){

  var output = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    output = output.replace('x', numbers[i]);
  }
return `${output}`;
};
