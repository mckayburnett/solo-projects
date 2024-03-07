import React, {useState, useContext, useEffect} from 'react'

export const Text = React.createContext()

export default function ContextProvider(props){
   
    // ----- About Us -----
    const aboutUs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const whatWeOffer = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."

    // ----- Contact Us -----
    const contactUs = "Ut non odio pulvinar turpis fermentum viverra. Aenean vehicula orci et varius mattis. Proin eleifend, tellus vitae varius euismod, purus massa ornare metus, in blandit est ipsum at mauris. Sed non tincidunt tortor. "

    // ----- Courses -----
    const courses = "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."

    const ios = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

    const web = "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

    const testimonials = [ 
    <div className="home-testimonials-fromText">
    "I have full confidence in anything Blake does. When I was struggling with employment in the tech world he helped me make adjustments that landed me a coding job in less than 3 months."
    <br />
    -McKay Burnett | <span className="home-testimonials-career">Full-Stack Web Developer</span>
    </div>,
    <div className="home-testimonials-fromText">
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
    <br />
    -Some Dude | <span className="home-testimonials-career">Software Engineer</span>
    </div>,
    <div className="home-testimonials-fromText">
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    <br />
    -Another Guy | <span className="home-testimonials-career">App Developer</span>
    </div>
    ]

    const description = `The iOS programming course will take you from no programming
    experience to having the skills necessary to create and deploy your own
    projects publicly available on the Apple App Store. `

    const objectives = `• ➔ Variables,
    • ➔ Constants,
    • ➔ Operators,
    • ➔ Data Types,
    • ➔ Proper naming
    conventions,
    • ➔ Conditionals,
    • ➔ Control Flow,
    • ➔ Functions,
    • ➔ Parameters,
    • ➔ Results,
    • ➔ MVC,
    • ➔ Design Patterns, 
    • ➔ MVVM,
    • ➔ Communication,
    ➔ ProtocolandDelegate, ➔ Loops,
    ➔ Class,
    ➔ Struct,
    ➔ Optionals,
    ➔ UIViewController, ➔ AppleHIG,
    ➔ GitHub,
    ➔ VersionControl, ➔ UITableView,
    ➔ Singleton,
    ➔ Segues,
    ➔ LocalPersistence, ➔ JSON,
    ➔ UIAlertController,
    ➔ Notification and Listener,
    ➔ JSONSerialization, ➔ Postman,
    ➔ API Documentation, ➔ URLSession,
    ➔ Closure,
    ➔ Concurrency,
    ➔ GCD,
    ➔ Codable,
    ➔ Enum,
    ➔ Memory Management, ➔ ARC,
    ➔ Dictionaries,
    ➔ Arrays,
    ➔ Extensions,
    Patterns,
    • ➔ Result Type, 
    • ➔ Capture Lists,
    • ➔ URL Requests,
    • ➔ Abstraction && Single
    Responsibility,
    • ➔ Async and Await,
    • ➔ Pagination,
    • ➔ Google Firebase,
    ➔ Google Firestore,
    ➔ HTTP Methods,
    ➔ App Planning,
    ➔ Story mapping,
    ➔ AGILE Methodologies, ➔ Interface Builder,
    ➔ Introduction to BigO Notation,
    ➔ Introduction to Data structures and
    Algorithms,
    ➔ Objective - C,
    ➔ Core Data,
    ➔ iOS Interview process, ➔ Introduction to UI/Unit
    testing. `

    const arrObjectives = objectives.split(",")
    const mappedArr = arrObjectives.map((item, index) => (
        <div key={index} className="ios-obj-item">
          <h4>{item}</h4>
        </div>
      ));
    const iosSubTitle = `Upon successful completion of the iOS Programming Course, you will
    feel confident in the following`

    const daily = 
        <div className="ios-daily">
            <h1>Monday - Thursday</h1>
            <h3><span>9:00am - 9:30am: </span>Coffee Chat /n Connect with your teammates and the team lead to discuss the previous day</h3>
            <h3><span>9:30am - 10:30am: </span>Formal Lecture /n Using a slide deck we will go over in-depth topics</h3>
            <h3><span>10:30am - 11:00am: </span>Break</h3>
            <h3><span>11:00am - 1:00pm: </span>Live Coding Lecture /n Interactive lecture where you code along with your instructor</h3>
            <h3><span>1:00pm - 2:00pm: </span>Lunch /n I'm thnking Chipotle</h3>
            <h3><span>2:00pm - 3:00pm: </span>Pair Programming - Support Closed /n Paired Programming without instructor support. It's imoportant to learn how to learn on your own and use external  resources.</h3>
            <h3><span>3:00pm - 5:00pm: </span>Pair Programming - Support Open /n Instructors are live and on-call to support you. We will answer any questions you may have</h3>
            <h3><span>5:00pm - 7:00pm: </span>Review Pre-Class Materials /n Prepare for the next day by getting an introduction to what we will learn the following day</h3>
            <h1 id="friday">Friday</h1>
            <h3 id="optional">OPTIONAL!</h3>
        </div>

    return(
        <Text.Provider
            value={{
                aboutUs,
                whatWeOffer,
                contactUs,
                courses,
                ios,
                web,
                testimonials,
                description,
                objectives,
                mappedArr,
                iosSubTitle,
                daily
            }}
        >
            {props.children}
        </Text.Provider>
    )
}