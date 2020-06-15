export interface IRootState {
  version: string;
}

export interface IAdicional {
  id?: number;
  nome?: string;
  valor?: number;
  tempo_preparo?: number;
}

export interface ILoad {
  start: boolean;
}

export interface INotificacao {
  start: boolean;
  color: string;
  timeout: number;
  message: string;
}

export interface IProduto {
  id?: number;
  nome?: string;
  descricao?: string;
  categoria?: string;
  tamanho?: number;
  unidade?: string;
  valor?: number;
  tempo_preparo?: number;
}

export interface ISabor {
  id?: number;
  nome?: string;
  tempo_preparo?: number;
}

type TAdicional = Pick<IAdicional, 'id' | 'nome' | 'valor'>

export interface ISacola {
  nome?: string;
  tamanho?: number;
  unidade?: string;
  sabor?: string;
  adicionais?: TAdicional[];
  tempo?: number;
  valor?: number;
}

export interface IStateAdicional {
  adicionais: IAdicional[]
}

export interface IStateLoad extends ILoad {}

export interface IStateNotificacao extends INotificacao {}

export interface IStateProduto extends IProduto {}

export interface IStateSabor extends ISabor {}

export interface IStateSacola {
  pedidos: ISacola[];
}
