import React, {useEffect, useState} from 'react';
import {dateConverter} from "../../../shared/utils/utils";

const Time = () => {

    const [currenTime, SetCurrenTime] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(() => {
            const time = dateConverter(new window.Date(), "hh:mm A")
            const trimmedTime = time.replace(/^0/, "");
            SetCurrenTime(trimmedTime)
        }, 1000)

        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <div>
            {currenTime}
        </div>
    );
};

export default Time;