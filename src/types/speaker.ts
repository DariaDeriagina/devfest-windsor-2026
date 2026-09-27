export interface Speaker {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  imageAlt: string;
  linkedinUrl?: string;
  bio?: string;
  accentColor: "blue" | "green" | "red" | "gold";
  isKeynote?: boolean;
}
