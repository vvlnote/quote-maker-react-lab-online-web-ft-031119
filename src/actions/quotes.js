// TODO: Create action creators as defined in tests
<<<<<<< HEAD
// export function addQuote(quote= {}) {
//   return {type: "ADD_QUOTE", 
//   quote: Object.assign({}, quote, {votes:0})};
// }

export const addQuote = quote => {
  return {type: "ADD_QUOTE", quote: quote};
}

export const removeQuote = quoteId => {
  return {type: "REMOVE_QUOTE", quoteId: quoteId};
}

export const upvoteQuote = quoteId => {
  return {type: "UPVOTE_QUOTE", quoteId: quoteId};
}

export const downvoteQuote = quoteId => {
=======
export function addQuote(quote= {}) {
  return {type: "ADD_QUOTE", quote: quote};
}

// export const addQuote = quote => {
//   return {type: "ADD_QUOTE", quote: quote};
// }

export function removeQuote(quoteId) {
  return {type: "REMOVE_QUOTE", quoteId: quoteId};
}

export function upvoteQuote(quoteId) {
  return {type: "UPVOTE_QUOTE", quoteId: quoteId};
}

export function downvoteQuote(quoteId) {
>>>>>>> f8e88917e1d650d06d376331c7ad89e440911536
  return {type: "DOWNVOTE_QUOTE", quoteId: quoteId};
}
