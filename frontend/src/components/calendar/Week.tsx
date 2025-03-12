import React from "react";

const getWeekDates = () => {
    const currentDate = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the current weekday number (0 for Sunday, 1 for Monday, etc.)
    const currentDay = currentDate.getDay();

    // Calculate the dates for the whole week
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const dayOffset = i - currentDay; // Calculate how many days to subtract/add
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() + dayOffset); // Adjust the date based on the offset
        const dayName = weekDays[day.getDay()];
        const dayNumber = day.getDate(); // Get the date number (e.g., 25)
        const isToday = i === currentDay;
        weekDates.push({ dayName, dayNumber, isToday });
    }

    return weekDates;
};

const Day: React.FC<{ dayName: string; dayNumber: number; isToday: boolean }> = ({ dayName, dayNumber, isToday }) => {
    return (
        <div className="flex flex-col flex-1 h-fit">
            <div className={`card ${isToday ? "bg-primary text-primary-content" : "bg-base-100 text-base-content"} rounded-full`}>
                <div className="card-bod !p-0">
                    <p className="text-lg font-bold text-center">{dayName}</p>
                    <p className="text-md font-semibold text-center">{dayNumber}</p>
                </div>
            </div>
        </div>
    );
};

const TimeSlot: React.FC = () => {
    // Array of hours from 12 AM to 12 AM
    const hours = Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 || 12; // Convert to 12-hour format
        const period = i < 12 ? "AM" : "PM"; // Determine AM/PM
        return `${hour} ${period}`;
    });

    return (
        <div className="flex flex-col w-20 bg-base-200 overflow-y-auto h-full">
            {hours.map((hour, index) => (
                <div
                    key={index}
                    className="h-12 border-b border-base-300 flex items-center justify-center text-sm font-semibold"
                >
                    {hour}
                </div>
            ))}
        </div>
    );
};

const Week: React.FC = () => {
    const weekDates = getWeekDates(); // Get all the days of the week and their numbers

    return (
        <div className="h-full card flex flex-col border-2 bg-base-300 border-base-100 shadow-md min-w-full gap-2 px-2">
            {/* Weekday Headers*/}
            <div className="grid grid-cols-8 gap-2 z-10">
                <div className="bg-base-300 flex items-center justify-center">
                    {/* Empty cell for time slot column */}
                </div>
                {weekDates.map((date, index) => (
                    <div key={index} className="flex items-center justify-center py-2">
                        <Day dayName={date.dayName} dayNumber={date.dayNumber} isToday={date.isToday} />
                    </div>
                ))}
            </div>


            {/* <div className="card flex flex-row border-2 bg-base-300 border-base-100 shadow-md min-w-full">
                <TimeSlot/>
                <div className="card-body p-2">
                    <div className="flex flex-row gap-1 h-full">
                        {weekDates.map((date, index) => (
                            <React.Fragment key={index}>
                                <Day dayName={date.dayName} dayNumber={date.dayNumber} isToday={date.isToday}/>
                                {index !== 6 && <div className="divider divider-horizontal !m-0"></div>} {/* Avoid divider after Sunday */}
                            {/* </React.Fragment> */}
                        {/* ))} */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */} 

            {/* Scrollable time slots and day cells */}
            <div className="flex-grow overflow-hidden ">
                <div className="grid grid-cols-8">
                    {/* Time slots column */}
                    <div className="bg-base-200">
                        <TimeSlot />
                    </div>
                    {/* Days columns */}
                    {weekDates.map((_, index) => (
                        <div key={index} className="border-l border-base-300">
                            {/* Add time slot blocks or events here */}
                            <div className="grid grid-rows-24 h-full">
                                {Array.from({ length: 24 }).map((_, hourIndex) => (
                                    <div key={hourIndex} className="h-12 border-b border-base-300"></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        

    );
};

export default Week;