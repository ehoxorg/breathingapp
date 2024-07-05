import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import * as Font from 'expo-font';


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
    justifyContent:'center',
    flex: 1,
    alignItems:'flex-end',
    fontFamily:'AsapItalic',
  },
  content: {
    padding: 32,
    gap: 64,
    overflow: 'hidden',
    alignItems:'center',
    fontFamily:'AsapItalic',
  },
});
