var arr=[78,2,38]

var num=0
var cnum=1
if( Math.floor( (arr[2]+1)/(arr[1]+1) )%13==0 ){
	arr[2]=arr[2]-arr[1]
}
for(var i=0;i<arr[0];i++){
	num+=arr[1]+1
	if(num>arr[2]+1 ){
		num=arr[1]+1
		cnum++;
	}
}

console.log(cnum)