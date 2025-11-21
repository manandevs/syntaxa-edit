export interface ValueButton {
  text: string;
  url: string;
  variant?: 'default' | 'outline' | 'ghost' | 'black';
}

export interface ValueImage {
  src: string;
  alt: string;
}

export interface ValueSection {
  id: string;
  heading: string;
  intro: string;
  image?: ValueImage;
  buttons?: ValueButton[];
  subSections: {
    subHeading: string;
    content: string;
    bulletPoints?: string[];
  }[];
}