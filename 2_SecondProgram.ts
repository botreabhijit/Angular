function Area(radius:number,PI=3.14):number
{
var output:number = PI * radius * radius;
return output;
}
var ans:number=Area(5);
console.log("Area is:"+ans)