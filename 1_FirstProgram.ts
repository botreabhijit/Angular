

function Maximum( a1:number, a2:number, a3:number):number
{
var max:number=a1;
if(a2>max)
max=a2;
if(a3>max)
max=a3;
return max;
}
var ans:number;
ans=Maximum(10,31,5);
console.log("Maximum is:"+ans);