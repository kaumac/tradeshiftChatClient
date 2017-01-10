const message = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        author: action.author,
        text: action.text
      }
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, message(undefined, action)]
    default:
      return state
  }
}

export default messages;
