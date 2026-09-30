function obtenerIniciales(nombreCompleto) {
    if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
        return "Entrada inválida";
    }
    let palabras = nombreCompleto.trim().split(" ").filter(Boolean);
    let iniciales = palabras.map(function (palabra) { return palabra[0].toUpperCase(); });
    return iniciales.join("");
}

console.log(obtenerIniciales("Jose Francisco Franciscano"));
console.log(obtenerIniciales("Leonardo Lopez Vargas"));
console.log(obtenerIniciales("El josé"));
console.log(obtenerIniciales(""));