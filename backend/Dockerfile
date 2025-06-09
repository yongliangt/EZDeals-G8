### backend/Dockerfile ###
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json & install
COPY package.json package-lock.json ./
RUN npm install --production

# Copy source code
COPY . .

# Environment variables (will be passed at runtime)
ENV PORT=5000
ENV DYNAMO_TABLE_NAME=EZDeals-Products
ENV AWS_REGION=us-east-1

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
