import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { SvgIcon, makeStyles } from '@material-ui/core';
import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Avatar from '../../static/img/avatar.svg';
// import {ReactComponent as ReactAvatar}  from '@site/static/img/avatar.svg';
import Icon from "@material-ui/core/Icon";
// import { ReactComponent as GithubIcon } from '@site/static/svg/github1.svg'
import GithubIcon from '@site/static/svg/github1.svg'
import LinkedinIcon from '@site/static/svg/linkedin.svg'
import mailIcon from '@site/static/svg/mail.svg'
import phoneIcon from '@site/static/svg/phone.svg'
import { FaGithubAlt, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {BsReception4, BsServer, BsSun } from 'react-icons/bs';


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
        icon: <BsSun />,
        role: 'Analista de datos y desarrollador de aplicaciones',
        time: '2021-2022',
        company: 'SUNAI spa',
        details: "Experiencia trabajando con la obtención de datos desde múltiples fuentes de datos, principalmente APIs y archivos CSV a travez de ETL \
          personalizado escrito en Python, así como también conocimientos básicos de los servicios AWS de Amazon. \
          Además, de crear automatizaciones con Python y gestionarlas con el controlador de tareas automaticas con Jenkins. \
          Finalmente, experiencia en metodologia SCRUM-Kanban en un marco colaborativo de trabajo remoto con la plataforma \
          Jira y el sistema de versionamiento de archivos Git y Sublime Merge para trabajar con Gitlab"
      },
      {
        icon: <BsServer />,
        role: 'ETL y generación de reportes',
        time: '2021-2022',
        company: 'Freelance',
        details: "Experiencia en el desarrollo de automatizaciones, ETL y creación de reportes en Python en Excel y Outlock(correo).  \
          Algunos de los proyectos destacados son la creación de una automatización para la creación de reportes en Excel y Outlock desde distintas bases de datos. \
          Un ETL con scrapper del portal de Lukas Lok Spa, destinado a la generación de reportes para los diversos clientes de estos. \
          La automatizacion de descarga de reportes de distintos sitios bancarios y de delivery para realizar cuadraturas de caja. \
          Tambien de la publicacion de la biblioteca 'DataframeToDB' en el repositorio oficial de python pypi, el cual ayuda en la exportacion de datos a bases de datos relacionales. "
      },
      {
        icon: <BsReception4 />,
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
                {/* <div class="col col--2 ">{experiences.icon}<div/> */}
                
                <label class="col col--8 "> {experiences.role} </label>
                <span class="col col--4">{experiences.icon} {experiences.company} ({experiences.time})</span>
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
            <div class="container no-padding">
              <div class="row subtitle">
                <label class="col ">{education.degree} </label>
              </div>

              <div class="row">
                <span class="col col--8 university">{education.university} </span>
                <span class="col col--4 time"> ({education.time})</span>
              </div>
              
              <div class="row details">{education.details}</div>
            </div>
          </div>
        )

      })}
    </div>
  )
}

function Languages(){
  const lenguajes = [
      {
        idiom: 'Español',
        level: 'Nativo'
      },
      {
        idiom: 'Ingles',
        level: 'Medio y en formación'
      },
    ]
  return (
    <div class="container" id='Lenguages'>
      {lenguajes.map((lenguajes,index)=>{

      return (
              <div class="row">
                <span class="col col--6 center">{lenguajes.idiom} </span>
                <span class="col col--6 center"> ({lenguajes.level})</span>
              </div>
        )
      })}
    </div>
  )
}

function HyperLinks(){
  const Links = [
      {
        icon: <FaEnvelope />,
        label: 'jua.retamales@gmail.com',
        link: 'mailto:jua.retamales@gmail.com'
      },
      {
        icon: <FaPhoneAlt />,
        label: '+56 951 170 428',
        link: 'tel:+56 951 170 428'
      },
      {
        icon: <FaLinkedinIn />,
        label: 'juanretamales',
        link: 'https://linkedin.com/in/juanretamales'
      },
      {
        icon: <FaGithubAlt />,
        label: 'juanretamales',
        link: 'http://github.com/juanretamales'
      },
    ]
  return (
    <div class="container" id='contact'>
      {Links.map((Links,index)=>{

      return (
              <div class="row">
                <a class='row' href={Links.link}>
                  
                {/* <Icon fontSize='large'>{Links.icon}</Icon><label>{Links.label}</label> */}
                <div class='col col--2'>{Links.icon}</div>
                <label class='col col--10'>{Links.label}</label>
                
                </a>
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
              <div class="row perfilprofesional">
                Líder de proyectos informáticos, titulado en ingeniería civil en informática en USACH e 
                ingeniería en informática de Duoc UC, con experiencia en el diseño, construcción e 
                implementación de soluciones e-business y e-comerce con tecnología de la información. 
                Con amplia experiencia de ETL y automatización de tareas asi como tambien la generación de reportes 
                en Power Bi, Outlock (correo) y Excel.
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
          <HyperLinks />
          <Educacion />
          <Languages />
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
