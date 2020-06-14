import { IStateSabor } from '@/interfaces'

const defaultState = (): IStateSabor => ({
  nome: '',
  tempo_preparo: 0
})

export default defaultState
