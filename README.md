# Project Name

## Introduction

Creating an aviation app for students to Learn. It is built using React for the front-end and Python Flask for the back-end.

## Key Features

- Browse thorugh different Procedural Training.
- Browse through Recent Procedures
- Get more information on seleted Procedures and the path of completion

## Getting Started

### Prerequisites

- **Node.js and npm**: Download and install from [Node.js](https://nodejs.org/).


### Installation

#### 1. Set up the backend


2. **Set up Flask**:
    - Open a terminal (or command prompt on Windows).
    - Install Flask:
      ```bash
      pip install Flask
      ```

3. **Set up the backend environment**:
    - For JavaScript backend with Node.js (optional):**

    - Install Node.js and npm (or yarn) from the official website: https://nodejs.org/
    - Open a terminal and navigate to the project's root directory.
    - Install the required dependencies:

    ```bash
    npm install express
    ```



#### 2. Set up the frontend

1. **Install Node.js and npm**:
    - Download and install Node.js (which includes npm) from [Node.js](https://nodejs.org/).

2. **Set up the frontend environment**:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```

    - Install the necessary npm packages:
      ```bash
      npm install
      ```

3. **Start the frontend application**:
    ```bash
    npm start
    ```

## Usage

1. Ensure the backend is running:
    ```bash
    cd backend
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    cd src
    node server.js

    ```

2. Ensure the frontend is running:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and go to `http://localhost:3000` to access the application if it doesnt open automatically

# API Documentation

## Base URL

http://127.0.0.1:5000/api


### 1. Get All Courses

- **Endpoint:** `/api/courses`
- **Method:** `GET`
- **Description:** Fetches the list of all courses.
- **Response:**
  - **Status:** 200 OK
  - **Body:** JSON array of courses

### 2. Get All Procedures

- **Endpoint:** `/api/procedures`
- **Method:** `GET`
- **Description:** Fetches the list of all procedures with 3 or fewer stars.
- **Response:**
  - **Status:** 200 OK
  - **Body:** JSON array of procedures

### 3. Get Procedure by ID

- **Endpoint:** `/api/procedures/<int:id>`
- **Method:** `GET`
- **Description:** Fetches the details of a specific procedure by its ID.
- **URL Parameters:**
  - **id:** The ID of the procedure to fetch.
- **Response:**
  - **Status:** 200 OK if the procedure is found
  - **Status:** 404 NOT FOUND if the procedure is not found
   - **Body:** JSON array of procedures

# Results

- Landing page and My Account Page
![Screenshot 2024-06-04 074125](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/41a71009-46d3-49b9-b0cc-707e7b921970)

- Only those recent procedurres are being shown whose rating is less than three
![Screenshot 2024-06-04 074331](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/e7e882a9-c19b-4b3c-b501-e746cb3675dc)

![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/642941d5-a412-4e28-a8ab-d8b01210f17a)

- Recent procedure cards land on different page based on what was clicked.
![Screenshot 2024-06-04 074350](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/4656e0a5-d635-4056-9aa5-9878337c2c6e)

![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/d66084ca-1dda-4f6f-9c8a-4f76a8630006)

- Start acts as a button that leads to a new page.
![Screenshot 2024-06-04 074408](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/6e214706-7aa0-4fd7-9813-e68bb82eb912)
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/2457b6cd-aba7-46c0-8635-3e43d235ad59)
