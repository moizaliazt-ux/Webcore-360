# WebCore360

WebCore360 is a premium digital marketing and tech solutions platform. It features a high-end, immersive frontend built for performance and conversions, paired with a secure, rate-limited Node.js backend.

## 🚀 Features

- **Premium UI/UX:** Stunning, high-performance interface with glassmorphism, micro-animations, and dynamic scroll triggers.
- **Monorepo Architecture:** Seamlessly integrates a Vite/React frontend with an Express/Node.js backend.
- **Interactive 3D & Animations:** Powered by GSAP, Framer Motion, and OGL for an unforgettable user experience.
- **Secure API Backend:** Hardened with Helmet, CORS, and Express Rate Limit to protect against abuse.
- **Built-in Contact System:** Integrated Nodemailer for direct SMTP email delivery from contact forms.
- **Responsive Design:** Fully tailored for mobile, tablet, and desktop viewing.

## 🛠 Tech Stack

**Frontend (`apps/web`):**

- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- [Radix UI](https://www.radix-ui.com/) / shadcn/ui

**Backend (`apps/api`):**

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [Helmet](https://helmetjs.github.io/) & [Morgan](https://github.com/expressjs/morgan)

## 📦 Project Structure

```text
WebCore360/
├── apps/
│   ├── api/                # Express backend application
│   │   ├── src/            # Controllers, routes, and middleware
│   │   ├── package.json
│   │   └── .env            # Backend secrets (SMTP, PORT, CORS)
│   │
│   └── web/                # Vite + React frontend application
│       ├── src/            # Pages, components, and assets
│       ├── public/         # Static images and icons
│       ├── package.json
│       ├── vite.config.js
│       └── .env            # Frontend environment (VITE_API_URL)
│
├── package.json            # Root configuration for monorepo
└── README.md
```

## ⚙️ Local Development

### Prerequisites

- **Node.js** (v20+ recommended)
- **npm**

### 1. Clone the repository

```bash
git clone https://github.com/hamzaiqbal35/WebCore360.git
cd WebCore360
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in `apps/api/` and configure your SMTP details:

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000

# SMTP / Nodemailer
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=465
SMTP_USER=info@yourdomain.com
SMTP_PASS=your_password
MAIL_TO=info@yourdomain.com
```

Create a `.env` file in `apps/web/`:

```env
VITE_API_URL=http://localhost:3001
```

### 4. Start the Development Server

Run both the frontend and backend concurrently from the root directory:

```bash
npm run dev
```

- Frontend will be available at `http://localhost:3000`
- Backend API will be available at `http://localhost:3001`

## 📄 License

This project is proprietary and confidential. Unauthorized copying, transferring, or reproduction of this repository is strictly prohibited.
