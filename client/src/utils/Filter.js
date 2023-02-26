
export function filter(offerlist = [], valueOrigin, valueDest) {
    return offerlist.filter((item) => {
       if(valueOrigin && valueDest) {
         return item.origin === valueOrigin.code && item.destination === valueDest.code;
       } else if (valueOrigin) {
        return item.origin === valueOrigin.code;
       } else if (valueDest) {
        return item.destination === valueDest.code;
       }
       return true;
    });
}

export function fillFullNameFromCode(offerlist = [], airportList = []) {
  offerlist.forEach((item) => {
      airportList.find((airport) => {
        return airport.code === item.origin;
      });
  })
}
