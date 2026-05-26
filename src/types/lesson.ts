export interface Reference {
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  phaseId: string;
  lessonNumber: number;
  title: string;
  description: string;
  estimatedMinutes?: number;
  concepts: string[];
  summary: string;
  keyTakeaways: string[];
  examplePrompts: string[];
  exercises: string[];
  references: Reference[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  lessonIds: string[];
}

export type LessonStatus = 'not-started' | 'learning' | 'completed';

export interface LessonProgress {
  status: LessonStatus;
  completedAt?: string;
  userNotes?: string;
}

export interface LearningLogEntry {
  id: string;
  date: string;
  lessonId?: string;
  lessonTitle?: string;
  learntToday: string;
  repoLinkage: string;
  oldMistakes: string;
  reusablePrompt: string;
  nextSteps: string;
}
