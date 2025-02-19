# MedSync

## AI Medical Assistant Chatbot & Health Tracker

![MedSync](https://github.com/user-attachments/assets/da64fa42-452b-45cd-b3b9-fae862905494)

## 📌 Problem  
Many people, especially seniors and individuals with chronic conditions, struggle with medication adherence due to:  
- Forgetfulness  
- Incorrect dosages  
- Difficulty understanding prescriptions  

## 💡 Solution  
**MedSync** is a mobile and web app that leverages **AI and computer vision** to:  
✅ Scan prescriptions  
✅ Generate smart reminders  
✅ Provide personalized medication schedules  
✅ Track symptoms and side effects over time  

## 🚀 Key Features  
- **🔍 AI-Powered Prescription Scanner** – Uses **OCR (Optical Character Recognition)** to extract medication details from printed prescriptions.  
- **⏰ Smart Reminders & Alerts** – Customizable notifications to ensure timely medication intake.  
- **📊 Side-Effect Tracking** – Log symptoms and receive **AI-powered insights** on possible drug interactions.
- **🤖 AI Chatbot (DeepSeek-R1-Distill)** – Users can ask medication-related questions and get instant, AI-driven responses.  
- **👨‍👩‍👧‍👦 Family & Caregiver Support** – Caregivers can receive adherence notifications and track user progress.  
- **🎙️ Voice Commands & Audio Assistance** – Supports **speech-to-text** and **text-to-speech** for visually impaired users or those with literacy challenges.  

## 🛠️ Tech Stack  
**Frontend:**  
- 📱 React Native (Mobile App)  
- 💻 Next.js (Web)  

**Backend:**  
- 🔥 Firebase  
- ⚡ Node.js & Express.js  

**AI/ML:**  
- 📝 Tesseract OCR (Text Extraction)  
- 🧠 DeepSeek-R1-Distill (AI Chatbot for answering medication queries)  

**Voice Features:**  
- 🎤 Google Cloud Speech-to-Text API  
- 🗣️ Text-to-Speech (TTS)  

**Database:**  
- 🗄️ PostgreSQL (Stores Medication Schedules)  

## 🏆 Why MedSync?  
✅ **Utility** – Helps elderly and disabled individuals adhere to medication schedules, preventing health risks.  
✅ **Accessibility** – Features **voice commands, text-to-speech**, and an **intuitive UI** for users with impairments.  
✅ **Scalability** – Future expansion plans include:  
   - Doctor integrations 🏥  
   - Pharmacy connections 💊  
   - Wearable device support ⌚  

---

## 📌 Getting Started  
### Prerequisites  
- Node.js & npm installed  
- React Native environment set up  
- Firebase project configured  

### Installation  
```sh
git clone https://github.com/your-username/medsync.git
cd medsync
npm install

Running the App

Mobile (React Native):
npm start

Web (Next.js):
npm run dev
