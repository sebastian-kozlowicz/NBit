//#region Timer constructor function 
function Timer() {
    this.elapsedTime;
    let startTime;
    let endTime;
}
//#endregion

//#region Prototypical inheritence start function added to Timer base object
Timer.prototype.start = function() {
    startTime = new Date();
}
//#endregion

//#region Prototypical inheritence end function added to Timer base object
Timer.prototype.end = function() {
    endTime = new Date();
    let timeDifference = endTime - startTime;
    return timeDifference /= 1000;
}
//#endregion