import React from "react";

export default function FormInput() {
  return (
    <>
      <div className="fromContainer">
        {/* <form> */}
          <div className="first">
            <label htmlFor="Name">Enter Your FullName:</label>
            <input type="text" placeholder="Timothy Meshach" id="FirstName" />
            <br />
            <span id="FirstError"></span>
          </div>
          <div className="emai">
            <label htmlFor="email">Enter Your Email:</label>
            <input type="email" placeholder="@email" id="Email" />
            <br />
            <span id="EmailError"></span>
          </div>
          <div className="UserName">
            <label htmlFor="username">Enter Your UserName:</label>
            <input type="text" placeholder="Rich_World" id="UserName" />
            <b />
            <span id="UserError"></span>
          </div>
          <div className="passworld">
            <label htmlFor="password">Enter Your Password:</label>
            <input
              type="password"
              placeholder="Storge password"
              id="Password"
            />
            <br />
            <span id="passError"></span>
          </div>
          <div className="CFpassword">
            <label htmlFor="Name">Confirm your password:</label>
            <input
              type="password"
              placeholder="Confirm password"
              id="CFPassword"
            />
            <br />
            <span id="CFpassError"></span>
          </div>
          <div className="number">
            <label htmlFor="number">Enter Your Mobil Number:</label>
            <input type="number" placeholder="07070293879" id="number" />
            <br />
            <span id="NumberError"></span>
          </div>

        <button
          type="submit"
          onClick={() => {
            let FirstName = document.getElementById("FirstName");
            let Email = document.getElementById("Email");
            let UserName = document.getElementById("UserName");
            let Password = document.getElementById("Password");
            let CFpassword = document.getElementById("CFPassword");
            let number = document.getElementById("number");

            const FirstNameValue = FirstName.value;
            const EmailValue = Email.value;
            const UserValue = UserName.value;
            const passwordValue = Password.value;
            const CFpasswordValue = CFpassword.value;
            const numberValue = number.value;

            const FirstError = document.getElementById("FirstError");
            const EmailError = document.getElementById("EmailError");
            const UserError = document.getElementById("UserError");
            const passError = document.getElementById("passError");
            const CFpassError = document.getElementById("CFpassError");
            const NumberError = document.getElementById("NumberError");
            const ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            if (
              !FirstNameValue ||
              !EmailValue ||
              !UserValue ||
              !passwordValue ||
              !CFpasswordValue ||
              !numberValue
            ) {
              alert("**Please all tasks most be completed");
              return false;
            }
            if (!FirstNameValue.includes(" ")) {
              FirstError.innerHTML = "Full name is required";
              FirstError.style.color = "red";
              FirstName.style.border = "1px solid red";
              return false;
            } else {
              FirstError.innerHTML = "Valid";
              FirstError.style.color = "green";
              FirstName.style.border = "1px solid green";
            }
            if (!EmailValue.includes("@")) {
              EmailError.innerHTML = "email must include @";
              EmailError.style.color = "red";
              Email.style.border = "1px solid red";
              return false;
            } else {
              EmailError.innerHTML = "Valid";
              EmailError.style.color = "green";
              Email.style.border = "1px solid green";
            }
            if (!UserValue.includes("_")) {
              UserError.innerHTML = "username must include _";
              UserError.style.color = "red";
              UserName.style.border = "1px solid red";
              return false;
            } else {
              UserError.innerHTML = "Valid";
              UserError.style.color = "green";
              UserName.style.border = "1px solid green";
            }
            if (passwordValue.length < 8) {
              passError.innerHTML = "password must not be lest than 8";
              passError.style.color = "red";
              Password.style.border = "1px solid red";
              return false;
            } else {
              passError.innerHTML = "Valid";
              passError.style.color = "green";
              Password.style.border = "1px solid green";
            }
            if (CFpasswordValue.length < 8) {
              CFpassError.innerHTML = "password must not be less than 8";
              CFpassError.style.color = "red";
              CFpassword.style.border = "1px solid red";
              return false;
            } else if (CFpasswordValue !== passwordValue) {
              CFpassError.innerHTML = "Password must be the same";
              CFpassError.style.color = "red";
              CFpassword.style.border = "1px solid red";
              return false;
            } else {
              CFpassError.innerHTML = "Valid";
              CFpassError.style.color = "green";
              CFpassword.style.border = "1px solid green";
            }
            if (numberValue.length < 11) {
              NumberError.innerHTML = "number must not be less than 11";
              NumberError.style.color = "red";
              number.style.border = "1px solid red";
              return false;
            } else if (numberValue.length > 11) {
              NumberError.innerHTML = "number must not be greater than 11";
              NumberError.style.color = "red";
              number.style.border = "1px solid red";
              return false;
            } else if (!numberValue.includes("0")) {
              NumberError.innerHTML = "**please input a valid number";
              NumberError.style.color = "red";
              number.style.border = "1px solid red";
              return false;
            } else {
              NumberError.innerHTML = "Valid";
              NumberError.style.color = "green";
              number.style.border = "1px solid green";
              return true;
            }
          }}
          FirstNameValue=""
        >
          Submit
        </button>
              {/* </form> */}
      </div>
    </>
  );
}
