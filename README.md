## 🚀 Getting Started: Your Journey with Build.dev

Embarking on your Build.dev journey is easy. Follow these steps to get started:

### 1. **Clone the Repository**

```bash
git clone https://github.com/DebottamMandal123/Build.dev.git
cd Build.dev
```

### 2. **Install Dependencies**

You can use npm, yarn, pnpm, or bun to install the required packages:

```bash
npm install
```

### 3. **Set Up Environment Variables**

Create a `.env` file at the root of the project and populate it with your API keys and configuration details. Refer to `.env.example` for the structure.

```ini
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID=<your_google_auth_client_id>
CONVEX_DEPLOYMENT=<your_convex_deployment>
NEXT_PUBLIC_CONVEX_URL=<your_convex_url>
NEXT_PUBLIC_GEMINI_API_KEY=<your_gemini_api_key>
```

**Note**: You'll need to obtain API keys from the respective services.

### 4. **Launch the Development Server**

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to experience Build.dev locally.
