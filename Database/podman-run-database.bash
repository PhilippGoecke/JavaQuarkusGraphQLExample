podman build --no-cache --rm --file Containerfile --tag database:postgres .
podman run --interactive --tty --publish 5432:5432 database:postgres
