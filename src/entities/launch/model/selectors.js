export const all = state => state.launches

export const loading = state => all(state).loading
export const error = state => all(state).error
export const launches = state => all(state).launches

export const launchesSortedByDate = state => launches(state).reverse()