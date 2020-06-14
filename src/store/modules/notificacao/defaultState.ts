import { IStateNotificacao } from '@/interfaces'

const defaultState = (): IStateNotificacao => ({
  notificacao: {
    start: false,
    color: 'success',
    timeout: 5000,
    message: ''
  }
})

export default defaultState
