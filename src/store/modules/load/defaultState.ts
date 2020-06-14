import { IStateLoad } from '@/interfaces'

const defaultState = (): IStateLoad => ({
  startLoad: {
    start: false
  }
})

export default defaultState
