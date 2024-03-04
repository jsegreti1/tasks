/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    enum Holiday {
        Christmas = "🎄",
        New_Years_Day = "🎉",
        Halloween = "🎃",
        Thanksgiving = "🦃",
        Valentines_Day = "💘"
    }

    const [holiday, setHoliday] = useState<Holiday>(Holiday.Christmas);

    function alphabet(): void {
        switch (holiday) {
        case Holiday.Christmas:
            setHoliday(Holiday.Halloween);
            break;
        case Holiday.Halloween:
            setHoliday(Holiday.New_Years_Day);
            break;
        case Holiday.New_Years_Day:
            setHoliday(Holiday.Thanksgiving);
            break;
        case Holiday.Thanksgiving:
            setHoliday(Holiday.Valentines_Day);
            break;
        case Holiday.Valentines_Day:
            setHoliday(Holiday.Christmas);
            break;
        }
    }

    function time(): void {
        switch (holiday) {
        case Holiday.Christmas:
            setHoliday(Holiday.New_Years_Day);
            break;
        case Holiday.Halloween:
            setHoliday(Holiday.Thanksgiving);
            break;
        case Holiday.New_Years_Day:
            setHoliday(Holiday.Valentines_Day);
            break;
        case Holiday.Thanksgiving:
            setHoliday(Holiday.Christmas);
            break;
        case Holiday.Valentines_Day:
            setHoliday(Holiday.Halloween);
            break;
        }
    }

    return (
        <div>
            <Button onClick={alphabet}>Cycle by Alphabet</Button>
            <Button onClick={time}>Cycle by Time of Year</Button>
            {<div>Holiday: {holiday}</div>}
        </div>
    );
}
