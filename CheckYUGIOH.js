let checkYuGiOh =  (n)=> {

    //check for invalid parameter
    if ( isNaN(Number(n)) ){
        // n is not a number, hence return invalid parameter
        return `invalid parameter: ${n}` // NOTE!=> the quotation mark is backtick
            } //endif
        
    
    let arr = [ ] //create result array
    // ensure n is an integer, because iteration requires integers
    let processed_n  = parseInt(n) 
    //iterate from 1 to n
    for( let number=1; number<= processed_n; number++){
    /*push the output of the getYuGiOh ( helper function defined earlier) to result array( 'result_Arr') */
    
    let answer =  "";
                if ( number % 2 === 0) {
                    /** 2 is a multiple of number i.e 2 divides number without remainder
                    append 'yu' to answer **/
                    answer += "yu"; 
                            } //end if
                if ( number % 3 === 0) {
                    /** 3 is a multiple of number i.e 3 divides number without remainder
                    append 'gi' to answer **/
                    /if answer is an empty string just add 'gi' otherwise add '-' before                     'gi'/
                    answer = ( answer) ? answer+"-"+"gi" : "gi";
                            } //endif   
                if ( number % 5 === 0){
                     /** 5 is a multiple of number i.e 5 divides number without remainder
                    append 'oh' to answer **/
                    /*if answer is an empty string just add 'gi' otherwise add '-' before 'gi'                 */
                    answer = ( answer) ? answer+"-"+"oh" : "oh";
                       }//end if
                /finally if answer is still empty, because 'number' is not a multiple of 2,3             and 5 return number/
                answer =  (answer) ? answer : number; // returns number if answer is blank
    
    arr.push(  answer );  
                                   }//END forloop
    console.log(arr);
    return arr //return result array            
    }//end checkYuGiOh