import { Link } from "react-router-dom"
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
            title: "Tic Tac Toe",
            description: "A basic game of tic tac toe with a with game counters and sounds included!",
            img: "https://dummyimage.com/300x200/000/fff",
            link: "https://git.generalassemb.ly/jhamblin/project1"
        },
        {
            title: "Workout crud app",
            description: "A CRUD app built with express to record workouts completed. User search included to find workouts from other users and more!",
            img: "https://dummyimage.com/300x200/000/fff",
            link: "https://github.com/jrh1010101101010/project2"
        },
        {
            title: "Servo app with google maps",
            description: "A full stack application using the google maps api and a sql database to locate and mark service stations using google maps!",
            img: "https://dummyimage.com/300x200/000/fff",
            link: "https://github.com/henry-rennell/servo_api"
        },
        {
            title: "Meal planner app",
            description: "A react app using edamam api and firebase and to store user data and save information to plan the week aheads meals",
            img: "https://dummyimage.com/300x200/000/fff",
            link: "https://github.com/jrh1010101101010/react_meal_planner_app"
        }
    ]

    return (
        <div className="HomeProjects">
            <h1 id="projects">Projects</h1>
            <Carousel responsive={responsive}>
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3 className="title">{project.title}</h3>
                        <div className="project-info-wrapper">
                            <img src={project.img} alt="" />
                            <p>{project.description}</p>
                        </div>
                        <a href={project.link}>Link to repo here!</a>
                    </div>
                ))}
            </Carousel>
            <div className="blog-link">
                <h3>Wan to see more? More recent projects are posted on my <Link to="/blog">Blog</Link></h3>
            </div>
        </div>
    )
}