/* eslint-disable linebreak-style */
import React from 'react';
import PageDefault from '../../components/PageDefault';

export default function Pagina404() {
  return (
    <PageDefault>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
      }}
      >
        <h1>Easter Egg 404: Bem vindo(a) às Aventuras da Nenena!</h1>
        <p>
          <a href="/">Voltar pra Home :)</a>
        </p>
        {/*
            Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui:
            - https://codepen.io/omariosouto/pen/pogmdGE
            E quem quiser programar o jogo:
            - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
        */}
        <iframe
          title="As Aventuras da Nenena"
          src="https://editor.p5js.org/leandro-ikehara/embed/4bqJQH2Ep"
          width="800"
          height="450"
        />
      </div>
    </PageDefault>
  );
}
