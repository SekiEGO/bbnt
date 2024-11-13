document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos del menú que tienen un submenú
    const submenuParents = document.querySelectorAll('.submenu-parent');

    submenuParents.forEach(parent => {
        // Añade un evento click para alternar la visibilidad del submenú
        parent.addEventListener('click', function (event) {
            const submenu = parent.querySelector('.submenu');
            
            // Si se hace clic en "Quienes Somos", no prevenir el comportamiento predeterminado
            if (event.target !== submenu && event.target.tagName === 'A') {
                return; // Permite la redirección al hacer clic en el enlace principal
            }
            
            event.preventDefault(); // Evita que el submenú enlace redirija
            // Alterna la clase 'active' para mostrar/ocultar el submenú
            parent.classList.toggle('active');
        });
    });

    // Cerrar el submenú si se hace clic en cualquier otra parte de la página
    document.addEventListener('click', function (event) {
        submenuParents.forEach(parent => {
            if (!parent.contains(event.target)) {
                parent.classList.remove('active');
            }
        });
    });
});
