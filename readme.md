### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

                            АВТОРИЗАЦІЯ КОРИСТУВАЧА

--------------SIGNUP

POST ${BASE_URL}/api/auth/signup

Content-Type: application/json
RequestBody: {
"email": "stanislav@gmail.com",
"password": "1234567",
"name": "Stanislav",
"city": "Kyiv",
"phone": "+380000000000"
}

Registration success response:

    Status: 201 Created
    Content-Type: application/json
    ResponseBody: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDUzMzI4ZTkyNmUzNzBkNGYwMTY3YSIsImlhdCI6MTY3NDkxNjY0OCwiZXhwIjoxNjc0OTk5NDQ4fQ.T5GjdzWA58e66QFCQaC4efICjn1SP-lG6u-DHs9_-LI",
    "user": {
        "name": "Stanislav",
        "email": "stanislav@gmail.com",
        "city": "Kyiv",
        "phone": "+380000000000",
        "birthday": null,
        "avatarURL": null
    }

}

-----------LOGIN

POST ${BASE_URL}/api/auth/login

Content-Type: application/json
RequestBody: {
"email": "stanislav@gmail.com",
"password": "1234567"
}

Login success response:

Status: 200 OK
Content-Type: application/json
ResponseBody: {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDUzMzI4ZTkyNmUzNzBkNGYwMTY3YSIsImlhdCI6MTY3NDkyMjUxMSwiZXhwIjoxNjc1MDA1MzExfQ.vZ-rKDM4Jl4EUiUAIaI-xwKIjyDsOH8KnCuIlRXPVoY",
"user": {
"name": "Stanislav",
"email": "stanislav@gmail.com",
"city": "Kyiv",
"phone": "+380000000000",
"birthday": “…………”,
"avatarURL": “…………”,
"favorites": [……]
}
}

-----------UPDATE USER DATA

Для редагування даних користувача:
PATCH ${BASE_URL}/api/auth/
Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody: {
"name": "Stanislav", // не обов’язкове поле
"email": "stanislav@gmail.com", // не обов’язкове поле
"city": "Kyiv", // не обов’язкове поле
"phone": "+380000000000", // не обов’язкове поле
"birthday": “…………”, // не обов’язкове поле
"avatarURL": “………” // не обов’язкове поле
}

Для додавання оголошення в улюблені (add/delete to/from favorite):

PATCH ${BASE_URL}/api/auth/
Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody: {
"favorites": [……] // в массив додається/видаляється id улюбленця
}

Update User success response:

Status: 200 OK
Content-Type: application/json
ResponseBody:{
"user": {
"name": "stanislav",
"email": "stanislav@gmail.com",
"city": "Kyiv",
"phone": "+380000000000",
"birthday": “…………”,
"avatarURL": “…………”,
"favorites": [………]
}
}

-----------GET CURRENT USER

GET ${BASE_URL}/api/auth/current
Authorization: "Bearer {{token}}"

Get Current User success response:

Status: 200 OK
Content-Type: application/json
ResponseBody:{
"user": {
"email": "stanislav@gmail.com",
"name": "stanislav",
"city": "Kyiv",
"phone": "+380639606863",
"birthday": null,
"avatarURL": null,
"favorites": [……]
}
}

-----------LOGOUT

POST ${BASE_URL}/api/auth/logout
Authorization: "Bearer {{token}}"

Logout success response:

Status: 204 No Content
