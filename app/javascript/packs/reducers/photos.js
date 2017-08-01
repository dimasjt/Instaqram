import {
  APOLLO_QUERY_RESULT,
  APOLLO_MUTATION_RESULT,
  APOLLO_QUERY_RESULT_CLIENT,
  APOLLO_MUTATION_RESULT_CLIENT,
  LOCATION_CHANGE,
} from "../constants"

const initializeState = {
  list: [],
  active: null,
}

function photos(state = initializeState, action) {
  if (action.type === LOCATION_CHANGE) {
    return initializeState
  }
  if (action.type === APOLLO_QUERY_RESULT || action.type === APOLLO_MUTATION_RESULT || action.type === APOLLO_QUERY_RESULT_CLIENT || action.type === APOLLO_MUTATION_RESULT_CLIENT) {
    switch (action.operationName) {
      case "photo":
        return {
          ...state,
          active: action.result.data.photo,
        }
      case "likePhoto":
        return {
          ...state,
          active: {
            ...state.active,
            likes_count: action.result.data.likePhoto.likes_count,
            liked: action.result.data.likePhoto.liked,
          },
        }
      case "unlikePhoto":
        return {
          ...state,
          active: {
            ...state.active,
            likes_count: action.result.data.unlikePhoto.likes_count,
            liked: action.result.data.unlikePhoto.liked,
          },
        }
      default:
        return state
    }
  }
  return state
}

export default photos
