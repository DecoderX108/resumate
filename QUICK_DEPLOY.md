# 🚀 Quick Deploy to Vercel - 5 Minutes

## Step 1: Push to GitHub (if not already done)

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: One-Click Deploy 🎯

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DecoderX108/resumate)

### Option B: Manual Import

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import `DecoderX108/resumate`
4. Click "Deploy" (no configuration needed!)

## Step 3: Add Environment Variables (Optional)

### For Authentication & Cloud Save:

Go to Project Settings → Environment Variables → Add:

```
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc...
```

### For AI Features (Optional):

```
VITE_OPENROUTER_API_KEY=sk-or-v1-...
```

**Note:** App works perfectly without any environment variables! Auth and AI are optional features.

## Step 4: Done! ✅

Your app is live at: `https://resumate-[random].vercel.app`

## 🎯 What Works Immediately (No Setup):

- ✅ CV Builder with all sections
- ✅ Live Preview
- ✅ PDF Export
- ✅ DOCX Export
- ✅ LaTeX Export
- ✅ Multiple Templates
- ✅ Responsive Design

## 🔐 What Needs Firebase (Optional):

- User Login/Signup
- Save CVs to cloud
- Cross-device access

## 🤖 What Needs OpenRouter (Optional):

- AI Professional Summary
- AI Skill Suggestions
- Smart Content Enhancement

## ⚡ Auto-Deploy

Every push to `main` branch auto-deploys to Vercel!

## 🔗 Share Your Link

```
https://your-app-name.vercel.app
```

That's it! Your resume builder is live in 5 minutes! 🎉
