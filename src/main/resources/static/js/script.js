document.addEventListener('DOMContentLoaded', () => {
    // Función para alternar la visibilidad de las opciones de filtro y girar la flecha
    function toggleFilterOptions(buttonId, optionsId) {
        const button = document.getElementById(buttonId);
        const options = document.getElementById(optionsId);
        if (button && options) {
            button.addEventListener('click', () => {
                if (options.style.display === "none" || options.style.display === "") {
                    options.style.display = "block";
                    button.classList.add('open'); // Añadir clase para girar la flecha
                } else {
                    options.style.display = "none";
                    button.classList.remove('open'); // Remover clase para volver a la dirección inicial
                }
            });
        }
    }

    // Aplicar las funciones a los filtros
    toggleFilterOptions('filter-price', 'price-options');
    toggleFilterOptions('filter-color', 'color-options');
    toggleFilterOptions('filter-size', 'size-options');
    toggleFilterOptions('filter-type', 'type-options');

    // Obtener todos los elementos del dropdown
    const categoryItems = document.querySelectorAll('.dropdown-item');
    if (categoryItems) {
        categoryItems.forEach(item => {
            item.addEventListener('click', function () {
                categoryItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                const dropdownButton = document.getElementById('categoryDropdown');
                if (dropdownButton) {
                    dropdownButton.textContent = this.textContent;
                }
            });
        });
    }

    // Seleccionar todos los círculos de color y las etiquetas de color
    const colorOptions = document.querySelectorAll('.color-option');
    if (colorOptions) {
        colorOptions.forEach(option => {
            option.addEventListener('click', function () {
                const circle = this.querySelector('.color-circle');
                if (circle) {
                    circle.classList.toggle('selected');
                }
            });
        });
    }

    // Función para seleccionar un solo círculo por producto
    const productColorOptions = document.querySelectorAll('.product-color-options');
    if (productColorOptions) {
        productColorOptions.forEach(colorOptions => {
            colorOptions.addEventListener('click', function (event) {
                if (event.target.classList.contains('product-color-circle')) {
                    colorOptions.querySelectorAll('.product-color-circle').forEach(circle => {
                        circle.classList.remove('selected');
                    });
                    event.target.classList.add('selected');
                }
            });
        });
    }

    // Función para manejar el comportamiento de los elementos del navbar
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    if (navbarLinks) {
        navbarLinks.forEach(link => {
            link.addEventListener('click', function () {
                navbarLinks.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Agregar el código para evitar el envío del formulario
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Esto evita que el formulario se envíe y se recargue la página
            console.log("Formulario no enviado, pero ahora puedes agregar tu código para hacerlo.");
        });
    }
});

// Asegúrate de que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('#navbarNav');

  navbarToggler.addEventListener('click', function() {
    // Alternar el menú hamburguesa
    navbarCollapse.classList.toggle('collapse');
  });
});