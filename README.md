# Leave-Management-System Backend API using Node.js

This is a Node.js-based leave management system with features for admin and user roles (leave requests, agent management, etc.).


## Setup Instructions

1. **Clone the repository**
   git clone https://github.com/vaishalimandora12/Leave-Management-System.git
   cd Leave-Management-System

2. **Install dependencies**
   npm install

3. **Run the project**
   npm run winWatch

## API Documentation

### Admin

#### Auth

**signUp**

**Method:** `POST`

**URL:** `{{local}}admin/signUp`

**Request Body:**

```json
{
  "firstName": "admin",
  "lastName": "admin",
  "password": "abc@123",
  "email": "admin@gmail.com",
  "deviceToken": "127274847439834934735",
  "deviceType": "1",
  "deviceName": "Samsung"
}
```

**Sample Response:**

```json
{
    "status": 200,
    "message": "Register successfully",
    "data": {
        "admin": {
            "role": "admin",
            "firstName": "admin",
            "lastName": "admin",
            "password": "$2b$10$qevz4lzKUA01vSBY13NKUetCxru0lW6WJgJcQBaRgi6aM3cnl6AvO",
            "email": "admin@gmail.com",
            "status": "unBlocked",
            "_id": "6882634aadb4df002d60b181",
            "createdAt": "2025-07-24T16:46:02.787Z",
            "updatedAt": "2025-07-24T16:46:02.787Z",
            "userId": 1,
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODgyNjM0YWFkYjRkZjAwMmQ2MGIxODEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImRldmljZVRva2VuIjoiMTI3Mjc0ODQ3NDM5ODM0OTM0NzM1IiwiaWF0IjoxNzUzMzc1NTYyLCJleHAiOjE3NTMzNzU5MjJ9.HLR1BcIpS60FZpu4Md_CmdM9KVcJ7m1VtDazCjeZzzo"
    }
}
```

**login**

**Method:** `POST`

**URL:** `{{local}}admin/login`

**Request Body:**

```json
{
  "firstName": "admin",
  "lastName": "admin",
  "password": "abc@123",
  "email": "admin@gmail.com",
  "deviceToken": "127274847439834934735",
  "deviceType": "1",
  "deviceName": "Samsung"
}
```

**Sample Response:**

```json
{
    "status": 200,
    "message": "login successfully",
    "data": {
        "admin": {
            "_id": "6882634aadb4df002d60b181",
            "role": "admin",
            "firstName": "admin",
            "lastName": "admin",
            "password": "$2b$10$qevz4lzKUA01vSBY13NKUetCxru0lW6WJgJcQBaRgi6aM3cnl6AvO",
            "email": "admin@gmail.com",
            "status": "unBlocked",
            "createdAt": "2025-07-24T16:46:02.787Z",
            "updatedAt": "2025-07-24T16:46:02.787Z",
            "userId": 1,
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODgyNjM0YWFkYjRkZjAwMmQ2MGIxODEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImRldmljZVRva2VuIjoiMTI3Mjc0ODQ3NDM5ODM0OTM0NzM1IiwiaWF0IjoxNzUzMzc1NzM5LCJleHAiOjE3NTMzNzYwOTl9.BEal5tw1IDzErOliCwJ-LLyjufYvP6OJfm5rnd9ixmQ"
    }
}
```

#### User Managemnt

**addAgent**

**Method:** `POST`

**URL:** `{{local}}admin/private/addAgent`

**Request Body:**

```json
{
  "firstName": "Vanshika",
  "lastName": "Mandora",
  "password": "vanshika@123",
  "email": "vanshika@gmail.com"
}
```

**Sample Response:**

```json
{
    "status": 200,
    "message": "New Agent Added successfully.",
    "data": {
        "role": "agent",
        "firstName": "Vaishali",
        "lastName": "Mandora",
        "password": "$2b$10$rrmo1pFQYHauDPZR1S7r0u95YraKYuZJtssneW4SMaRqto2FaiTwy",
        "email": "vaishali@gmail.com",
        "status": "unBlocked",
        "_id": "68826ad3e72b0b10ada3e0dd",
        "createdAt": "2025-07-24T17:18:11.784Z",
        "updatedAt": "2025-07-24T17:18:11.784Z",
        "userId": 8,
        "__v": 0
    }
}
```

