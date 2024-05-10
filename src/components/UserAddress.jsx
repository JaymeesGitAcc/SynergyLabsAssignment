const UserAddress = ({ address, addressChange, heading }) => {
    return (
        <div>
            {heading && <h3 className="form-input-heading">{heading}</h3>}
            <div className="inputs-container">
                <div className="input-field">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="city"
                        value={address.city}
                        onChange={addressChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="city">Street:</label>
                    <input
                        type="text"
                        name="street"
                        id="street"
                        placeholder="street"
                        value={address.street}
                        onChange={addressChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="city">Suite:</label>
                    <input
                        type="text"
                        name="suite"
                        id="suite"
                        placeholder="suite"
                        value={address.suite}
                        onChange={addressChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="city">Zipcode:</label>
                    <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        placeholder="zipcode"
                        value={address.zipcode}
                        onChange={addressChange}
                    />
                </div>
                <div className="geolocation">
                    <div className="input-field">
                        <label htmlFor="lat">Lat:</label>
                        <input
                            type="number"
                            name="lat"
                            id="lat"
                            placeholder="lat"
                            value={address.geo.lat}
                            onChange={addressChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lat">Lon:</label>
                        <input
                            type="number"
                            name="lng"
                            id="lng"
                            placeholder="lon"
                            value={address.geo.lng}
                            onChange={addressChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddress;
