import { useState } from "react";
import "./App.css";

const initialData = {
  fullName: "",
  address: "",
  phoneNum: "",
  email: "",
  complaint: "",
  contactMethod: "",
  consent: false,
};

const App = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (name === "name" && type === "text") {
      setData({ ...data, fullName: value });
    }
    if (name === "address" && type === "text") {
      setData({ ...data, address: value });
    }
    if (name === "phone" && type === "tel") {
      setData({ ...data, phoneNum: value });
    }
    if (name === "email" && type === "email") {
      setData({ ...data, email: value });
    }
    if (name === "complaint") {
      setData({ ...data, complaint: value });
    }
    if (name === "contact" && type === "radio") {
      setData({ ...data, contactMethod: value });
    }
    if (name === "consent" && type === "checkbox") {
      setData({ ...data, consent: checked });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={data.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={data.phoneNum}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={data.complaint}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChange}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={data.consent}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
};

export default App;
