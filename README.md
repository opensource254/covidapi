[![Build Status](https://travis-ci.com/opensource254/covidapi.svg?token=M28wXsmheKa6yj9vkVbA&branch=master)](https://travis-ci.com/opensource254/covidapi)

[![Maintainability](https://api.codeclimate.com/v1/badges/13634f1f5aa1fb60f43a/maintainability)](https://codeclimate.com/repos/5ea2c577484e0001a200a2ea/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/13634f1f5aa1fb60f43a/test_coverage)](https://codeclimate.com/repos/5ea2c577484e0001a200a2ea/test_coverage)

# Covid API

> Kenyan Api for covid-19 app by opensource 254

## Available endpoints

# Resource endpoints

| Request | Endpoint               | Function                 | Authorized users |
| ------- | ---------------------- | ------------------------ | ---------------- |
| POST    | `/api/v1/tip`          | Create a new tip         | Admin            |
| GET     | `/api/v1/tips`         | Get all tips             | Public           |
| GET     | `/api/v1/tip/:id`      | Get a tip                | Public           |
| PUT     | `/api/v1/tip/:id`      | Update a tip             | Admin            |
| POST    | `/api/v1/alert`        | Create a new alert       | Admin            |
| GET     | `/api/v1/alerts`       | Get all alerts           | Public           |
| GET     | `/api/v1/alert/:id`    | Get an alert             | Public           |
| PUT     | `/api/v1/alert/:id`    | Update an alert          | Admin            |
| POST    | `/api/v1/hospital`     | Create a new hospital    | Admin            |
| GET     | `/api/v1/hospitals`    | Get all hospitals        | Public           |
| GET     | `/api/v1/hospital/:id` | Get a hospital           | Public           |
| PUT     | `/api/v1/hospital/:id` | Update a hospital        | Admin            |
| GET     | `/api/v1/tweets`       | Get all tweets           | Public           |
| POST    | `/api/v1/geofence`     | Create a geofence record | Admin            |
| GET     | `/api/v1/geofence/:id` | Get a geofence records   | Admin            |
| GET     | `/api/v1/geofences`    | Get all geofence records | Admin            |
| PUT     | `/api/v1/geofence/:id` | Update a geofence record | Admin            |
| DELETE  | `/api/v1/geofence/:id` | Delete a geofence record | Admin            |

# Auth endpoints

| Request | Endpoint                     | Function                   |
| ------- | ---------------------------- | -------------------------- |
| POST    | `/api/v1/auth/signup/admin`  | create a new admin         |
| POST    | `/api/v1/auth/signup/doctor` | create a new doctor        |
| POST    | `/api/v1/auth/logout`        | Logout a user              |
| GET     | `/api/v1/loggedout`          | Redirect after user logout |
