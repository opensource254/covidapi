[![Build Status](https://travis-ci.com/opensource254/covidapi.svg?token=M28wXsmheKa6yj9vkVbA&branch=master)](https://travis-ci.com/opensource254/covidapi)

[![Maintainability](https://api.codeclimate.com/v1/badges/13634f1f5aa1fb60f43a/maintainability)](https://codeclimate.com/repos/5ea2c577484e0001a200a2ea/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/13634f1f5aa1fb60f43a/test_coverage)](https://codeclimate.com/repos/5ea2c577484e0001a200a2ea/test_coverage)

# Covid API

> Kenyan Api for covid-19 app by opensource 254

## Available endpoints

# Resource endpoints

| Request | Endpoint               | Function              | Authorized users    |
| ------- | ---------------------- | --------------------- | ------------------- |
| POST    | `/api/v1/tip`          | Create a new tip      | Admin, Doctor       |
| GET     | `/api/v1/tips`         | Get all tips          | Admin, Doctor, User |
| GET     | `/api/v1/tip/:id`      | Get a tip             | Admin, Doctor, User |
| PUT     | `/api/v1/tip/:id`      | Update a tip          | Admin, Doctor       |
| POST    | `/api/v1/alert`        | Create a new alert    | Admin               |
| GET     | `/api/v1/alerts`       | Get all alerts        | Admin, Doctor, User |
| GET     | `/api/v1/alert/:id`    | Get an alert          | Admin, Doctor, User |
| PUT     | `/api/v1/alert/:id`    | Update an alert       | Admin               |
| POST    | `/api/v1/hospital`     | Create a new hospital | Admin, Doctor       |
| GET     | `/api/v1/hospitals`    | Get all hospitals     | Admin, Doctor, User |
| GET     | `/api/v1/hospital/:id` | Get a hospital        | Admin, Doctor, User |
| PUT     | `/api/v1/hospital/:id` | Update a hospital     | Admin, Doctor       |
| GET     | `/api/v1/tweets`       | Get all tweets        | Everyone            |

# Auth endpoints

| Request | Endpoint                     | Function                             |
| ------- | ---------------------------- | ------------------------------------ |
| POST    | `/api/v1/auth/signup/user`   | create a new user                    |
| POST    | `/api/v1/auth/signup/admin`  | create a new admin                   |
| POST    | `/api/v1/auth/signup/doctor` | create a new doctor                  |
| POST    | `/api/v1/auth/login`         | Login a user according to their role |
| POST    | `/api/v1/auth/logout`        | Logout a user                        |
