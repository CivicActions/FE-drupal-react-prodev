export default function TimeDisplay({timeInSeconds}: { timeInSeconds: number }) {
  const [hours, minutes, seconds] = useHoursMinutesSeconds(timeInSeconds);

  const toPaddedString = (value: number) => value.toString().padStart(2, '0')

  return (
    <time dateTime={`PT${hours}H${minutes}M${seconds}S`} role="timer">
      {`${toPaddedString(hours)}:${toPaddedString(minutes)}:${toPaddedString(seconds)}`}
    </time>
  );
}

function useHoursMinutesSeconds(timeInSeconds: number) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;
  return [hours, minutes, seconds] as const;
}
