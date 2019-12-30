"use strict";
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.start = function () {
        // console.log(this.vehicleType)
        console.log("engine start");
    };
    Vehicle.prototype.stop = function () {
        console.log("engine stop");
    };
    Vehicle.prototype.mode = function (by) {
        if (by == "fly") {
            console.log("skyhigh");
        }
        if (by == "flot") {
            console.log("boat");
        }
        if (by == "run") {
            console.log("car || bike");
        }
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
