# Optional: Add Staging Environment Indicator

Want to visually distinguish staging from production? Add this banner component to your app.

## What It Does

Shows a bright orange banner at the top of the page when running on staging:
```
🚧 STAGING ENVIRONMENT 🚧  This is a test version - not production
```

On production, the banner doesn't appear.

## How to Add It

1. The component is already created at: `components/EnvironmentIndicator.tsx`

2. Import it in your `App.tsx`:

```tsx
import { EnvironmentIndicator } from './components/EnvironmentIndicator';
```

3. Add it at the very top of your app, before the header:

```tsx
return (
  <div className="min-h-screen bg-navy-900 text-white font-sans selection:bg-orange selection:text-white pb-20">
    {/* Add this line */}
    <EnvironmentIndicator />

    {/* Header */}
    <header className="border-b border-navy-700 bg-navy-900/80 backdrop-blur-md sticky top-0 z-10">
      ...
```

## Auto-Detection

The component automatically detects staging based on the URL:
- Staging: `https://lpcode808.github.io/nano-banana-explorer-staging/`
- Production: `https://lpcode808.github.io/nano-banana-explorer/`

No configuration needed!

## Customization

Edit `components/EnvironmentIndicator.tsx` to:
- Change colors
- Modify text
- Add additional info (build date, commit hash, etc.)

This is completely optional - your staging environment works fine without it!
