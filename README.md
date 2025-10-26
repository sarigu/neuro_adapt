# 🧠 Making learning easier for neurodiverse students

This is a simple web app designed to help adapt study materials for different neurodivergent types such as ADHD, Autism, Dyslexia, and more. This is a first prototype. 

The project consists of:
- A **frontend** built with Next.js, Tailwind CSS and Typescript.
- A **backend** built with Node.js and Express that uses the OpenAI API.


## 🚀 Getting Started

### Backend 

1. Navigate to the backend folder `cd backend`

2. Install dependencies: `npm install`

3. Create a .env file in the backend folder with your OpenAI API key

4. Run `node index.js`. The backend server will start on: http://localhost:4000


### Frontend 

1. Navigate to the frontend folder `cd frontend`

2. Install dependencies: `npm install`

3. Run `npm run dev`. The frontend server will start on: http://localhost:3000


## How it Works

* The frontend allows users to select neurodiverse types and input study text.

* It sends this data to the backend API.

* The backend calls OpenAI to adapt the text according to selected neurotypes.

* Adapted text is sent back and displayed in the frontend.
