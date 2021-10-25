import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { View, Text } from 'react-native';
import { TimeFormat, TimerProps } from './Timer.props';
import useStyles from './styles';

interface TimeInfo {
  hours: string;
  minutes: string;
  seconds: string;
  isTimesUp: boolean;
}

const Timer = forwardRef(
  (
    {
      description,
      timesUpMessage,
      format = TimeFormat.MM_SS,
      onTimesup,
      containerStyles,
      descriptionStyles,
      timmerStyles,
    }: TimerProps,
    ref
  ) => {
    const styles = useStyles();
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const [timeLeft, setTimeLeft] = useState<TimeInfo | null>(null);

    useImperativeHandle(ref, () => ({
      startTimer: (durationSeconds: number) => {
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + durationSeconds);

        setDueDate(deadline);
      },
    }));

    useEffect(() => {
      if (dueDate) {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft(dueDate));
        }, 1000);

        return () => clearTimeout(timer);
      }
      return () => {};
    });

    useEffect(() => {
      if (timeLeft?.isTimesUp && onTimesup) {
        onTimesup();
      }
    }, [onTimesup, timeLeft?.isTimesUp]);

    if (!dueDate || !timeLeft) return null;

    const { hours, minutes, seconds, isTimesUp } = timeLeft;

    const mapObj: Record<string, string> = {
      HH: hours,
      MM: minutes,
      SS: seconds,
    };

    if (isTimesUp)
      return <Text style={[styles.timer, timmerStyles]}>{timesUpMessage}</Text>;

    return (
      <View style={[styles.container, containerStyles]}>
        {description && (
          <Text style={[styles.description, descriptionStyles]}>
            {description}
          </Text>
        )}
        <Text style={[styles.timer, timmerStyles]}>
          {format.replace(/HH|MM|SS/gi, (matched) => mapObj[matched])}
        </Text>
      </View>
    );
  }
);

const calculateTimeLeft = (dueDate: Date): TimeInfo => {
  const pad = (d: number): string => ('0' + d).slice(-2);
  const difference = +new Date(dueDate) - +new Date();

  if (difference <= 0) {
    return {
      hours: pad(0),
      minutes: pad(0),
      seconds: pad(0),
      isTimesUp: true,
    };
  }

  return {
    hours: pad(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: pad(Math.floor((difference / 1000 / 60) % 60)),
    seconds: pad(Math.floor((difference / 1000) % 60)),
    isTimesUp: false,
  };
};

export default Timer;
