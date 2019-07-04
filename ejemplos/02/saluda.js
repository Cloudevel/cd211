function despliega(){
    let entrada_de_texto = document.getElementById("nombre");
    let despliega_mensaje = document.getElementById("rotulo");
    despliega_mensaje.textContent = "Hola, " + nombre.value + ".";
}