# Vercel Deployment Guide for Resumate

## 🚀 Quick Deployment Steps

### 1. Prerequisites

- GitHub account connected to Vercel
- Push all changes to GitHub repository
- Firebase project setup (optional but recommended)

### 2. Deploy to Vercel

#### Option A: Import from GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your repository: `DecoderX108/resumate`
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 3. Environment Variables Setup

Add these in Vercel Dashboard → Settings → Environment Variables:

#### Required for Full Functionality:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

#### Optional (for AI features):

```
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```

#### Pre-configured (no need to add):

```
VITE_APP_NAME=Resumate
VITE_APP_VERSION=1.0.0
```

### 4. Firebase Setup (If Using Authentication)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or use existing
3. Enable Authentication → Email/Password
4. Add your Vercel domain to Authorized domains:
   - Settings → Authorized domains
   - Add: `your-app.vercel.app`
5. Copy credentials to Vercel environment variables

### 5. Post-Deployment

After deployment completes:

- ✅ Visit your live URL: `https://your-app.vercel.app`
- ✅ Test CV building functionality
- ✅ Test PDF/DOCX/LaTeX export
- ✅ Test authentication (if Firebase configured)
- ✅ Test AI features (if OpenRouter configured)

## 📋 Deployment Checklist

- [ ] All code pushed to GitHub
- [ ] `vercel.json` configured
- [ ] Environment variables added in Vercel
- [ ] Firebase authorized domains updated
- [ ] Build succeeds locally: `npm run build`
- [ ] Preview build works: `npm run preview`
- [ ] No console errors in production build

## 🔧 Troubleshooting

### Build Fails

```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint
```

### Environment Variables Not Working

- Make sure variables start with `VITE_`
- Redeploy after adding environment variables
- Check Vercel deployment logs for errors

### Firebase Authentication Issues

- Verify domain is authorized in Firebase Console
- Check environment variables are correct
- Ensure Firebase is initialized properly

### AI Features Not Working

- OpenRouter API key is optional
- App works without AI features
- Check console for API errors

## 📊 Performance Tips

1. **Enable Vercel Analytics** (optional)

   - Go to project settings
   - Enable Web Analytics
   - Monitor performance

2. **Custom Domain** (optional)

   - Add domain in Vercel Dashboard
   - Update DNS records
   - SSL is automatic

3. **Serverless Functions** (if needed later)
   - Place in `api/` folder
   - Automatically deployed

## 🎯 Expected Results

After successful deployment:

- Live URL: `https://resumate-[random].vercel.app`
- Auto HTTPS/SSL enabled
- Global CDN distribution
- Automatic deployments on git push
- Preview deployments for pull requests

## 📱 Features Available

**Without Environment Variables:**

- ✅ CV building (all sections)
- ✅ Live preview
- ✅ PDF export (basic)
- ✅ DOCX export
- ✅ LaTeX export
- ✅ Template selection
- ❌ User authentication
- ❌ AI-powered suggestions

**With Firebase:**

- ✅ All above features
- ✅ User authentication
- ✅ Save CVs to cloud
- ❌ AI features (needs OpenRouter)

**With Firebase + OpenRouter:**

- ✅ All features
- ✅ AI professional summary
- ✅ AI skill suggestions
- ✅ AI content optimization

## 🆘 Support

If deployment fails:

1. Check Vercel deployment logs
2. Verify all dependencies in package.json
3. Test build locally: `npm run build`
4. Check GitHub repository is up to date

## 🎉 Success!

Once deployed, share your resume builder:

- `https://your-app.vercel.app`

Your app is now live and globally accessible! 🚀
