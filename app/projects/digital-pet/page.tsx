"use client";
import { useState } from "react";
import { useEffect } from "react";

enum PetAction { Eat = "EAT", Play = "PLAY", Sleep = "SLEEP" }
enum PetMood { Happy = "HAPPY", Excited = "EXCITED", Content = "CONTENT", Sad = "SAD", Tired = "TIRED", Sick = "SICK", Hungry = "HUNGRY" }

export default function DigitalPet() {
    return (
        <div>
            <h1>CyberPet Simulator 👾</h1>
            <p>Welcome to your virtual pet dashboard!</p>
            <div className="mt-8 flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">Feed</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">Play</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">Heal</button>
            </div>
        </div>
    )
}