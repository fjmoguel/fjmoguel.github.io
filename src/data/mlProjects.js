// ──────────────────────────────────────────────────────────────
// MACHINE LEARNING PROJECTS — shown on /assignments
// `video` is optional — set it to a file in /public/videos/, or
// remove the line entirely if there is no video.
// ──────────────────────────────────────────────────────────────

export const mlProjects = [
  {
    title: "Assignment 1: Data Collection and Analysis",
    description:
      "Collected and analyzed elevator arrival data to find the optimal spot to wait in the CDS lobby, minimizing expected walking distance to the next elevator. Used average inter-arrival times, probabilities, and weighted averages.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-1",
  },
  {
    title: "Assignment 2: KMeans Clustering Visualization",
    description:
      "An interactive web app demonstrating the KMeans clustering algorithm with various initialization methods, letting users visualize and interact with the clustering process.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-2",
    video: "/videos/My Movie 1.mp4",
  },
  {
    title: "Assignment 3: SVD Preprocessing on MNIST",
    description:
      "Applied Singular Value Decomposition as a preprocessing step to MNIST, reducing dimensionality for efficient logistic regression. Implemented a custom SVD algorithm and compared accuracy and training time against the original data.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-3",
  },
  {
    title: "Assignment 4: Latent Semantic Analysis Search Engine",
    description:
      "An interactive LSA search engine that ranks documents by similarity to a query. Uses TF-IDF and SVD on the 20 Newsgroups dataset, returns the top 5 results with a Plotly chart, and is built with Flask plus a GitHub Actions workflow.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-4",
    video: "/videos/My Movie 2.mp4",
  },
  {
    title: "Assignment 5: Predicting Customer Churn Using KNN",
    description:
      "Built a K-Nearest Neighbors classifier from scratch to identify bank customers likely to churn \u2014 preprocessing, feature selection, hyperparameter tuning, and evaluation with metrics like ROC AUC.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-5",
  },
  {
    title: "Midterm Project: XGBoost Review Rating Prediction",
    description:
      "An XGBoost classification model predicting Amazon movie review star ratings. Used engineered features, hyperparameter tuning, and SMOTE oversampling to handle imbalance, with a focus on the difficult middle-range ratings.",
    github: "https://github.com/fjmoguel/fjmoguel-xgboost-review-rating-prediction",
  },
  {
    title: "Assignment 6: Linear Regression Interactive Webpage",
    description:
      "An interactive app where users adjust sample size, mean, variance, and number of simulations to see how randomness affects slope and intercept when there is no real relationship between X and Y.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-6",
    video: "/videos/assignment6.mp4",
  },
  {
    title: "Assignment 7: Hypothesis Testing & Confidence Intervals",
    description:
      "Extended Assignment 6 with hypothesis testing and confidence intervals through simulation \u2014 users can test the slope or intercept of the regression line and generate confidence intervals from simulated data.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-7",
    video: "/videos/assignment-7.mp4",
  },
  {
    title: "Assignment 8: Logistic Regression",
    description:
      "Explored how shifting clusters affects logistic regression parameters \u2014 generating datasets with varying separation, fitting models, and analyzing slope, intercept ratio, and logistic loss alongside decision-boundary visualizations.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-8",
    video: "/videos/assignment8.mp4",
  },
  {
    title: "Assignment 9: Neural Networks",
    description:
      "Implemented a feedforward neural network from scratch to visualize learned features, decision boundaries, and gradients. Includes an interactive Flask module to train and visualize the network from a web interface.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-9",
    video: "/videos/assignment-9.mp4",
  },
  {
    title: "Assignment 10: Image Search",
    description:
      "A simplified version of Google Image Search \u2014 users query by text, image, or both, with a weighted score retrieving the top 5 results. Supports CLIP embeddings or first-k principal components.",
    github: "https://github.com/fjmoguel/fjmoguel-assignment-10",
    video: "/videos/assignment-10.mp4",
  },
  {
    title: "Final Project: Fraud Detection Challenge",
    description:
      "A predictive model identifying potentially fraudulent transactions \u2014 binary classification optimized for F1-score to balance precision and recall on imbalanced data, with no deep-learning techniques permitted.",
    github: "https://github.com/fjmoguel/fjmoguel-final-CS506",
  },
];
