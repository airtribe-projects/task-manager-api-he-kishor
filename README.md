# Task Manager API

A simple Task Manager API built using Node.js that allows users to perform CRUD operations on tasks. Tasks can be created, updated, deleted, and fetched based on various parameters such as ID, completion status, and priority level.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Setup](#project-setup)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [About Me](#about-me)

## Introduction

This project is a task management API that stores tasks in a JSON file (`task.json`). The API supports the following operations:
- Create a new task
- Fetch all tasks or filter by completion status or priority
- Get a task by ID
- Update a task by ID
- Delete a task by ID

The API is designed with RESTful principles in mind, allowing for easy integration with other services or frontend applications.

## Features
- Create, Read, Update, Delete (CRUD) tasks.
- Filter tasks based on completion status (`completed`).
- Filter tasks based on priority levels (`low`, `medium`, `high`).
- Error handling for invalid inputs.

## Project Setup

Follow the steps below to set up the project locally:

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
2. **Installation Dependencies**
   ```bash
   npm install
3. **Run The Server**
   ```bash
    npm run dev
4. **API will be accesseible at**
    ```bash
     http://localhost:3000

# API Endpoints
### 1. Get All Tasks

- **URL**: `GET /tasks`
- **Query Parameters**:
  - `completed` (optional): Filter tasks by completion status (`true` or `false`).

- **Response**:
 ![image](https://github.com/user-attachments/assets/72bec801-91e8-4db6-80d2-73186fa1825f)



### 2. Get Task by ID

- **URL**: `GET /tasks/:id`

- **Response**:
 ![image](https://github.com/user-attachments/assets/2adf3c12-2dcf-4d5b-be64-e8d6883d90ad)

### 3. Create a New Task

- **URL**: `URL: POST /tasks`
- **Request Body**:![image](https://github.com/user-attachments/assets/2cccd66e-8593-4d68-9335-434b468a257b)

- **Response**:![image](https://github.com/user-attachments/assets/272e7091-d8fc-4459-97c2-2838f225c4b0)

### 4.  Update Task by ID

- **URL**: `URL: PUT /tasks/:id`
-  **Request Body**:![image](https://github.com/user-attachments/assets/1cfd490f-62a5-4714-8aad-9cc02d7a58c5)

- **Response**:![image](https://github.com/user-attachments/assets/e7152265-f457-4c21-8ec1-db346918a31a)

### 5.  Delete Task by ID

- **URL**: `DELETE /tasks/:id`
- **Response**: ![image](https://github.com/user-attachments/assets/52a3d980-bcb0-4d59-b93c-0d4ebb6de411)


### 6.  Get Tasks by Priority

- **URL**: `URL: GET /tasks/priority/:level`
- **Response**:![image](https://github.com/user-attachments/assets/a5a4f14e-7856-4354-9d32-40b491a61cb3)

  
## About Me
**I am a Python developer currently working at Uolo with experience in building APIs, backend development, and cloud services. I enjoy working on projects that involve API development and data management, and I have experience with technologies like Node.js, Django, and AWS.**
