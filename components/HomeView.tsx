import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme,View} from 'react-native';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
}>;

export default function HomeView({
  children,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={styles.container}>
        <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    fontFamily:'AsapItalic',
    flex:1,
  },
  content: {
    flex: 1,                // Takes up all available space
    justifyContent: 'space-between', // Distributes space evenly between children
    alignItems: 'center',   // Centers children horizontally (in this case, the button)
    padding: 32,            // Optional: Adds padding around the edges of the container
  }
});
