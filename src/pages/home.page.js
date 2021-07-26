import React from 'react';
import Components from '../components';
// const axios = require('axios').default;

const {TemplateComponents} = Components;

const returnData = [
  {
    id: 1,
    img: 'https://acfa-portofolio.herokuapp.com/dgj.png',
    projectName: 'Dagoja',
    jenis: 'E-commerce',
  },
  {
    id: 2,
    img: 'https://acfa-portofolio.herokuapp.com/bee.png',
    projectName: 'Bee Learning',
    jenis: 'E-learning',
  },
  {
    id: 3,
    img: 'https://acfa-portofolio.herokuapp.com/dgj.png',
    projectName: 'Project 2',
    jenis: 'Comming Soon',
  },
  {
    id: 4,
    img: 'https://acfa-portofolio.herokuapp.com/bee.png',
    projectName: 'Project 3',
    jenis: 'Comming Soon',
  },
];

function HomePages() {
  return <TemplateComponents.HomeTemplates data={returnData} />;
}

export default HomePages;
