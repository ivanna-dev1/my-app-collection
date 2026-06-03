"use client";
import React, { useState, useEffect, useRef } from 'react';
import "./style.css";

export default function OTPGenerator() {
  const [oTpCod, setOtpCod] = useState("Click 'Generate OTP' to get a code");
  const [oTPtimer, setOTPTimer] = useState(null);

  const isWorkBot = oTPtimer !== null && oTPtimer > 0;

  console.log(`Expires in: ${oTPtimer} seconds`);

  const handleClick = () => {
    // 6 numb Math.floor(Math.random() * (max - min + 1)) + min;
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpCod(newOtp);
    setOTPTimer(5);
  };

  useEffect(() => {
    if (oTPtimer === null || oTPtimer <= 0) return;

    const intervalId = setInterval(() => {
      setOTPTimer((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [oTPtimer]);

  const getTimerText = () => {
    if (oTPtimer === null) return "";
    if (oTPtimer === 0) return "OTP expired. Click the button to generate a new OTP.";
    if (oTPtimer > 0) return `Expires in: ${oTPtimer} seconds`;
    return "";
  };

  return (
    <div className="otp-generator-project">
      <div className="container">
        <h1 id="otp-title">OTP Generator</h1>
        <h2 id="otp-display">{oTpCod}</h2>
        <p aria-live="assertive" id="otp-timer">{getTimerText()}</p>
        <button disabled={isWorkBot} onClick={handleClick} id="generate-otp-button">
          Generate OTP
        </button>
      </div>
    </div>
  );
}
