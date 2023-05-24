import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function HomeProject () {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const projects = [ 
        {
            title: "Meal planner app",
            description: "A react app using edamam api and firebase and to store user data and save information to plan the week aheads meals",
            img: "https://github.com/dimitrinossar/react_meal_planner_app/raw/main/public/readme/homepage.png",
            link: "https://github.com/jrh1010101101010/react_meal_planner_app",
            built: "React, Beautiful D&D, Firebase, Axios",
            colour: "#1f8ea3"
        },
        {
            title: "Tensor Flow experiments",
            description: "My first experiments with tensorflow! Started with a basic model in react before building the backend and model with python that sends an image of a canvas to the backend and sending back a prediction.",
            img: "https://i.imgur.com/In52d8J.png",
            link: "https://github.com/jrh1010101101010/frontend_tensor",
            built: "React, TensorFlow, Flask, Python",
            colour: "#284184"
         },
         {
            title: "Workout crud app",
            description: "A CRUD app built with express to record workouts completed. User search included to find workouts from other users and more!",
            img: "https://i.imgur.com/JuYmWkR.png",
            link: "https://github.com/jrh1010101101010/project2",
            built: "Express, EJS, Javascript, Postgres, Bcrypt",
            colour: "#1f8ea3"
        },
        {
            title: "Servo app with google maps",
            description: "A full stack application using the google maps api and a sql database to locate and mark service stations using google maps!",
            img: 'https://i.imgur.com/TtCVZaj.png',
            link: "https://github.com/henry-rennell/servo_api",
            built: "Express, EJS, Javascript, AXIOS, Postgres",
            colour: "#284184"
        },
         {
            title: "Tic Tac Toe",
            description: "A basic game of tic tac toe with a with game counters and sounds included!",
            img: "https://i.imgur.com/jOfbT7x.png",
            link: "https://git.generalassemb.ly/jhamblin/project1",
            built: "Javascript, CSS and HTML",
            colour: "#284184"
        },

    ]

    return (
        <div className="HomeProjects" id="projects">
            <h1 >Projects</h1>
            <Carousel responsive={responsive}>
                {projects.map((project, index) => (
                    <div className="project" key={index} style={{backgroundColor: project.colour}}>
                        <h2 className="project-title">{project.title}</h2>
                        <div className="project-info-wrapper">
                            <img src={project.img} alt="" />
                            <div>
                               <p>{project.description}</p>
                                <h4>Built With</h4>
                                <p>{project.built}</p> 
                            </div>
                        </div>
                        <a href={project.link}>Link to repo here!</a>
                    </div>
                ))}
            </Carousel>
            <div className="blog-link">
                <h3>More projects are accessiable on my <a href="https://github.com/jrh1010101101010">github!</a></h3>
            </div>
        </div>
    )
}