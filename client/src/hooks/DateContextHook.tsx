import React, { Dispatch, SetStateAction, createContext, useState, ReactNode } from "react";

interface DateContextType {
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
}

// Context that will be used in components
export const DateContext = createContext<DateContextType>({} as DateContextType);

export const DateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </DateContext.Provider>
    );
};