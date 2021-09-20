function resizeSelector() {

};

function selector(e) {
	console.log(e);
	document.getElementsByTagName('body')[0].addEventListener('mousemove', resizeSelector, true);
};

// IN PROGRESS