let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames=allNames.filter(function(valor){  
    if (valor[0]=="R"){   
    return valor}
  });   

console.log(resultingNames);
