import React, { useContext, useState } from "react"
import { Calendar } from "react-calendar"
import { DateContext } from "../hooks/DateContextHook";

const CalendarDiv: React.FC = () => {

    const { selectedDate, setSelectedDate } = useContext(DateContext)

    const [clickable, setClickable] = useState<boolean>(true)

    /* 
    This function is used for handling click on month day of calendar
    It has 500 ms delay, so that user must wait 0.5s before 
    monthday becomes clickable again
    */
    const handleClick = (value: Date) => {
        if (clickable) {
            setSelectedDate(value)
            setClickable(false)
            setTimeout(() => {
                setClickable(true)
            }, 500)
        }
    }
    return (
        <div className="grid grid-rows-[85%_15%] max-h-[30rem]
    bg-secondaryBlueBoxes rounded-xl">

            <Calendar
                showNeighboringMonth={false}
                value={selectedDate}
                onClickDay={(value) => handleClick(value)}
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
                text-[0.8rem] py-1 rounded-lg text-black font-bold cursor-pointer"
                    onClick={() => window.location.reload()}>
                    Today
                </p>
            </div>
        </div>

    )
};

export default CalendarDiv;
