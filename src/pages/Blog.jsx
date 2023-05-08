import "../css/Blog.css"

export default function Blog (){
    const projects = [
        {
           title: "Tensor Flow experiments",
           description: "My first experiments with tensorflow! Started with a basic model in react before building the backend and model with python that sends an image of a canvas to the backend and sending back a prediction.",
           img: "https://dummyimage.com/300x200/000/fff",
           link: "https://github.com/jrh1010101101010/frontend_tensor"
        },
    ]
    
    return (
        <main >
            <div className="blog-wrapper">
            <h1>Blog</h1>
            <div className="blog">
               {projects.map((project, index) => (
                <div className="blog-post" key={index}>
                    <h2 className="blog-title">{project.title}</h2>
                    <div className="blog-post-wrapper"> 
                        <img src={project.img} alt="" />
                        <p>{project.description}</p>
                    </div>
                    <a href={project.link}>Link to the repo here!</a>
                </div>
               ))}
            </div>
            </div>
        </main>
    )
}