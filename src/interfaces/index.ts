export interface IPedido {
  id: number;
  tamanho: string;
  sabor: string;
  personalizacao: string[];
  tempo_preparo: number;
  valor_total: number;
}
