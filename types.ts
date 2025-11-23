// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Momento da Paulista interface
export interface MomentoPaulista extends CosmicObject {
  type: 'momentos-paulista';
  metadata: {
    titulo?: string;
    historia?: string;
    fotografia?: {
      url: string;
      imgix_url: string;
    };
    galeria?: Array<{
      url: string;
      imgix_url: string;
    }>;
    data?: string;
  };
}

// Evento de Natal interface
export interface EventoNatal extends CosmicObject {
  type: 'eventos-natal';
  metadata: {
    nome?: string;
    descricao?: string;
    horario?: string;
    localizacao?: string;
    foto?: {
      url: string;
      imgix_url: string;
    };
    entrada_gratuita?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}