import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from './index'

export default function configureStore(initialState) {
  const middleware = [thunk]
  const store = createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  //const store = createStore(createRootReducer(), preloadedState, composedEnhancers)
  return store
}

// const initalState = {

// }

// const middleware = [thunk]

// const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store;
