import Openining from "../components/Opening"
import AboutMe from "../components/AboutMe"
import HomeProject from "../components/HomeProject"
import ContactInfo from "../components/ContactInfo"
import "../css/HomePage.css"

export default function HomePage (){
    return (
        <main className="homepage-wrapper">
            <Openining />
            <AboutMe />
            <HomeProject />         
            <ContactInfo />
        </main>
    )
}