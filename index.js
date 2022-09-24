// function  radianToDegree(radian){

//   if(typeof radian != 'number' ){
//         return "please input a vailed posative number"
//   }
//   else{
//              const π = Math.PI;
//              const degreeCalculet  = radian * 180/π ;
//              const degree= degreeCalculet.toFixed(2);
//     return parseFloat(degree)
//   }

// }






// function isJavaScriptFile(filename){
//              const fileSplit= filename.split('.');
//              const fileExten = fileSplit[fileSplit.length - 1]
//              const jsExtension= 'js'
//              const check= (jsExtension === fileExten );
//             return (check);
//   }







// function oilPrice(diesel,petrol, octane){
//   if (typeof diesel== "number"&& typeof petrol  == "number"  && typeof octane  == "number"  && diesel >=0 &&  petrol >=0 &&  octane >=0) {
//               let dieselPrice = diesel * 114;
//               let petrolPrice= petrol *130;
//               let octanePrice= octane *135;
//                        const TotalPrice = dieselPrice + petrolPrice + octanePrice;
//               return TotalPrice;
//   }

//   else {
//     return 'please input a vailed posative number'
//   }
// }





//   function  publicBusFare(totalMan){
 
//    if (totalMan > 0 && typeof totalMan === 'number'){
//              const busExtrapeople= totalMan % 50;
//              const  microExtraPeople= busExtrapeople % 11
//              const extraPeopleCost= microExtraPeople *250
//     return extraPeopleCost;
//    }
//    else {
//     return 'please input a valied posative number'
//    }

        
// }







// function isBestFriend( listOne , listTwo ){
//   if(typeof listOne != 'object'  && typeof listTwo != 'object' ){ 
//     return 'please imput only object'
//   }

//   else{
//     chekFriens= (listOne.name == listTwo.friend && listTwo.name == listOne.friend)
//     return  chekFriens
//   }
// }




// const multiplyNumber =  multiply(12)
// console.log(multiplyNumber);

function multification(number){
  for(let i=1; i<=10; i++ )
 console.log( ( `${number} x ${i} = ${number* i }` ) ) 
}


const numberOfMultiply = multification(18)
