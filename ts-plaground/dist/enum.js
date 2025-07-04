"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["notfound"] = 404] = "notfound";
    StatusCode[StatusCode["Error"] = 500] = "Error";
})(StatusCode || (StatusCode = {}));
const successMessage = StatusCode.Success;
console.log(successMessage);
