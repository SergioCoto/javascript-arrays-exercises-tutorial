let names = ['Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Logan', 'Sophia', 'Benjamin', 'Mia', 'Mason', 'Charlotte', 'Elijah', 'Amelia', 'Oliver', 'Evelyn', 'Jacob', 'Abigail', 'Lucas', 'Harper', 'Michael', 'Emily', 'Alexander', 'Elizabeth', 'Ethan', 'Avery', 'Daniel', 'Sofia', 'Matthew', 'Ella', 'Aiden', 'Madison', 'Henry', 'Scarlett', 'Joseph', 'Victoria', 'Jackson', 'Aria', 'Samuel', 'Grace', 'Sebastian', 'Chloe', 'David', 'Camila', 'Carter', 'Penelope', 'Wyatt', 'Riley'];

//declare your function here

function filterByName(a, b) {
    let largo = a.length;
    let newnames=[]
    for (let i = 0; i < largo; i++) {
        let largo1 = a[i].length;
        let revisa= a[i];//.toLowerCase();
        if (revisa.includes(b)==true){
            newnames.push(a[i]);
        }
    }
    return newnames
}
    console.log(filterByName(names, 'am'));