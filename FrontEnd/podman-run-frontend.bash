podman build --no-cache --rm --file Containerfile --tag react:frontend .
podman run --interactive --tty --publish 8080:80 --publish 8443:443 react:frontend
echo "browse https://localhost:8443/"
