### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

.
.

Working backend on RENDER.COM: https://petly-backend-v11f.onrender.com

Petly API docs: https://petly-backend-v11f.onrender.com/api-docs/

.
.

                           AUTH ROUTE

--------------SIGNUP

POST ${BASE_URL}/api/auth/signup

Headers: Authorization: none

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
    }

}

-----------LOGIN

POST ${BASE_URL}/api/auth/login

Headers: Authorization: none

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
}
}

-----------UPDATE USER DATA

Для редагування даних користувача:
PATCH ${BASE_URL}/api/auth/

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody: {
"name": "Stanislav", // не обов’язкове поле
"email": "stanislav@gmail.com", // не обов’язкове поле
"city": "Kyiv", // не обов’язкове поле
"phone": "+380000000000", // не обов’язкове поле
"birthday": “…………”, // не обов’язкове поле
"avatarURL": “………” // не обов’язкове поле
}

Для додавання оголошення в улюблені (add/delete to/from favorites):

PATCH ${BASE_URL}/api/auth/

Headers: Authorization: "Bearer {{token}}"

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

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody:{
none
}

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

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody:{
none
}

Logout success response:

Status: 204 No Content

USER ROUTE

--------------ADD USER PET

POST ${BASE_URL}/api/users/pets

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody: {
"name": "Rex",
"birthday": "2010-02-22", //не обов’язкове поле
"breed": "German Shepherd",
"petsPhotoURL": "....", //не обов’язкове поле
"comments": "MegaPuperSuperSobaken", //не обов’язкове поле
}

Add pet success response:

    Status: 201 Created
    Content-Type: application/json
    ResponseBody: {
     "newPet": {
        "_id": "63d6364d0ae399c680890db1",
        "name": "Tuzik",
        "birthday": "2004-01-01T00:00:00.000Z",
        "breed": "German Shepherd",
        "petsPhotoURL": "...",
        "owner":"63d597e17ca822bddfedb390"
    }
      }

--------------DELETE USER PET
DELETE ${BASE_URL}/api/users/pets/petId

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody:{
none
}

Delete pet success response:

    Status: 200 OK
    Content-Type: application/json
    ResponseBody: {
        "message": "Pet deleted"
       }

-----------GET ALL USER PETS

GET ${BASE_URL}/api/users/pets

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody:{
none
}

Get All User Pets success response:

Status: 200 OK
Content-Type: application/json
ResponseBody: {
"userPets": [
{
"\_id": "63d6364d0ae399c680890db1",
"name": "Tuzik",
"birthday": "2004-01-01T00:00:00.000Z",
"breed": "German Shepherd",
"petsPhotoURL": "MegaPuperSuperSobaken",
"owner":"63d597e17ca822bddfedb390"
},
{
"\_id": "63d6364d0ae399c680890db1",
"name": "Tuzik",
"birthday": "2004-01-01T00:00:00.000Z",
"breed": "German Shepherd",
"petsPhotoURL": "MegaPuperSuperSobaken",
"owner":"63d597e17ca822bddfedb390"
},

      ……]
     }

-----------GET ALL USER DATA (user data + user pets)

GET ${BASE_URL}/api/users/

Headers: Authorization: "Bearer {{token}}"

Content-Type: application/json
RequestBody:{
none
}

Get All User Data & Pets success response:

Status: 200 OK
Content-Type: application/json
ResponseBody: {
"user": {
"name": "Stanislav",
"email": "stanislav@gmail.com",
"city": "Kyiv",
"phone": "+380000000000",
"birthday": null,
"avatarURL": null,
"favorites": []
},
"userPets": [
{
"_id": "63d6364d0ae399c680890db1",
"name": "Tuzik",
"birthday": "2004-01-01T00:00:00.000Z",
"breed": "German Shepherd",
"petsPhotoURL": null,
"comments": "MegaPuperSuperSobaken",
"owner": "63d597e17ca822bddfedb390",
"__v": 0
},
……]
}

NEWS ROUTE
--------------GET NEWS
GET ${BASE_URL}/api/news/

Headers: Authorization: none

Content-Type: application/json
RequestBody:{
none
}

Get News success response:

Status: 200 OK
Content-Type: application/json
ResponseBody: {
"news": [
{
"_id": "63d57fe922b99140810fa924",
"title": "В День ветеринара в столиці пройде безкоштовний тренінг з надання першої допомоги тваринам",
"url": "https://www.kmlvm.com.ua/v-den-veterynara-v-stolytsi-projde-bezkoshtovnyj-trening-z-nadannya-pershoyi-dopomogy-tvarynam/",
"description": "В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини», фахівці якого навчать всіх бажаючих навичкам надання першої допомоги братам нашим меншим, які потрапили в біду. Без перебільшення, подібні знання можуть врятувати життя чотирилапим. Тренінг безкоштовний, взяти в ньому участь може будь-хто, дозволяється участь зі своїм домашнім улюбленцем. Після тренінгу учасники зможуть отримати безкоштовну консультацію ветеринара, щодо догляду за тваринами, вакцинації та будь-яких інших питань, пов'язаними зі здоров'ям улюбленця. Дата проведення майстер-класу обрана не випадково. 14 серпня в Україні відзначається День працівників ветеринарної медицини і цього року ми вирішили провести такий потрібний тренінг. Для ветеринара головне – це врятовані брати наші менші, а навчити людей надавати первинну допомогу тваринам значить «інвестувати» у врятовані життя тварин в майбутньому. Початок тренінгу об 11:00. Адреса Тимчасового притулку для тварин «ВДНГ»: вулиця Академіка Глушкова, 1, 16 павільйон.",
"date": "2022-08-12T00:00:00.000Z"
},
……]
}

FRIENDS ROUTE
--------------GET FRIENDS
GET ${BASE_URL}/api/friends/

Headers: Authorization: none

Content-Type: application/json
RequestBody:{
none
}

Get Friends success response:

Status: 200 OK
Content-Type: application/json
ResponseBody: {
"friends": [
{
"\_id": "63d591e722b99140810fa939",
"title": "Притулок для бездомних тварин 'Сіріус'",
"url": "https://dogcat.com.ua",
"addressUrl": "https://goo.gl/maps/iq8NXEUf31EAQCzc6",
"imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png",
"address": "Fedorivka, Kyiv Oblast, Ukraine, 07372",
"workDays": [
{
"_id": "63d672ba25b77ec0a83c2da6",
"isOpen": false
},
{
"_id": "63d672ba25b77ec0a83c2da7",
"isOpen": false
},
{
"_id": "63d672ba25b77ec0a83c2da8",
"isOpen": false
},
{
"_id": "63d672ba25b77ec0a83c2da9",
"isOpen": false
},
{
"_id": "63d672ba25b77ec0a83c2daa",
"isOpen": false
},
{
"_id": "63d672ba25b77ec0a83c2dab",
"isOpen": true,
"from": "11:00",
"to": "16:00"
},
{
"_id": "63d672ba25b77ec0a83c2dac",
"isOpen": true,
"from": "11:00",
"to": "16:00"
}
],
"phone": "+380931934069",
"email": null
},
……]
}
