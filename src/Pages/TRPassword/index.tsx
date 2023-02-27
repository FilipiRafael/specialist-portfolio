import { useState } from 'react';
import { Navbar } from '../../Components/Navbar';
import {
  Container,
  ProjectLogo,
  Title,
  Wrapper,
  WrapperResetPassword,
  PasswordInput,
  EmailInput,
  Button,
  WrapperInfo
} from './styles';

import TodoRocket from '../../assets/todorocket.svg';
// import { supabase } from '../../services/supabase';

export const TRPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const resetPassword = async () => {
    // if (!email || !password) return alert('Please fill out all the fields.');

    // const { data, error } = await supabase.from('users').select('id').eq('email', email);
    // if (error) return alert('There was an error resetting your password.');

    // const userId = data;
    
    // if (userId) {
    //   // const { data, error } = await supabase.auth.admin.updateUserById(userId[0].id, {password});
    //   const { data, error } = await supabase.auth.updateUser(userId[0].id, {password});

    //   if (error) return alert('There was an error resetting your password.');
    //   if (data) return alert('Password reset successfully!');
    // };
  };

  return (
    <Container>
      <Navbar actualPage='' />

      <Wrapper>
        <WrapperResetPassword>
          <WrapperInfo>
            <Title>Reset your password</Title>
          </WrapperInfo>
          <WrapperInfo>
            <EmailInput
              type='email'
              placeholder='Type your email'
              value={email}
              onChange={text => setEmail(text.target.value)}
            />
            <PasswordInput
              type='password'
              placeholder='Type your new password'
              value={password}
              onChange={text => setPassword(text.target.value)}
            />
            <Button onClick={resetPassword}>
              Reset password
            </Button>
          </WrapperInfo>
        </WrapperResetPassword>
        <ProjectLogo src={TodoRocket} alt='Project Logo' />
      </Wrapper>
    </Container>
  )
}