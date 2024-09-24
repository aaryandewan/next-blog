# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code into the container
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Run the app
CMD ["npm", "run", "dev"]
