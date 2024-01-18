import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Administración',
    Svg: require('@site/static/img/Administración.svg').default,
    description: (
      <>
        Módulo de Administración
      </>
    ),
  },
  {
    title: 'Control Escolar',
    Svg: require('@site/static/img/Control Escolar.svg').default,
    description: (
      <>
        Módulo de Control Escolar
      </>
    ),
  },
  {
    title: 'Admisiones',
    Svg: require('@site/static/img/Admisiones.svg').default,
    description: (
      <>
        Módulo de Admisiones
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
