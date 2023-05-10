export default function ContactInfo (){
    return (
        <div className="contact" id="contacts">
            <h1 >Have any Questions?</h1>
            <div className="contact-info">
                    <h4>contact info</h4>
                    <div className="email">
                        <img src="https://cdn-icons-png.flaticon.com/512/3494/3494693.png" alt=""  className="email-img"/>
                        <a href="mailto:jhamblin798@gmail.com">
                            <p>jhamblin798@gmail.com</p>
                        </a>
                    </div>    
                    <div className="phone">
                        <img src="https://cdn-icons-png.flaticon.com/512/46/46854.png" alt="" />
                        <p>0423945042</p>
                    </div>
                    <div className="linkedin">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" />
                        <a href="https://www.linkedin.com/in/jack-hamblin-888a4b240/">  <p>LinkedIn</p></a>
                    </div>
                    <div className="git">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        <a href="https://github.com/jrh1010101101010">
                        <p> Github</p></a>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1I3f4ejj7OtCKGQQTgNAtLftTjdqGhlxi/view?usp=share_link">CV</a>
                    </div>
                </div>
        </div>
    )
}