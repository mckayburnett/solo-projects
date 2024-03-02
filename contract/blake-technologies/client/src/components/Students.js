import React, {useState, useEffect, useContext} from 'react'

export default function Students(props){

    const {student} = props
    const {accepted, contacted, declined, enrolled, processing, uncontacted, data} = student
    const {firstName, lastName, course, email, phoneNumber, message} = data
    return(
        <div className="students-wrapper">
            <h3>{firstName} {lastName} ({course})</h3>
            <h4>{email}</h4>
            <h4>{phoneNumber}</h4>
            <h4>{message}</h4>
            {
                uncontacted ? <div><button>Contacted</button><button>Declined</button></div> :
                contacted ? <div><button>Processing</button><button>Declined</button></div> :
                processing ? <div><button>Accepted</button><button>Declined</button></div> :
                accepted && <button>Enrolled</button> 

            }
        </div>
    )
}