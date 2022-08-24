const formatTime = (input: string | number) => {
	let date: Date;

	date = new Date(input);

	let hours = date?.getHours();
	const APM = hours < 12 ? 'AM' : 'PM';
	hours = hours > 12 ? hours - 12 : hours;

	let minutes: number | string = date?.getMinutes();
	minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

	return `${hours}:${minutes} ${APM}`;
};

export default formatTime;
