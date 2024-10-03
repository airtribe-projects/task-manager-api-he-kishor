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
