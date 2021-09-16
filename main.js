class WindowElement {
	constructor(w) {
		this.node = createItem('div', 'window');
		const bar = createItem('div', 'windowbar');
		const title = createItem('div', 'windowtitlebox');
		const spacer = createItem('div', 'windowbarspacer');
		const windowbarclose = createItem('div', 'windowbarbutton');
		const content = createItem('div', 'windowcontent');

		title.innerHTML = `<p class="windowtitle">${w.window.title}</p>`;
		windowbarclose.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z" fill="currentColor" /></svg>`;

		bar.addEventListener('contextmenu', (e) => {
			new ContextMenu(e);
		});
		windowbarclose.addEventListener('click', event => {
			closeWindow(event);
		});

		this.node.appendChild(bar);
		bar.appendChild(title);
		bar.appendChild(spacer);
		bar.appendChild(windowbarclose);
		this.node.appendChild(content);
		bar.addEventListener('mousedown', focusWindow);
		this.node.addEventListener('mousedown', focusWindow);
		dragElement(bar);
	};
};
class ContextMenu {
	constructor(e, options = [{ "name": "Fullscreen", "type": "action", action: fullscreenWindow }, { "name": "Fullscreen", "type": "divider" }, { "name": "Fullscreen", "type": "action", action: fullscreenWindow }]) {
		if (e.shiftKey) return;
		e.preventDefault();
		const node = createItem('div', ['context', 'mica']);
		options.forEach(item => {
			switch (item.type) {
				case "action":
					var contextitem = createButton(item.name, item.action);
					contextitem.classList.add('contextitem');
					node.appendChild(contextitem);
					break;
				case "divider":
					var contextitem = createItem('div', ['contextitem', 'divider']);
					node.appendChild(contextitem);
					break;
				default:
					break;
			}
		});
		node.onmouseleave = function (e) {
			e.target.remove();
		};
		node.style.top = e.y - 8;
		node.style.left = e.x - 8;
		document.body.appendChild(node);
	};
};

function fullscreenWindow(e) {
	var node = e.target;
	while (!(node.classList.contains('window'))) {
		node = node.parentElement;
	};
	node.classList.toggle('fullscreen')
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

function windowOptions(e) {
	const options = document.createElement('div');
	options.classList.add('windowoptions');

	const optionslist = [
		{
			"name": "Fullscreen",
			action: fullscreenWindow
		}
	];
	options.onmouseleave = function (e) {
		e.target.remove();
	};
	optionslist.forEach(option => {
		const optiondiv = document.createElement('p');
		optiondiv.classList.add('windowoption');
		optiondiv.innerHTML = `${option.name}`;
		optiondiv.onclick = option.action;
		options.appendChild(optiondiv);
	});

};

function changeTheme() {
	document.getElementsByTagName('body')[0].classList.toggle('dark');
};

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

function newWindow() {
	document.body.appendChild(new WindowElement({ window: { title: "window title name" } }).node);
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