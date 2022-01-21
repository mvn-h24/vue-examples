PROJECT_ROOT="$(dirname "$0")/../.."
docker-compose --file $PROJECT_ROOT/.docker/docker-compose.dev.yaml --env-file="$PROJECT_ROOT/.env.dev" up
