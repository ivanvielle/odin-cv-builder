import { useState } from "react";
import "./CVBuilder.css";

const FormInput = ({ type }) => {
    return (
        <div className="input-container">
            {type == "name" && (
                <>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full name including middle name"
                    />
                </>
            )}

            {type == "phone" && (
                <>
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input type="text" name="phone_number" id="phone_number" />
                </>
            )}

            {type == "email" && (
                <>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="applicant@mail.com" />
                </>
            )}

            {type == "tertiary" && (
                <>
                    <label htmlFor="tertiary">Tertiary:</label>
                    <input
                        type="text"
                        name="tertiary"
                        id="tertiary"
                        placeholder="University or College"
                    />
                </>
            )}

            {type == "secondary" && (
                <>
                    <label htmlFor="secondary">Secondary:</label>
                    <input type="text" name="secondary" id="secondary" placeholder="High school" />
                </>
            )}

            {type == "elementary" && (
                <>
                    <label htmlFor="elementary">Elementary:</label>
                    <input
                        type="text"
                        name="elementary"
                        id="elementary"
                        placeholder="Grade school"
                    />
                </>
            )}
        </div>
    );
};

const Form = ({ name }) => {
    return (
        <div id="form-container">
            <h2>CV Builder</h2>
            <form action="">
                <div id="general-info" className="form-section">
                    <h4>General Information</h4>
                    <FormInput type="name" />
                    <FormInput type="phone" />
                    <FormInput type="email" />
                </div>

                <div className="form-section">
                    <h4>Education</h4>
                    <FormInput type="tertiary" />
                    <FormInput type="secondary" />
                    <FormInput type="elementary" />
                </div>

                <div className="form-section">
                    <h4>Practical Experience</h4>
                    <FormInput type="tertiary" />
                    <FormInput type="secondary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                    <FormInput type="elementary" />
                </div>
            </form>
        </div>
    );
};

const Paper = ({ name }) => {
    return <div id="paper-container">Paper</div>;
};

const CVBuilder = () => {
    const [name, setName] = useState("");

    return (
        <div id="container">
            <Form />
            <Paper />
        </div>
    );
};

export default CVBuilder;
