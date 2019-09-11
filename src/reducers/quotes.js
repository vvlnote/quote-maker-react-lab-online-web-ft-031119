export default (state = [], action) => {
	switch(action.type) {
		case 'ADD_QUOTE':
		debugger;
			return state.concat(action.quote);

		case 'REMOVE_QUOTE':
			return state.filter(quote => quote.id !== action.quoteId);

		case 'DOWNVOTE_QUOTE':

			let quotes = state.map(quote => {
				if (quote.id === action.quoteId) {
					debugger;
					 return (quote.votes ? {...quote, votes: quote.votes -= 1} : quote);
				} else {
					return quote;
				}
			})
			debugger; 
			return quotes;

		case 'UPVOTE_QUOTE':
			debugger;
			quotes = state.map(quote => {
				if (quote.id === action.quoteId) {
					return {...quote, votes: quote.votes += 1};
				} else {
					return quote;
				}
			})
			return quotes;			
		default:
			return state;
	}
}
