// for(var i=1;i<10;i++){
// 	console.log(i)
// }


for(var i=0,sum=0;i<=100;i++){
	if(i%2==0){
		sum+=i
	}
}

console.log( sum )



var i=0,sum=0;
do{
	if(i%2==0){
		sum+=i
	}
	i++
}while(i<=100)

console.log( sum )

// var i , j;
// for(i = 1;i <= 9;i ++){
//     document.write("<br>");       
//     for(j = 1;j <= i;j ++){
//         sum = i * j;
//         document.write(i ,"*",j ,"=",sum,"   ");    
//     }
// }

var arr=[];
for(var i=0;i<20;i++){
	arr.push(Math.floor(Math.random()*51)+150)
}

// function quickSort(arr) {
//     if(arr.length == 0) {
//         return [];  // 返回空数组
//     }
//     var cIndex = Math.floor(arr.length / 2);
//     var c = arr.splice(cIndex, 1);
//     var l = [];
//     var r = [];

//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] > c) {
//             l.push(arr[i]);
//         } else {
//             r.push(arr[i]);
//         }
//     }
//     return quickSort(l).concat(c, quickSort(r));
// }
// console.log(quickSort(arr));


Array.prototype.sort = function(fun, num = this.length, l = 0) {
	while (++l < num) {
		if (fun(this[l], this[l - 1]) < 0) {
			this[l] = this[l] + this[l - 1] - (this[l - 1] = this[l])
			this.sort(fun, l)
		}
	}
	return this
}

function sortnum(a, b) {
	// return a - b //递增
	return b - a //递减
}

console.log(arr.sort(sortnum))