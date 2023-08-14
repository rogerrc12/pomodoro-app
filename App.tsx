import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "@/components/Button";
import TimerCount from "@/components/TimerCount";
import { type TimerTypes, ETimerMode } from "@/types.d";

const FOCUS_COUNT = 25 * 60 * 1000;
const BREAK_COUNT = 5 * 60 * 1000;

export default function App() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_COUNT);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerTypes>("focus");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerCount < 0) {
      stopTimer();
      if (timerMode === ETimerMode.FOCUS) {
        setTimerMode(ETimerMode.BREAK);
        setTimerCount(BREAK_COUNT);
      } else {
        setTimerMode(ETimerMode.FOCUS);
        setTimerCount(FOCUS_COUNT);
      }
    }
  }, [timerCount, timerMode]);

  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = setInterval(
      () => setTimerCount((prev) => prev - 1000),
      1000
    );
  };
  const stopTimer = () => {
    setIsRunning(false);

    if (timerRef.current) clearInterval(timerRef.current);
  };

  const time = new Date(timerCount);
  const toggleTimer = !isRunning ? startTimer : stopTimer;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: timerMode === ETimerMode.BREAK ? "#436281" : "#454545",
      }}
    >
      <StatusBar style="auto" />
      <TimerCount time={time} mode={timerMode} />
      <View style={styles.footer}>
        <Button onToggleTimer={toggleTimer} isRunning={isRunning} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#454545",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
