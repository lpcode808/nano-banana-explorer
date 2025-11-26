import React from 'react';
import { VisualType, TemplateDefinition } from './types';

// Using simple SVG icons for visual representation
export const ICONS = {
  Deconstructor: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  ),
  ProcessMapper: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
    </svg>
  ),
  SlideArchitect: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  ),
  ConceptExplainer: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
};

export const VISUAL_TEMPLATES: TemplateDefinition[] = [
  {
    id: VisualType.DECONSTRUCTOR,
    title: "The Deconstructor",
    description: "Create a 'How to Draw' style breakdown of any object, great for educational guides.",
    icon: ICONS.Deconstructor,
    example: "Drill, Jeep Wrangler, Microscope",
    template: (topic: string) => `Create a step-by-step visual guide on how to draw a ${topic}. Break it down into 6-8 steps, starting from basic geometric primitives (ellipses, boxes, center lines) and refining into the final form. Use an industrial design sketch style with blue construction lines and black final contours. Include a summary box at the bottom.`
  },
  {
    id: VisualType.PROCESS_MAPPER,
    title: "The Process Mapper",
    description: "Visualize a recipe or linear process with inputs, actions, and outputs.",
    icon: ICONS.ProcessMapper,
    example: "Banana Bread, Water Cycle, User Registration",
    template: (topic: string) => `Create a landscape infographic visualizing the process of ${topic}. Use a playful, illustrated style similar to a recipe timeline. Clearly separate 'inputs' from 'actions'. Connect steps with directional arrows. Highlight specific components and what they do.`
  },
  {
    id: VisualType.SLIDE_ARCHITECT,
    title: "The Slide Architect",
    description: "Generate a detailed outline for a presentation deck with image prompts for backgrounds.",
    icon: ICONS.SlideArchitect,
    example: "Q3 Sales Report, History of AI, Pitch Deck",
    template: (topic: string) => `Act as an expert presentation designer. Create a detailed outline for a slide deck about ${topic}. For each slide, provide the Headline, the Body Text, and a specific prompt to generate a photorealistic background image that matches the context. Format this so I can paste it into Google Slides or use it to generate a presentation.`
  },
  {
    id: VisualType.CONCEPT_EXPLAINER,
    title: "The Concept Explainer",
    description: "Explain complex hierarchical concepts using a leveled infographic approach.",
    icon: ICONS.ConceptExplainer,
    example: "Computing Levels, Maslow's Hierarchy, Network OSI Model",
    template: (topic: string) => `Create a vertical infographic explaining the levels of abstraction for ${topic}. Structure it as a 7-layer pyramid or stack, starting from the most fundamental/basic element at the bottom and increasing in complexity/abstraction to the top. Use concise labels and simple icons for each level.`
  }
];
