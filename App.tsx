import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator, AuthNavigator } from '@navigation';
import { AuthProvider, useAuth } from '@contexts';
import { StyleSheet } from 'react-native';

const Navigator: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: 'black' },
});

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <NavigationContainer>
          <AuthProvider>
            <Navigator />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
