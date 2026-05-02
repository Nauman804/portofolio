import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// Apni Skills ke Icons Import Karein
import Tools1 from "./assets/tools/python.png";
import Tools2 from "./assets/tools/ml.png"; 
import Tools3 from "./assets/tools/web.png"; 
import Tools4 from "./assets/tools/flask.png";
import Tools5 from "./assets/tools/design.png";
import Tools6 from "./assets/tools/ai-video.png";
import Tools7 from "./assets/tools/canva.png";
import Tools8 from "./assets/tools/github.png";
import Tools9 from "./assets/tools/html.png";
import Tools10 from "./assets/tools/vscode.png";

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Python", ket: "AI & Logic", dad: "100" },
  { id: 2, gambar: Tools2, nama: "Machine Learning", ket: "Predictive Models", dad: "200" },
  { id: 3, gambar: Tools3, nama: "Web Development", ket: "Frontend & Backend", dad: "300" },
  { id: 4, gambar: Tools4, nama: "Flask", ket: "Web Deployment", dad: "400" },
  { id: 5, gambar: Tools5, nama: "Graphic Design", ket: "Logos & Thumbnails", dad: "500" },
  { id: 6, gambar: Tools6, nama: "AI Content", ket: "AI Videos & Images", dad: "600" },
  { id: 7, gambar: Tools7, nama: "Canva", ket: "Visual Editor", dad: "700" },
  { id: 8, gambar: Tools8, nama: "GitHub", ket: "Version Control", dad: "800" },
  { id: 9, gambar: Tools9, nama: "HTML", ket: "Markup Language", dad: "900" },
  { id: 10, gambar: Tools10, nama: "VS Code", ket: "Code Editor", dad: "1000" },
];

