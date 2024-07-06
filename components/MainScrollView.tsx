import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
}>;

export default function MainScrollView({
  children,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    fontFamily:'AsapItalic',
    flex:1,
  },
  content: {
    padding: 32,
    gap: 40,
    overflow: 'hidden',
    alignItems:'center',
  },
});
