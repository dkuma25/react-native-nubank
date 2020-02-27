import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import { 
  Container, Content, Card, CardHeader, CardContent, CardFooter,
  Title, Description, Annotation
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={20} color="#666" />
            <Icon name="visibility-off" size={20} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebido de Gabriel Gomes da Cunha hoje às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  )
};
