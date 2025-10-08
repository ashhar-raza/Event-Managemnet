# Use Node 20 (required by Vite)
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start frontend
CMD ["npm", "run", "dev", "--", "--host"]
