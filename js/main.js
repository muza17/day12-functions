//1-topshiriq
//input sonlar summasi

// Istalgan arraydagi sonlarni qo'shadigan funksiya yasavolamiz:

function sumElement(arr){
     

    for(i=0 ,sum=0; i<arr.length; i++){
       sum = sum + arr[i];

    }
    return sum;
}


function sumInput() {
    total = 0;
    var newArr = [];
    var inputValue = Number(prompt("Istalgan son kiriting : "));
    while (isNaN(inputValue) == false) {
        newArr.push(inputValue);
        var inputValue = Number(prompt("Istalgan son kiriting : "));
    }
    newArr.forEach(newArrinputValue => total += newArrinputValue);
    return total;
}

 console.log(sumInput());  




//2-topshiriq
var data = ["Jazz", "Blues"]
console.log(data);

data.push("Roll-n-roll")
console.log(data);

// Istalgan arrayning o'rtadagi qiymatini topish funksiyasi
function findMiddle(arr){
    var middle = arr.length%2;
    if(arr.length%2!=0){
        return middle;
    }
}
data.splice(findMiddle(data),1,"Classics");

console.log(data);

data.shift("Jazz")
console.log(data);

data.unshift("Rap", "Reggage")
console.log(data);






//3-topshiriq


var salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
}
function sumSalaries(arr){
      
      let sum = 0;
      for (let element of Object.values(arr)) {
        sum += element;
      }
      return sum;

}
  
  console.log(sumSalaries(salaries));