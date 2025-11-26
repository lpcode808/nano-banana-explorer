
import React, { useState, useRef, useEffect } from 'react';
import { VISUAL_TEMPLATES } from './constants';
import { VisualType } from './types';
import { VisualCard } from './components/VisualCard';
import { PromptResult } from './components/PromptResult';
import { BlogPostContent } from './components/BlogPostContent';

const App: React.FC = () => {
  const [selectedType, setSelectedType] = useState<VisualType | null>(null);
  const [topic, setTopic] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !topic.trim()) return;

    const template = VISUAL_TEMPLATES.find(t => t.id === selectedType);
    if (template) {
      setGeneratedPrompt(template.template(topic.trim()));
    }
  };

  const handleReset = () => {
    setGeneratedPrompt(null);
    setTopic('');
    setSelectedType(null);
  };

  // Auto-focus input when type is selected
  useEffect(() => {
    if (selectedType && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedType]);

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans selection:bg-orange selection:text-white pb-20">
      {/* Header */}
      <header className="border-b border-navy-700 bg-navy-900/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <h1 className="font-serif font-bold text-xl tracking-tight">Nano Banana Architect</h1>
          </div>
          <div className="text-xs font-mono text-gray-400 hidden sm:block">
            Era 3 Visuals v1.0
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {!generatedPrompt ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Original Article Link */}
            <div className="text-center -mb-6">
              <a 
                href="https://acaiberry.substack.com/p/google-gemini-creates-informative" 
                target="_blank" 
                rel="noreferrer" 
                className="text-orange hover:text-orange-hover hover:underline text-sm font-mono transition-colors"
              >
                Read the original article: https://acaiberry.substack.com/p/google-gemini-creates-informative
              </a>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-navy-700/50">
              <img 
                src="https://substackcdn.com/image/fetch/$s_!KMj9!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba598c75-c3ee-4c60-8fec-588a08afa942_2752x1536.png" 
                alt="The Evolution of AI Imagery: Three Eras and Examples" 
                className="w-full h-auto"
              />
            </div>

            {/* Intro */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
                Turn ideas into structured visuals.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Stop guessing prompts. Select a visual structure, inject your topic, and get a mathematically optimized prompt for Gemini or NotebookLM.
              </p>
            </div>

            {/* Step 1: Visual Selector */}
            <section aria-label="Select Visual Type" className="space-y-6">
              <div className="flex items-center gap-3 text-banana font-mono text-sm uppercase tracking-wider">
                <span className="flex justify-center items-center w-6 h-6 rounded-full border border-banana text-xs">1</span>
                Select Structure
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VISUAL_TEMPLATES.map((template) => (
                  <VisualCard
                    key={template.id}
                    template={template}
                    isSelected={selectedType === template.id}
                    onClick={() => setSelectedType(template.id)}
                  />
                ))}
              </div>
            </section>

            {/* Step 2: Topic Input */}
            <section 
              aria-label="Enter Topic" 
              className={`space-y-6 transition-all duration-500 ${selectedType ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 pointer-events-none filter blur-sm'}`}
            >
              <div className="flex items-center gap-3 text-banana font-mono text-sm uppercase tracking-wider">
                <span className="flex justify-center items-center w-6 h-6 rounded-full border border-banana text-xs">2</span>
                Inject Topic
              </div>

              <form onSubmit={handleGenerate} className="relative max-w-2xl mx-auto">
                <input
                  ref={inputRef}
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder={selectedType ? `e.g., ${VISUAL_TEMPLATES.find(t => t.id === selectedType)?.example.split(',')[0]}` : "Select a structure first..."}
                  className="w-full bg-navy-800 border border-navy-600 rounded-full py-4 pl-6 pr-36 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-banana focus:border-transparent transition-all shadow-lg"
                  disabled={!selectedType}
                />
                <button
                  type="submit"
                  disabled={!selectedType || !topic.trim()}
                  className={`
                    absolute right-2 top-2 bottom-2 px-6 rounded-full font-medium transition-all duration-200 flex items-center gap-2
                    ${(!selectedType || !topic.trim()) 
                      ? 'bg-navy-700 text-gray-500 cursor-not-allowed' 
                      : 'bg-orange hover:bg-orange-hover text-white shadow-md hover:shadow-lg active:scale-95'
                    }
                  `}
                >
                  Generate
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </section>

          </div>
        ) : (
          <PromptResult prompt={generatedPrompt} onReset={handleReset} />
        )}

        <BlogPostContent />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-4 text-center text-xs text-gray-600 border-t border-navy-800 bg-navy-900 z-50">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span>Based on the "Nano Banana" era of AI imagery.</span>
          <span className="font-mono text-navy-700">NO AI WAS USED IN THIS LOGIC</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
