import { type TimerTypes } from "@/types";
import { StyleSheet, Text, View } from "react-native";

interface TimerCountProps {
  time: Date;
  mode: TimerTypes;
}

function TimerCount({ time, mode }: TimerCountProps) {
  return (
    <View style={styles.timerWrapper}>
      <Text style={styles.timerCount}>
        {time.getMinutes().toString().padStart(2, "0")}:
        {time.getSeconds().toString().padStart(2, "0")}
      </Text>
      <View style={styles.spacer} />
      <Text style={styles.label}>Time to {mode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerWrapper: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    borderColor: "rgba(166, 191, 216, .5)",
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  timerCount: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#a6bfd8",
  },
  label: {
    color: "#fff",
    fontSize: 26,
  },
  spacer: {
    marginVertical: 4,
  },
});

export default TimerCount;
