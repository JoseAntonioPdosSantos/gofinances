import React from 'react';
import { Text, View } from 'react-native';
import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    User,
    Photo,
    UserGreeting,
    UserName
} from './style';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/12631140?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>José Antonio</UserName>
                        </User>
                    </UserInfo>
                </UserWrapper>
            </Header>
        </Container> 
    );
}
