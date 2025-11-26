
import React, { useState, useEffect, useCallback } from 'react';

interface BlogExample {
  icon: string;
  title: string;
  desc: string;
  img: string;
}

const BLOG_EXAMPLES: BlogExample[] = [
  {
    icon: "🎨",
    title: "Drawing Guides",
    desc: "Pre-loaded prompts for 'how to draw' guides. Perfect for education.",
    img: "https://substackcdn.com/image/fetch/$s_!m0v6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd55942a4-eead-41cf-b52e-bbf7c87284f7_1024x559.jpeg"
  },
  {
    icon: "🍞",
    title: "Process Recipes",
    desc: "Turn text recipes into visual step-by-step infographic guides.",
    img: "https://substackcdn.com/image/fetch/$s_!duIW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa99b4260-c3d1-4b10-a3ee-4511e4e31d58_716x497.png"
  },
  {
    icon: "🧮",
    title: "Concept Pyramids",
    desc: "Visualize hierarchical concepts directly from your chat history.",
    img: "https://substackcdn.com/image/fetch/$s_!MvTR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1d3b114-6d78-4695-bd13-b85ea77e6bd0_1165x692.png"
  },
  {
    icon: "⚙️",
    title: "Video to Diagram",
    desc: "Turn YouTube explainers into static engineering infographics.",
    img: "https://substackcdn.com/image/fetch/$s_!O6xl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9e54d69b-89c0-4719-865e-ee74aa55f9a6_2178x1496.png"
  },
  {
    icon: "🎞️",
    title: "Vibe Coding Slides",
    desc: "Create editable Google Slides decks from rough ideas.",
    img: "https://substackcdn.com/image/fetch/$s_!V_yI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fee54e910-9237-4464-9205-260ca2f536ac_1400x1080.png"
  },
  {
    icon: "✂️",
    title: "Design Challenges",
    desc: "Turn brainstorming sessions into realistic PDF presentations.",
    img: "https://substackcdn.com/image/fetch/$s_!omAJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4d92e9be-1ea8-46a5-bbec-008c83688802_2104x1390.png"
  },
  {
    icon: "💻",
    title: "Technical Guides",
    desc: "Detailed technical approaches generated from conversation logs.",
    img: "https://substackcdn.com/image/fetch/$s_!hqkF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6147f3b0-070b-490f-aa9d-c19061e03f47_2333x1340.png"
  },
  {
    icon: "🎥",
    title: "Video Animation",
    desc: "Generate an infographic, then have Veo animate it.",
    img: "https://substackcdn.com/image/fetch/$s_!0acx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5fdaf33b-4a6e-4f2c-9c01-7c51af5bdd58_1536x2752.png"
  }
];

interface ExampleCardProps {
  item: BlogExample;
  onClick: () => void;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ item, onClick }) => (
  <button 
    onClick={onClick}
    className="group bg-navy-900 rounded-xl overflow-hidden border border-navy-700 hover:border-orange transition-all duration-300 text-left w-full focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-navy-900"
  >
    <div className="h-48 overflow-hidden bg-navy-950 relative">
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </div>
    </div>
    <div className="p-6 relative">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{item.icon}</span>
        <h4 className="font-bold text-white font-serif text-lg">{item.title}</h4>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
    </div>
  </button>
);

interface LightboxProps {
  item: BlogExample;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-950/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center gap-3 text-white/90 px-4">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-serif font-bold text-lg">{item.title}</h3>
              <p className="text-xs text-gray-300 hidden sm:block">{item.desc}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Image Area */}
        <div className="relative flex items-center justify-center w-full h-full max-h-[85vh]">
          {/* Prev Button */}
          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2 sm:left-8 p-3 rounded-full bg-black/50 hover:bg-orange text-white backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white z-20"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <img 
            src={item.img} 
            alt={item.title} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm select-none"
          />

          {/* Next Button */}
          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 sm:right-8 p-3 rounded-full bg-black/50 hover:bg-orange text-white backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white z-20"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Bottom Mobile Caption (since top might be hidden or small) */}
        <div className="sm:hidden text-center mt-4 text-gray-300 text-sm px-4">
          {item.desc}
        </div>
      </div>
    </div>
  );
};

