'use strict';

class App {
	constructor() {
		console.log('hello world!');
		let suicide = document.getElementById('suicide');
		let w = window.innerWidth;
		let h = window.innerHeight;
		const textNum = 600;
		const textDelay = 10;
		for (let i = 0; i < textNum; i++) {
			setTimeout(() => {
				let clone = suicide.cloneNode(true);
				clone.id = `suicide-${i}`;
				clone.classList.remove('f-headline', 'gradient-font-animation', 'z-9999', 'relative');
				clone.classList.add('absolute', 'f3', 'gradient-font');
				clone.style.transform = `translate(${(Math.random() * (720 - 200))}px, ${Math.random() * h - 40}px)`;
				suicide.parentNode.appendChild(clone);
			}, (i + 1) * textDelay);
		}
		setTimeout(() => {
			suicide.classList.add('gradient-font-animation-color');
			suicide.parentNode.classList.remove('vh-100');
			suicide.innerText = "Welcome to my net site. Scroll down to read some of my thoughts. I hope you like it :)";
		}, textNum * textDelay)
	}
}

new App();
