# NewsFeed App

A simple and fast Arabic news reader built with **React + Vite**.  
The app fetches categorized news, supports search with debouncing, pagination and dark mode.

---
🔗 **Try the app here:**  
https://newsfeed-app-omega.vercel.app/

---

## Features

- Browse Arabic top headlines
- Filter by category (General, Business, Sports, Technology, etc.)
- Search with debounce for smoother UX
- Pagination (Next / Previous)
- Loading skeleton using Material UI
- Error handling for API failures
- Serverless API route (`/api/news`) to avoid CORS
- Responsive layout

---

## Tech Stack

- React (Vite)
- Material UI (MUI)
- Emotion styled-components
- Lodash debounce
- GNews API
- Vercel Serverless Functions

---

## Environment Variables

Create a `.env` file in the project root:

VITE_GNEWS_API_KEY=your_api_key_here  
On Vercel, also add the variable in: **Project Settings → Environment Variables**
