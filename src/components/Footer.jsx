import "../css/Footer.css"

export default function Footer (){
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="link">
                    <a href="https://www.linkedin.com/in/jack-hamblin-888a4b240/">
                         <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/jrh1010101101010">
                        <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png " alt="" />
                    </a>
                </div>
                <div className="contact-info">
                    <h4>contact info</h4>
                    <div className="email"></div>
                    <a href="mailto:jhamblin798@gmail.com">
             
                        <p>jhamblin798@gmail.com</p>
                    </a>
                    <div className="phone">
                        <img src="https://cdn-icons-png.flaticon.com/512/46/46854.png" alt="" />
                        <p>0423945042</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
img src="https://cdn-icons-png.flaticon.com/512/3494/3494693.png" alt="" />
*/