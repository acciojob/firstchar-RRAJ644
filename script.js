function firstChar(text) {
  // your code here
	const trimmed = text.trim()
	return trimmed.length > 0 ? trimmed[0] : ''
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
