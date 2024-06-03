import { licenses } from '../data/data-license.js';

export function addLicenses() {
    const licenseList = document.querySelector('.Licenses__list');

    licenses.forEach((item) => {
        for (let i = 0; i < 8; i++){
            const licenseElement = document.createElement('img');

            licenseElement.classList.add('Licenses__img');
            licenseElement.src = item.url;
            licenseElement.alt = item.alt;

            licenseList.append(licenseElement);
        }
    })
}