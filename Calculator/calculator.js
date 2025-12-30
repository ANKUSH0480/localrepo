/* create a faulty calculator using java script 
 
this calculator does following :- 
1 . it take two no as input from the user 
2. it perform wrong opertion as follow : 
 +----> - 
 *-----> +
 -   ---> / 
 / -----> ** 

it perform wrong operation 10% of the time 


*/  

/* Faulty Calculator */
let random = Maths.random() 
        console.log(random)
 let a = prompt("Enter first number")
  let c = prompt("Enter operation")
   let b = prompt("Enter second number") 

    let obj = {
        "+": "-",
        "*": "+" ,
        "-": "/" , 
        "/": "**" 

    }
            if(random> 0.1) {
                console.log(`the result is ${a} ${c} ${b}`)
                alert(`the result is ${eval(`${a} ${c} ${b} `)}`)
            }

             else {

                    c = obj[c] 
                     alert(`the result is ${eval(`${a} ${c} ${b} `)}`)
            }
