window.cipher = {
  encode: (text, name) => {
    let resultEncode = "";
    for (let i = 0; i < text.length; i++) {
      let mayusculas = text.toUpperCase();
      let lAscii = mayusculas.charCodeAt(i);
      if (lAscii === 32) {
        resultEncode += ' '

      } else {
        let listo = ((lAscii + 65 + parseInt(name)) % 26) + 65;
        resultEncode += String.fromCharCode(listo);
        //console.log(resultEncode);
        //console.log(text)/* Acá va tu código */

      }

    }
    return resultEncode;
  },




  decode: (text, name) => {
    let resultDecode = "";
    /* Acá va tu código */
    for (let i = 0; i < text.length; i++) {
      let mayusculas = text.toUpperCase();
      let lAscii = mayusculas.charCodeAt(i);
      if (lAscii === 32) {
        resultDecode += ' '
      } else {
        let listo = ((lAscii - 90 - parseInt(name)) % 26) + 90;
        resultDecode += String.fromCharCode(listo);
        //console.log(resultDecode)

      }


    }
    return resultDecode;
  }
};
