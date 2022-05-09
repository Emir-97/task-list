
(()=>{
const btn = document.querySelector('[data-form-btn]');

const createTask = (event) => {
	event.preventDefault();
	// SE LLAMA LOS ELEMENTOS DEL DOM
	const input = document.querySelector('[data-form-input]');
	// SE AGREGA UN VALOR AL INPUT
	const value = input.value;
	const list = document.querySelector('[data-list]');
	//SE CREA UN NUEVO ELEMENTO POR CADA INPUT QUE SE AGREGA
	const task = document.createElement("li");
	// SE LE AGREGA UN CLASE PARA EL STYLE DEL TASK
	task.classList.add('card');
	// SE LIMPIA EL INPUT CUANDO SE CARGA EL VALOR
	input.value = "";
	// SE CREA LA ESTRUCTURA HTML PARA CADA NUEVO INPUT
	const taskContent = document.createElement('div');
	const taskTitle = document.createElement('span');
	taskTitle.classList.add('task');
	taskTitle.innerText = value;
	taskContent.appendChild(checkComplete());
	taskContent.appendChild(taskTitle);
	const content = `
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // SE AGREGA AL HTML Y A LA LISTA PARA LA NUEVA TAREA CREADA
    task.appendChild(taskContent)
    list.appendChild(task);
};

// BOTON QUE PRODUCE EL EVENTO AL HACER CLICK
btn.addEventListener('click', createTask);

const checkComplete = ()=>{
	const i = document.createElement("i");
	i.classList.add('far', 'fa-check-square', 'icon');
	i.addEventListener('click', completeTask);
	return i;
}

const completeTask = (event) => {
	const element = event.target;
	element.classList.toggle('fas');
	element.classList.toggle('completeIcon');
	element.classList.toggle('far');
}
})();