import React, { useEffect, useState } from "react"
import { Calendar } from "react-calendar"

const CalendarDiv: React.FC = () => {

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        console.log(date)
    }, [date])
    return (
        <div className="grid grid-rows-auto h-[30%] max-h-[30rem]
    bg-secondaryBlueBoxes">

            < Calendar
                showNeighboringMonth={false}
                value={date} />
            <div className="border-t-[0.02rem] border-[#b8b8b8]
            py-4 pl-3 bg-secondaryBlueBoxes">
                <p className="bg-primaryPurple max-w-[5em] text-center
                text-[0.8rem] py-1 rounded-lg text-black font-bold"
                    onClick={() => setDate(new Date())}>
                    Today
                </p>
            </div>
        </div>

    )
};

export default CalendarDiv;
