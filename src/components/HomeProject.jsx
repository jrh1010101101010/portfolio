

export default function HomeProject (){
    return (
        <div className="HomeProjects">
            <h1>Projects</h1>
            <div className="project">
                <h3 className="title">Tic Tac Toe</h3>
                <div className="project-info-wrapper">
                    <img src="https://dummyimage.com/300x200/000/fff" alt="" />
                    <p>A basic game of tic tac toe with a with game counters and sounds included!</p>    
                </div>
                <a href="https://git.generalassemb.ly/jhamblin/project1">Link to repo here!</a>
            </div>
            <div className="project">
                <h3 className="title">Workout crud app</h3>
                <div className="project-info-wrapper">
                    <img src="https://dummyimage.com/300x200/000/fff" alt="" />
                    <p>A CRUD app built with express to record workouts completed. User search included to find workouts from other users and more! </p>    
                </div>
                <a href="https://github.com/jrh1010101101010/project2">Link to repo here!</a>
            </div>
            <div className="project">
                <h3 className="title">Servo app with google maps</h3>
                <div className="project-info-wrapper">
                    <img src="https://dummyimage.com/300x200/000/fff" alt="" />
                   <p>A full stack application using the google maps api and a sql database to locate and mark service stations using google maps! </p>    
                </div>
                <a href="https://github.com/henry-rennell/servo_api">Link to the groups repo here!</a>
            </div>
            <div className="project">
                <h3 className="title">Meal planner app</h3>
                <div className="project-info-wrapper">
                    <img src="https://dummyimage.com/300x200/000/fff" alt="" />
                   <p>A react app using edamam api and firebase and to store user data and save information to plan the week aheads meals</p>    
                </div>
                <a href="https://github.com/jrh1010101101010/react_meal_planner_app">Link to the groups repo here!</a>
            </div>
        </div>
    )
}