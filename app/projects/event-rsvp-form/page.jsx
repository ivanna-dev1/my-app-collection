"use client";
import React, { useState } from "react";
import "./style.css";

export default function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dietary, setDietary] = useState("");
  const [guests, setGuests] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="event-rsvp-form-project">
      {/* 
      дефолтна повед, -оновл функ,щоб не онвл,- онсабм+(не роб дефолт)
      ---
      default behavior - reloads the page, to prevent reload - use onSubmit + (prevent default)
      */}
      <form onSubmit={(e) => {
        e.preventDefault();
        setDisplayForm(true);
      }} className='form-wrap'>
        <h2>Event RSVP Form</h2>
        <label>
          Name:
          <input
            required
            name="name" className="form-label"
            type="text"
            placeholder="Your Name"
            disabled={displayForm}
            value={name}
            onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input
            required
            className="form-label"
            name="email"
            type="email"
            placeholder="Your Email"
            disabled={displayForm}
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Number of Attendees:
          <input
            required
            className="form-label"
            type="number"
            min={1}
            placeholder="Number of Attendees"
            disabled={displayForm}
            value={number}
            onChange={e => setNumber(e.target.value)} />
        </label>
        <label>
          Dietary Preferences:
          <input
            className="form-label"
            type="text"
            placeholder="Dietary Preferences (Optional)"
            disabled={displayForm}
            value={dietary}
            onChange={e => setDietary(e.target.value)} />
        </label>
        <label className="checkbox">
          Bringing additional guests:
          <input
            type="checkbox"
            disabled={displayForm}
            checked={guests}
            onChange={() => setGuests(prev => !prev)} />
        </label>
        <button
          className="submit-btn"
          type="submit" >
          Submit RSVP
        </button>
      </form>

      {/*
      задаємо умову, дів показує,коли дісплейформ тру (стейт)
      ---
      set a condition, the div shows when displayForm is true (state)
      */}
      {displayForm && <div className="results-card">
        <h2>RSVP Submitted!</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Number of attendees: {number}</p>
        <p>Dietary preferences: {dietary}</p>
        <p>Bringing additional guests: {guests ? 'Yes' : 'No'}</p>
      </div>}
    </div>
  );
}
