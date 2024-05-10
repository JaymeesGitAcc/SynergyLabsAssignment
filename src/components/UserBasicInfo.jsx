const UserBasicInfo = ({ basicInfo, basicInfoChange, heading }) => {
    return (
        <div>
            {heading && <h3 className="form-input-heading">{heading}</h3>}
            <div className="inputs-container">
                <div className="input-field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        value={basicInfo.name}
                        onChange={basicInfoChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={basicInfo.email}
                        onChange={basicInfoChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="phone"
                        value={basicInfo.phone}
                        onChange={basicInfoChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        value={basicInfo.username}
                        onChange={basicInfoChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="website">Website:</label>
                    <input
                        type="text"
                        name="website"
                        id="website"
                        placeholder="website"
                        value={basicInfo.website}
                        onChange={basicInfoChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserBasicInfo;
