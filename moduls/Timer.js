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
Timer.prototype.stop = function() {
	endTime = new Date();
	this.elapsedTime = (endTime - startTime) / 1000;
}
//#endregion