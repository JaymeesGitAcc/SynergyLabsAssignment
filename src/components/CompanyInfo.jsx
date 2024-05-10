import React from "react";

const CompanyInfo = ({ company, companyInfoChange, heading }) => {
    return (
        <div>
            {heading && <h3 className="form-input-heading">{heading}</h3>}
            <div className="inputs-container">
                <div className="input-field">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        name="name"
                        id="company"
                        placeholder="company"
                        value={company.name}
                        onChange={companyInfoChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="catchPhrase">CatchPhrase:</label>
                    <input
                        type="text"
                        name="catchPhrase"
                        id="catchPhrase"
                        placeholder="catchPhrase"
                        value={company.catchPhrase}
                        onChange={companyInfoChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="bs">BS:</label>
                    <input
                        type="text"
                        name="bs"
                        id="bs"
                        placeholder="bs"
                        value={company.bs}
                        onChange={companyInfoChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;
