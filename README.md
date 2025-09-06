# SSLCommerz React + Express Integration

A complete example of integrating **SSLCommerz Payment Gateway** with a **React frontend** and **Express backend**.  
This project demonstrates how to handle payment initialization, success, failure, and cancellation events step by step.

---

## 🚀 Features

- **Backend (Express + TypeScript)**

  - Environment variable setup (`.env`) for credentials.
  - Service layer to initialize payment requests.
  - Routes and controllers for handling payment lifecycle (success, fail, cancel).

- **Frontend (React)**
  - Order creation and payment initiation.
  - Redirecting to SSLCommerz hosted payment page.
  - Displaying success/failure/cancel responses.

---

## 📂 Project Structure

### Backend (Server)

```
server/
│── src/
│   ├── app.ts          # Express app setup
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic (payment handlers)
│   ├── services/       # Payment services (SSLCommerz)
│   ├── config/         # Env and config files
│   └── utils/          # Helpers
│── package.json
│── tsconfig.json
│── .env
```

### Frontend (Client)

```
client/
│── src/
│   ├── components/     # UI components
│   ├── pages/          # Payment workflow pages
│   ├── api/            # Axios requests
│── package.json
│── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/MoniruzzamanBillal/sslcommerz-react-express-integration.git
cd sslcommerz-react-express-integration
```

### 2. Setup Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file inside `server/` with your **SSLCommerz credentials**:

```env
PORT=5000
STORE_ID=your_store_id
STORE_PASSWORD=your_store_password
SSL_PAYMENT_URL=https://sandbox.sslcommerz.com/gwprocess/v4/api.php
```

Run the server:

```bash
npm run dev
```

### 3. Setup Frontend (Client)

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run the client:

```bash
npm run dev
```

---

## 💳 Payment Flow (How it Works)

### 1. Initialize Payment

The backend (`sslServices.initPayment`) sends a request to SSLCommerz with:

- Store credentials (`store_id`, `store_passwd`).
- Transaction details (amount, product info, customer info).
- Callback URLs for success, fail, and cancel events.

Example snippet:

```ts
const response = await axios.post(process.env.SSL_PAYMENT_URL, data, {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
return response.data;
```

This returns a **Gateway URL**, where the user is redirected to complete payment.

---

### 2. Payment Redirection

- User is redirected to **SSLCommerz Hosted Payment Page**.
- User completes payment (Card, Mobile Banking, etc.).

---

### 3. Handling Responses

- **Success** → Redirects to `/api/payment/success`.
- **Fail** → Redirects to `/api/payment/fail`.
- **Cancel** → Redirects to `/api/payment/cancel`.

The backend verifies and updates order status accordingly.

---

## 🎥 Project Video

https://drive.google.com/file/d/1BzfFJw0tM_hPoC5wMhsaDNlbApapnXzV/view?usp=sharing

---

## 📌 Links

- 🔗 Repository: [GitHub Repo](https://github.com/MoniruzzamanBillal/sslcommerz-react-express-integration)
- 🌐 Portfolio: [https://moniruzzaman3018.vercel.app](https://moniruzzaman3018.vercel.app/)

---

## 🛠️ Tech Stack

- **Backend**: Express.js, TypeScript, Axios
- **Frontend**: React.js, Vite, Axios
- **Database**: (Optional, not included in this example)

---

## 📝 License

This project is for **educational and practice purposes**.  
You can modify and use it as needed.
