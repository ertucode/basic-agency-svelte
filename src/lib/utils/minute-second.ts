const minTwoDigitNum = (num: number) => (num < 10 ? `0${num}` : num);

export const minuteSecond = (sec: number | undefined | null) => {
	if (!sec) return '00:00';

	const mins = Math.floor(sec / 60);
	const secs = Math.floor(sec % 60);

	return `${minTwoDigitNum(mins)}:${minTwoDigitNum(secs)}`;
};
