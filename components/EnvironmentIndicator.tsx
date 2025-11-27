import React from 'react';

/**
 * Environment Indicator Component
 *
 * Displays a banner when running on staging environment
 * Helps distinguish staging from production at a glance
 */
export const EnvironmentIndicator: React.FC = () => {
  // Detect if we're on staging based on URL
  const isStaging = window.location.hostname.includes('github.io') &&
                    window.location.pathname.includes('nano-banana-explorer-staging');

  if (!isStaging) {
    return null;
  }

  return (
    <div className="bg-orange text-white text-center py-2 px-4 text-sm font-mono border-b-2 border-orange-hover">
      <span className="font-bold">🚧 STAGING ENVIRONMENT 🚧</span>
      <span className="ml-3 opacity-90">
        This is a test version - not production
      </span>
    </div>
  );
};
