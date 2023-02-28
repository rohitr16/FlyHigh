import React from 'react';
import ShowListItem from './ShowListItem';
import {textLabel} from "../labels/TextLables"; 

function ShowList(props = {}) {

    return (
        <div aria-labelledby='list-description' >
            <div className='showlist_descripton'>
                <span className='showlist_header' id="list-description"> {textLabel.OFFERS_HEADER}</span>
                <p className='showlist_detail'> {textLabel.SELECT_FILTER_LABEL} </p>
            </div>
            <div className="showlist__wrapper">
                {(props.offersList.length >0) ? props.offersList.map((item) => {
                    return (
                        <ShowListItem data={item} key={item.uuid} airportCodeToCityMap={props.airportCodeToCityMap}/>
                    );
                }): 
                <div className='showlist_empty' aria-labelledby='emptyOffer'>
                    <span id="emptyOffer">{textLabel.NO_OFFERS}</span>
                </div>
                }
            </div>       
        </div>
    );
}
  
export default ShowList;
