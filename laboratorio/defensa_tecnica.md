# 🛡️ Documento de Defensa Técnica y Mitigación de Vulnerabilidades

Este documento detalla las soluciones a nivel de código y arquitectura para blindar los endpoints de la API y corregir las vulnerabilidades encontradas durante las pruebas de ataque.

---

## 1. Corrección de Errores Internos (Manejo de Excepciones)
* **Problema detectado:** Al enviar un body completamente vacío o cadenas con puros espacios en blanco (`"   "`), la aplicación crasheaba arrojando un código `500 Internal Server Error` en lugar de una respuesta controlada[cite: 12, 13].
* **Defensa Técnica:** Implementar un bloque `try-catch` global en los controladores o un middleware centralizado para la gestión de errores en Express, asegurando que cualquier fallo imprevisto devuelva un mensaje controlado (`400 Bad Request` o `422 Unprocessable Entity`).

```javascript
// Ejemplo de control en el controlador
try {
    // Lógica de creación o consulta
} catch (error) {
    console.error(error);
    return res.status(400).json({
        mensaje: "Error en el procesamiento de la solicitud",
        detalle: error.message
    });
}