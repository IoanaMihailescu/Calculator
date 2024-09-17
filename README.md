# Integer Calculator

## Overview

This project is a basic calculator application built with Angular for the frontend side and Express for the backend.
It performs basic arithmetic operations like addition, subtraction, and multiplication. 

## Features

- **Basic Arithmetic Operations**: Addition (`+`), subtraction (`-`), and multiplication (`*`).
- **User Interface**: Simple calculator UI with buttons for digits, operators, and actions.
- **Backend API**: Handles calculation requests and returns results.

## Calculator Functionality

- **Input Numbers**: Click on digit buttons to input numbers.
- **Select Operator**: Click on +, -, or * to select the operation.
- **Calculate**: Press = to perform the calculation.
- **Clear**: Press C to reset the calculator.

## Getting Started

Follow these instructions to set up and run the project.

### Prerequisites

- Node.js (version 14.x or later)
- Angular CLI
- Express (for backend)

### Application Setup

1. **Clone the Repository**:
   ```bash
   git clone git clone http://impact-kexfeu@git.codesubmit.io/impact/full-stack-integer-calculator-ejmbjt
   
2. **Frontend Setup**:
   cd full-stack-integer-calculator-ejmbjt/integer-calculator/frontend
   npm install
   ng build
   ng serve
   The application will be available at http://localhost:4200

3. **Backend Setup**:
    cd full-stack-integer-calculator-ejmbjt/integer-calculator/backend
    npm install
    npm run start

### Application Details

1. **Frontend Details**
    Files:
    - src/app/calculator/calculator.component.ts Component handling calculator logic.
    - src/app/calculator/calculator.component.html HTML template for the calculator.
    - src/app/calculator/calculator.component.css CSS for styling the calculator.
    - src/app/calculator.service.ts Service for communicating with the backend API.

2. **Backend Details**
    Files:
    - index.js: Express server file that handles the API requests.

    API Endpoint:
    - POST /api/calculate: Receives operands and an operator, performs the calculation, and returns the result.

    CORS:
    - cors middleware is used to handle cross-origin requests.