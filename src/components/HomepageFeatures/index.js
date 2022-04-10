import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Front-end Developer',
    Svg: require('@site/static/img/design.svg').default,
    lenguages: ['HTML5', 'CSS', 'Javascript', 'Less'],
    description: (
      <>
        Valoro la estructura de un diseño simple, 
        los patrones de diseño limpiio y las interacciones bien pensadas desde la experiencia de usuario.
      </>
    ),
  },
  {
    title: 'Back-end Developer',
    Svg: require('@site/static/img/code2.svg').default,
    lenguages: ['PHP (Solo y en Wordpress)', 'Python (Django, Flask, ML y otros)', 'Javascript (React*)'],
    description: (
      <>
        Mi punto fuerte es principalmente el desarrollo Back-end, en proyectos ETL, creación de API's, entre otros.
         Valoro un codigo simple de leer, de tal forma que todos los involucrados puedan participar y entender las principales funciones del proyecto.
      </>
    ),
  },
  {
    title: 'Reporteria',
    Svg: require('@site/static/img/report.svg').default,
    lenguages: ['PowerBI (DAX y PowerM)'],
    description: (
      <>
        La inteligencia empresarial se refiere a las capacidades que permiten que las organizaciones tomen mejores decisiones, actúen de manera informada e implementen procesos de negocio más eficientes.
        Mi lema es extender la informacion en simples pero efectivos dashboard con el proposito de apoyar la toma de desiciones.
      </>
    ),
  },
];
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function Feature({Svg, title, lenguages,  description}) {
  // const listItems = ;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        
        <p>{description}</p>
        <h4>Conocimientos en:</h4>
        {/* <p>{lenguages.join(',')}</p> */}
        <NumberList numbers={lenguages} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
