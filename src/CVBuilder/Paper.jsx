import "./Paper.css";
import gsd from "../assets/images/gsd.jpg";

const PreviewSection = props => {
    if (props.section == "personalInfo") {
        return (
            <div id="personalInfo" className="section">
                <h2 className="sectionTitle">Personal Information</h2>
                <div className="grid">
                    <div id="pictureContainer" className="gridItem">
                        <img
                            id="profilePicture"
                            src={gsd}
                            alt="Placeholder photo for profile picture"
                        />
                    </div>

                    <div id="personalDetails">
                        <div id="full-name" className="gridItem">
                            <h2>Ivanvielle B. Dupaya</h2>
                        </div>

                        <div id="contact">
                            <div id="email" className="gridItem">
                                <h3>Email: </h3>
                                <p>example@mail.com</p>
                            </div>

                            <div id="mobile" className="gridItem">
                                <h3>Mobile: </h3>
                                <p>09661769276</p>
                            </div>
                        </div>
                    </div>

                    <div id="aboutMe" className="gridItem">
                        <h3>About me: </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            nesciunt iusto voluptatibus sunt nisi quia vitae unde fuga vero tempora
                            saepe, atque libero rem. Optio soluta illo voluptatibus possimus porro.
                        </p>
                    </div>
                </div>
            </div>
        );
    } else if (props.section == "education") {
        return (
            <div id="educationInfo" className="section">
                <h2 className="sectionTitle">Education</h2>
                <div className="grid"></div>
            </div>
        );
    } else if (props.section == "workExperience") {
        return (
            <div id="workExperience" className="section">
                <h2 className="sectionTitle">Work Experience</h2>
                <div className="grid"></div>
            </div>
        );
    }
};

const Preview = () => {
    return (
        <div id="preview">
            <PreviewSection section="personalInfo" />
            <PreviewSection section="education" />
            <PreviewSection section="workExperience" />
        </div>
    );
};

const Paper = () => {
    return (
        <div id="paperContainer">
            <Preview />
        </div>
    );
};

export default Paper;
