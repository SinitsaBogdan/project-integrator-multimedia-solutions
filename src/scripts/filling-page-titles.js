// Комментарий :
export function fillingPageTitles(data) {
	data.forEach((element) => {
		const title = document.querySelector(`#${element.id}`);
		if (title != undefined) {
			title.setAttribute('sub', element.sub);
			element.title.forEach((line) => {
				const p = document.createElement('p');
				line.forEach((world) => {
					const span = document.createElement('span');
					if ('normal' in world) span.textContent = world.normal;
					else if ('transparent' in world) update(span, world, 'Title__isTransparent', 'transparent')
					else if ('gradient' in world) update(span, world, 'Title__isGradient', 'gradient')
					span.textContent = span.textContent + ' '
					p.append(span)
				});
				title.append(p)
			});
		}
	});
}

function update(span, world, className, type) {
	span.classList.add(className);
	span.textContent = world[type];
}