export const BlogPostContent: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex(prev => (prev !== null && prev < BLOG_EXAMPLES.length - 1) ? prev + 1 : prev);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex(prev => (prev !== null && prev > 0) ? prev - 1 : prev);
  }, []);

  return (
    <div className="space-y-24 py-16 border-t border-navy-700 mt-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          The Evolution of AI Imagery
        </h2>
        <p className="text-lg text-gray-400">
          Moving from "Text-to-Image" to "Conversation-to-Infographic".
          <br/>
          <span className="text-sm text-gray-500">Based on "Google Gemini creates informative visuals via Nano Banana" by Justin</span>
        </p>
      </div>

      {/* Eras Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b border-navy-700 pb-4">
          <h3 className="text-2xl font-serif font-bold text-banana">The Three Eras</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Era 1 */}
          <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif font-bold select-none">1</div>
            <div className="relative z-10">
              <div className="text-orange font-mono text-xs font-bold mb-3 tracking-widest uppercase">Foundational</div>
              <h4 className="text-xl font-bold mb-3 text-white">Text-to-Image</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Simple prompts creating abstract or singular visuals. e.g., "Otter on an airplane using Wi-Fi."
              </p>
            </div>
          </div>

          {/* Era 2 */}
          <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif font-bold select-none">2</div>
            <div className="relative z-10">
              <div className="text-orange font-mono text-xs font-bold mb-3 tracking-widest uppercase">Interactive</div>
              <h4 className="text-xl font-bold mb-3 text-white">Editable & Precise</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Refining images through dialogue, style transfer, and inpainting. The "Photoshop replacement" era.
              </p>
            </div>
          </div>

          {/* Era 3 */}
          <div className="bg-navy-800 p-8 rounded-2xl border border-orange shadow-[0_0_30px_rgba(255,103,25,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-serif font-bold select-none text-orange">3</div>
            <div className="relative z-10">
              <div className="text-orange font-mono text-xs font-bold mb-3 tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                Current Era
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Structured Visuals</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Generating complex, structured visual communication. Infographics, slide decks, diagrams, and custom visuals integrated into workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-navy-700 shadow-2xl">
           <img 
            src="https://substackcdn.com/image/fetch/$s_!cdQ5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd4b48fcf-6df9-40f4-b101-3ef6af6dc20e_1024x559.png" 
            alt="The Three Eras Diagram" 
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Examples Section */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-navy-700 pb-4 gap-4">
          <h3 className="text-2xl font-serif font-bold text-banana">8 Examples of Structure</h3>
          <p className="text-sm text-gray-500 font-mono">Click an image to expand</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_EXAMPLES.map((item, index) => (
            <ExampleCard 
              key={index}
              item={item}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Portal */}
      {lightboxIndex !== null && (
        <Lightbox
          item={BLOG_EXAMPLES[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          hasNext={lightboxIndex < BLOG_EXAMPLES.length - 1}
          hasPrev={lightboxIndex > 0}
        />
      )}

      {/* Why This Matters */}
      <section className="bg-navy-800 p-8 md:p-12 rounded-3xl border border-navy-700 text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white">Why This Matters</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              The big picture: any nonlinear conversation or abstract concept can become a teaching/learning tool in under a minute. Whether it’s explaining complex ideas to students, making sense of your own notes, or jumpstarting a presentation—these are enabling faster <strong>communication</strong>, not replacing understanding.
            </p>
          </div>
          <div className="flex-1 w-full">
             <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 flex flex-wrap justify-center gap-3">
                <StepPill text="Generate" />
                <Arrow />
                <StepPill text="Analyze" />
                <Arrow />
                <StepPill text="Animate" />
                <Arrow />
                <StepPill text="Edit by hand" />
                <Arrow />
                <StepPill text="Teach" highlighted />
             </div>
          </div>
        </div>
      </section>

      {/* Appendix: Start Doing & Try Yourself */}
      <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-navy-700">
        {/* Left Col: Editability & Philosophy */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-banana">The Next Frontier: Editability</h3>
            <p className="text-gray-400 leading-relaxed">
              The next frontier is making AI-generated visuals as editable as the concepts they represent. What comes next is when these infographics and diagrams become as easy to tweak as a text document?
            </p>
            <div className="border-l-4 border-orange pl-4 italic text-white/80 my-6">
              "AI isn’t replacing your job, but people who know how to use AI well will."
            </div>
            <p className="text-gray-400 leading-relaxed">
              So whether it’s with infographics or pixel editing or vector creation, the more that you can combine the AI abilities with timeless graphic design principles, then the more effective your final creations will be.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              Start doing <span className="text-xl">🪜🧑‍🏭🧰</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Things are moving so fast. The more you can create scaffolds and things to bring people up to speed, the better. At the end of the day, you have to tinker stuff in real time and not just save articles to your read later apps or download a bunch of PDFs and videos that you don’t take action on.
            </p>
          </div>
        </div>

        {/* Right Col: Try This Yourself */}
        <div className="bg-navy-800/50 rounded-2xl p-8 border border-navy-700 h-fit">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">👋 Try This Yourself</h3>
          <p className="text-gray-400 mb-6">
            All you need is a Google account. (If you use a work/school Workspace, there may be limits).
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-orange font-bold mb-2 uppercase text-sm tracking-wider">Easiest Entry Point</h4>
              <a href="https://gemini.google.com" target="_blank" rel="noreferrer" className="text-white font-mono bg-navy-900 px-3 py-2 rounded border border-navy-600 hover:border-orange transition-colors block w-fit">
                gemini.google.com ↗
              </a>
              <p className="text-sm text-gray-500 mt-2">Make sure "🍌 Image" is selected. Works best under "Fast".</p>
            </div>

            <div>
              <h4 className="text-orange font-bold mb-2 uppercase text-sm tracking-wider">Something Meatier</h4>
              <a href="https://notebooklm.google.com" target="_blank" rel="noreferrer" className="text-white font-mono bg-navy-900 px-3 py-2 rounded border border-navy-600 hover:border-orange transition-colors block w-fit">
                notebooklm.google.com ↗
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Upload chats, docs, YT videos. Ask for slides or an infographic.
              </p>
            </div>

            <div className="bg-navy-900 rounded-lg p-4 border border-navy-700 text-xs text-gray-400">
              <strong>Limits (as of Nov 25, 2025):</strong>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>Six free Images a day via Gemini web</li>
                <li>2 Infographics, 2 Slides per day on NotebookLM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StepPill = ({ text, highlighted = false }: { text: string, highlighted?: boolean }) => (
  <span className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${highlighted ? 'bg-orange text-white shadow-lg shadow-orange/20' : 'bg-navy-800 border border-navy-600 text-gray-400'}`}>
    {text}
  </span>
);

const Arrow = () => (
  <span className="text-gray-600 flex items-center">→</span>
);
