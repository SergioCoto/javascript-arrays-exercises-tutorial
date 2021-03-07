function lyricsGenerator(array) {
    let value = '';
    let contador=0;
//    for (let i = 0; i < 1; i++) {
//        if (array[i] == 0) {
//            value = 'Boom'
//        } else {
//            value = "Drop the base"
//            contador=1;
//        }
//    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            value = value + 'Boom '
            contador=0;
        } else {
            value = value + "Drop the base "
            contador=contador+1;
            if (contador==3){
                 value = value + "!!!Break the base!!! "
                 contador=0
            }
        }       
    }
     return value;
}

// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))