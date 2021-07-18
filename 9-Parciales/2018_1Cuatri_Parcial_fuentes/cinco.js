function mostrar() {
    let planeta = prompt(document.getElementById('FormIngreso').value);
    let minified = planeta.toLowerCase();
    switch (minified) {
        case 'tierra':
            alert("acá vivimos")
            break;
        case 'mercurio':
        case 'venus':
            alert("acá hace más calor")
            break;
        case 'marte':
        case 'jupiter':
        case 'saturno':
        case 'urano':
        case 'neptuno':
            alert("acá hace más frio")
            break;
        default:
            alert('Ingrese un planeta valido')
            break;
    }
}
