import { AppState } from '../types'

export default function initialState(): AppState {
    return {
        ui: {
            dialogOpen: {},
        },
    }
}
