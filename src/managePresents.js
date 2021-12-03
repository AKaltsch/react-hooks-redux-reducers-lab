const state = {numberOfPresents: 0}

export function managePresents(state, action) {
  switch(action.type) {
    case "presents/add":
      return{
        numberOfPresents: state.numberOfPresents + 1
      }
    default:
      return state;
  }
}
