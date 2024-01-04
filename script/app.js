
//                                                              A


// let myArray = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7,6,87,87,98];
// function countElements(array) {
//     let count={}
//     array.map(el=>{
//         count[el]=(count[el]||0)+1
//     });
//     for(let key in count){
//         console.log(` ${key} ${count[key]} eded`);
//     }
// }
// countElements(myArray)




//                                                                B
// let firstArr = [1, 2, 3, 4, 5];
// let secondArr = [1, 2, 3, 4, 5];
// function arrayComparison(arr,arr1) {
//     if(arr.toString() == arr1.toString()){
//         console.log(true);
//     }
//     else console.log(false);
// }
// arrayComparison(firstArr,secondArr)



//                                                                 C

// let number = [-7, -71, 66, 11 ,3 , 8 , 67];
// function findSecondLargestSmallest(number){
//     number.sort((a,b)=>{return a - b});
//     let minimum=parseInt(number.at(1));
//     let maximum=parseInt(number.at(-2));
    
//     console.log(`${minimum} En kiciy 2 ci Eded ${maximum} En boyuk 2 ci Eded`);
// }
// findSecondLargestSmallest(number)
// // 
//                                                                  D


// let number =[1, 2, -5, 8, -3, 9 , -7]
// function negativePositiveN(N){
//     let negative=0;
//     let positive=0;
//     N.forEach(element => {
//         if(element <= 0){negative+=element}
//         else if(element >= 0){positive+=element}
//     })
//     console.log(`musbet ${positive} menfi${negative}`);
    
// } 
// negativePositiveN(number)
//                                                                 E

// let limit = [1, 2, -5, 8, -3, 9 , -7]
// function  limitNumber(arr,N) {
//     let limitsNumbers=[];
//     arr.forEach(element => {
//         if (element >= N) {
//             limitsNumbers.push(element)
            
//         }
//     })
//     console.log(limitsNumbers);
// }
// limitNumber(limit,4)
                                                                    
//                                                                F

// let bolean = [2, true, 3, false, 7, true, 4, false];
// let result = 1;
// function boolean(arr) {
//     for(let i=0;i<arr.length;i+=2){
//         if (i+1<arr.length && typeof arr[i] === 'number' && arr[i+1] === true) {
//             result *=arr[i]
//         }
//     }
//     console.log(result);
// }
// boolean(bolean);
                                                                
//                                                              G
// let arr=[1, "salam", 1, true, true, false, false, false, 5, "5"]
// function set(arr) {
//     let newSet=new Set(arr)
//     console.log(...newSet);
// }
// set(arr)
