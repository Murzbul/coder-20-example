

# Example insert many in mongodb

Dejo un ejemplo del insert many por si lo necesitaban.

```js
db.inventory.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] );
```
# 1-example-mongodb -> index.js

Se encuentra el dotenv para las variables de entornos y ademas voy a dejar la URL para el mongo atlas para que puedan probar. Lo ideal es que cuando puedan que lo creen para la practica es necesario.

# 2.1-firebase -> ejemplo_1.js

Este archivo es el ejemplo completo de lo que vimos en la clase.

Todo el CRUD completo.

En este caso utilizamos la configuracion por defecto de firebase.

# 2.1-firebase -> index_ejercicio.js

Este archivo esta el ejercicio final de la presentacion con el paquete `firebase-admin`.

En este caso la forma de hacer las cosas difiere ya que necesitamos tener acceso al firebase-admin.
