
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
  
export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());
  
    return (
        <div>
            <h1>Calendario</h1>
            
            <Calendar className="text-black"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}