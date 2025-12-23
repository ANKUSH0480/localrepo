/*CREATE A BUSINNES NAME GENERATOR BY COMBINING 
1 SHOP NAME 
2 LIST OF ADJECTIVE 
3 ANOTHER WORD  
 
         ADJECTIVES 
             1 CRAZY 
             2 AMAZING 
             3 FIRE 


         NAME 
             1 ENGINE 
             2 FOOD 
             3 GARMENT 
            
         ANOTHER WORD 
            1 BROS 
            2 LIMITED 
            3 HUB 



*/

          //  ADJECTIVES

                        random = maths.random ()
                        if (rand<0.33) {
                            first = "CRAZY"
                        
                        } else if (rand<0.66 && rand>=0.33 ) {
                            first = " AMAZING"

                        }
                        else { 
                            first = "fire"
                        }
                        
            //     NAME 
                        random = maths.random ()
                        if (rand<0.33) {
                            second = "engine "
    
                        } else if (rand<0.66 && rand>=0.33 )  { 
                             second = " food"

                        }
                        else { 
                            second = "garment"
                        }
         
             //    ANOTHER WORD 
                     random = maths.random ()
                        if (rand<0.33) {
                            third = "bros"
                        
                        } else if (rand<0.66 && rand>=0.33 ) {
                            third = " limited "

                        }
                        else { 
                            third= "hub"
                          }
                        