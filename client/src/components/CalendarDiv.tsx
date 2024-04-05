import React, { useState } from "react"
import { Calendar } from "react-calendar"

const CalendarDiv: React.FC = () => {

    const [date, setDate] = useState<Date>(new Date())

    return (
        <div className="grid grid-rows-auto h-[30%] max-h-[30rem]
    mt-12 bg-secondaryBlueBoxes">

            < Calendar
                value={date} />
            <div className="border-t-[0.02rem] mt-4 border-[#b8b8b8]
            py-4 pl-3 bg-secondaryBlueBoxes">
                <p className="bg-primaryPurple max-w-[5em] text-center
                text-[0.8rem] py-1 rounded-lg text-black font-bold">
                    Today
                </p>
            </div>
        </div>

    )
};

export default CalendarDiv;
