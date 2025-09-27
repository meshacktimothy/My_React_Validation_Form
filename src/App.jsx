import React from "react";
import FormCard from "./Componenet/FormCard";
import Form from "./Componenet/Form";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  let timeOfDay;
  let hours = new Date().getHours();
  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  let namePrompt = prompt("Please input your name");
  useEffect(() => {
    let agePrompt = parseInt(prompt("Please input your Age"));
    if (agePrompt >= 18) {
      alert("You can fill the form");
    } else {
      alert("❌ You are under 18, sorry you cannot fill this form")
      window.open("https://www.google.com", "_blank");
    }
  }, []);

  return (
    <div>
      <marquee behavior="scroll" direction="left">
        <h2>
          Good {timeOfDay} {namePrompt} Welcome To Meshach Validation Form
        </h2>
      </marquee>

      {/* <Routes>
        <Route path="/" element={<FormCard />} />
        <Route path="/form" element={<Form />} />
      </Routes> */}

      <FormCard />                              
    </div>
  );
}
