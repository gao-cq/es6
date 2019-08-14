var arr=[],t=0,num=100000
console.time("数组生成时间");
for(var i=0;i<num;i++){
    arr.push( Math.floor( Math.random()*num*10 ) )
}
console.timeEnd("数组生成时间");


Array.prototype.sort = function( fun ) {
    //交换
    function swap(arr, x, y){
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    //冒泡排序
    function maopaoSort(arr){
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j<arr.length; j++){
                if( fun(arr[j], arr[i])<0 ){
                    swap(arr, i, j)
                }
            }
        }
        return arr
    }

    //选择排序
    function selectSort(arr){
        for(var i = 0; i < arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if( fun(arr[j], arr[i])<0 ){
                    swap(arr, i, j)
                }
            }
        }
        return arr
    }

    //插入排序
    function insertionSort(arr){
        for (var i = 1; i < arr.length; i++) {
            var j=i-1;
            while (--j>-1 && fun(arr[j+1], arr[j]) < 0) {
                swap(arr, j+1, j)
            }
        }
        return arr
    }

    //希尔排序  插入排序的优化
    function shellSort(arr){
        var j =Math.floor(arr.length/2)
        while(j>0){
            for(var a=0;a<j;a++){
                for (var i = a; i < arr.length; i+=j) {
                    for(var k = i; k > j-1; k-=j){
                        if(fun(arr[k],arr[k-j])<0){
                            swap(arr, k, k-j)
                        }else{
                            break
                        }
                    }
                }
            }
            j=Math.floor(j/2)
        }
        return arr
    }

    //快速排序
    function quickSort(arr) {
        if(arr.length <2 ) {
            return arr
        }
        var c = arr[0]
        var l = [];
        var r = [];
        for (var i = 1; i < arr.length; i++) {
            if(fun(arr[i], c)<0) {
                l.push(arr[i]);
            } else {
                r.push(arr[i]);
            }
        }
        return quickSort(l).concat(c, quickSort(r));
    }

    //归并排序
    function mergeSort(arr){
        function subSort(arr1,arr2){
            var arr=[],arr1=arr1.slice(),arr2=arr2.slice()
            while(arr1.length || arr2.length){
                if(arr1.length==0){
                    arr = arr.concat( arr2 )
                    arr2=[]
                }
                else if(arr2.length==0){
                    arr = arr.concat( arr1 )
                    arr1=[]
                }
                else if( fun(arr1[0], arr2[0])<0 ){
                    arr.push( arr1.shift() )
                }else{
                    arr.push( arr2.shift() )
                }
            }
            return arr
        }
        var len = arr.length,i=1,larr=[];
        while(i < len){
            larr.push(i)
            i=i*2
        }
        for(var i=0; i<larr.length; i++){
            var add=larr[i]
            for(var j=0;j<arr.length;j+=add*2){
                arr = arr.slice(0,j).concat( subSort(arr.slice(j,j+add), arr.slice(j+add,j+add*2) ), arr.slice(j+add*2) )
            }
        }
        return arr

    }

    // return maopaoSort(this)
    // return selectSort(this)
    // return insertionSort(this)
    return shellSort(this)
    return quickSort(this)
    return mergeSort(this)

}



function sortnum(a, b) {
    t++
	// return a - b //递增
	return b - a //递减
}

console.time("排序时间");

var newArr= arr.sort(sortnum)

console.timeEnd("排序时间");

console.log("比较次数："+ t )

console.log( "排序后：" )
console.log( newArr.slice(0,5) )
console.log( newArr.slice(newArr.length-5,newArr.length) )


