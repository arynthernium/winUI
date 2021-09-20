function createItem(tag, classn) {
	const node = document.createElement(tag);
	classn instanceof Array ? classn.forEach(item => {
		node.classList.add(item);
	}) : node.classList.add(classn);
	return node;
};

function createButton(inner, onclick) {
	const node = document.createElement('button');
	node.innerHTML = inner;
	node.addEventListener('click', onclick);
	return node;
};

function dragElement(el) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	el.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		el.parentElement.style.top = (el.parentElement.offsetTop - pos2) + "px";
		el.parentElement.style.left = (el.parentElement.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}