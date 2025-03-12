import { useCalendarView } from '@context/CalendarViewContext';
import Day from '@calendar/Day'
import Month from '@calendar/Month'
import Week from '@calendar/Week'


function Home (){
  const { calendarView } = useCalendarView();

  return (
    <div className="flex flex-grow overflow-hidden">
      {calendarView === 'month' && <Month/>}
      {calendarView === 'week' && <Week/>}
      {calendarView === 'day' && <Day/>}
    </div>
  );
};

export default Home;