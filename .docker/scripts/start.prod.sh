PROJECT_ROOT="$(dirname "$0")/../.."
docker-compose --file $PROJECT_ROOT/.docker/docker-compose.yaml --env-file="$PROJECT_ROOT/.env.prod" up
