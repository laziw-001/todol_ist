// const addButton = document.querySelector('.add__button');
// const ul = document.querySelector('ul');

// addButton.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	const input = document.querySelector('input');
// 	let taskText = input.value;
// 	console.log(taskText); // taskText ni chiqarish

// 	// Yangi vazifani ro'yxatga qo'shish
// 	const li = document.createElement('li');
// 	li.textContent = taskText;
// 	ul.appendChild(li);
// });

const addButton = document.querySelector('.add__button')
const ul = document.querySelector('ul')
const darkMode = document.querySelector('.dark__mode')

addButton.addEventListener('click', event => {
	event.preventDefault()
	const input = document.querySelector('input')
	const taskText = input.value

	console.log(input, taskText)

	if (taskText === '') {
		alert('Vazifa kiriting!')
	}

	const li = document.createElement('li')
	const deleteElement = document.createElement('button');
	deleteElement.textContent='';
	
	deleteElement.addEventListener('click', () => {
		li.classList.toggle('line-through')
		deleteElement.innerText = '✔️'

	})
	li.textContent = taskText
	li.appendChild(deleteElement);
	ul.appendChild(li)
	input.value = ''
})

darkMode.addEventListener('click', (event) => {
	event.preventDefault()
	document.body.classList.toggle('black-bg')
});
