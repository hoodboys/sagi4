function Avg(arr){
    let x = 0
 for (let i=0 ;i< arr.length;i++){
        x+=arr[i]
 }
return(x /arr.length )    
}
let k =[5,4,300,78,8,8]
console.log(Avg(k));