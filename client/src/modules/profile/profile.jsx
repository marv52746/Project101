import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Profile() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const authState = useSelector((state) => state.user.authState);

  if (!authState) {
    return (
      <div className="text-center">Please log in to see your profile.</div>
    );
  }

  // Define an array of field names and their corresponding values
  const fields = [
    { label: "Name", value: userInfo.name },
    { label: "Email", value: userInfo.email },
    { label: "Given Name", value: userInfo.given_name },
    { label: "Family Name", value: userInfo.family_name },
  ];

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <div className="card p-4">
        <img
          src={userInfo.picture}
          alt={userInfo.name}
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px" }}
        />
        <form>
          {fields.map((field, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-sm-2">
                <label className="form-label">
                  <strong>{field.label}:</strong>
                </label>
              </div>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  value={field.value}
                  readOnly
                />
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Profile;
