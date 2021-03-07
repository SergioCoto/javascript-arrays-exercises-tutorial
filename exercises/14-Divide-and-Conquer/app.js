let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
let newArray=[];
function mergeTwoList(list_of_numbers) {
    let odd = [];
    let even = [];
    for (i = 0; i < list_of_numbers.length; i++) {
        revisa = parseInt(list_of_numbers[i])
        if (revisa % 2 === 0) {
            odd.push(list_of_numbers[i])
        } else {
            even.push(list_of_numbers[i])
        }
    }
newArray= even.concat(odd);
return newArray;
}

console.log(mergeTwoList(list_of_numbers))
