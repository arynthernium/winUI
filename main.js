class WindowElement {
	constructor() {
		this.node = createItem('div', 'window');
		const bar = createItem('div', 'windowbar');
		const spacer = createItem('div', 'windowbarspacer');
		const windowbaroptions = createItem('div', 'windowbarbutton');
		const windowbarclose = createItem('div', 'windowbarbutton');

		windowbaroptions.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="currentColor" /> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /> <path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" fill="currentColor" /></svg>`;
		windowbarclose.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z" fill="currentColor" /></svg>`;

		windowbarclose.addEventListener('click', e => {
			closeWindow(e);
		});

		this.node.appendChild(bar);
		bar.appendChild(spacer);
		bar.appendChild(windowbaroptions);
		bar.appendChild(windowbarclose);
		bar.addEventListener('mousedown', focusWindow);
		this.node.addEventListener('mousedown', focusWindow);
		dragElement(bar);
	};
};

function focusWindow(e) {
	[...document.getElementsByClassName('focus')].forEach(item => {
		item.classList.remove('focus');
	});
	let node = e.target;
	while (!(node.classList.contains('window'))) {
		node = node.parentElement;
	};
	node.classList.add('focus');
};

function closeWindow(e) {
	let node = e.target;
	while (!(node.classList.contains('window'))) {
		node = node.parentElement;
	};
	node.remove();
};

function createItem(tag, classname) {
	const node = document.createElement(tag);
	node.classList.add(classname);
	return node;
};

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;

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
		elmnt.parentElement.style.top = (elmnt.parentElement.offsetTop - pos2) + "px";
		elmnt.parentElement.style.left = (elmnt.parentElement.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}