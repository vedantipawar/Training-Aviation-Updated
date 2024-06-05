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
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/f8507ada-29c9-4b9e-b35a-2003c273a4c8)



- Only those recent procedurres are being shown whose rating is less than three and whose status is Unlocked, because procedures cannot have stars
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/2f2e0ab0-c6b2-4afb-8550-384ca393ca90)


![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/642941d5-a412-4e28-a8ab-d8b01210f17a)

- Recent procedure cards land on different page based on what was clicked.
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/7579053b-875d-453f-ba04-8c45ed7d5855)

-Upon hovering of clicking the button it turns red. Used circular progress bar with children to get the desired effect of getting progress of each procedure
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/7d4e399c-7bc4-452b-8d24-f9a8c377d626)

-Now, upon clicking the nect button, the content changes accordingly
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/df4e72f3-5aec-4a9d-bba6-1fe764acf0f9)

-Locked items cannot be selected
![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/2cc011f0-b160-4dd5-b2ec-bcdf75eae462)


- Start acts as a button that leads to a new page.

![image](https://github.com/vedantipawar/Training-Aviation-Updated/assets/51786206/2457b6cd-aba7-46c0-8635-3e43d235ad59)
