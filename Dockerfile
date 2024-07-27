# Use a lean Node image for efficiency
FROM --platform=linux/arm64 node:18-alpine
# --platform=linux/arm64 (for Apple Silicon)

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]