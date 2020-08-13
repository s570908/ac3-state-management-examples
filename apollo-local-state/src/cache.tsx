
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { Todos } from "./models/Todos";
import { VisiblityFilter, VisibilityFilters } from "./models/VisibilityFilter";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read () {
            console.log("cacheQuery(todosVar) ", todosVar());
            return todosVar();
          }
        },
        visibilityFilter: {
          read () {
            console.log("cacheQuery(visibilityFilterVar) ", visibilityFilterVar());
            return visibilityFilterVar();
          },
        }
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */

const todosInitialValue: Todos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(
  todosInitialValue
);

export const visibilityFilterVar = makeVar<VisiblityFilter>(
  VisibilityFilters.SHOW_ALL
)