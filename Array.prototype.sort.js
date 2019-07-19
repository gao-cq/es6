// var arr = [1, 3, 5, 2, 4, 9, 6, -1, 0]

// Array.prototype.sort = function(fun, num = this.length, l = 0) {
// 	while (++l < num) {
// 		if (fun(this[l], this[l - 1]) < 0) {
// 			this[l] = this[l] + this[l - 1] - (this[l - 1] = this[l])
// 			this.sort(fun, l)
// 		}
// 	}
// 	return this
// }

// function sortnum(a, b) {
// 	// return a - b //递增
// 	return b - a //递减
// }

// console.log(arr.sort(sortnum))


var arr = [1, 3, 5, 2, 4, 9, 6, -1, 0, 7]
function quickSort(arr) {
    if(arr.length == 0) {
        return [];  // 返回空数组
    }
    var cIndex = Math.floor(arr.length / 2);
    var c = arr.splice(cIndex, 1);
    var l = [];
    var r = [];

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < c) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }
    return quickSort(l).concat(c, quickSort(r));
}
console.log(quickSort(arr));
//[1, 2, 3, 4, 5, 6, 7]