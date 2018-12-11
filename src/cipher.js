window.cipher = {
    encode: (text, name) => {
      let resultEncode = "";
      for (let i = 0; i < text.length; i++) {
        let lAscii = text.charCodeAt(i);

        //dar orden y prioridades, primero mayusculas, luego minusculas, luego números y caractéres especiales al final el espacio
        

        if (lAscii >= 65 && lAscii <= 90) {
          let listo = ((lAscii - 65 + parseInt(name)) % 26) + 65;
          resultEncode += String.fromCharCode(listo);
        } else if (lAscii >= 97 && lAscii <= 122) {
          let listo = ((lAscii - 97 + parseInt(name)) % 26) + 97;
          resultEncode += String.fromCharCode(listo);
        } else if (lAscii >= 48 && lAscii <= 57) {
          let listo = ((lAscii - 48 + parseInt(name)) % 10) + 48;
          resultEncode += String.fromCharCode(listo);
          console.log(resultEncode)
        } else if (lAscii >= 33 && lAscii <= 47) {
          let listo = ((lAscii - 33 + parseInt(name)) % 15) + 33;
          resultEncode += String.fromCharCode(listo);
          console.log(resultEncode)
        } else if (lAscii >= 58 && lAscii <= 64) {
          let listo = ((lAscii - 58 + parseInt(name)) % 7) + 58;
          resultEncode += String.fromCharCode(listo);
          console.log(resultEncode)
        } else if (lAscii === 32) {
          resultEncode += ' '
        }

        //console.log(resultEncode);
        //console.log(text)/* Acá va tu código */
        
      }
      return resultEncode;

    },

  



  decode: (text, name) => {
    let resultDecode = "";
    /* Acá va tu código */
    for (let i = 0; i < text.length; i++) {
      let lAscii = text.charCodeAt(i);
      let listo = ((lAscii - 90 - parseInt(name)) % 26) + 90;
      resultDecode += String.fromCharCode(listo);
      //console.log(resultDecode)

      if (lAscii >= 65 && lAscii <= 90) {
        let listo = ((lAscii - 65 - parseInt(name)) % 26) + 65;
        resultDecode += String.fromCharCode(listo);
      } else if (lAscii >= 97 && lAscii <= 122) {
        let listo = ((lAscii - 97 - parseInt(name)) % 26) + 97;
        resultDecode += String.fromCharCode(listo);
      } else if (lAscii >= 48 && lAscii <= 57) {
        let listo = ((lAscii - 57 - parseInt(name)) % 10) + 57;
        resultDecode += String.fromCharCode(listo);
        console.log(resultDecode)
      } else if (lAscii >= 33 && lAscii <= 47) {
        let listo = ((lAscii - 47 - parseInt(name)) % 15) + 47;
        resultDecode += String.fromCharCode(listo);
        console.log(resultDecode)
      } else if (lAscii >= 58 && lAscii <= 64) {
        let listo = ((lAscii - 64 - parseInt(name)) % 7) + 64;
        resultDecode += String.fromCharCode(listo);
        console.log(resultDecode)
      } else if (lAscii === 32) {
        resultDecode += ' '
      }

    }
    return resultDecode;

    }
};

