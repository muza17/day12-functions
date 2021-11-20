//1-topshiriq
//input sonlar summasi

//arraydagi sonlarni qo'shadigan funksiya yasavolamiz:
var arr1 = [1,2,3,4];
function sumElement(arr){
     

    for(i=0 ,sum=0; i<arr.length; i++){
       sum = sum + arr[i];

    }
    return sum;
}
console.log(sumElement(arr1));

// function sumInput(){
//    var inputValue = (prompt("Istalgan son kiriting : "));
//     var newArr = [];
//     var number = 0;
//     if(inputValue==""|| typeof(inputValue)==NaN||inputValue==null){
        
//         console.log(typeof inputValue);
//         console.log(sumElement(newArr));
//         return;
        
        
//     }else{
//         console.log(typeof inputValue);
//         newArr.push(inputValue);
//         console.log(sumElement(newArr));
//     }
     

// }

// sumInput();
// typeof(Number(inputValue))==number

function sumInput() {
    
    var newArr = [];
    for (let i= 0; i < 50; i++) {
        var inputValue = prompt("Istalgan son kiriting : ");
       
        if (typeof(Number(inputValue))=="number" && inputValue && Number(inputValue)===0) {
            newArr.push(Number(inputValue));
            
        } else{
            console.log(sumElement(newArr));
        }
        
    }

}

sumInput();

    



















//2-topshiriq
// var data = ["Jazz", "Blues"]
// console.log(data);

// data.push("Roll-n-roll")
// console.log(data);

//arrayning o'rtadagi qiymatini topish funksiyasi
// function findMiddle(arr){
//     var middle = arr.length%2;
//     if(arr.length%2!=0){
//         return middle;
//     }
// }
// data.splice(findMiddle(data),1,"Classics");

// console.log(data);

// data.shift("Jazz")
// console.log(data);

// data.unshift("Rap", "Reggage")
// console.log(data);






//3-topshiriq
// var salaries = {
//     "Akmal": 1200,
//     "Salim": 5200,
//     "Karima": 1800
// }
// function sumSalaries(arr){
      
//       let sum = 0;
//       for (let element of Object.values(arr)) {
//         sum += element;
//       }
//       return sum;

// }
  
//   console.log(sumSalaries(salaries));