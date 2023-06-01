import avatar from "../assets/img/profile-pic.jpg";
import gmail from "../assets/img/social/gmail.png";
import linkedin from "../assets/img/social/linkedin.png";
import facebook from "../assets/img/social/facebook.png";
import twitter from "../assets/img/social/twitter.png";
import instagram from "../assets/img/social/instagram.png";

import "./Contact.scss";

export function Contact() {
    
    return (
        <>
            <section className="contact-section">
                <div className="contact-wrapper">
                    <img className="avatar" src={avatar} />
                    <div className="channel-container">
                        <h1>Contáctame</h1>
                        <div className="channel">
                            <img src={gmail} />
                            <span>ort18248@uvg.edu.gt</span>
                        </div>
                        <div className="channel">
                            <img src={linkedin} />
                            <span>linkedin.com/in/no_tengo/</span>
                        </div>
                        <div className="channel">
                            <img src={facebook} />
                            <span>facebook.com/AlejandroOR1315</span>
                        </div>
                        <div className="channel">
                            <img src={twitter} />
                            <span>@tampoco_tengo</span>
                        </div>
                        <div className="channel">
                            <img src={instagram} />
                            <span>@este_menos</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}