// Yahan maine sari 11 images import kar li hain
import Proyek1 from "./assets/proyek/proyek1.jpg";
import Proyek2 from "./assets/proyek/proyek2.jpg";
import Proyek3 from "./assets/proyek/proyek3.jpg";
import Proyek4 from "./assets/proyek/proyek4.jpg";
import Proyek5 from "./assets/proyek/proyek5.jpg";
import Proyek6 from "./assets/proyek/proyek6.jpg";
import Proyek7 from "./assets/proyek/proyek7.jpg"; 
import Proyek8 from "./assets/proyek/proyek8.jpg";
import Proyek9 from "./assets/proyek/proyek9.png"; // AI Videos thumbnail
import Proyek10 from "./assets/proyek/proyek10.png"; // Design/Logos thumbnail
import Proyek11 from "./assets/proyek/proyek11.png";
import Proyek12 from "./assets/proyek/proyek12.png"; // AI Study Assistant thumbnail
import Proyek13 from "./assets/proyek/proyek13.png"; // AI Health Chatbot thumbnail
import Proyek14 from "./assets/proyek/proyek14.png"; // Advanced Uni Chatbot thumbnail
export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Movie Recommendation System",
    subtitle: "An ML-based engine to recommend movies based on user preferences.",
    fullDescription: "A Machine Learning project that uses content-based filtering to recommend movies to users based on their preferences and past viewing history.",
    borderColor: "#1067f3",
    gradient: "linear-gradient(145deg, #0849b3, #000)",
    url: "https://github.com/Nauman804/Movie-Recommendation-System-ML",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "House Price Prediction",
    subtitle: "Predicting real estate prices using advanced regression models.",
    fullDescription: "An advanced ML model designed to predict house prices based on features like location, area, and amenities using regression techniques.",
    borderColor: "#e7f709",
    gradient: "linear-gradient(180deg, #caec09, #000)",
    url: "https://github.com/Nauman804/House-Price-Prediction",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Flask Chatbot",
    subtitle: "An interactive AI chatbot built with Flask and generative APIs.",
    fullDescription: "A web-based chatbot assistant developed using Flask and NLP techniques to handle user queries in real-time.",
    borderColor: "#05f138",
    gradient: "linear-gradient(145deg, #3fe90c, #000)",
    url: "https://github.com/Nauman804/Flask-chatbot",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Fake Review Detector",
    subtitle: "Identifying deceptive reviews using Natural Language Processing (NLP).",
    fullDescription: "A sentiment analysis and classification project that detects whether a product review is genuine or fake using Machine Learning.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Nauman804/Fake-Review-Dectector",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "GOKBORU Spam Detector",
    subtitle: "Advanced SMS/Email spam classification for secure communication.",
    fullDescription: "A high-precision spam detection system tailored for identifying unwanted messages using supervised learning models.",
    borderColor: "#1b0cf8",
    gradient: "linear-gradient(145deg, #082586, #000)",
    url: "https://github.com/Nauman804/GOKBORU-SPAM-DETECTOR",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Heart Disease Prediction",
    subtitle: "Healthcare analytics for early diagnosis using machine learning.",
    fullDescription: "A medical ML project that predicts the likelihood of heart disease in patients based on clinical data and health metrics.",
    borderColor: "#0cda95",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Nauman804/heart-disease-prediction",
    dad: "600",
  },
  {
    id: 7,
    image: Proyek7, // Updated
    title: "Weather App",
    subtitle: "A real time weather tracking application with a responsive UI.",
    fullDescription: "A dynamic web app that fetches real-time weather data and forecasts for any location worldwide using external APIs.",
    borderColor: "#f10538c7",
    gradient: "linear-gradient(145deg, #c40818, #000)",
    url: "https://github.com/Nauman804/Weather-App",
    dad: "700",
  },
  {
    id: 8,
    image: Proyek8, // Updated
    title: "Customer Segmentation",
    subtitle: "Grouping customers into clusters using unsupervised learning.",
    fullDescription: "A Flask-integrated ML project that performs customer segmentation using clustering algorithms to help businesses target specific audiences.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Nauman804/Customer-Segmentation-Flask",
    dad: "800",
  },
  {
    id: 9,
    image: Proyek9,
    title: "AI  Videos",
    subtitle: "Cinematic AI avatars with realistic voiceovers and high-fidelity visuals.",
    fullDescription: "Created a series of high-impact  videos for social media platforms using AI avatars, voice cloning, and cinematic editing. These videos are optimized for YouTube and Facebook audience growth.",
    borderColor: "#a00bdb", // YouTube Red theme
    gradient: "linear-gradient(145deg, #e817f0, #000)",
    url: "https://www.youtube.com/@foodyGirl-c3d", // Apna YouTube link yahan lagayein
    dad: "900",
  },
  {
    id: 10,
    image: Proyek10,
    title: "Gokboru Branding & Logos",
    subtitle: "Developing visual identity with neon aesthetics and modern \"Wolf\" motifs.",
    fullDescription: "Developed the complete brand identity for 'Gokboru', including custom wolf-style neon logos, social media thumbnails, and professional banners. All assets are designed with a focus on modern digital aesthetics.",
    borderColor: "#1e06f7", // Neon Blue theme
    gradient: "linear-gradient(180deg, #0603c0, #000)",
    url: "https://drive.google.com/drive/folders/1UGIO7vsio6L7_pC8eJexnkFxBdwTlbRG?usp=drive_link", // Apna Google Drive link yahan lagayein
    dad: "1000",
  },
  {
    id: 11,
    image: Proyek11,
    title: "AI Images & Cinematic Videos",
    subtitle: "High quality AI generated content tailored for social media branding.",
    fullDescription: "A specialized collection of ultra-realistic AI images and cinematic videos. Created using advanced prompt engineering and video editing tools to maximize engagement and visual storytelling on Facebook.",
    borderColor: "#ca0c9b", // Facebook ka original Blue color
    gradient: "linear-gradient(145deg, #e20c9b, #000)",
    url: "https://www.facebook.com/malik.noman.184331?mibextid=ZbWKwL", // Yahan apna Facebook link paste karein
    dad: "900",
  },
  {
    id: 12,
    image: Proyek12,
    title: "AI Study Assistant",
    subtitle: "A smart AI-powered platform for student productivity and learning.",
    fullDescription: "An advanced AI Study Assistant built to help students manage their curriculum, summarize notes, and generate study plans. Developed using Python, LLM integration, and a modern React frontend to provide a seamless educational experience.",
    borderColor: "#0e30f1", // Deep AI Blue color
    gradient: "linear-gradient(145deg, #0e30f1, #000b18)",
    url: "https://github.com/Nauman804/Ai-Study-Assistant", // Aapka GitHub link
    dad: "1000",
  },
  {
    id: 13,
    image: Proyek13, // Top par import karein: import Proyek13 from "../assets/health-bot.png"
    title: "AI Health Chatbot",
    subtitle: "A Generative AI web application for health-related queries and guidance.",
    fullDescription: "A specialized GenAI Web App developed during my AI/ML internship. It utilizes Large Language Models to provide intelligent responses to health-related questions, offering a user-friendly interface for medical information and symptom checking.",
    borderColor: "#22c55e", // Medical Green color
    gradient: "linear-gradient(145deg, #16a34a, #000b18)",
    url: "https://github.com/Nauman804/AI-ML-internship-tasks-",
    dad: "1100",
  },
  {
    id: 14,
    image: Proyek14, // Top par import karein: import Proyek14 from "../assets/uni-bot.png"
    title: "Advanced Uni Chatbot",
    subtitle: "An intelligent assistant designed to navigate university campus life.",
    fullDescription: "A sophisticated chatbot built to assist students with campus information, course details, and administrative queries. This project focuses on natural language processing to improve the student experience at Superior University.",
    borderColor: "#eab308", // Golden/Yellow (Superior University theme)
    gradient: "linear-gradient(145deg, #ca8a04, #000b18)",
    url: "https://github.com/Nauman804/FALL-26-PAI-LAB/tree/main/adv%20uni%20chat%20bot%20.12.",
    dad: "1200",
  },
  
];