var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'];

function deletePerson(personName) 
{
    //your code here
    let newpeople=[]
    for (let k = 0; k < people.length; k++) {
        let revisa = people[k];
        if (revisa == personName) continue;
        else {
            newpeople.push(people[k])
        }
    }
    return newpeople;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));