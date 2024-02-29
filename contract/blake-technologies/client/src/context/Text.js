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

    return(
        <Text.Provider
            value={{
                aboutUs,
                whatWeOffer,
                contactUs,
                courses,
                ios,
                web,
                testimonials
            }}
        >
            {props.children}
        </Text.Provider>
    )
}