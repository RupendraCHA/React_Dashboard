# Use a lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (to cache dependencies)
COPY package*.json ./

# Install dependencies using npm ci (faster and more reliable)
RUN npm install

# Copy the rest of the files (after dependencies are installed)
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
