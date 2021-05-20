function convertFahrToCelsius(fahrTemp){

    // check if fahrTemp cannot be converted to a valid number
    if ( isNaN( fahrTemp) ){ //fahrTemp is not a valid number
        return `${JSON.stringify(fahrTemp)} is not a valid number but a/an ${ Array.isArray( fahrTemp) ? "array" : typeof(fahrTemp)}.`
    
         }
    else {// fahrTemp is a valid number
        let c =  ( Number(fahrTemp) - 32) * ( 5  / 9);
        return c.toFixed(4); 
    }
    
    }