import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Avatar from '../../static/img/avatar.svg';
// import {ReactComponent as ReactAvatar}  from '@site/static/img/avatar.svg';
import Icon from "@material-ui/core/Icon";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const ReactAvatar = require('@site/static/img/avatar2.svg').default;
  return (
    <header id="matrix" className={clsx('hero hero--primary', styles.heroBanner)}>
      MyCV
    </header>
  );
}

function CurriculumEmbed(){
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <a href={siteConfig.url+"/proyects/Intro"}>Para mas informacion ir a proyectos.</a>
      <object  data={siteConfig.url+"/juan_retamales_cv.pdf"}></object>
    </div>
  );
}

function AvatarUser(){
  const {siteConfig} = useDocusaurusContext();
  return (
    <div class="avatar avatar--vertical">
      <img
        class="avatar__photo avatar__photo--xl"
        src="https://picsum.photos/400/400" />
      <div class="avatar__intro">
        <div class="avatar__name">Juan Pablo Retamales Lepe</div>
        <small class="avatar__subtitle">
          Analista de datos y Desarrollador de aplicaciones
        </small>
      </div>
    </div>
  )
}

function AddCircleIcon(iconName){
  return (<div className='circle light'><Icon>{iconName}</Icon></div>);
}

function Experiencias(){
  const experiences = [
      {
        role: 'Analista de datos y desarrollador de aplicaciones',
        time: '2021-2022',
        company: 'SUNAI spa',
        details: "Experiencia trabajando con la obtención de datos desde múltiples API, así como también conocimientos básicos de los servicios AWS de Amazon. \
          además, de crear automatizaciones con Python y gestionados con Jenkins."
      },
      {
        role: 'Extracción de datos e importación a bases de datos',
        time: '2021-2022',
        company: 'Freelance',
        details: "Experiencia en el desarrollo de automatizaciones y extracción de datos (Scraping) en Python  \
          para el portal de Lukas Lok Spa, para la generación de reportes para los diversos clientes. \
          Ademas de la automatizacion de descarga de reportes de distintos sitios bancarios y de delivery para realizar cuadraturas de caja. \
          Tambien de la publicacion de la biblioteca 'DataframeToDB' en el repositorio oficial de python pypi, el cual ayuda en la exportacion de datos a bases de datos relacionales. "
      },
      {
        role: 'Analista de datos y Desarrollador de aplicaciones',
        time: '2020',
        company: 'SoluData Spa',
        details: "Experiencia en el desarrollo de informes en Power Bi, incluyendo normalización de datos. Ademas desarrollando automatizaciones y \
            extracción de datos (Scraping) en Python en distintos sitios como Transbank, Banco Santander, Uber Eats, entre otros. \
            También se colaboro en el proceso de creación de modelos predictivos para el turismo en la región de Atacama."
      }
    ]
  return (
    <div class="container" id='skills'>
      {experiences.map((experiences,index)=>{

      return (
          <div class="row">
            <div class="container">
              <div class="row subtitle">
                <label class="col col--9 ">{experiences.role} </label>
                <span class="col col--3">{experiences.company} ({experiences.time})</span>
              </div>
              
              <div class="row">{experiences.details}</div>
            </div>
          </div>
        )

      })}
    </div>
  )
}

function Educacion(){
  const education = [
      {
        degree: 'Ingeniero Civil en Informática',
        university: 'Universidad de Santiago de Chile',
        time: '2016-2019',
        details: "Titulado en ingeniería civil en informática, con experiencia en proyectos \
                  de alta envergadura de asignaturas electivas de redes neuronales, \
                  computación de alto rendimiento, y dirección y gestión de empresas."
      },
      {
        degree: 'Ingeniero en Informática',
        university: 'Instituto Profesional Duoc UC',
        time: '2012-2014',
        details: "Titulado en ingeniería en informática de la escuela de informática y \
                  telecomunicaciones, miembro activo en ese periodo del Centro de \
                  Innovación de Transferencia Tecnológica y del taller de RFID."
      }
    ]
  return (
    <div class="container" id='education'>
      {education.map((education,index)=>{

      return (
          <div class="row">
            <div class="container">
              <div class="row subtitle">
                <label class="col ">{education.degree} </label>
              </div>

              <div class="row">
                <span class="col col--8 ">{education.university} </span>
                <span class="col col--4"> ({education.time})</span>
              </div>
              
              <div class="row">{education.details}</div>
            </div>
          </div>
        )

      })}
    </div>
  )
}

function CurriculumOnline(){
  const {siteConfig} = useDocusaurusContext();
  return (
    <div class="container">
      <div class="row">
        <div class="col col--8">
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col col--2">
                  {AddCircleIcon('personicon')}
                </div>
                <div class="col col--6 title">
                  Perfil Profesional
                </div>
              </div>
              <div class="row">
                Líder de proyectos informáticos, titulado en ingeniería civil en informática en USACH e 
                ingeniería en informática de Duoc UC, con experiencia en el diseño, construcción e 
                implementación de soluciones e-business y e-comerce con tecnología de la información. 
                Experiencia extrayendo información y automatizando tareas, ademas de crear reportes 
                en Power Bi.
              </div>
              <div class="row">
                <div class="col col--2">
                  {AddCircleIcon('work')}
                </div>
                <div class="col col--6 title">
                  Experiencia
                </div>
              </div>
              <div class="row">
                <Experiencias />
              </div>
            </div>
          </div>
          <div class="row">
            
          </div>
        </div>
        <div class="col col--4 sidebar">
          <AvatarUser />
          <Educacion />
        </div>
      </div>
      {/* <a href={siteConfig.url+"/proyects/Intro"}>Para mas informacion ir a proyectos.</a>
      <object  data={siteConfig.url+"/juan_retamales_cv.pdf"}></object> */}
    </div>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <CurriculumOnline />
      </main>
    </Layout>
  );
}
