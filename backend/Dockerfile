# Use the appropriate base image
FROM python:3.9-slim

# Set environment variables for PostgreSQL connection
ENV PGHOST=${PGHOST}
ENV PGPORT=${PGPORT}
ENV PGDATABASE=${DATABASE_NAME}
ENV PGUSER=${PGUSER}
ENV PGPASSWORD=${PGPASSWORD}

# Install dependencies and set up application
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt

# Command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
