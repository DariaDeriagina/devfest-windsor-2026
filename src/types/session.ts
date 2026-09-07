export interface Session {
  id: string;
  title: string;
  description: string;
  speaker: string;
  speakerRole?: string;
  track?: string;
  type?: string;
  time?: string;
  duration?: string;
  location?: string;
  isSubmitted?: boolean;
}
