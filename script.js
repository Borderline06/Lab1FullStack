const botones = document.querySelectorAll('.btn-agregar');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const producto = boton.getAttribute('data-producto');
        alert(`Has agregado ${producto} al carrito.`);
    });
});
