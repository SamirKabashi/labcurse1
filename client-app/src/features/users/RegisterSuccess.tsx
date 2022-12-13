import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from './LoginForm';

export default function RegisterSuccess() {
    const { modalStore } = useStore();


    return (
        <Segment placeholder textAlign='center'>
            <Header icon color='green'>
                <Icon name='check'/>
                Successfully registered!
            </Header>
            <Button background-color='blue' onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>Login!</Button>
        </Segment>
    )
}