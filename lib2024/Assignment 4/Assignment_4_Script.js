/* Javascript for A4 */ 

/* This should convert the input temperature from F to C */

 function fahrenheitCelsius() {  
    var fsc = parseFloat(document.getElementById('ftc').value);
    var cfc = (fsc-32) * (5/9);
    document.getElementById('answer').value = cfc;
    }