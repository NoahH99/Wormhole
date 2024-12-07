
# Project Wormhole

**Project Wormhole** is a platform designed to host and manage ethical hacking challenges. The project provides an environment where users (students, instructors, and admins) can interact with secure challenge boxes while learning about cybersecurity concepts.

---

## Features

1. **User Management:**
   - User registration and login (traditional and OAuth).
   - Role-based and permission-based access control (e.g., USER, ADMIN).
   - Profile management and secure password reset.

2. **Challenge Orchestration:**
   - Start, stop, and resume challenge servers.
   - Persistent file storage for user progress.
   - Dynamic resource allocation for isolated environments.

3. **Networking:**
   - Isolated subnets for users.
   - VPN integration for secure communication.
   - NAT Gateway for controlled internet access.

4. **Permissions:**
   - Fine-grained access control with roles and permissions.
   - Admin tools for user and resource management.

---

## Directory Structure

```
project-wormhole/
├── README.md                  # Project documentation
├── front-end/                 # Front-end source code (React.js SPA)
├── back-end/                  # Back-end source code (Spring Boot)
├── infra/                     # Infrastructure as code (Terraform for AWS)
├── docs/                      # Documentation and design files
└── scripts/                   # Automation scripts for deployment and maintenance
```

### **Front-End**
```
front-end/
├── public/                    # Static assets
├── src/                       # Front-end source code
│   ├── components/            # Reusable components
│   ├── pages/                 # Page-level components
│   ├── services/              # API interaction logic
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global stylesheets
│   └── utils/                 # Utility functions
├── .env                       # Environment variables
├── package.json               # NPM package configuration
└── vite.config.js             # Vite/webpack configuration
```

### **Back-End**
```
back-end/
├── src/main/java/com/wormhole/
│   ├── application/           # Spring Boot entry point
│   ├── config/                # Configuration files
│   ├── user/                  # User Management Module
│   ├── challenge/             # Challenge Orchestration Module
│   ├── networking/            # Networking Management Module
│   ├── persistence/           # File Persistence Module
│   └── common/                # Shared utilities and constants
├── src/main/resources/
│   ├── application.yml        # Spring Boot configuration
│   └── static/                # Static files (if needed)
├── build.gradle               # Gradle configuration file
└── Dockerfile                 # Docker configuration for back-end
```

### **Infrastructure**
```
infra/
├── modules/                   # Reusable Terraform modules (e.g., VPC, EC2)
├── environments/
│   ├── dev/                   # Development environment
│   │   └── main.tf
│   ├── staging/               # Staging environment
│   │   └── main.tf
│   └── prod/                  # Production environment
│       └── main.tf
├── variables.tf               # Global Terraform variables
├── outputs.tf                 # Global Terraform outputs
└── README.md                  # Infrastructure setup guide
```

---

## Development Workflow

1. **Set Up Local Environment:**
   - Install dependencies for front-end (`npm install`) and back-end (`./gradlew build`).
   - Set up local databases and environment variables.

2. **Run Locally:**
   - Start the front-end with `npm run dev`.
   - Start the back-end with `./gradlew bootRun`.

3. **Test:**
   - Run unit tests using JUnit (back-end) and Jest (front-end).

4. **Deploy:**
   - Use Terraform to provision AWS resources.
   - Deploy the back-end using Docker or ECS and the front-end using Amplify or S3 + CloudFront.

---

## Timeline

### **Phase 1: Planning and Architecture (Week 1)**
- Define features and personas.
- Design high-level architecture and database schema.

### **Phase 2: MVP Development (Weeks 2–6)**
- Implement user management, challenge orchestration, and basic networking.

### **Phase 3: Testing and Optimization (Weeks 7–9)**
- Write unit, integration, and end-to-end tests.
- Optimize performance and security.

### **Phase 4: Deployment and Production (Weeks 10–11)**
- Deploy to AWS environments.
- Monitor and gather feedback.

### **Phase 5: Enhancements (Ongoing)**
- Add advanced features and improve scalability.

---

## Contributions

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes and open a pull request.

---

_Last updated: 2024-12-07_
