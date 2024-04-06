import React, { useContext } from "react"
import { Calendar } from "react-calendar"
import { DateContext } from "../hooks/DateContextHook";

const CalendarDiv: React.FC = () => {

    const { selectedDate, setSelectedDate } = useContext(DateContext)


    return (
        <div className="grid grid-rows-auto h-[30%] max-h-[30rem]
    bg-secondaryBlueBoxes">

            <Calendar
                showNeighboringMonth={false}
                value={selectedDate}
                onClickDay={(value) => setSelectedDate(value)}
                tileClassName={({ date }) => {
                    return date.getDate() === selectedDate.getDate() &&
                        date.getMonth() === selectedDate.getMonth() &&
                        date.getFullYear() === selectedDate.getFullYear()
                        ? 'selectedDate' : null;
                }}
            />
            <div className="border-t-[0.02rem] border-[#b8b8b8]
            py-4 pl-3 bg-secondaryBlueBoxes">
                <p className="bg-primaryPurple max-w-[5em] text-center
                text-[0.8rem] py-1 rounded-lg text-black font-bold"
                    onClick={() => setSelectedDate(new Date())}>
                    Today
                </p>
            </div>
        </div>

    )
};

export default CalendarDiv;
