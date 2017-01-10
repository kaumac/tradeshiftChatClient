export const addMessage = (author, text) => {
  return {
    type: 'ADD_MESSAGE',
    author,
    text
  }
}
