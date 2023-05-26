
export function isNotEmpty(value){
    return value && value.trim!==''
}

export function isMobileNumber(value){
    return value && value.length===10 && value.trim!==''
}

export function userdataValidation(name,mobile,address,location,servicetype){
    return( 
        isNotEmpty(name) &&
        isNotEmpty(mobile) &&
        isNotEmpty(address) &&
        isNotEmpty(location) && 
        isNotEmpty(servicetype)    
    )
}
