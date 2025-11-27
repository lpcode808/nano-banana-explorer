#!/bin/bash

# Quick Sync to Staging Script
# Pushes current branch to staging repository for testing

set -e

echo "🔄 Syncing to staging environment..."
echo ""

# Check if staging remote exists
if ! git remote | grep -q "^staging$"; then
    echo "❌ Error: 'staging' remote not found"
    echo ""
    echo "Add the staging remote first:"
    echo "  git remote add staging https://github.com/lpcode808/nano-banana-explorer-staging.git"
    echo ""
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "Do you want to commit them first? (Y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]] || [[ -z $REPLY ]]; then
        echo "Please commit your changes and run this script again."
        exit 1
    fi
fi

# Push to staging
echo "⬆️  Pushing to staging..."
git push staging "$CURRENT_BRANCH:main" -f

echo ""
echo "✅ Pushed to staging!"
echo ""
echo "🔍 Check deployment status:"
echo "   https://github.com/lpcode808/nano-banana-explorer-staging/actions"
echo ""
echo "🌐 View staging site (after deployment completes):"
echo "   https://lpcode808.github.io/nano-banana-explorer-staging/"
echo ""
echo "💡 Tip: If you're happy with staging, push to production with:"
echo "   git push origin main"
echo ""
