# Quick Start: Staging Environment

A simple 3-step guide to get your staging environment up and running.

## 🚀 Setup (Do Once)

### 1. Create Staging Repo on GitHub
- Go to: https://github.com/new
- Name: `nano-banana-explorer-staging`
- Visibility: **Public**
- Don't initialize with anything
- Click "Create repository"

### 2. Run Setup Script
```bash
./setup-staging.sh
```

### 3. Enable GitHub Pages
- Go to: https://github.com/lpcode808/nano-banana-explorer-staging/settings/pages
- Set Source to: **GitHub Actions**
- Save

**Done!** Your staging site will be at:
`https://lpcode808.github.io/nano-banana-explorer-staging/`

## 📋 Daily Workflow

```bash
# Option A: Quick sync (recommended)
./sync-to-staging.sh

# Option B: Manual push
git push staging main
```

Then:
1. Check deployment: https://github.com/lpcode808/nano-banana-explorer-staging/actions
2. Test on staging: https://lpcode808.github.io/nano-banana-explorer-staging/
3. If good → push to production: `git push origin main`

## 🎯 The Goal

**Before staging:**
```
Make change → Push to production → 😱 Site breaks → Fix frantically
```

**With staging:**
```
Make change → Test on staging → ✅ Looks good → Push to production → 😎
```

## 💡 Pro Tips

1. **Always test big changes on staging first**
2. **Share staging URL for feedback** before going live
3. **Keep both repos in sync** - staging should mirror production
4. **Add environment indicator** (optional) - see OPTIONAL-STAGING-INDICATOR.md

## 🆘 Need Help?

See full documentation: `STAGING-SETUP.md`
