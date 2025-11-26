import { ReactNode } from 'react';

export enum VisualType {
  DECONSTRUCTOR = 'DECONSTRUCTOR',
  PROCESS_MAPPER = 'PROCESS_MAPPER',
  SLIDE_ARCHITECT = 'SLIDE_ARCHITECT',
  CONCEPT_EXPLAINER = 'CONCEPT_EXPLAINER',
}

export interface TemplateDefinition {
  id: VisualType;
  title: string;
  description: string;
  icon: ReactNode;
  template: (topic: string) => string;
  example: string;
}
