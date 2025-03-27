import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#262626',
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const TabIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TabIcon = styled.Image`
  width: 48px;
  height: 48px;
  resize-mode: contain;
`;
