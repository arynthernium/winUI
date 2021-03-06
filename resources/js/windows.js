class WindowElement {
	constructor(w = { window: { title: "New Window", sizeX: 1200, sizeY: 600 }, context: [{ "name": "Fullscreen", "type": "action", action: fullscreenWindow }, { "name": "Fullscreen", "type": "divider" }, { "name": "Fullscreen", "type": "action", action: fullscreenWindow }] }) {
		this.node = createItem('div', 'window');

		w.window.sizeX ? this.node.style.width = w.window.sizeX : null;
		w.window.sizeY ? this.node.style.width = w.window.sizeY : null;

		const bar = createItem('div', 'windowbar');
		const title = createItem('div', 'windowtitlebox');
		const spacer = createItem('div', 'windowbarspacer');
		const windowbarclose = createItem('div', 'windowbarbutton');
		const content = createItem('div', 'windowcontent');

		title.innerHTML = `<p class="windowtitle">${w.window.title}</p>`;
		windowbarclose.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z" fill="currentColor" /></svg>`;

		bar.addEventListener('contextmenu', (e) => {
			new ContextMenu(e, w.context);
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

function newWindow() {
	document.body.appendChild(new WindowElement().node);
};