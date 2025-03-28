import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/types';
import { HeaderContainer, Logo, ProfileButton, ProfileButtonText } from './styles';

interface HeaderProps {
  showChangeProfile?: boolean;
}

type HeaderNavigationProp = StackNavigationProp<RootStackParamList>;

const Header: React.FC<HeaderProps> = ({ showChangeProfile }) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const handleTrocarPerfil = () => {
    navigation.navigate('SelecaoPerfil');
  };

  return (
    <HeaderContainer>
      <Logo source={require('../../assets/fiap.png')} />
      {showChangeProfile && (
        <ProfileButton onPress={handleTrocarPerfil}>
          <ProfileButtonText>TROCAR PERFIL</ProfileButtonText>
        </ProfileButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
