import React from 'react';
import ShowListItem from './ShowListItem';

function ShowList(props = {}) {

    return (
        <div aria-label='offer list' className="showlist__wrapper">
            {props.offersList.map((item) => {
                return (
                    <ShowListItem data={item} key={item.uuid} airportCodeToCityMap={props.airportCodeToCityMap}/>
                );
            })}
            
        </div>
    );
}
  
export default ShowList;
