# Restaurant Management Application

## Overview
The Restaurant Management Application is a Flask-based web application designed to streamline the management of restaurant operations. It provides an intuitive interface for managing menu items, handling user requests, and overseeing administrative tasks. This application is ideal for restaurant owners and managers who want to digitize and simplify their workflows.

### Features
- **Menu Management**: Add, update, and delete menu items with ease, including uploading photos for each item.
- **Request Handling**: View and manage user requests with statuses like `approved` and `declined`.
- **Admin Dashboard**: A dedicated section for administrators to manage requests and users.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Problem It Solves
Managing a restaurant's operations can be challenging, especially when dealing with paper-based systems or scattered digital tools. This application centralizes menu management and request handling, reducing errors and saving time.

## How to Run the Application

### Prerequisites
1. Install Python (version 3.8 or higher).
2. Install `pip`, the Python package manager.
3. Ensure you have a web browser installed.

### Steps
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/anasradaj/bootcamp_geeks/tree/main/week2/day5/hackathon
   ```
2. Navigate to the project directory:
   ```bash
   cd hackathon
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the database:
   - Import the `restaurant.sql` file located in the `db/` directory into your database management system (e.g., MySQL).
   - Update the database connection details in `app.py` if necessary.

5. Run the Flask application:
   ```bash
   python app.py
   ```
6. Open your web browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```

### Notes
- Ensure the `static/uploads/` directory is writable for photo uploads.
- Use the admin credentials provided in the database to access the admin dashboard.

Enjoy managing your restaurant with ease!
