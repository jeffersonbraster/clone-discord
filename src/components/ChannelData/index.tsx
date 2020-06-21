import React, {useRef, useEffect} from 'react';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessage, {Mention} from '../ChannelMessage';



const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
      {Array.from(Array(15).keys()).map((n) => (
         <ChannelMessage author="Jefferson Brandão" date="21/06/2020" content="Hoje é o meu aniversário." />
        ))}
        

        <ChannelMessage author="André Brandão" date="21/06/2020" content={
        <>
          <Mention>@Jefferson Brandão</Mention>, Eu adoro testar o Rafael!
        </>
        }
        isBot
         />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar no #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;