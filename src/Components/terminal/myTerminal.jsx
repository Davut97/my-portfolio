import React from 'react';
import Terminal from 'react-console-emulator';

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn() {
      // eslint-disable-next-line prefer-rest-params
      return `${Array.from(arguments).join(' ')}`;
    },
  },
  about: {
    description: 'about me and this place.',
    usage: 'about',
    fn() {
      // eslint-disable-next-line prefer-rest-params
      return "Hi. I'm Aydin. I'm a front-end developer.If you need something, you can directly ask for the information you need, the good ol CLI way.";
    },
  },
  contact: {
    description: 'Find a way to contact me',
    usage: 'contact',
    fn() {
      return (
        <>
          <p>Email: aydindavut14@gmail.com,</p>

          <p> Github: Davut97</p>
        </>
      );
    },
  },
};

const MyTerminal = () => {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Terminal
        commands={commands}
        style={{ width: '100%', minHeight: '900px' }}
        welcomeMessage="Hi. Make yourself at home. Don't hesitate to ask for help if you need it!"
        promptLabel="me@BadPanda:~$"
      />
    </div>
  );
};
export default MyTerminal;
