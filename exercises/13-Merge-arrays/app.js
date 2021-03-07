var chunk_one = ['Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell'];
var chunk_two = ['Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (let k = 0; k < chunk_one.length; k++) {

        newArray.push(chunk_one[k])

    }
    for (let i = 0; i < chunk_two.length; i++) {

        newArray.push(chunk_two[i])

    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));