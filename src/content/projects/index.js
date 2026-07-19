import parkinsonsImg from './parkinsons.jpg'
import agentcourtImg from './courtsim.jpg'
import fakenewsImg from './fakenews.png'
import bodylangImg from './bodylang.jpg'
import produceImg from './produce.png'
import DigitalPortfolioImg from './DigitalPortfolio.png'

export const projects = [
  {
    id: 1,
    slug: 'multimodal-parkinsons-detection',
    title: "Multimodal Parkinson's Disease Detection",
    description:
      "A healthcare AI research project that combines typing dynamics, gait analysis, and voice signals using multimodal machine learning for early Parkinson's disease detection.",
    image: parkinsonsImg,
    featured: true,
    tags: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Deep Learning',
      'Healthcare AI',
    ],
    link: 'https://github.com/petrichor98765/MultiModal-Parkinsons-Detection',
    github: 'https://github.com/petrichor98765/MultiModal-Parkinsons-Detection',
  },
  {
    id: 2,
    slug: 'agent-court',
    title: 'Agent Court',
    description:
      'An AI-powered legal reasoning platform that uses Agentic RAG and large language models to simulate courtroom proceedings, retrieve legal knowledge, and assist with legal analysis.',
    image: agentcourtImg,
    featured: true,
    tags: [
      'Python',
      'LLMs',
      'LangChain',
      'RAG',
      'FastAPI',
      'PostgreSQL',
    ],
    link: 'https://github.com/petrichor98765/CourtSimulation',
    github: 'https://github.com/petrichor98765/CourtSimulation',
  },
  {
    id: 3,
    slug: 'produce-detection',
    title: 'Produce Detection using YOLO-NAS',
    description:
      'A computer vision system for real-time produce detection and classification using the YOLO-NAS architecture, optimized for accurate object localization and inference.',
    image: produceImg,
    featured: false,
    tags: [
      'YOLO-NAS',
      'PyTorch',
      'OpenCV',
      'Computer Vision',
      'Deep Learning',
    ],
    link: 'https://github.com/petrichor98765/Produce-Detection-Algorithm',
    github: 'https://github.com/petrichor98765/Produce-Detection-Algorithm',
  },
  {
    id: 4,
    slug: 'body-language-decoder',
    title: 'Body Language Decoder',
    description:
    'Built a real-time body language recognition system using MediaPipe pose estimation and machine learning to interpret gestures and human posture from live video streams.',
    image:bodylangImg,
    tags: [
      'MediaPipe',
      'OpenCV',
      'Python',
      'Pose Estimation',
      'Computer Vision',
    ],
    featured: false,
    link: 'https://github.com/Sanj2508/SI-GuidedProject-604030-1699270489',
    github: 'https://github.com/Sanj2508/SI-GuidedProject-604030-1699270489',
  },
  {
    id: 5,
    slug: 'fake-news-detection',
    title: 'Fake News Detection',
    description:
      'An NLP-based machine learning system that identifies misleading news articles using text preprocessing, feature engineering, and deep learning models.',
    image: fakenewsImg,
    featured: false,
    tags: [
      'NLP',
      'TensorFlow',
      'PyTorch',
      'spaCy',
      'Scikit-learn',
    ],
    link: 'https://github.com/TarunSamala/FakeNews-Detection',
    github: 'https://github.com/TarunSamala/FakeNews-Detection',
  },
  {
    id: 6,
    slug: 'personal-digital-portfolio',
    title: 'Personal Portfolio',
    description:
      'A digital portfolio highlighting my work experience, current goals and projects on github.',
    image: DigitalPortfolioImg,
    featured: false,
    tags: [
      'Vite',
      'ReactJS',
      'Framer',
      'Javascript',
      'NodeJS',
    ],
    link: 'https://kriti.dev',
    github: 'https://github.com/petrichor98765/digital-portfolio-kritidev',
  },
];

export default projects
