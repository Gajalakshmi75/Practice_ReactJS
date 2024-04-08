import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
function Map(){
    const arr=["gaja","lakshmi","chinni","maha"];
    return(
        <div>
            {
                arr.map(
                    (value,index)=> <li key={index}>{value}</li>
                )
            }
            

        </div>
    )
}
export default Map;