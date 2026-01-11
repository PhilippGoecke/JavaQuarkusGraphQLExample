podman build --no-cache --rm --file Containerfile --tag quarkus:backend .
podman run --interactive --tty --publish 8888:8888 quarkus:backend
echo "browse https://localhost:8888/graphiql"
