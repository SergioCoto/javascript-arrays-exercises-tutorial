var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
function getRandomInt()
{
	var randomNumber = Math.floor(Math.random()*10);
	return randomNumber;
}
arr.push(getRandomInt());
arr.push(getRandomInt());

console.log(arr);