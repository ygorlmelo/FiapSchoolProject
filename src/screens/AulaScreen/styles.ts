import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleView = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 14px;
`;

export const TitleText = styled.Text<{ bold?: boolean }>`
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const TitleInfoView = styled.View`
  width: 100%;
  align-items: center;
  padding-top:12px;
`;

export const SubTitleText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const DescriptionText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

export const DropdownContainer = styled.View`
  width: 110%;
  align-items: center;
`;

export const SectionTitleText = styled.Text<{ bold?: boolean }>`
  color: #00FFFF;
  margin-top: 20px;
  font-size: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

