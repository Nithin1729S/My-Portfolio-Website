import githubLogo from '../images/github-logo.png';
import liveLogo from '../images/live.png';
import firebase from '../images/firebase.svg';
import tailwind from '../images/tailwind.svg';
import c from '../images/c.png';
import python2 from '../images/python.svg';
import javascript from '../images/javascript.svg';
import typescript from '../images/typescript.svg';
import metamask from '../images/metamask.png';
import tkinter from '../images/tkinter.png';
import node from '../images/node.svg';
import mysql from '../images/mysql.svg';
import ethereum from '../images/ethereum.svg';
import postgresql from '../images/postgresql.svg';
import python from '../images/python.svg';
import pyTorch from '../images/pytorch.svg';
import ml from '../images/ml.png';
import django from '../images/django.svg';
import auth0 from '../images/auth0.png';
import huggingFace from '../images/huggingFace.svg';
import streamlit from '../images/streamlit.svg';
import tensorflow from '../images/tensorflow.svg';
import flask from '../images/flask.svg';
import mongodb from '../images/mongodb.svg';
import react from '../images/react.svg';
import ros from '../images/ros.svg';

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
      desc: "A Full Stack Food Ordering Web Application built using the MERN stack, allows users to order food and manage their restaurants",
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
      link2: "https://ani-talk-phi.vercel.app",
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
      desc: " A Decentralized X Application compiled in Remix IDE, deployed on Ethereum TestNet",
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
      id: "machine learning",
      title: "Interpret CXR",
      desc: "Trained an NLP model using BioBERT and CLIP to generate radiology reports for given chest X-ray images.",
      link1: "https://github.com/Nithin1729S/Interpret-CXR-BioBert-CLIP",
      link2: "https://youtu.be/ypN_lqDMiQI",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: pyTorch,
      wts2: "pytorch",
      ts3: streamlit,
      wts3: "streamlit"
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
      desc: "An application to generate captions for images using a pre-trained Vision Encoder-Decoder model (ViT-GPT2).",
      link1: "https://github.com/Nithin1729S/Image-Caption-Generator",
      link2: "https://www.youtube.com/watch?v=UqufctfkBJ8",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: huggingFace,
      wts2: "hugginFace",
      ts3: streamlit,
      wts3: "streamlit"
    },
    {
      id: "machine learning",
      title: "Document Summarizer",
      desc: "A web application to summarize contents in a PDF",
      link1: "https://github.com/Nithin1729S/Document-Summarization-Streamlit-Application",
      link2: "https://youtu.be/GOR-pIVZ04w",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: huggingFace,
      wts2: "huggingFace",
      ts3: streamlit,
      wts3: "streamlit"
    },
    {
      id: "Web Development",
      title: "Splitwise",
      desc: "A Splitwise-like payment application built using Node.js, EJS, and MySQL database.",
      link1: "https://github.com/Nithin1729S/Splitwise-Application",
      imgSrc: githubLogo,
      alt: "Github Logo",
      ts1: javascript,
      wts1: "JavaScript",
      ts2: node,
      wts2: "nodejs",
      ts3: mysql,
      wts3: "mysql"
    },
    {
      id: "machine learning",
      title: "Brain Tumour Classification",
      desc: "An app that allows users to upload MRI scans to determine the type of brain tumour present",
      link1: "https://github.com/Nithin1729S/Brain-Tumor-Classification",
      link2: "https://youtu.be/8CGXEmEt4Sc",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: tensorflow,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "Medical Assistant",
      desc: "A web application that allows users to get consultations on Heart Diseases, Skin Cancer, and Tuberculosis.",
      link1: "https://github.com/Nithin1729S/Medical-Assistant",
      link2: "https://youtu.be/b8vmy75NC7w",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: tensorflow,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
   
    {
      id: "machine learning",
      title: "Visual Hand Gesture Recognition",
      desc: "An app that recognizes American Sign Language (ASL) gestures in real-time ",
      link1: "https://github.com/Nithin1729S/Visual-Hand-Gesture-Recognition",
      imgSrc: githubLogo,
      alt: "Github Logo",
      ts1: python,
      wts1: "python",
      ts2: tensorflow,
      wts2: "tensorflow",
    },
    {
      id: "miscellaneous",
      title: "MazeSolving",
      desc: "Maze Solving App coded in Python with a simple interface using tkinter, uses the BFS Algorithm to solve mazes effectively",
      link1: "https://github.com/Nithin1729S/MazeSolving",
      link2: "https://youtu.be/r2uFEnX93R4",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
      ts2: tkinter,
      wts2: "tkinter",
    },
    {
      id: "machine learning",
      title: "Llama 2 Chatbot",
      desc: "A chatbot created using the open-source Llama 2 LLM model from Meta hosted on Replicate Platform",
      link1: "https://github.com/Nithin1729S/Llama-2-Chat-Bot",
      link2: "https://youtu.be/wOMe5ffS3sQ",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "android",
      ts2: ml,
      wts2: "ml",
    },
    // {
    //   id: "miscellaneous",
    //   title: "Tic-Tac-Toe-Server-Client-Application",
    //   desc: "A Client-Server application for playing the game of Tic-Tac-Toe between two players.",
    //   link1: "https://github.com/Nithin1729S/Tic-Tac-Toe-Server-Client-Application",
    //   imgSrc: githubLogo,
    //   alt: "Github Logo",
    //   ts1: c,
    //   wts1: "c",
    //   ts2: linux,
    //   wts2: "linux",
    // },
    {
      id: "miscellaneous",
      title: "Robotic Arm",
      desc: "ROS package to simulate and control a simple Robotic Arm.",
      link1: "https://github.com/Sakshi-1606/Robotic_Arm",
      imgSrc: githubLogo,
      alt: "Github Logo",
      ts1: python,
      wts1: "python",
      ts2: ros,
      wts2: "ros",
      ts3: tkinter,
      wts3: "tkinter"
    },
    {
      id: "miscellaneous",
      title: "Deep Dive",
      desc: "An app that helps you locate profs during working hours",
      link1: "https://github.com/Nithin1729S/Deep-Dive-A-System-Resource-Monitor",
      link2: "https://youtu.be/HifIpIcRB0k",
      imgSrc: githubLogo,
      alt: "Github Logo",
      imgSrc1: liveLogo,
      alt1: "LiveDemo Logo",
      ts1: python,
      wts1: "python",
    },
    {
      id: "miscellaneous",
      title: "C Compiler",
      desc: "C Compiler using Lex, Yacc and Python",
      link1: "https://github.com/Nithin1729S/C-Compiler-Phases",
      imgSrc: githubLogo,
      alt: "Github Logo",
      ts1: c,
      wts1: "c",
      ts2: python,
      wts2: "python",
    },


    // Add more projects here
  ];

  export default projects;