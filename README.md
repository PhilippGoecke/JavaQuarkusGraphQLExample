# Quarkus GraphQL Todo App with React Frontend

A full-stack todo application built with Quarkus GraphQL backend and React frontend.

## Features

- ✅ Create, read, update, and delete todos
- ✅ Toggle todo completion status
- ✅ Modern, responsive UI
- ✅ GraphQL API with interactive UI
- ✅ In-memory H2 database
- ✅ CORS enabled for local development

## Tech Stack

### Backend
- **Quarkus** - Supersonic Subatomic Java Framework
- **SmallRye GraphQL** - GraphQL implementation
- **Hibernate ORM with Panache** - Simplified persistence
- **H2 Database** - In-memory database

### Frontend
- **React** - JavaScript library for building user interfaces
- **GraphQL Request** - Minimal GraphQL client
- **CSS3** - Modern styling

## Prerequisites

- Java 17 or higher
- Maven 3.8+
- Node.js 16+ and npm

## Getting Started

### Backend Setup

1. Navigate to the project root directory:
```bash
cd /path/to/JavaQuarkusGraphQLExample
```

2. Run the Quarkus application in dev mode:
```bash
mvn quarkus:dev
```

The backend will start on `http://localhost:8080`

Access the GraphQL UI at: `http://localhost:8080/q/graphql-ui/`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will start on `http://localhost:3000`

## API Documentation

### GraphQL Endpoint
- **URL**: `http://localhost:8080/graphql`
- **GraphQL UI**: `http://localhost:8080/q/graphql-ui/`

### Available Operations

#### Queries
- `allTodos` - Fetch all todos
- `todo(id: BigInteger!)` - Fetch a single todo by ID

#### Mutations
- `createTodo(title: String!, description: String!)` - Create a new todo
- `updateTodo(id: BigInteger!, title: String, description: String, completed: Boolean)` - Update a todo
- `toggleTodo(id: BigInteger!)` - Toggle todo completion status
- `deleteTodo(id: BigInteger!)` - Delete a todo

### Example Queries

**Fetch all todos:**
```graphql
query {
  allTodos {
    id
    title
    description
    completed
  }
}
```

**Create a todo:**
```graphql
mutation {
  createTodo(title: "Learn GraphQL", description: "Study GraphQL with Quarkus") {
    id
    title
    description
    completed
  }
}
```

**Toggle todo completion:**
```graphql
mutation {
  toggleTodo(id: 1) {
    id
    completed
  }
}
```

## Project Structure

```
.
├── src/
│   └── main/
│       ├── java/org/acme/graphql/
│       │   ├── Todo.java              # Entity model
│       │   └── TodoGraphQLApi.java    # GraphQL API
│       └── resources/
│           └── application.properties  # Configuration
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── TodoForm.js            # Todo creation form
│       │   ├── TodoForm.css
│       │   ├── TodoList.js            # Todo list display
│       │   └── TodoList.css
│       ├── App.js                      # Main app component
│       ├── App.css
│       ├── index.js                    # React entry point
│       ├── index.css
│       └── graphql.js                  # GraphQL client setup
└── pom.xml                             # Maven configuration
```

## Building for Production

### Backend
```bash
mvn clean package
java -jar target/quarkus-app/quarkus-run.jar
```

### Frontend
```bash
cd frontend
npm run build
```

The optimized production build will be in `frontend/build/`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
