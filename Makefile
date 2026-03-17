# Bananas Commerce - Makefile
.PHONY: help dev-up dev-down build test lint deploy

# Default target
help:
	@echo "🍌 Bananas Commerce - Available Commands"
	@echo ""
	@echo "Development:"
	@echo "  make dev-up          Start development environment"
	@echo "  make dev-down        Stop development environment"
	@echo "  make dev-logs        View development logs"
	@echo ""
	@echo "Building:"
	@echo "  make build           Build all applications"
	@echo "  make build-web       Build web frontend only"
	@echo "  make build-admin     Build admin panel only"
	@echo ""
	@echo "Testing:"
	@echo "  make test            Run all tests"
	@echo "  make test-unit       Run unit tests"
	@echo "  make test-integration Run integration tests"
	@echo "  make test-e2e        Run E2E tests"
	@echo ""
	@echo "Database:"
	@echo "  make db-migrate      Run database migrations"
	@echo "  make db-seed         Seed database with sample data"
	@echo "  make db-reset        Reset database"
	@echo ""
	@echo "Deployment:"
	@echo "  make deploy-k8s      Deploy to Kubernetes"
	@echo "  make deploy-aws      Deploy to AWS"
	@echo ""

# Development
dev-up:
	@echo "🚀 Starting development environment..."
	docker-compose up -d
	@echo ""
	@echo "Services:"
	@echo "  Web App:     http://localhost:3000"
	@echo "  Admin Panel: http://localhost:3001"
	@echo "  API Gateway: http://localhost:8000"
	@echo "  PostgreSQL:  localhost:5432"
	@echo "  Redis:       localhost:6379"
	@echo "  Grafana:     http://localhost:3002"

dev-down:
	@echo "🛑 Stopping development environment..."
	docker-compose down

dev-logs:
	docker-compose logs -f

dev-build:
	docker-compose build --no-cache

# Building
build:
	@echo "🏗️ Building all applications..."
	cd apps/web && npm run build
	cd apps/admin && npm run build
	@echo "✅ Build complete!"

build-web:
	cd apps/web && npm run build

build-admin:
	cd apps/admin && npm run build

# Testing
test:
	@echo "🧪 Running all tests..."
	make test-unit
	make test-integration
	make test-e2e

test-unit:
	@echo "Running unit tests..."
	cd apps/web && npm run test

test-integration:
	@echo "Running integration tests..."
	docker-compose -f docker-compose.test.yml up --abort-on-container-exit

test-e2e:
	@echo "Running E2E tests..."
	cd tests/e2e && npx playwright test

# Database
db-migrate:
	@echo "🗄️ Running database migrations..."
	npx prisma migrate dev

db-generate:
	npx prisma generate

db-seed:
	npx prisma db seed

db-reset:
	@echo "⚠️  Resetting database..."
	npx prisma migrate reset --force

db-studio:
	npx prisma studio

# Linting and formatting
lint:
	@echo "🔍 Running linters..."
	cd apps/web && npm run lint
	cd apps/admin && npm run lint

format:
	@echo "✨ Formatting code..."
	npx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"

# Deployment
deploy-k8s:
	@echo "🚀 Deploying to Kubernetes..."
	kubectl apply -f infrastructure/kubernetes/namespace.yaml
	kubectl apply -f infrastructure/kubernetes/secrets.yaml
	kubectl apply -f infrastructure/kubernetes/configmap.yaml
	kubectl apply -f infrastructure/kubernetes/databases/
	kubectl apply -f infrastructure/kubernetes/services/
	kubectl apply -f infrastructure/kubernetes/ingress.yaml
	@echo "✅ Deployment complete!"

deploy-aws:
	@echo "🚀 Deploying to AWS..."
	cd infrastructure/terraform/aws && terraform apply

# Cleanup
clean:
	@echo "🧹 Cleaning up..."
	docker-compose down -v --remove-orphans
	docker system prune -f
	@echo "✅ Cleanup complete!"

# Monitoring
monitor:
	@echo "📊 Opening monitoring dashboards..."
	open http://localhost:3002  # Grafana
	open http://localhost:9090  # Prometheus

# Logs
logs-web:
	docker-compose logs -f web

logs-api:
	docker-compose logs -f api-gateway

logs-auth:
	docker-compose logs -f auth-service
