import React from 'react';
import ShowListItem from './ShowListItem';

function ShowList(props = {}) {

    return (
        <div aria-labelledby='list-description' >
            <div className='showlist_descripton'>
                <span className='showlist_header' id="list-description"> Here you will find the best offers for you</span>
                <p className='showlist_detail'> Select origin and destination from the dropdown above to filter our your most appropiate offers </p>
            </div>
            <div className="showlist__wrapper">
                {(props.offersList.length >0) ? props.offersList.map((item) => {
                    return (
                        <ShowListItem data={item} key={item.uuid} airportCodeToCityMap={props.airportCodeToCityMap}/>
                    );
                }): 
                <div className='showlist_empty' aria-labelledby='emptyOffer'>
                    <span id="emptyOffer">Sorry no offers available for the above filters</span>
                </div>
                }
            </div>       
        </div>
    );
}
  
export default ShowList;
