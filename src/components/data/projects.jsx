import React, { useState, useEffect } from 'react';
import githubLogo from '../images/github-logo.png';
import liveLogo from '../images/live.png';
import androidFull from '../images/androidFull.png';
import java from '../images/java.png';
import oops from '../images/oops.png';
import firebase from '../images/firebase_google.png';
import tailwind from '../images/tailwind.png';
import cpp from '../images/cpp.png';
import c from '../images/c.png';
import python2 from '../images/python2.png';
import javascript from '../images/javascript.png';
import typescript from '../images/typescript.png';
import metamask from '../images/metamask.png';
import express from '../images/express.png';
import postman from '../images/postman.png';
import node from '../images/node.png';
import git from '../images/git.png';
import github from '../images/github.png';
import mysql from '../images/mysql.png';
import html2 from '../images/html2.png';
import css2 from '../images/css2.png';
import ethereum from '../images/ethereum.png';
import solidity from '../images/solidity.png';
import postgresql from '../images/postgresql.png';
import python from '../images/python.png';
import pyTorch from '../images/pytorch.png';
import ml from '../images/ml.png';
import django from '../images/django.png';
import docker from '../images/docker.png';
import auth0 from '../images/auth0.png';
import huggingFace from '../images/huggingFace.png';
import flask from '../images/flask.png';
import mongodb from '../images/mongodb.png';
import react from '../images/react.png';
import machinelearninglogo from '../images/machine-learning.png';
import blockchainlogo from '../images/blockchain.png';
import idealogo from '../images/idea.png';

const projects = [

    {
      id: "machine learning",
      title: "Image Style Transfer Using CNNs",
      desc: "A Flask application that uses neural style transfer to blend content and style images effortlessly",
      link1: "https://github.com/Nithin1729S/Image-Style-Transfer-Using-CNNs.git",
      link2: "https://www.youtube.com/watch?v=6c5A9ZEjpB8",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python2,
      wts1: "python",
      ts2: pyTorch,
      wts2: "pyTorch",
      ts3: flask,
      wts3: "flask",
      ts4: tailwind,
      wts4: "tailwind"
    },
    {
      id: "Web Development",
      title: "Pixel Plate",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Pixel-Plate",
      link2: "https://pixel-plate-frontend.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: typescript,
      wts1: "typescript",
      ts2: react,
      wts2: "react",
      ts3: mongodb,
      wts3: "mongodb",
      ts4: auth0,
      wts4: "auth0"
    },
    {
      id: "blockchain",
      title: "Web3 Vault Dapp",
      desc: "Decentralized password manager, compiled in Remix IDE and deployed on Sepolia TestNet",
      link1: "https://github.com/Nithin1729S/Web3-Vault-dApp",
      link2: "https://web3vault.vercel.app",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: ethereum,
      wts1: "ethereum",
      ts2: react,
      wts2: "react",
      ts3: metamask,
      wts3: "metamask",
      // ts4: react,
      // wts4: "react"
    },
    {
      id: "Web Development",
      title: "AniTalk",
      desc: "An Anime Discussion Forum Web Application",
      link1: "https://github.com/Nithin1729S/AniTalk",
      // link2: "https://ani-talk-phi.vercel.app",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: django,
      wts2: "django",
      ts3: postgresql,
      wts3: "postgresql"
    },
    {
      id: "blockchain",
      title: "X Dapp",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/X_dApp",
      link2: "https://x-nine-gold.vercel.app",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: ethereum,
      wts1: "ethereum",
      ts2: react,
      wts2: "react",
      ts3: metamask,
      wts3: "metamask"
    },
    {
      id: "Web Development",
      title: "Inkwell Insights",
      desc: "A Full Stack Blogging Website",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: react,
      wts1: "react",
      ts2: javascript,
      wts2: "javascript",
      ts3: mongodb,
      wts3: "mongodb",
      ts4: firebase,
      wts4: "firebase"
    },
    {
      id: "machine learning",
      title: "Image Caption Generator",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: pyTorch,
      wts2: "pytorch",
      ts3: huggingFace,
      wts3: "huggingFace"
    },
    {
      id: "machine learning",
      title: "Document Summarizer",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "Web Development",
      title: "Splitwise",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Brain Tumour Classification",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Medical Assistant",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Interpret CXR",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Medical Assistant",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Medical Assistant",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Llama 2 Chatbot",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "miscellaneous",
      title: "Sudoku Solver",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "miscellaneous",
      title: "Deep Dive",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "miscellaneous",
      title: "C Compiler",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      link2: "https://inkwell-insights-a-blogging-website.onrender.com",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },


    // Add more projects here
  ];

  export default projects;