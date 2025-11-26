import React, { useState } from 'react';

interface PromptResultProps {
  prompt: string;
  onReset: () => void;
}

export const PromptResult: React.FC<PromptResultProps> = ({ prompt, onReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-in fade-in zoom-in duration-300">
      <div className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-navy-700 bg-navy-900/50 flex justify-between items-center">
          <h3 className="text-xl font-serif font-bold text-banana">Your Era 3 Prompt</h3>
          <div className="flex gap-2">
             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-navy-700 text-gray-300">
               Ready for Gemini
             </span>
          </div>
        </div>
        
        <div className="p-6 bg-navy-900 relative group">
          <pre className="whitespace-pre-wrap font-mono text-sm md:text-base text-gray-300 leading-relaxed">
            {prompt}
          </pre>
          
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 bg-navy-800 border border-navy-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-all"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <div className="flex items-center gap-1 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">Copied</span>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
            )}
          </button>
        </div>

        <div className="p-6 bg-navy-800 border-t border-navy-700 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-sm text-gray-400">
            Paste into <a href="https://gemini.google.com" target="_blank" rel="noreferrer" className="text-banana hover:underline decoration-banana underline-offset-2">Gemini</a> <span className="text-gray-500 text-xs italic">(enable "Image" or "Canvas" mode)</span> or <a href="https://notebooklm.google.com" target="_blank" rel="noreferrer" className="text-banana hover:underline decoration-banana underline-offset-2">NotebookLM</a>.
          </p>
          <button
            onClick={onReset}
            className="text-sm font-medium text-gray-300 hover:text-white underline decoration-gray-500 hover:decoration-white underline-offset-4 transition-all"
          >
            Create Another
          </button>
        </div>
      </div>
    </div>
  );
};
