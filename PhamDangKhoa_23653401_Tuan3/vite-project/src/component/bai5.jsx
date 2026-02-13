import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react';
function bai5() {
    
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const [lapName, setLapName] = useState("");
    
    const intervalRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(()=>{
        if (isRunning) {
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 10);
        }, 10);
        } else {
        clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStartPause = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const handleAddLap = () => {
        if (!lapName.trim()) return;

        setLaps((prev) => [
        ...prev,
        { id: Date.now(), name: lapName, time },
        ]);

        setLapName("");

        // Focus lại input
        inputRef.current.focus();
    };

    // Format time: mm:ss:ms
    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = ms % 1000;

        return `${String(minutes).padStart(2, "0")}:${String(
        seconds
        ).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`;
    };

    return (
        <div style={{ padding: 20 }}>
        <h2>Stopwatch</h2>

        <h1>{formatTime(time)}</h1>

        <button onClick={handleStartPause}>
            {isRunning ? "Pause" : "Start"}
        </button>

        <button onClick={handleReset}>Reset</button>

        <hr />

        <input
            ref={inputRef}
            value={lapName}
            onChange={(e) => setLapName(e.target.value)}
            placeholder="Lap name"
        />

        <button onClick={handleAddLap}>Add Lap</button>

        <ul>
            {laps.map((lap) => (
            <li key={lap.id}>
                {lap.name} - {formatTime(lap.time)}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default bai5
