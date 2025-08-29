# 📖 Bajaj Finserv Hackathon API (BFHL)

This is a simple API built using **Node.js** and **Express.js** as part of the Bajaj Finserv Hackathon. It takes in an array of values and gives a structured JSON response with categorized results.

---

## ⚡ What does this API do?

When you send a **POST request** to the `/bfhl` endpoint with a JSON body containing an array, the API:

* Splits numbers into **odd** and **even** arrays (keeps them as strings).
* Converts any **alphabets** to uppercase.
* Identifies **special characters** (anything that is not a number or letter).
* Calculates the **sum of numbers** (returned as a string).
* Builds a **concat\_string** by:

  1. Taking all letters from the input,
  2. Reversing them,
  3. Converting them into alternating uppercase and lowercase characters.
* Always returns a response with status code **200**.

---

## 🛠️ Tech Used

* **Node.js** – JavaScript runtime.
* **Express.js** – Web framework.
* **Render** – Used for deployment (you can also use Vercel, Railway, or any platform).

---

## ▶️ How to run locally

1. Clone the repo:

   ```bash
   git clone https://github.com/<your-username>/bfhl-api.git
   cd bfhl-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The API will be running at:

   ```
   http://localhost:3000/bfhl
   ```

---

## 🔗 API Endpoint

### `POST /bfhl`

#### Example Request Body

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

#### Example Response

```json
{
  "is_success": true,
  "user_id": "giriraj_pradeep_parsewar_18102003",
  "email": "girirajpradeepparsewar2022@vitbhopal.ac.in",
  "roll_number": "22BCE10681",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

## 🧪 Testing the API

### Using curl (Git Bash/Linux/macOS)

```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["A","ABcD","DOE"]}'
```

### Using Postman

1. Open Postman.
2. Method → **POST**
3. URL → `http://localhost:3000/bfhl`
4. Headers → `Content-Type: application/json`
5. Body → raw → JSON

   ```json
   {
     "data": ["2","a","y","4","&","*","5","b"]
   }
   ```
6. Click **Send** and see the response.

---

## 🌍 Deployment

This project can be deployed on Render easily:

1. Push your code to GitHub.
2. Go to [Render](https://render.com).
3. Create a new **Web Service** and connect your repo.
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `npm start`
6. After deploy, your live API URL will look like:

   ```
   https://<your-app-name>.onrender.com/bfhl
   ```

---

## 👤 Author

* **Name:** Giriraj Pradeep Parsewar
* **Email:** [girirajpradeepparsewar2022@vitbhopal.ac.in](mailto:girirajpradeepparsewar2022@vitbhopal.ac.in)
* **Roll No:** 22BCE10681
