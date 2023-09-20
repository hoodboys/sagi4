

function GetIndexOfChar(str,char){
    for(let i=0 ;i<= str.length;i++){
        if (str[i]===char){
            return(i+1);
       
        }

          
    }
    return(-1);    
    

} 
console.log(GetIndexOfChar("uekfh","f"));