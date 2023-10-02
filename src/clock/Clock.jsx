import ClockBackground from "./ClockBackground";
import ClockPointer from "../pointer/ClockPointer";
import { useEffect, useState } from "react";
import City from "../text/City";
import Time from "../text/Time";

const Clock = (props) => {
	const [light, setLight] = useState(true);
	const [hourDeg, setHourDeg] = useState(0);
	const [minuteDeg, setMinuteDeg] = useState(0);
	const [secondDeg, setSecondDeg] = useState(0);
	const [hour, setHour] = useState();
	const [min, setMin] = useState();
	const [sec, setSec] = useState();
	const [year, setYear] = useState();
	const [month, setMonth] = useState();
	const [day, setDay] = useState();
	const deg = 6;

	const addZero = (obj) => obj < 10 ? "0" + obj : obj;

	const setTime = () => {
		let now = new Date();
		let day = new Date(now.getTime() + props.timezone * 3600000);
		let hDeg = day.getUTCHours() * deg * 5;
		let mDeg = day.getUTCMinutes() * deg;
		let sDeg = day.getUTCSeconds() * deg;
		setHourDeg(hDeg + mDeg / 12);
		setMinuteDeg(mDeg + sDeg / 12);
		setSecondDeg(sDeg);
		setHour(addZero(day.getUTCHours()));
		setMin(addZero(day.getUTCMinutes()));
		setSec(addZero(day.getUTCSeconds()));
		setYear((day.getUTCFullYear()));
		setMonth(addZero(day.getUTCMonth() + 1));
		setDay(addZero(day.getUTCDate()));
	};

	const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

	useEffect(() => {
		setTime();
		const interval = setInterval(() => {
			setTime();
		}, 100);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (+hour >= 19 || +hour < 6) { // +string: change string to number
			setLight(false);
		}
	}, [hour]);

	return (
		<ClockBackground>
			<City>{props.city}</City>
			<ClockPointer
				is_white={light}
				hourDeg={hourDeg}
				minuteDeg={minuteDeg}
				secondDeg={secondDeg}
			/>
			<Time>{date}</Time>
		</ClockBackground>
	);
};

export default Clock;