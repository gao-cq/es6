var input = "ab\n2\n0 2\n1 3";  
function reverscon (input) {  
    input_array = input.split("\n");  
    var nLine = 0;  
    while(nLine < input_array.length){  
        var line = input_array[nLine++].trim();  
        if(line === ''){  
            continue;  
        }  
        var s = line;  
        var n = +input_array[nLine++];  
        while(n--){  
            var input_arrays = input_array[nLine++].trim().split(' ');  
            var p = +input_arrays[0];  
            var l = +input_arrays[1];  
  
            //你的代码  
            var substring = s.substring(p,p+l);  
            substring = substring.split('').reverse().join('');
            var arrs = s.split('');
            // 这一步需要一个变量保存结果，因为splice返回的是 
            arrs.splice(p+l,0,substring);
          // 被删除的字符，所以连写的话会返回空  
             s = arrs.join('');    //abbaabb  
        }     
    }  
    console.log(s);  
};  
    reverscon(input);


    export const a="aaaa"