**getAllAgents**

**Method:** `POST`

**URL:** `{{local}}admin/private/getAllAgents?page=1&limit=10`

**Sample Response:**

```json
{
    "status": 200,
    "message": "successfully.",
    "data": {
        "docs": [
            {
                "_id": "688274616636994a1b8c530e",
                "role": "agent",
                "firstName": "Vani",
                "lastName": "Mandora",
                "password": "$2b$10$Mej2R/w.Osw7TJirjbI8o.8AxUhRXd.0eA6nINSvVBnyFG/0wceC2",
                "email": "vani@gmail.com",
                "status": "unBlocked",
                "createdAt": "2025-07-24T17:58:57.184Z",
                "updatedAt": "2025-07-24T17:58:57.184Z",
                "userId": 10,
                "__v": 0
            },
            {
                "_id": "68826d94baf31c084a75eee9",
                "role": "agent",
                "firstName": "Vanshika",
                "lastName": "Mandora",
                "password": "$2b$10$5/rPpiWtmUyT0nc2RLi1e.g5C5jtnZeBqLMukyOInP3WBbljx6uN.",
                "email": "vanshika@gmail.com",
                "status": "unBlocked",
                "createdAt": "2025-07-24T17:29:56.516Z",
                "updatedAt": "2025-07-24T17:29:56.516Z",
                "userId": 9,
                "__v": 0
            },
            {
                "_id": "68826ad3e72b0b10ada3e0dd",
                "role": "agent",
                "firstName": "Vaishali",
                "lastName": "Mandora",
                "password": "$2b$10$rrmo1pFQYHauDPZR1S7r0u95YraKYuZJtssneW4SMaRqto2FaiTwy",
                "email": "vaishali@gmail.com",
                "status": "unBlocked",
                "createdAt": "2025-07-24T17:18:11.784Z",
                "updatedAt": "2025-07-24T17:18:11.784Z",
                "userId": 8,
                "__v": 0
            }
        ],
        "totalDocs": 3,
        "limit": 10,
        "page": 1,
        "totalPages": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

#### Leave Management

**allLeaveRequests**

**Method:** `GET`

**URL:** `{{local}}admin/private/allLeaveRequests?page=1&limit=10`

**Sample Response:**

```json
{
    "status": 200,
    "message": "successs.",
    "data": {
        "docs": [
            {
                "_id": "6883b9713acef626184c52b5",
                "userId": "68826d94baf31c084a75eee9",
                "fromDate": "2025-07-27T16:46:02.787Z",
                "toDate": "2025-07-27T16:46:02.787Z",
                "reason": "due to high fever",
                "status": "pending",
                "createdAt": "2025-07-25T17:05:53.383Z",
                "updatedAt": "2025-07-25T17:05:53.383Z",
                "__v": 0
            },
            {
                "_id": "6883b8e83acef626184c52ad",
                "userId": "68826d94baf31c084a75eee9",
                "fromDate": "2025-07-26T16:46:02.787Z",
                "toDate": "2025-07-26T16:46:02.787Z",
                "reason": "feeling not well",
                "status": "pending",
                "createdAt": "2025-07-25T17:03:36.018Z",
                "updatedAt": "2025-07-25T17:03:36.018Z",
                "__v": 0
            }
        ],
        "totalDocs": 2,
        "limit": 10,
        "page": 1,
        "totalPages": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```

**changeLeaveStatus**

**Method:** `PUT`

**URL:** `{{local}}admin/private/changeLeaveStatus/6883b9713acef626184c52b5`

**Request Body:**

```json
{
    "status":"accepted"  //accepted , rejected
}
```

**Sample Response:**

```json
{
    "status": 200,
    "message": "Leave Accepted."
}
```

### User

#### Auth

**login**

**Method:** `POST`

**URL:** `{{local}}user/login`

**Request Body:**

```json
{
  "email": "vanshika@gmail.com",
  "password": "vanshika@123",
  "deviceToken": "127274847439834934735",
  "deviceType": "1",
  "deviceName": "Samsung"
}
```

**Sample Response:**

```json
{
    "status": 200,
    "message": "login successfully",
    "data": {
        "user": {
            "_id": "68826d94baf31c084a75eee9",
            "role": "agent",
            "firstName": "Vanshika",
            "lastName": "Mandora",
            "password": "$2b$10$5/rPpiWtmUyT0nc2RLi1e.g5C5jtnZeBqLMukyOInP3WBbljx6uN.",
            "email": "vanshika@gmail.com",
            "status": "unBlocked",
            "createdAt": "2025-07-24T17:29:56.516Z",
            "updatedAt": "2025-07-24T17:29:56.516Z",
            "userId": 9,
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODgyNmQ5NGJhZjMxYzA4NGE3NWVlZTkiLCJlbWFpbCI6InZhbnNoaWthQGdtYWlsLmNvbSIsImRldmljZVRva2VuIjoiMTI3Mjc0ODQ3NDM5ODM0OTM0NzM1IiwiaWF0IjoxNzUzMzc4NjM0LCJleHAiOjE3NTMzNzg5OTR9.N3UdnqfhlvcXAjuaLyGGO8_Q4X8mxns8aT_HrFYBpjA"
    }
}
```

#### Leave Management

**applyLeave**

**Method:** `POST`

**URL:** `{{local}}user/private/applyLeave`

**Request Body:**

```json
{
  "fromDate": "2025-07-26T16:46:02.787+00:00",
  "toDate": "2025-07-26T16:46:02.787+00:00",
  "reason": "feeling not well"
}
```

**Sample Response:**

```json
{
    "status": 200,
    "message": "Leave apply successfully.",
    "data": {
        "userId": "68826d94baf31c084a75eee9",
        "fromDate": "2025-07-26T16:46:02.787Z",
        "toDate": "2025-07-26T16:46:02.787Z",
        "reason": "feeling not well",
        "status": "pending",
        "_id": "6883b8e83acef626184c52ad",
        "createdAt": "2025-07-25T17:03:36.018Z",
        "updatedAt": "2025-07-25T17:03:36.018Z",
        "__v": 0
    }
}
```

**myAllLeaveRequests**

**Method:** `GET`

**URL:** `{{local}}user/private/myAllLeaveRequests`

**Sample Response:**

```json
{
    "status": 200,
    "message": "successs.",
    "data": [
        {
            "_id": "6883b8e83acef626184c52ad",
            "userId": "68826d94baf31c084a75eee9",
            "fromDate": "2025-07-26T16:46:02.787Z",
            "toDate": "2025-07-26T16:46:02.787Z",
            "reason": "feeling not well",
            "status": "pending",
            "createdAt": "2025-07-25T17:03:36.018Z",
            "updatedAt": "2025-07-25T17:03:36.018Z",
            "__v": 0
        },
        {
            "_id": "6883b9713acef626184c52b5",
            "userId": "68826d94baf31c084a75eee9",
            "fromDate": "2025-07-27T16:46:02.787Z",
            "toDate": "2025-07-27T16:46:02.787Z",
            "reason": "due to high fever",
            "status": "pending",
            "createdAt": "2025-07-25T17:05:53.383Z",
            "updatedAt": "2025-07-25T17:05:53.383Z",
            "__v": 0
        }
    ]
}
```

**myLeave**

**Method:** `GET`

**URL:** `{{local}}user/private/myLeave/6883b9713acef626184c52b5`

**Sample Response:**

```json
{
    "status": 200,
    "message": "successs.",
    "data": {
        "_id": "6883b9713acef626184c52b5",
        "userId": "68826d94baf31c084a75eee9",
        "fromDate": "2025-07-27T16:46:02.787Z",
        "toDate": "2025-07-27T16:46:02.787Z",
        "reason": "due to high fever",
        "status": "pending",
        "createdAt": "2025-07-25T17:05:53.383Z",
        "updatedAt": "2025-07-25T17:05:53.383Z",
        "__v": 0
    }
}
```
