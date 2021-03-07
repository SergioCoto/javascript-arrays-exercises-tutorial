var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let arr2=[];
for(let k =0;k<mix.length;k ++)
{
   let revisa=typeof mix[k];
   arr2.push(revisa);
	
}
console.log (arr2);