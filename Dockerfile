# Use the lightweight Nginx image
FROM nginx:alpine
# Copy custom Nginx configuration with domain rules
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy all project files into the Nginx server directory
COPY . /usr/share/nginx/html


# Expose port 80
EXPOSE 80