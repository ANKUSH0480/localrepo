        let arr =  [1,4,6,8,9,0]
        console.log(arr);
        console.log(arr.length)
                  arr[3] = 686868 
            console.log(arr[3])
            console.log(arr[0])
            console.log(arr[2])
            console.log(arr[9])

            console.log(arr.toString())    //give output in same line 

        console.log(arr.join(" me "))      //word in bracket is interchanges by commas 
      
        console.log(arr.pop())              // pop / nikal lo last element 
       
            console.log(arr.shift())        // shift() ye first element nikalta 
                                                    
        console.log (arr.push(89898989))     //add the new array 
        console.log(arr.toString()) 
          console.log (arr.push("ayush"))    // we can also push name 
          console.log(arr.toString())  

         console.log (arr.unshift("ayush"))   // unshift() push ka bhai means it add the array in the begeaining 
          console.log(arr.toString()) 


          let a1=[0,2,4,6]                      ///it merges all the array 
          let a2= [ 1,3,5,7]
          let a3= [7,13,11]
          console.log(a1.concat(a2,a3))

         let a4 = [1,4,89,30,7] 
          console.log(a4.splice(1,3))

          a4.forEach((value,index,arr)=>{
            console.log(value,index,arr)
          }) 

          let arr = [2,4,6,9,11] 
          let newArr = arr .map((e)=>{
            return e**2
          }

          )
          console.log(newArr) 
          const greaterthanfour = (e)=>{
            if (e>4){
                return true             // filter 

            }
            return false 
          }
          console.log(arr.filter(greaterthanfour)) 


          let arr7 =  [1,2,3,4,5,6 ]
          const red = (a,b)=>{
            return b*a
          } 
          console.log(arr7.reduce(red))