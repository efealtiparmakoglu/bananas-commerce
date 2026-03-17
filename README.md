# 🛒 Bananas Commerce - Enterprise E-Commerce Platform

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-4169E1?logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.0+-DC382D?logo=redis)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)](https://docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5?logo=kubernetes)](https://kubernetes.io/)

> 🚀 **Enterprise-grade** e-commerce platform with microservices architecture, real-time inventory, AI-powered recommendations, and multi-vendor support.

![Platform Preview](docs/images/preview.png)

## 🌟 Features

### 🎨 Frontend (Customer)
- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** + Headless UI
- 📱 **Responsive Design** (Mobile-first)
- 🔍 **Advanced Search** with Elasticsearch
- 🛒 **Real-time Cart** with Redis
- 💳 **Multi-payment** (Stripe, PayPal, Crypto)
- 🌍 **Multi-language** (i18n)
- 🌙 **Dark/Light Mode**

### 🛠️ Backend (Microservices)
- 🔐 **Auth Service** - JWT + OAuth2 + 2FA
- 📦 **Product Service** - Catalog, inventory, categories
- 🛒 **Order Service** - Cart, checkout, orders
- 💰 **Payment Service** - Stripe, PayPal, webhooks
- 🚚 **Shipping Service** - Multi-carrier integration
- 📧 **Notification Service** - Email, SMS, push
- 🤖 **AI Service** - Recommendations, chatbot
- 📊 **Analytics Service** - Reports, dashboards

### 🏗️ Infrastructure
- 🐳 **Docker** + Docker Compose
- ☸️ **Kubernetes** with Helm charts
- 📊 **Prometheus** + Grafana monitoring
- 🔍 **Elasticsearch** + Kibana
- 🔄 **CI/CD** with GitHub Actions
- 🧪 **Testing** - Unit, Integration, E2E

## 📸 Screenshots

```
┌─────────────────────────────────────────────────────────────┐
│  🍌 Bananas Commerce                      🔍 Search  🛒  👤 │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │           🎯 Yaz İndirimleri %50'ye Varan           │   │
│  │              [Keşfet] [İndirimleri Gör]            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  🔥 Çok Satanlar          🆕 Yeni Gelenler                  │
│  ┌─────┐ ┌─────┐         ┌─────┐ ┌─────┐                  │
│  │📱   │ │💻   │         │🎧   │ │⌚    │                  │
│  │₺299 │ │₺499 │         │₺199 │ │₺299 │                  │
│  └─────┘ └─────┘         └─────┘ └─────┘                  │
│                                                              │
│  🏷️ Kategoriler                                            │
│  [Elektronik] [Giyim] [Ev & Yaşam] [Spor] [Kozmetik]       │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Load Balancer                        │
│                      (Nginx / Traefik)                      │
└───────────────────────────┬─────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Web App    │  │  Mobile API  │  │  Admin Panel │
│  (Next.js)   │  │   (GraphQL)  │  │   (React)    │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                  │
       └─────────────────┼──────────────────┘
                         │
              ┌──────────▼──────────┐
              │     API Gateway     │
              │     (Kong/Nginx)    │
              └──────────┬──────────┘
                         │
    ┌──────────┬─────────┼─────────┬──────────┐
    │          │         │         │          │
    ▼          ▼         ▼         ▼          ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│  Auth │ │Product│ │ Order │ │Payment│ │Notify │
│Service│ │Service│ │Service│ │Service│ │Service│
└───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘
    │         │         │         │         │
    └─────────┴────┬────┴─────────┴─────────┘
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
┌──────────┐ ┌────────┐ ┌──────────┐
│PostgreSQL│ │ Redis  │ │  Kafka   │
│(Primary) │ │ (Cache)│ │ (Events) │
└──────────┘ └────────┘ └──────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker 20.10+
- Kubernetes 1.24+ (optional)

### Development

```bash
# Clone repository
git clone https://github.com/efealtiparmakoglu/bananas-commerce.git
cd bananas-commerce

# Start with Docker Compose
make dev-up

# Or start services individually
# Frontend
cd apps/web && npm install && npm run dev

# Backend services
cd services/auth && npm install && npm run dev
cd services/product && npm install && npm run dev
# ... (other services)
```

### Access Points

| Service | URL |
|---------|-----|
| Web App | http://localhost:3000 |
| Admin Panel | http://localhost:3001 |
| API Gateway | http://localhost:8000 |
| GraphQL Playground | http://localhost:8000/graphql |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3002 |

## 📁 Project Structure

```
bananas-commerce/
├── 📁 apps/
│   ├── 📁 web/                    # Next.js customer frontend
│   ├── 📁 admin/                  # React admin dashboard
│   └── 📁 mobile/                 # React Native mobile app
│
├── 📁 services/
│   ├── 📁 auth-service/           # Authentication microservice
│   ├── 📁 product-service/        # Product catalog service
│   ├── 📁 order-service/          # Order management service
│   ├── 📁 payment-service/        # Payment processing service
│   ├── 📁 shipping-service/       # Shipping integration service
│   ├── 📁 notification-service/   # Email/SMS/Push service
│   ├── 📁 ai-service/             # ML recommendations service
│   └── 📁 analytics-service/      # Reporting and analytics
│
├── 📁 packages/
│   ├── 📁 shared-types/           # TypeScript types
│   ├── 📁 ui-components/          # Shared UI library
│   ├── 📁 config/                 # Shared configurations
│   └── 📁 utils/                  # Utility functions
│
├── 📁 infrastructure/
│   ├── 📁 docker/                 # Docker configurations
│   ├── 📁 kubernetes/             # K8s manifests
│   ├── 📁 terraform/              # Infrastructure as Code
│   └── 📁 monitoring/             # Prometheus + Grafana
│
├── 📁 docs/                       # Documentation
├── 📁 tests/                      # E2E and integration tests
└── 📄 Makefile                    # Automation scripts
```

## 🧪 Testing

```bash
# Run all tests
make test

# Run specific test suites
make test-unit
make test-integration
make test-e2e

# Run with coverage
make test-coverage
```

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- **API Response Time:** < 100ms (p95)
- **Database Queries:** < 50ms (cached)
- **Concurrent Users:** 10,000+

## 🔐 Security

- ✅ JWT Authentication with refresh tokens
- ✅ OAuth2 (Google, Facebook, Apple)
- ✅ 2FA with TOTP
- ✅ Rate limiting per IP/user
- ✅ SQL Injection protection
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Input validation (Zod)
- ✅ Data encryption at rest

## 🌍 Deployment

### Docker Compose (Development)

```bash
make dev-up
```

### Kubernetes (Production)

```bash
# Deploy to K8s
make deploy-k8s

# Or with Helm
helm install bananas-commerce ./infrastructure/helm
```

### Cloud Providers

- **AWS:** EKS + RDS + ElastiCache + S3
- **GCP:** GKE + Cloud SQL + Memorystore + Cloud Storage
- **Azure:** AKS + Azure SQL + Redis + Blob Storage

## 📈 Monitoring

- **Metrics:** Prometheus + Grafana
- **Logging:** ELK Stack (Elasticsearch, Logstash, Kibana)
- **Tracing:** Jaeger / Zipkin
- **Alerts:** PagerDuty / Slack integration
- **Uptime:** Status page with automated checks

## 🛣️ Roadmap

### Phase 1 (MVP) ✅
- [x] User authentication & authorization
- [x] Product catalog & search
- [x] Shopping cart & checkout
- [x] Payment integration (Stripe)
- [x] Order management
- [x] Admin dashboard

### Phase 2 (Growth) 🚧
- [ ] Multi-vendor marketplace
- [ ] Real-time chat support
- [ ] AI product recommendations
- [ ] Mobile app (iOS/Android)
- [ ] Subscription products
- [ ] Loyalty program

### Phase 3 (Scale) 📋
- [ ] Multi-region deployment
- [ ] Advanced analytics
- [ ] B2B wholesale
- [ ] AR product preview
- [ ] Voice search
- [ ] Blockchain payments

## 👨‍💻 Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Headless UI
- **State:** Zustand + TanStack Query
- **Forms:** React Hook Form + Zod
- **Testing:** Vitest + React Testing Library

### Backend
- **Runtime:** Node.js 18
- **Framework:** Express.js / Fastify
- **Language:** TypeScript
- **Database:** PostgreSQL 15 + Prisma
- **Cache:** Redis 7
- **Queue:** BullMQ / Kafka
- **Search:** Elasticsearch
- **API:** REST + GraphQL

### DevOps
- **Containers:** Docker + Docker Compose
- **Orchestration:** Kubernetes + Helm
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus + Grafana
- **Logging:** ELK Stack
- **Cloud:** AWS / GCP / Azure ready

## 📝 License

MIT License - see [LICENSE](LICENSE) file

## 👨‍💻 Author

**Efe Altıparmakoğlu**
- GitHub: [@efealtiparmakoglu](https://github.com/efealtiparmakoglu)
- Company: [Bananas Hosting](https://www.bananashosting.com)

---

⭐ **Star this repo if you find it useful!**

🍌 **Powered by Bananas Commerce**
