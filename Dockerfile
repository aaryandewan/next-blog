# Use Node.js 18 image as the base (since Next.js requires Node >= 18.17.0)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Disable strict SSL for npm and Node (fixes self-signed certificate issues)
RUN npm config set strict-ssl false
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies but skip postinstall (which runs prisma generate)
RUN npm install --ignore-scripts

# Copy the rest of the code into the container
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Run Prisma generate and then start the Next.js app
CMD ["sh", "-c", "npx prisma generate && npm run dev"]
