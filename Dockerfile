# --- 1) Build Stage -----------------------------------------------------------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Next.js for production
RUN npm run build

# --- 2) Run Stage -------------------------------------------------------------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Don't run as root user (more secure)
RUN adduser -D nextjsuser
USER nextjsuser

COPY --from=builder /app ./

# Next.js needs port 3000
EXPOSE 3000

CMD ["npm", "start"]
# --- End of Dockerfile --------------------------------------------------------