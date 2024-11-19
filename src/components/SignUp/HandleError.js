export function ValidationError(obj){
    const error = {}
    for (const event in obj) {
        if(obj[event].trim() === '') {
            error[event] = `* ${event} can't be empty`
        }
    }
    if(obj.FName?.length > 10){
        error.FName = "* First Name can't be more than 10 characters"
    }
    if(obj.LName?.length > 10){
        error.LName = "* Last Name can't be more than 10 characters"
    }
    if(obj.ConfirmPassword){
        if(obj.Password !== obj.ConfirmPassword){
            error.ConfirmPassword = "* Confirm Password doesn't look like Password" 
        }
    }
    return error;
}