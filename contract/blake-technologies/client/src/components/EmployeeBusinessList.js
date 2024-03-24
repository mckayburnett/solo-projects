import React, {useState, useEffect, useContext} from 'react'
import BusinessCard from './EmployeeBusinessCard.js'
import { Functionality } from '../context/Functionality.js'


export default function EmployeeBusinessList(props){

    const {getAllBusinesses, businesses} = useContext(Functionality)

    useEffect(() => {
        getAllBusinesses()
    },[])


    const business = Array.isArray(businesses?.businesses) ? businesses.businesses.map(business => business) : [];
    const uncontactedNum = (businesses?.businesses?.filter(business => business.uncontacted === true) || []).length;
    const processingNum = (businesses?.businesses?.filter(business => business.processing === true) || []).length;
    const underContractNum = (businesses?.businesses?.filter(business => business.accepted === true) || []).length;
    const declinedNum = (businesses?.businesses?.filter(business => business.declined === true) || []).length;


    return(
        <div className="businessList-wrapper">
            <div className="businessList-grid">
                <h2 className="businessList-grid-uncontacted">Uncontacted({uncontactedNum})</h2><h2 className="businessList-grid-processing">Processing ({processingNum})</h2><h2 className="businessList-grid-accepted">Under Contract ({underContractNum})</h2><h2 className="businessList-grid-declined">Declined ({declinedNum})</h2>
            </div>
            <div className="businessList-businessCard">
                {business && business?.map(business => 
                    <BusinessCard business={business} key={business._id}/>    
                )}
            </div>       
         </div>
    )
}
