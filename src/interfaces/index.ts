export interface IProduto {
  nome: string;
  descricao: string;
  categoria: string;
  tamanho: number;
  unidade: string;
  valor: number;
  tempo_preparo: number;
}

export interface ISabor {
  nome: string;
  tempo_preparo: number;
}

export interface IAdicional {
  nome: string;
  valor: number;
  tempo_preparo: number;
}

export interface IPedido {
  tamanho: string;
  sabor: string;
  personalizacao: string[];
  tempo_preparo: number;
  valor_total: number;
}
