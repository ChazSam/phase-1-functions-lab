// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return (someValue>= 42 ? someValue-42: 42-someValue)

    /*if (someValue >=42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }*/
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
   
    
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (start-destination >=0 ? (start-destination)*264 : (destination-start)*264) 

    /*if (start-destination >=0){
    return (start-destination)*264
    }else{
    return (destination-start)*264
    }*/

}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination)
    if (distance > 2500){
        return 'cannot travel that far'
    }else if(distance > 2000){
        return 25
    }
    else if (distance <= 2000 && distance > 400){
        return (distance-400) * .02;
    }else {
        return 0;
    }  

 }