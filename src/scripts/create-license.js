export function createLicense(element) {
	const image = document.createElement('img');
	image.classList.add('Licenses__img');
	image.src = element.src;
	image.alt = element.alt;
	return image;
}
