import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Picture and text have nothing to do',
    Svg: require('@site/static/img/com.svg').default,
    description: (
      <>
        博主喜欢很肤浅看起来很酷炫的图，有些时候确实跟文字米有任何关系只是为了装饰，乖。
      </>
    ),
  },
  {
    title: 'Strange man',
    Svg: require('@site/static/img/data.svg').default,
    description: (
      <>
        博主是一个很怪的人，他很幼稚，疯疯癫癫、玩玩闹闹；一个人的时候又自闭冷血的思考很多问题。<br/>
        有时好像尚未成熟的中二，有时又像游山玩水的现充。
      </>
    ),
  },
  {
    title: 'Interesting blog',
    Svg: require('@site/static/img/save.svg').default,
    description: (
      <>
        你应该可以在我的博客里找到喜欢的东西，未来它会包括很多方面，学习、游戏、日常生活......<br/>
        博主是一名数字媒体技术专业的普通学生，今后会依照唯心主义的态度也就是看心情更新学习笔记甚至游戏记录。
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
        <h3>{title}</h3>
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
