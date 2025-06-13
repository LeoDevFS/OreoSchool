# OreoSchool

OreoSchool es un sitio web moderno, responsivo y visual diseñado para mostrar servicios educativos. Este proyecto demuestra cómo una base de código estructurada y organizada puede ofrecer una experiencia de usuario de alta calidad sin depender de frameworks como React. Aprovechando el poder de JavaScript puro y técnicas modernas de CSS, OreoSchool logra una implementación limpia y eficiente.

---

## Características

### **JavaScript**
- **Navegación Móvil Dinámica**: 
  - El menú móvil se implementa utilizando JavaScript puro, permitiendo a los usuarios alternar su visibilidad con transiciones suaves.
  - Se utilizan event listeners para manejar las interacciones del menú, asegurando una navegación fluida en todos los dispositivos.
  - Ejemplo:
    ```javascript
    menuOpenButon.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
    ```

- **Integración con Swiper**:
  - El proyecto integra la biblioteca Swiper para crear sliders interactivos y responsivos.
  - Se definen puntos de quiebre personalizados para adaptar el comportamiento del slider a diferentes tamaños de pantalla.
  - Ejemplo:
    ```javascript
    const swiper = new Swiper('.slide-wrapper', {
      loop: true,
      spaceBetween: 25,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    ```

### **CSS**
- **Anidamiento Moderno en CSS**:
  - El proyecto utiliza anidamiento en CSS para organizar los estilos de manera jerárquica, haciendo el código más legible y fácil de mantener.
  - Ejemplo:
    ```css
    header {
      background: var(--primary-color);

      > .navbar {
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: space-between;

        > .nav-logo {
          > .logo-text {
            font-size: var(--font-size-xl);
            color: var(--white-color);
          }
        }

        & .nav-menu {
          display: flex;
          gap: 10px;

          & .nav-link {
            padding: 10px 18px;
            font-size: var(--font-size-m);
            border-radius: var(--border-radius-m);
            color: var(--white-color);
            transition: 0.3s;
          }

          & .nav-link:hover {
            color: var(--primary-color);
            background-color: var(--secondary-color);
          }
        }
      }
    }
    ```

- **Propiedades Personalizadas**:
  - Se utilizan variables CSS (`--primary-color`, `--font-size-xl`, etc.) para garantizar consistencia y flexibilidad en el diseño.
  - Ejemplo:
    ```css
    :root {
      --primary-color: #243e36;
      --secondary-color: #7ca982;
      --font-size-xl: 2.3rem;
      --border-radius-m: 30px;
    }
    ```

- **Diseño Responsivo**:
  - Se implementan media queries para adaptar el diseño a diferentes tamaños de pantalla, asegurando una experiencia fluida en dispositivos móviles, tabletas y computadoras de escritorio.
  - Ejemplo:
    ```css
    @media screen and (max-width: 900px) {
      .navbar .nav-menu {
        position: fixed;
        left: -300px;
        top: 0;
        width: 300px;
        height: 100%;
        background: var(--white-color);
        transition: left 0.2s ease;
      }

      body.show-mobile-menu .navbar .nav-menu {
        left: 0;
      }
    }
    ```

---

## ¿Por qué OreoSchool?

Este proyecto es un testimonio del poder de la simplicidad y la organización. Al evitar la sobrecarga de frameworks, OreoSchool demuestra que una arquitectura bien pensada  pueden ofrecer resultados excepcionales. La combinación de JavaScript puro y técnicas avanzadas de CSS garantiza rendimiento, escalabilidad y facilidad de mantenimiento.

---

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica para accesibilidad y SEO.
- **CSS3**: Estilos modernos con propiedades personalizadas, anidamiento y diseño responsive.
- **JavaScript**: Interactividad dinámica y experiencia de usuario fluida.
- **Swiper.js**: Biblioteca ligera y personalizable para sliders.

---

## Conclusión

OreoSchool no es solo un sitio web. Prueba que, con una organización adecuada, atención al detalle y prácticas web modernas, puedes crear proyectos impresionantes sin depender de frameworks pesados. 