enum StatusCode {
    Success = 200,
    notfound = 404,
    Error = 500
}

const successMessage = StatusCode.Success;
console.log(successMessage);