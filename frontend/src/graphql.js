import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:8080/graphql';

export const graphQLClient = new GraphQLClient(endpoint);

export const queries = {
  getAllTodos: `
    query {
      allTodos {
        id
        title
        description
        completed
      }
    }
  `,
  
  createTodo: `
    mutation CreateTodo($title: String!, $description: String!) {
      createTodo(title: $title, description: $description) {
        id
        title
        description
        completed
      }
    }
  `,
  
  updateTodo: `
    mutation UpdateTodo($id: BigInteger!, $title: String, $description: String, $completed: Boolean) {
      updateTodo(id: $id, title: $title, description: $description, completed: $completed) {
        id
        title
        description
        completed
      }
    }
  `,
  
  toggleTodo: `
    mutation ToggleTodo($id: BigInteger!) {
      toggleTodo(id: $id) {
        id
        title
        description
        completed
      }
    }
  `,
  
  deleteTodo: `
    mutation DeleteTodo($id: BigInteger!) {
      deleteTodo(id: $id)
    }
  `
};
