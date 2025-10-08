# Use Node 18
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose backend port
EXPOSE 8000

# Start backend
CMD ["sh", "-c", "node wait-for-mysql.js && npm start"]
