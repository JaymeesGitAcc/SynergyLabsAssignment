import { useContext, useId, useState } from "react";
import { usersContext } from "../contexts/usersContext";
import { useNavigate } from "react-router-dom";
import UserBasicInfo from "./UserBasicInfo";
import UserAddress from "./UserAddress";
import CompanyInfo from "./CompanyInfo";

const UserForm = ({ userDetails }) => {
    const [basicInfo, setBasicInfo] = useState({
        name: userDetails?.name || "",
        username: userDetails?.username || "",
        email: userDetails?.email || "",
        phone: userDetails?.phone || "",
        website: userDetails?.website || "",
    });

    const [address, setAddress] = useState({
        street: userDetails?.address?.street || "",
        suite: userDetails?.address?.suite || "",
        city: userDetails?.address?.city || "",
        zipcode: userDetails?.address?.zipcode || "",
        geo: {
            lat: userDetails?.address?.geo?.lat || "",
            lng: userDetails?.address?.geo?.lng || "",
        },
    });

    const [company, setCompany] = useState({
        name: userDetails?.company?.name || "",
        bs: userDetails?.company?.bs || "",
        catchPhrase: userDetails?.company?.catchPhrase || "",
    });

    const [sumbissionStatus, setSubmissionStatus] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const { users, setUsers } = useContext(usersContext);

    const submitForm = async (e) => {
        e.preventDefault();
        const url = "https://jsonplaceholder.typicode.com/users";
        try {
            setSubmissionStatus(true);
            if (userDetails) {
                const updationResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userDetails.id}`,
                    {
                        method: "PUT",
                        body: JSON.stringify({
                            id: Number(userDetails.id),
                            ...basicInfo,
                            address: {
                                ...address,
                                geo: {
                                    ...address.geo,
                                },
                            },
                            company: {
                                ...company,
                            },
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                    }
                );

                const updatedUser = await updationResponse.json();
                if (updationResponse) {
                    const newUsersList = users.map((user) =>
                        user.id == userDetails.id
                            ? {
                                  ...updatedUser,
                              }
                            : user
                    );
                    setUsers(newUsersList);
                    navigate("/");
                }
            } else {
                const creationResponse = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        ...basicInfo,
                        address: {
                            ...address,
                            geo: {
                                ...address.geo,
                            },
                        },
                        company: {
                            ...company,
                        },
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                });

                const createdUser = await creationResponse.json();

                setUsers([{ ...createdUser }, ...users]);
                navigate("/");
            }
        } catch (err) {
            setError(true);
            console.log(err.message);
        } finally {
            setSubmissionStatus(false);
        }
    };

    const basicInfoChange = (e) => {
        setBasicInfo({
            ...basicInfo,
            [e.target.name]: e.target.value,
        });
    };

    const addressChange = (e) => {
        if (e.target.name === "lat" || e.target.name === "lng") {
            setAddress({
                ...address,
                geo: {
                    ...address.geo,
                    [e.target.name]: e.target.value,
                },
            });
        } else {
            setAddress({
                ...address,
                [e.target.name]: e.target.value,
            });
        }
    };

    const companyInfoChange = (e) => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="form-container">
            <p className={`${error ? "showError" : ""} error`}>
                Error:{" "}
                {!userDetails
                    ? "Some issue while adding the user"
                    : "Some issue while updating the user"}
            </p>
            <form onSubmit={submitForm}>
                <UserBasicInfo
                    basicInfo={basicInfo}
                    basicInfoChange={basicInfoChange}
                    heading="Basic Details:-"
                />

                <UserAddress
                    address={address}
                    addressChange={addressChange}
                    heading="Address details:-"
                />

                <CompanyInfo
                    company={company}
                    companyInfoChange={companyInfoChange}
                    heading="Company Details:-"
                />

                {!sumbissionStatus ? (
                    <button type="submit" className="submit-btn">
                        {!userDetails ? "Add User" : "Update User"}
                    </button>
                ) : (
                    <button className="submit-btn" disabled>
                        {!userDetails ? "adding..." : "updating..."}
                    </button>
                )}
            </form>
        </div>
    );
};

export default UserForm;

//  <div className="input-field">
//      <label htmlFor="longitude">Lon:</label>
//      <input
//          type="number"
//          name="lng"
//          id="longitude"
//          placeholder="longitude"
//          value={address.geo.lng}
//          onChange={handleAddressChange}
//      />
//  </div>;
