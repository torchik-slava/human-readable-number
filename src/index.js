module.exports = function toReadable (number) {	
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven' , 'eight', 'nine'],
  second_tens = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  result = '',
  str = '' + number;

  if (str.length == 1)  return result += units[number];
	if (str.length == 2) {
		if (str[0] == '1') return result += second_tens[+str[1]];
		if (str[1] == '0') return result += tens[+str[0]];
		return result += tens[+str[0]] + ' ' + units[+str[1]];
	}
	if (str.length == 3) {
		result += units[+str[0]] + ' hundred';
		if (str[1] == '0' && str[2] == '0') return result;
		if (str[1] == '0') {
			result += ' ' + units[+str[2]];
			return result;
		}	
		if (str[1] == '1') {
			result += ' ' + second_tens[+str[2]];
			return result;
		}
		if (str[2] == '0') {
			result += ' ' + tens[+str[1]];
			return result;
		}
		result += ' ' + tens[+str[1]] + ' ' + units[+str[2]];
		return result;
	}
}
