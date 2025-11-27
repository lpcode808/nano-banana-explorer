#!/bin/bash

# Staging Environment Setup Script
# This script sets up a staging repository for safe testing

set -e  # Exit on error

echo "🚀 Setting up staging environment for nano-banana-explorer"
echo ""

# Configuration
STAGING_REPO_NAME="nano-banana-explorer-staging"
GITHUB_USER="lpcode808"
STAGING_DIR="../${STAGING_REPO_NAME}"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the root of nano-banana-explorer repository"
    exit 1
fi

echo "📋 Setup Steps:"
echo "1. Create staging repository on GitHub"
echo "2. Clone production code to staging directory"
echo "3. Configure staging remote"
echo "4. Push to staging repository"
echo ""

# Step 1: Prompt user to create GitHub repo
echo "📝 Step 1: Create GitHub Repository"
echo ""
echo "Please go to: https://github.com/new"
echo ""
echo "Create a repository with these settings:"
echo "  - Name: ${STAGING_REPO_NAME}"
echo "  - Description: Staging environment for nano-banana-explorer"
echo "  - Visibility: Public"
echo "  - DO NOT initialize with README, .gitignore, or license"
echo ""
read -p "Press Enter once you've created the repository on GitHub..."

# Step 2: Clone to staging directory
echo ""
echo "📦 Step 2: Creating staging directory..."

if [ -d "$STAGING_DIR" ]; then
    echo "⚠️  Warning: Staging directory already exists at $STAGING_DIR"
    read -p "Do you want to remove it and start fresh? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf "$STAGING_DIR"
    else
        echo "❌ Aborted. Please manually handle the existing staging directory."
        exit 1
    fi
fi

# Clone the current repo to staging directory
echo "Cloning repository to $STAGING_DIR..."
git clone . "$STAGING_DIR"
cd "$STAGING_DIR"

# Step 3: Configure staging remote
echo ""
echo "🔧 Step 3: Configuring staging remote..."

# Remove the old origin and set new one
git remote remove origin
git remote add origin "https://github.com/${GITHUB_USER}/${STAGING_REPO_NAME}.git"

# Also add production as a remote for easy syncing
git remote add production "https://github.com/${GITHUB_USER}/nano-banana-explorer.git"

echo "Remotes configured:"
git remote -v

# Step 4: Push to staging
echo ""
echo "⬆️  Step 4: Pushing to staging repository..."

# Push to staging repo
git push -u origin main

echo ""
echo "✅ Staging repository setup complete!"
echo ""
echo "📍 Next Steps:"
echo ""
echo "1. Enable GitHub Pages on your staging repo:"
echo "   Go to: https://github.com/${GITHUB_USER}/${STAGING_REPO_NAME}/settings/pages"
echo "   Set Source to: GitHub Actions"
echo ""
echo "2. Wait for deployment to complete:"
echo "   Check: https://github.com/${GITHUB_USER}/${STAGING_REPO_NAME}/actions"
echo ""
echo "3. Visit your staging site:"
echo "   URL: https://${GITHUB_USER}.github.io/${STAGING_REPO_NAME}/"
echo ""
echo "4. Add staging remote to your production repo for easy pushing:"
echo "   cd ../nano-banana-explorer"
echo "   git remote add staging https://github.com/${GITHUB_USER}/${STAGING_REPO_NAME}.git"
echo ""
echo "📚 See STAGING-SETUP.md for workflow details and best practices"
echo ""
