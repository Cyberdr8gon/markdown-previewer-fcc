import Marked from 'marked';
import highlight from 'highlight.js'

const initialState = {
  userInput: "",
  compiledMarkdown: "",
  error: null,
};

// Synchronous highlighting with highlight.js
Marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

export const markdownReducer = (state=initialState, action) => {
  if (action.type === "COMPILE") {
    return Object.assign({}, state, {
      userInput: action.payload.userInput,
      compiledMarkdown: action.payload.userInput 
                ? Marked(action.payload.userInput)
                : "",
    });
  }

  return state;
};
