
window.onload = () => {
  document.getElementById("cifrado").addEventListener("click", (evento) => {
    evento.preventDefault();
    let text = document.getElementById('mensajeACifrar').value;
    let name = document.getElementById('desplazamientos').value;
    let resultEncode = cipher.encode(text, name)
    document.getElementById('mostrarMensaje').innerHTML = resultEncode;
  })
  document.getElementById("descifrado").addEventListener("click", (evento) => {
    evento.preventDefault();
    let text = document.getElementById('mensajeACifrar').value;
    let name = document.getElementById('desplazamientos').value;
    let resultDecode = cipher.decode(text, name)
    document.getElementById('mostrarMensaje').innerHTML = resultDecode;
  })
}







//root.innerHTML= cipher.decode(strng, offset)
