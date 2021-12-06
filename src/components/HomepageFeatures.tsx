/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Uncertain Times',
    image: '/img/undraw_working_remotely.svg',
    description: (
      <>
        The world has presented itself with pelnty of unforseen challenges. Today, more than ever, it's imperative to understand how these and other hardships can impact your employees.
      </>
    ),
  },
  {
    title: 'Workplace Engagement Experts',
    image: '/img/undraw_good_team.svg',
    description: (
      <>
  Studies show that the key to improving workplace productivity is happiness. Let our powerful set of tools guide you in your journey.
      </>
    ),
  },
  {
    title: 'Powered by Data',
    image: '/img/undraw_financial_data.svg',
    description: (
      <>
        All of our products and services are backed with industry research and powerful data and insights that allow you to see in near real time fashion improvements made in employee engagement.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
