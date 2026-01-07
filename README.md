# 🎬 Movie Recommendation Web App

A full stack web application that recommends movies based on user preferences.  
Built as part of the **Full Stack Developer Intern Assignment**.

The application accepts a short description from the user (genre, mood, or preference) and returns **3–5 relevant movie recommendations**.

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  https://movie-recommendation-web-app-acelucid-5llrqg0sl.vercel.app

- **Backend (Render):**  
  https://movie-recommendation-2rzc.onrender.com

- **GitHub Repository:**  
  https://github.com/Bittu-26/Movie-Recommendation

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- HTML, CSS
- Axios

### Backend
- Node.js
- Fastify
- SQLite
- OpenAI API

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📌 Features

- Simple and clean user interface
- Accepts natural language movie preferences
- Returns 3–5 movie recommendations
- Backend API with proper error handling
- Graceful fallback for external API rate limits
- Fully deployed and production-ready

---

## 📂 Project Structure

```
Movie-Recommendation/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── recommend.js
│   ├── db/
│   │   └── database.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🔁 API Usage

### Endpoint
```
POST /recommend
```

### Request Body
```json
{
  "preference": "Action movies with a strong female lead"
}
```

### Response
```json
{
  "movies": [
    "Mad Max: Fury Road",
    "Wonder Woman",
    "Atomic Blonde"
  ]
}
```

---

## ⚠️ OpenAI API Fallback Handling

The backend integrates the OpenAI API to generate movie recommendations.

To ensure stability during evaluation, a **graceful fallback mechanism** is implemented:

- If the OpenAI API is available, recommendations are generated dynamically.
- If the API returns a **rate-limit or quota error (HTTP 429)**, the backend responds with a predefined list of relevant movies instead of failing.

This ensures the application remains functional during evaluation.

---

## 🧪 How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js
```

Create a `.env` file in `backend/`:
```env
OPENAI_API_KEY=your_openai_api_key
```

---

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Assignment Compliance

- ✔ Full stack implementation
- ✔ Deployed frontend and backend
- ✔ Clean and simple UI
- ✔ Correct API usage
- ✔ Error handling and fallback logic
- ✔ GitHub repository provided

---

## 👤 Author

**Arpita Maurya**  
Full Stack Developer Intern Applicant
# Movie-Recommendation-web-app-Acelucid-
