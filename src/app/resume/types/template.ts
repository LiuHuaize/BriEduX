export type TemplateId = 
  | "azurill" 
  | "bronzor" 
  | "chikorita" 
  | "ditto" 
  | "kakuna" 
  | "nosepass" 
  | "onyx" 
  | "pikachu" 
  | "rhyhorn";

export interface Template {
  id: TemplateId;
  name: string;
  thumbnail: string;
  description?: string;
} 