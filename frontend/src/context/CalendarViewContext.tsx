import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the possible views as a type
type CalendarView = 'day' | 'week' | 'month';

// Define the context value shape
interface CalendarViewContextType {
  calendarView: CalendarView;
  setCalendarView: React.Dispatch<React.SetStateAction<CalendarView>>;
}

// Create the context
const CalendarViewContext = createContext<CalendarViewContextType | undefined>(undefined);

// Create a provider component
export function CalendarViewProvider({ children }: { children: ReactNode })  {
  const [calendarView, setCalendarView] = useState<CalendarView>('week'); // Default view: 'week'

  return (
    <CalendarViewContext.Provider value={{ calendarView, setCalendarView }}>
      {children}
    </CalendarViewContext.Provider>
  );
};

// Custom hook for easier access
export const useCalendarView = (): CalendarViewContextType => {
  const context = useContext(CalendarViewContext);
  if (!context) {
    throw new Error('useCalendarView must be used within a CalendarViewProvider');
  }
  return context;
};

