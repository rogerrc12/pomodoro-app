import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface ButtonProps {
  onToggleTimer: () => void;
  isRunning: boolean;
}

function Button({ onToggleTimer, isRunning }: ButtonProps) {
  const iconName = isRunning ? "stop" : "play";

  return (
    <Pressable onPress={onToggleTimer}>
      <View style={buttonStyles.buttonWrapper}>
        <FontAwesome5 name={iconName} size={40} color="#fff" />
      </View>
    </Pressable>
  );
}

const buttonStyles = StyleSheet.create({
  buttonWrapper: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#7199c1",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
