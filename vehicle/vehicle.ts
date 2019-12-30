export abstract class Vehicle{
    vehicleType:string;
    vehicleName:string;
    vehicleClr:string;
    FuelType:string;
    Price:number;
    
    start(){
        // console.log(this.vehicleType)
        console.log("engine start")
    }
    stop(){
        console.log("engine stop")
    }
    mode(by:string){
        if(by=="fly"){
            console.log("skyhigh")
        }
        if(by=="flot"){
            console.log("boat")
        }
        if(by=="run"){
            console.log("car || bike")
        }

    }

} 