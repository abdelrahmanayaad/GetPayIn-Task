# 💸 GetPayIn Task

A React Native project built as part of a technical task to demonstrate authentication, navigation, and API integration using **DummyJSON**. The app includes login functionality, user session management, role-based behavior (superadmin), and a basic UI structure for future expansion.

---

## 🚀 Features

- **Authentication Flow** using [DummyJSON API](https://dummyjson.com/docs/auth)
  - Login with username and password
  - Token storage and validation
  - Restore session on app launch
- **Navigation**
  - Splash screen
  - Auth stack (Login)
  - Tabs navigation for main app
- **Superadmin Role**
  - Special privileges (e.g., product deletion when logged in as Superadmin)
- **Biometric Unlock** after restoring session

---

## 🛠️ Tech Stack

- **React Native** (v0.81.x)
- **TypeScript**
- **React Navigation**
- **React Query**
- **Redux Toolkit**
- **React Hooks**
- **Axios** for API calls

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdelrahmanayaad/GetPayIn-Task.git
   cd GetPayIn-Task
   ```

2. Install dependencies:

   ```bash
   npm install
    # or
   yarn install
   ```

3. Start the Metro bundler:

   ```bash
   npx react-native start
   ```

4. Run the app:

   ```bash
   # For Android
   npx react-native run-android

   # For iOS
   npx react-native run-ios
   ```

5. 🔑 Superadmin Credentials (test)
   Use this account to test superadmin behavior:

   ```bash
   username: emilys
   password: emilyspass
   ```

6. 📁 Project Structure

   ```bash
   GetPayIn-Task/
   │
   ├── src/
   │      ├── api/               # apis
   │      ├── navigation/        # App navigation (stacks, tabs)
   │      ├── screens/           # All app screens
   │      ├── store/             # Redux Toolkit slices & store
   │      ├── components/        # Reusable UI components
   │      ├── hooks/             # Custom React hooks
   │      ├── utils/             # Helpers and constants
   │      └── assets/            # Images, fonts, etc.
   │      └── types/             # types.
   │
   └── App.tsx                # Entry point
   ```
