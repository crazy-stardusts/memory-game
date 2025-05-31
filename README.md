# ⚡ Zap 'n' Learn — Picture Matching Memory Game

**Zap 'n' Learn** is a stylish, fast, and fun memory game built with **React**, **Express.js**, **PostgreSQL**, and **Tailwind CSS**. Flip cards, find matching images, and give your brain a quick workout — all wrapped in a smooth, responsive UI.

---

## ✨ Features

- 🧠 Picture matching memory game
- 🖼️ Dynamic card data from backend
- 🔗 RESTful API powered by Express and PostgreSQL
- 💅 Tailwind CSS for clean, responsive styling
- 🐳 Dockerized backend for easy setup

---

## 🧰 Tech Stack

**Frontend**
- React
- Tailwind CSS

**Backend**
- Node.js + Express
- PostgreSQL
- Sequelize ORM
- Docker

---

## ⚙️ Setup Instructions

### 📝 Prerequisites

- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

---

### 🔧 Setup

1. **Create Database**

    ```bash
    createdb zap
    ```

2. **Create Environment File**

    Create a file at `/backend/.env` with the following content:

    ```env
    PORT=5000
    DB_NAME=zap
    DB_USER=your_user_here
    DB_PASSWORD=your_password_here
    DB_HOST=host.docker.internal
    DB_PORT=5432
    DB_DIALECT=postgres
    ```
> **Note for Linux users:** Replace `host.docker.internal` with `localhost` in `.env`.

3. **Build Docker Image**

    ```bash
    docker build -t zap .
    ```

4. **Run Docker Container**

    ```bash
    docker run -p 5000:5000 --env-file ./backend/.env zap
    ```

---

## 🌍 Demo

Check out the live game here:  
🔗 [https://zap-n-match.onrender.com/](https://zap-n-match.onrender.com/)

---

