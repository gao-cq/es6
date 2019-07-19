// (function(){
// 	async function timeout() {
// 		var aaa="hello world"
// 		console.log(aaa,new Date().getTime())
// 		aaa = await new Promise((resolve, reject) => {
// 		    setTimeout(function(){
// 		    	resolve("aaaa");
// 		    }, 1000)
// 		});
// 		console.log(aaa,new Date().getTime())
// 	    return aaa
// 	}
// 	var r=timeout()
// 	console.log(r)
// 	r.then((a)=>{
// 		console.log(a)
// 	})
// 	console.log('虽然在后面，但是我先执行');
// })()


// function* helloGenerator() {
//    console.log("this is generator");
//  }
// var h = helloGenerator();
// h.next();


// function* helloGenerator() {
//        yield "hello";
//        yield "generator";
//        return;
//    }
//    var h = helloGenerator();
//    console.log(h.next());//{ value: 'hello', done: false }
//    console.log(h.next());//{ value: 'generator', done: false }
//    console.log(h.next());//{ value: 'undefined', done: true }

// var obj={
// 	0:0,
// 	1:1,
// 	[Symbol.iterator]:function(){
// 		let index=0
// 		return {
// 			next:()=>{
// 				if(index<2){
// 					return {
// 						value:this[index++],
// 						done:false
// 					}
// 				}else{
// 					return {
// 						value:undefined,
// 						done:true
// 					}
// 				}
// 			},
// 			return:(e)=> {//增加return，支持continue，break
// 				// console.log(e)
// 	          return { 
// 	          	value:this[index++],
// 	          	done: false 
// 	          }
// 	        }

// 		}
// 	}
// };
//    for(var value of obj){
//      if(value==0)
//  		continue
//      	// break
//      console.log(value);
// }

// var it = obj[Symbol.iterator]();
// console.log(it.next());//{value: "rrr", done: false}
// console.log(it.next());//{value: "444", done: false}
// console.log(it.next());//{value: undefined, done: true}


// function* gen(x,y){
//    	  let z= yield x+y;
//    	  let result = yield x*z;
//    	  return result
//    }
//    var g = gen(5,6);
//    console.log(g.next());//{value: 11, done: false}
//    console.log(g.next(11));//{value: NaN, done: false}

	// const _name=Symbol("name")
// 	const _age=Symbol("age")
// class Person {
//   constructor(name, age) {
//     this[_name] = name;
//     this[_age] = age;
//   }
//    sayName(){
//       console.log("object name:"+this[_name]);
//    }
// }

// var person = new Person("tcy",20);
// console.log(person) 

// function Person(name,age){
// 	var _name=Symbol("name")
// 	var _age=Symbol("age")
// 	this[_name]=name
// 	this[_age]=age
// 	this.say=function(){
// 		console.log(`hi my name is ${this[_name]}, ${this[_age]} years old}`)
// 	}
// }


// var person =new Person("xiaoming",20)
// console.log(person)
// console.log(person)

{
	const _name=Symbol("name")
	const _age=Symbol("age")
	global.Person = class Person{
		constructor(name,age){
			this[_name]=name
			this[_age]=age
		}
		say(){
			console.log(`hi my name is ${this.name}, ${this[_age]} years old}`)
		}
		static say1(){
			console.log(`static function`)
		}
		get name(){
			return this[_name]+"cccc"
		}
		set name(value){
			this[_name]=value
		}
	}
}

class Worker extends Person{
	constructor(name,age,job){
		super(name,age)
		this.job=job
	}

	say1(){
		super.say()
		Person.say1()
		console.log("my job is "+this.job)
	}
	static say2(){
		super.say1()
	}
}

// var person =new Person("xiaoming",20)
// person.name="111"
// console.log(person.name)
// // console.log(person[])
// // person.say()
// Person.say()

var worker=new Worker("小王",20,"软件工程师")
worker.name="111"
console.log(worker)
worker.say1()
Worker.say2()
console.log(worker.name)

// function cc(){
// 	{
// 		return "aaa"
// 	}
// }

// console.log(cc())