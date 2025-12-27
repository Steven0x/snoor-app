# Snoor Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Clone the Repository

```bash
# Clone from GitHub (replace with actual URL)
git clone https://github.com/yourusername/snoor-app.git
cd snoor-app
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages (~5 minutes first time).

### Step 3: Start Android Emulator

1. Open **Android Studio**
2. Click **"More Actions"** → **"Virtual Device Manager"**
3. Click green ▶️ play button on any device
4. Wait for emulator to fully boot

### Step 4: Run the App

```bash
npm run android
```

First build takes 3-5 minutes. Subsequent runs are faster (~30 seconds).

## ✅ What You'll See

1. **Snoor Home Screen** with last night's score
2. **Purple "Start Sleep Session" button**
3. Tap it → Navigate to Sleep Session screen
4. **Start Session** → Timer and stats update in real-time
5. **Stop Session** → View summary

## 📱 Features Currently Working

- ✅ Complete navigation flow
- ✅ Real-time session monitoring
- ✅ Snore detection algorithm (rule-based)
- ✅ Score calculation (0-100)
- ✅ Database storage
- ✅ Audio preprocessing
- ⚠️ Audio capture (simulated - needs native implementation)

## 🔧 Troubleshooting

### "Command not found: npm"
Install Node.js from https://nodejs.org/

### Build Errors
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

### Can't Connect to Metro
Make sure emulator is running first, then run `npm run android`

## 📁 Project Structure

```
snoor-app/
├── src/
│   ├── screens/              # UI screens
│   │   ├── HomeScreen.tsx
│   │   └── SleepSessionScreen.tsx
│   └── services/
│       ├── audio/            # Audio capture & processing
│       ├── ml/               # ML detection
│       ├── session/          # Session management
│       └── storage/          # Database
├── App.tsx                   # Main app component
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## 🎯 Next Steps

After getting it running:

1. **Explore the code** - Check out the services in `src/services/`
2. **Try the detection** - Start a session, see events being detected
3. **Check the database** - Events are saved to SQLite
4. **Implement native audio** - Replace mock in `AudioCaptureService.ts`

## 📚 Documentation

- **README.md** - Project overview
- **ARCHITECTURE.md** - Technical deep dive (in outputs folder)
- **PROJECT_SUMMARY.md** - Full implementation roadmap

## 💡 Development

### Run on iOS (Mac only)
```bash
cd ios
pod install
cd ..
npm run ios
```

### Run Tests
```bash
npm test
```

### Lint Code
```bash
npm run lint
```

## ⚠️ Known Limitations

- Audio recording is currently **simulated**
- Native Android/iOS audio modules need implementation
- Background service requires native code
- ML model not included (using rule-based detection)

The app is **fully functional for UI/flow testing** but needs native audio implementation for production use.

## 🐛 Getting Help

- Check existing GitHub issues
- Open a new issue with error details
- Include: OS, Node version, error message

---

**Ready to build!** 🎉
