import React from 'react';

// Import Images

import Banner from '../../assets/images/banner-about.jpg';
import Header from '../../components/Header';
import AboutHeader from '../../containers/AboutHeader';
import VideoContainer from '../../containers/VideoContainer';
import { Main, Grid } from './style';
import TeachersContainer from '../../containers/TeachersContainer';
import Card from '../../components/Card';

const About = () => (
  <>
    <Header url={Banner} height={80} component={<AboutHeader />} />
    <VideoContainer />
    <Main>
      <p>
        O SanarFlix é a maior plataforma online de educação médica do Brasil,
        que tem como objetivo ajudar o estudante de medicina de maneira prática,
        rápida e divertida! Queremos fazer com que seu estudo seja bem
        direcionado, que você tenha tempo suficiente para estudar tudo o que
        precisa e que isso seja feito de forma didática e completa. Por isso, o
        Sanarflix será seu maior aliado nos estudos! Temos uma grande
        disponibilidade de aulas e trabalhamos com dois métodos, o #Aprenda e o
        #Aprofunde Nas aulas #Aprenda, você verá o assunto de forma
        introdutória, destacando os aspectos básicos essenciais para a melhor
        compreensão. Nas aulas #Aprofunde, consideramos que você já tem uma base
        sobre o assunto e falamos agora de uma forma mais profunda, trazendo
        detalhes com foco principalmente na prática médica. Além disso, os
        cursos possuem diversos materiais complementares (resumos, mapas
        mentais, fluxogramas, questões comentadas, artigos) para que o processo
        do seu aprendizado seja supereficiente! E para fixar e colocar em
        prática o conhecimento adquirido, temos o Clube de Casos, espaço criado
        para que os usuários SanarFlix discutam casos clínicos com especialistas
        renomados, através de lives semanais com bate-papo ao vivo. Pronto!
        Assim nossa fórmula do sucesso está finalizada e você tem tudo para
        aproveitar melhor a sua jornada na medicina. Vem ser SanarFlix!
        Disponibilizamos:
      </p>
      <Grid>
        <Card
          title="Aulas didáticas e objetivas"
          subtitle="Aulas didáticas e objetivas que você pode assistir quantas vezes quiser."
          image="https://i.imgur.com/fZbDmUD.png"
        />
        <Card
          title="Mapas mentais"
          subtitle="Mapas mentais dos principais temas para que você possa revisar com mais facilidade os assuntos."
          image="https://i.imgur.com/cHuFPF3.png"
        />
        <Card
          title="Questões comentadas"
          subtitle="Questões comentadas para que você possa colocar em prática e aprender com os seus erros."
          image="https://i.imgur.com/NKUUUgf.png"
        />
        <Card
          title="Manuais, diretrizes e artigos"
          subtitle="Acesso rápido aos principais materiais públicos de referência como manuais, diretrizes e artigos."
          image="https://i.imgur.com/NKUUUgf.png"
        />
        <Card
          title="Fluxogramas"
          subtitle="Fluxogramas com o passo a passo de manejo com pacientes, doenças e casos clínicos."
          image="https://i.imgur.com/DL41VXV.png"
        />
        <Card
          title="E muito mais"
          subtitle="Equipe de professores padrão USP."
          image="https://i.imgur.com/y671pPS.png"
        />
      </Grid>
      <p>
        Toda semana novas aulas e novos materiais são acrescentados à
        plataforma. Confira todo conteúdo disponível clicando em ‘Todos os
        Cursos’. Experimente o SanarFlix e descubra o que é ter uma rotina de
        estudos otimizada!s
      </p>
      <h2>Conheça nossos professores</h2>
    </Main>
    <TeachersContainer />
  </>
);
export default About;
