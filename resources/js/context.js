
class ContextMenu {
	constructor(e, options = [{ "name": "Fullscreen", "type": "action", action: fullscreenWindow }, { "name": "Fullscreen", "type": "divider" }, { "name": "Fullscreen", "type": "action", action: fullscreenWindow }]) {
		if (e.shiftKey) return;
		e.preventDefault();
		const node = createItem('div', ['context', 'acrylic']);
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