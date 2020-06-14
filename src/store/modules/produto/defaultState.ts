import { IStateProduto } from '@/interfaces'

const defaultState = (): IStateProduto => ({
  nome: '',
  descricao: '',
  categoria: '',
  tamanho: 0,
  unidade: '',
  valor: 0,
  tempo_preparo: 0
})

export default defaultState
