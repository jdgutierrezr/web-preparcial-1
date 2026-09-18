# ShopHub - Parcial 1

## Reporte de Decisiones de Arquitectura

- Punto 1 (Evolución del Contexto): Explique cómo cambió el modelo de datos dentro de CartContext respecto al preparcial y cómo aseguró la inmutabilidad de la información al manipular las cantidades y productos en memoria.

> Agregando funciones para aumentar la cantidad, disminuirla, eliminar un producto o vaciar todo el carrito. Además, la estructura de datos quedó más clara porque cada item se guarda con su información y su cantidad, y al modificar el carrito se crea una nueva copia del arreglo o del objeto en lugar de cambiar el estado original. Esto se hace con operaciones como map, filter y spread, y luego se actualiza el estado con setCart(...). De esta forma se garantiza la inmutabilidad, porque React detecta los cambios correctamente y evita errores por mutar datos en memoria.

- Punto 2 (Cálculo de Totales): Explique la estrategia utilizada para calcular el precio total acumulado y justifique como lo hizo y almacenó esto.

> Para calcular el total, se usó el método reduce sobre la lista del carrito. Cada elemento del carrito se multiplica por su precio y por la cantidad seleccionada, y luego se suma al acumulador.

- Punto 3 (Arquitectura del Formulario): Explique cómo se estructuró y gobernó desde React el formulario, qué implemento y en caso de hacerlo, que tecnologías integró.

> El formulario se estructuró con componentes de React y estados controlados. Cada campo del formulario se guardaba en un estado local, y el valor del input se iba actualizando con onChange. Esto permite que React gobierne el formulario completo, validando los datos en tiempo real y controlando el envío con onSubmit.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
