import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/types';
import {
  HeaderContainer,
  Logo,
  ProfileButton,
  ProfileButtonText,
  LogoutButton,
  LogoutText,
  View,
  LogoutImage,
} from './styles';

interface HeaderProps {
  showChangeProfile: boolean;
  showLogoutButton?: boolean;
  onLogout?: () => void;
}

type HeaderNavigationProp = StackNavigationProp<RootStackParamList>;

const Header: React.FC<HeaderProps> = ({
  showChangeProfile,
  showLogoutButton,
  onLogout,
}) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  const handleTrocarPerfil = () => {
    navigation.navigate('SelecaoPerfil');
  };

  return (
    <HeaderContainer>
      <Logo source={require('../../assets/fiap.png')} />
      <View>
        {showChangeProfile && (
          <ProfileButton onPress={handleTrocarPerfil}>
            <ProfileButtonText>TROCAR PERFIL</ProfileButtonText>
          </ProfileButton>
        )}
        {showLogoutButton && (
          <LogoutButton onPress={onLogout}>
            <LogoutText>SAIR</LogoutText>
            <LogoutImage source={require('../../assets/logout.png')} />
          </LogoutButton>
        )}
      </View>
    </HeaderContainer>
  );
};

export default Header;
