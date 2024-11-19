export function ErrorValidation(obj){
    const error = {}
    for (const event in obj) {
        if(obj[event].trim() === '') {
            error[event] = `* ${event} can't be empty`
        }
    }
    if(obj.title?.length > 100){
        error.title = "* Title can't be more than 100 characters"
    }
    return error;
}