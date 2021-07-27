import React from 'react';
import Component from '../components';

const {TemplateComponents} = Component;

const returnData = [
  {
    id: 1,
    img: 'https://acfa-portofolio.herokuapp.com/dgj.png',
    userName: 'User 1',
    link: 'https://api.github.com/users/novelizza',
  },
  {
    id: 2,
    img: 'https://acfa-portofolio.herokuapp.com/dgj.png',
    userName: 'User 2',
    link: 'https://api.github.com/users/novelizza',
  },
  {
    id: 3,
    img: 'https://acfa-portofolio.herokuapp.com/dgj.png',
    userName: 'User 3',
    link: 'https://api.github.com/users/novelizza',
  },
  {
    id: 4,
    img: 'https://acfa-portofolio.herokuapp.com/dgj.png',
    userName: 'User 4',
    link: 'https://api.github.com/users/novelizza',
  },
];

function GithubPages() {
  return <TemplateComponents.GithubTemplates data={returnData} />;
}

export default GithubPages;
