function Calendar(){
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <>
            <div className="container mx-auto p-4">
                <div>
                    <h2 className="text-center">Week</h2>
                </div>
                <div className="flex space-x-2">
                    {weekdays.map((day) => {
                        return(
                            <div key={day}>{day}</div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Calendar;