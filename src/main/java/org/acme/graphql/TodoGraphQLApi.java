package org.acme.graphql;

import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Mutation;
import org.eclipse.microprofile.graphql.Query;

import jakarta.transaction.Transactional;
import java.util.List;

@GraphQLApi
public class TodoGraphQLApi {

    @Query("allTodos")
    public List<Todo> getAllTodos() {
        return Todo.listAll();
    }

    @Query("todo")
    public Todo getTodo(Long id) {
        return Todo.findById(id);
    }

    @Mutation
    @Transactional
    public Todo createTodo(String title, String description) {
        Todo todo = new Todo(title, description, false);
        todo.persist();
        return todo;
    }

    @Mutation
    @Transactional
    public Todo updateTodo(Long id, String title, String description, Boolean completed) {
        Todo todo = Todo.findById(id);
        if (todo != null) {
            if (title != null) {
                todo.title = title;
            }
            if (description != null) {
                todo.description = description;
            }
            if (completed != null) {
                todo.completed = completed;
            }
            todo.persist();
        }
        return todo;
    }

    @Mutation
    @Transactional
    public boolean deleteTodo(Long id) {
        return Todo.deleteById(id);
    }

    @Mutation
    @Transactional
    public Todo toggleTodo(Long id) {
        Todo todo = Todo.findById(id);
        if (todo != null) {
            todo.completed = !todo.completed;
            todo.persist();
        }
        return todo;
    }
}
