// 1. Declarar las variables que hacen referencia a los elementos del HTML
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Seleccionamos la lista desordenada

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove' + input.value);

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();

        });

        input.value = '';

    }

    input.focus();
    
});

// // 2. Crear los elementos 'li' y el botón de eliminar
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');

// // 3. Llenar el contenido del 'li' con lo que el usuario escribió
// li.textContent = input.value;

// // 4. Llenar el botón con la X (y agregar accesibilidad)
// deleteButton.textContent = '❌';
// deleteButton.setAttribute('aria-label', 'Close');

// // 5. Unir las piezas: meter el botón dentro del 'li', y el 'li' dentro de la lista
// li.append(deleteButton);
// list.append(li);

// // 6. NUEVO: Agregamos un Event Listener al botón de la "X" para borrar el capítulo
// deleteButton.addEventListener('click', function) {
    
// }