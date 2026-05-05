import { BarChart3, Bot, Brain, Code2, Database, MessageSquare } from 'lucide-react';

/** All copy and project details are taken from the previous static site (index, about, projects, skills, blog, contact). */

export const portfolioData = {
  personal: {
    name: 'Yaşar Yiğit Turan',
    title: 'Statistics student, Hacettepe University',
    bio: "I'm a statistics student at Hacettepe University focused on machine learning, deep learning, and AI projects with practical business impact.",
    bioExtended:
      "I'm a 4th year student at Hacettepe University. I specialize in machine learning and deep learning with a strong interest in AI, and I enjoy solving real-world problems through data. I work on projects across data science, machine learning, and deep learning, and I regularly explore new methods and technologies while sharing my work through portfolio and social channels.",
    email: 'yigitturan19319@gmail.com',
    emailAlt: 'yasaryigitturan@gmail.com',
    contactNote:
      "Although I'm not currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.",
  },
  hero: {
    badge: 'Personal Portfolio',
    headlineLine1: "Hi, I'm Yaşar Yiğit Turan.",
    headlineLine2: null,
    cta1: { label: 'View projects', href: '#projects' },
    cta2: { label: 'Download CV', href: '/resume.pdf', download: 'Yaşar_Yiğit_Turan_CV.pdf' },
    proofLinks: [
      { label: 'GitHub', href: 'https://github.com/yyigitturan' },
      { label: 'Kaggle', href: 'https://www.kaggle.com/yaaryiitturan' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ya%C5%9Far-yi%C4%9Fit-turan-/' },
      { label: 'Medium', href: 'https://medium.com/@yasaryigitturan' },
    ],
  },
  stats: [
    { type: 'static', value: 'June 2024 – June 2025', label: 'Goldbergmed · Data Science Intern (Germany, Remote)' },
    { type: 'static', value: 'Sept 2022 – June 2026 (Expected)', label: 'B.Sc. Statistics, Hacettepe University' },
    { type: 'static', value: '3.04 / 4.00', label: 'GPA' },
    { type: 'count', value: 7, suffix: '', label: 'Projects listed on this site' },
  ],
  brands: [
    'Python',
    'Pandas',
    'Scikit-learn',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Power BI',
    'Hacettepe University',
    'Goldbergmed',
    'Kaggle',
  ],
  skills: [
    {
      category: 'Python Programming',
      lead: 'Advanced proficiency in Python for statistical analysis, machine learning, and automation.',
      tags: ['NumPy', 'Pandas', 'Scikit-learn', 'Statsmodels'],
    },
    {
      category: 'Machine Learning',
      lead: 'Building and evaluating ML models for statistical and applied data problems.',
      tags: ['Regression', 'Classification', 'Clustering', 'Feature Engineering'],
    },
    {
      category: 'Data Visualization',
      lead: 'Creating visuals that make findings clear and decision-ready.',
      tags: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'],
    },
    {
      category: 'Computer Vision',
      lead: 'Applying visual intelligence techniques for image-based tasks.',
      tags: ['OpenCV', 'Image Classification', 'Object Detection', 'CNNs'],
    },
    {
      category: 'Deep Learning',
      lead: 'Using neural network frameworks to solve complex predictive tasks.',
      tags: ['TensorFlow', 'Keras', 'PyTorch'],
    },
    {
      category: 'Natural Language Processing',
      lead: 'Working with text data for classification, sentiment, and representation learning.',
      tags: ['Text Classification', 'Sentiment Analysis', 'Word Embeddings', 'Transformers'],
    },
    {
      category: 'Data Wrangling',
      lead: 'Cleaning and preparing raw data for robust analysis.',
      tags: ['Pandas', 'SQL', 'Excel'],
    },
    {
      category: 'Statistical Analysis',
      lead: null,
      tags: [
        'Probability & Inference',
        'Hypothesis Testing',
        'Regression Analysis',
        'Time Series Analysis',
        'Experimental Design',
      ],
    },
    {
      category: 'Statistical Software',
      lead: null,
      tags: ['R Programming', 'Python (Stats)', 'Minitab', 'SPSS'],
      images: ['/img/minitab.png', '/img/spss.jpg'],
    },
  ],
  projects: [
    {
      title: 'Sentiment Analysis: Amazon Kozmos Reviews',
      desc: 'I performed sentiment analysis on customer reviews for Kozmos using NLP preprocessing and NLTK labels, then trained TF-IDF based Logistic Regression and Random Forest models.',
      tech: ['Python', 'Pandas', 'NLTK', 'Scikit-learn', 'TF-IDF', 'NLP'],
      github: null,
      live: 'https://www.kaggle.com/code/yaaryiitturan/sentiment-analysis-amazon-kozmos-reviews',
      linkedin: null,
      images: ['/img/word.png'],
      featured: true,
    },
    {
      title: 'Credit Score Prediction Using ANN',
      desc: 'Developed a credit scoring system to classify customers as Good, Standard, and Poor with ANN and SMOTE, including data cleaning, encoding, scaling, and evaluation.',
      tech: ['Python', 'TensorFlow', 'Keras', 'ANN', 'SMOTE', 'Scikit-learn'],
      github: null,
      live: 'https://www.kaggle.com/code/yaaryiitturan/credit-score-prediction-using-ann-smote',
      linkedin: null,
      images: ['/img/ann1.png', '/img/ann2.png'],
      featured: false,
    },
    {
      title: 'E-commerce Customer Insights (RFM & Clustering)',
      desc: 'Analyzed UK online retail data with RFM scoring, K-Means segmentation, and cohort analysis to understand customer behavior and retention.',
      tech: ['Python', 'Pandas', 'K-Means', 'RFM', 'Seaborn'],
      github: null,
      live: 'https://www.kaggle.com/code/yaaryiitturan/e-commerce-customer-insights-rfm-clustering',
      linkedin: null,
      images: ['/img/rfm1.png', '/img/rfm2.png', '/img/rfm3.png', '/img/rfm4.png'],
      featured: false,
    },
    {
      title: 'Multi-Class Ethnic Classification',
      desc: 'Used the ANSUR II anthropometric dataset for ethnicity prediction, combining EDA, multiple classifiers, SMOTE balancing, and SHAP explainability.',
      tech: ['Python', 'SMOTE', 'SHAP', 'LightGBM', 'Classification'],
      github: null,
      live: 'https://www.kaggle.com/code/yaaryiitturan/multi-class-ethnic-classification-ml-smote-shap',
      linkedin: null,
      images: ['/img/e1.png', '/img/e2.png', '/img/e3.png'],
      featured: false,
    },
    {
      title: 'Global Tech Salary: Statistical Analysis in R',
      desc: 'Performed EDA, hypothesis testing (Kruskal-Wallis, Dunn, Chi-squared), and linear modeling on global tech salary data in R.',
      tech: ['R', 'ggplot2', 'dplyr', 'Hypothesis Testing', 'Linear Models'],
      github: null,
      live: 'https://www.kaggle.com/code/yaaryiitturan/statistical-analysis-of-data-job-salaries-in-r',
      linkedin: null,
      images: ['/img/s1.png', '/img/s2.png', '/img/s3.png'],
      featured: false,
    },
    {
      title: 'Online Retail Data Analysis',
      desc: 'Completed data cleaning, EDA, feature engineering, visualization, and Kruskal-Wallis testing for online retail behavior and sales trends.',
      tech: ['Python', 'Plotly', 'Seaborn', 'EDA', 'Data Cleaning'],
      github: null,
      live: 'https://www.kaggle.com/code/yaaryiitturan/online-retail-data-analysis',
      linkedin: null,
      images: ['/img/d1.png', '/img/d2.png', '/img/d3.png'],
      featured: false,
    },
    {
      title: 'Power BI: Global Superstore Report',
      desc: 'Built a full Power BI dashboard with drillthrough, tooltips, slicers, and an animated bar race for product, customer, and regional analysis.',
      tech: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Dashboard Design'],
      github: 'https://github.com/yyigitturan/Global-Superstore-PowerBI-Dashboard',
      live: 'https://github.com/yyigitturan/Global-Superstore-PowerBI-Dashboard',
      linkedin:
        'https://www.linkedin.com/posts/ya%C5%9Far-yi%C4%9Fit-turan-_powerbi-datavisualization-globalsuperstore-activity-7247136938221072384-QHkt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7wbAEB0KCMnhyCp-f1pjetYnGsuXgCEdw',
      images: ['/img/1.png', '/img/2.png', '/img/3.png'],
      featured: false,
    },
  ],
  experience: [
    {
      company: 'Goldbergmed',
      role: 'Data Science Intern',
      period: 'June 2024 – June 2025 (Germany, Remote)',
      desc: '',
    },
    {
      company: 'Hacettepe University',
      role: 'Bachelor of Science in Statistics',
      period: 'September 2022 – June 2026 (Expected)',
      desc: 'GPA: 3.04 / 4.00',
    },
  ],
  whyMe: [
    {
      title: 'Python Programming',
      description:
        'Advanced proficiency in Python for statistical analysis, machine learning, and automation.',
      icon: Code2,
    },
    {
      title: 'Machine Learning',
      description: 'Building and evaluating ML models for statistical and applied data problems.',
      icon: Bot,
    },
    {
      title: 'Data Visualization',
      description: 'Creating visuals that make findings clear and decision-ready.',
      icon: BarChart3,
    },
    {
      title: 'Deep Learning',
      description: 'Using neural network frameworks to solve complex predictive tasks.',
      icon: Brain,
    },
    {
      title: 'Natural Language Processing',
      description:
        'Working with text data for classification, sentiment, and representation learning.',
      icon: MessageSquare,
    },
    {
      title: 'Data Wrangling',
      description: 'Cleaning and preparing raw data for robust analysis.',
      icon: Database,
    },
  ],
  blog: [
    {
      title: 'Coming soon',
      category: 'Blog',
      readTime: '—',
      href: 'https://medium.com/@yasaryigitturan',
      desc: 'Long-form write-ups and project notes are coming soon. In the meantime you can read on Medium.',
    },
  ],
  socials: {
    github: 'https://github.com/yyigitturan',
    linkedin: 'https://www.linkedin.com/in/ya%C5%9Far-yi%C4%9Fit-turan-/',
    twitter: 'https://x.com/yigitturan_',
    email: 'mailto:yigitturan19319@gmail.com',
    kaggle: 'https://www.kaggle.com/yaaryiitturan',
    medium: 'https://medium.com/@yasaryigitturan',
  },
};
