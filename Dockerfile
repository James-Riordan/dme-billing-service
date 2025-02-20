# Use lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build TypeScript files
RUN yarn build

# Expose port
EXPOSE 3001

# Start server
CMD ["node", "dist/server.js"]
