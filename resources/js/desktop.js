function selector(el) {
	const node = document.createElement('div');
	node.classList.add('selector');
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	el.onmousedown = startSelector;

	function startSelector(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;

		document.onmouseup = stopSelector;
		document.onmousemove = resizeSelector;
	};

	function resizeSelector(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		node.style.top = (node.offsetTop - pos2) + "px";
		node.style.left = (node.offsetLeft - pos1) + "px";
	};

	function stopSelector() {
		document.onmouseup = null;
		document.onmousemove = null;
	};
};