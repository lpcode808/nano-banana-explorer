# Staging Environment Setup Guide

This guide will help you set up a staging environment for safe testing before deploying to production.

## Overview

- **Production**: `https://lpcode808.github.io/nano-banana-explorer/`
- **Staging**: `https://lpcode808.github.io/nano-banana-explorer-staging/`

## One-Time Setup

### Step 1: Create the Staging Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository:
   - **Name**: `nano-banana-explorer-staging`
   - **Description**: `Staging environment for nano-banana-explorer`
   - **Visibility**: Public (so you can test the live URL)
   - **DO NOT** initialize with README, .gitignore, or license
3. Click "Create repository"

### Step 2: Run the Setup Script

From your production repository, run:

```bash
./setup-staging.sh
```

This script will:
- Clone your production repo to a staging directory
- Update the remote URL to point to staging repo
- Push everything to the staging repo
- Configure GitHub Pages

### Step 3: Enable GitHub Pages on Staging Repo

1. Go to `https://github.com/lpcode808/nano-banana-explorer-staging/settings/pages`
2. Under "Build and deployment":
   - **Source**: GitHub Actions
3. Click "Save"

### Step 4: Verify Staging Deployment

1. Go to `https://github.com/lpcode808/nano-banana-explorer-staging/actions`
2. Wait for the deployment to complete
3. Visit: `https://lpcode808.github.io/nano-banana-explorer-staging/`

## Daily Workflow

### Testing Changes Before Production

```bash
# 1. Make changes in your production repo
# 2. Push to staging first
git push staging

# 3. Wait for staging deployment
# 4. Test at: https://lpcode808.github.io/nano-banana-explorer-staging/

# 5. If it looks good, push to production
git push origin main
```

### Quick Sync to Staging

Use the sync script to push your current branch to staging:

```bash
./sync-to-staging.sh
```

## How It Works

1. **Staging repo** is a complete copy of your production repo
2. **Same workflow** - builds and deploys the same way
3. **Different URL** - `/nano-banana-explorer-staging/` instead of `/nano-banana-explorer/`
4. **Safe testing** - production stays untouched while you test

## Keeping Staging in Sync

To update staging with latest production code:

```bash
cd ../nano-banana-explorer-staging
git pull production main
git push origin main
```

## Troubleshooting

### Staging site showing source files instead of built files
1. Check GitHub Pages settings: Source must be "GitHub Actions"
2. Check Actions tab for build/deploy errors
3. Verify `.nojekyll` file is in the deploy workflow

### Staging site not updating
1. Check GitHub Actions for failed workflows
2. Verify you pushed to the staging repo: `git push staging`
3. Hard refresh your browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

## Best Practices

- ✅ Always test on staging before pushing to production
- ✅ Keep staging repo in sync with production regularly
- ✅ Use staging to test risky changes
- ✅ Share staging URL for feedback before going live
- ✅ Add a visual indicator (banner) to staging site so you know which environment you're on
