var arr=["abcd123456",5,[0,2],[1,3],[5,6],[7,8],[1,10]]
// var arr=["ab",2,[0,2],[1,3]]

function checkhf(arr){
	if(arr[0].length>10){
		return false
	}
	if(arr[1]!=arr.length-2){
		return fasle
	}
	var length=arr[0].length
	arr.forEach((e,i)=>{
		if(i>1){
			if(e[1]+e[0]>length){
				return false
			}
			length+=e[1]
		}
	})
	if(length>1000){
		return false
	}
	return true
}

function resolve(arr){
	var str=arr[0].split('')
	if(checkhf(arr)){
		arr.forEach(function(e,i){
			if(i>1){
				var arr0=str.slice(e[0],e[0]+e[1])
				arr0=arr0.reverse()
				str=str.slice(0,e[0]+e[1]).concat(arr0).concat(str.slice(e[0]+e[1],str.length))
			}
		})
		console.log( str.join("") )
	}else
	console.log("参数不合法")
}

resolve(arr)



$(".ie-fix p").each(function(){
	if($(this).text()==" "){
		$(this).remove()
	}
	else{
		$(this).after("<span style='"+$(this)[0].style.cssText+"' class='"+$(this)[0].className+"'>"+$(this).text().replace(/</g,'&lt;')+"</span>")
		$(this).remove()
	}
})
$(".ie-fix span,.ie-fix p").each(function(){
	$(this).css({    
		width:$(this)[0].style.width.replace("px","")/10+"px",
	    height: $(this)[0].style.height.replace("px","")/10+"px",
	    lineHeight: $(this)[0].style.lineHeight.replace("px","")/10+"px",
	    top: $(this)[0].style.top.replace("px","")/10+"px",
	    left: $(this)[0].style.left.replace("px","")/10+"px",
	    fontSize:'16.9px',
	})
})
$(".reader-txt-layer").css({transform:"scale(1)"})

