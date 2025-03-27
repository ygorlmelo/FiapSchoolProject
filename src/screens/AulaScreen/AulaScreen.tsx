import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Title, SubTitle, Description, SectionTitle, Dropdown, StyledImage, ImageCaption } from './styles';

const AulaScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/fiap.png')} style={{ width: 80, height: 30 }} resizeMode="contain" />
        <TouchableOpacity>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>TROCAR PERFIL</Text>
        </TouchableOpacity>
      </Header>

      <Title>Olá, <Text style={{ fontWeight: 'bold' }}>GUSTAVO</Text></Title>
      <SubTitle>RAFAEL</SubTitle>
      <Description>7EF - RM 12567 - Matutino</Description>

      <SectionTitle>AGENDA</SectionTitle>
      <Dropdown>
        <Text style={{ color: '#000' }}>16 de março, domingo</Text>
      </Dropdown>

      <StyledImage source={require('../../assets/aulaLogo.png')} resizeMode="contain" />
      <ImageCaption>Sem aulas neste dia</ImageCaption>
    </Container>
  );
};

export default AulaScreen;
