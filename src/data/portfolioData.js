import { BrainCircuit, Route, Bot, Database, Boxes, Cpu, Rocket } from 'lucide-react';

export const features = [
  {
    title: 'Multimodal Learning',
    description: 'Designing systems that jointly learn from tabular, text, and visual signals for stronger real-world robustness.',
    icon: BrainCircuit,
  },
  {
    title: 'Trajectory Modeling',
    description: 'Building forecasting and sequence models that capture behavioral patterns, temporal drift, and uncertainty.',
    icon: Route,
  },
  {
    title: 'LLM Systems',
    description: 'Creating practical LLM workflows with evaluation-first iteration, observability, and deployment discipline.',
    icon: Bot,
  },
];

export const projects = [
  {
    title: 'Sentiment Analysis: Amazon Kozmos Reviews',
    description: 'Sentiment classification pipeline with NLP preprocessing, TF-IDF vectorization, and Logistic Regression / Random Forest baselines.',
    tags: ['Python', 'NLP', 'TF-IDF', 'Scikit-learn'],
    url: 'https://www.kaggle.com/code/yaaryiitturan/sentiment-analysis-amazon-kozmos-reviews',
  },
  {
    title: 'Credit Score Prediction Using ANN',
    description: 'Customer credit score classification using neural networks with SMOTE balancing and robust preprocessing workflow.',
    tags: ['Python', 'ANN', 'SMOTE', 'TensorFlow'],
    url: 'https://www.kaggle.com/code/yaaryiitturan/credit-score-prediction-using-ann-smote',
  },
  {
    title: 'E-commerce Customer Insights (RFM & Clustering)',
    description: 'RFM scoring, customer segmentation, and retention analysis on UK online retail behavior data.',
    tags: ['RFM', 'Clustering', 'Pandas', 'K-Means'],
    url: 'https://www.kaggle.com/code/yaaryiitturan/e-commerce-customer-insights-rfm-clustering',
  },
  {
    title: 'Multi-Class Ethnic Classification',
    description: 'Ethnicity prediction from anthropometric features with model explainability via SHAP and imbalance handling with SMOTE.',
    tags: ['Classification', 'SHAP', 'SMOTE', 'LightGBM'],
    url: 'https://www.kaggle.com/code/yaaryiitturan/multi-class-ethnic-classification-ml-smote-shap',
  },
  {
    title: 'Global Tech Salary Analysis in R',
    description: 'Statistical analysis of global data job salaries with EDA, hypothesis tests, and linear modeling in R.',
    tags: ['R', 'ggplot2', 'Statistical Testing', 'Linear Models'],
    url: 'https://www.kaggle.com/code/yaaryiitturan/statistical-analysis-of-data-job-salaries-in-r',
  },
  {
    title: 'Online Retail Data Analysis',
    description: 'Comprehensive EDA and hypothesis-driven analysis with feature engineering and visual analytics.',
    tags: ['EDA', 'Plotly', 'Seaborn', 'Data Cleaning'],
    url: 'https://www.kaggle.com/code/yaaryiitturan/online-retail-data-analysis',
  },
];

export const buildSteps = [
  { title: 'Data', detail: 'Data quality checks, cleaning, schema validation, and reliability baselines.', icon: Database },
  { title: 'Representation', detail: 'Feature design, embeddings, and signal selection to maximize information density.', icon: Boxes },
  { title: 'Modeling', detail: 'Experimentation loops with reproducibility, metrics tracking, and error analysis.', icon: Cpu },
  { title: 'Deployment', detail: 'Shipping production-ready services with monitoring, feedback loops, and iteration.', icon: Rocket },
];

export const stack = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Transformers',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Airflow',
  'MLflow',
  'Docker',
  'FastAPI',
  'SQL',
  'Kaggle',
  'Power BI',
];
