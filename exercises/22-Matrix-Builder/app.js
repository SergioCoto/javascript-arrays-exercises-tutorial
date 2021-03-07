// Code goes here

function matrixBuilder(a) {
    let array = []
    let array1 = []
    for (let i = 0; i < a; i++) {
        array.push( 1 );
    }
    for (let j = 0; j < a; j++) {
            array1.push(array);

        }
    return array1;
}


// do not change anything from this line down
console.log(matrixBuilder(5))