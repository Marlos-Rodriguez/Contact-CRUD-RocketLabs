# Contact CRUD Back-End
This is the back-end of the Contact CRUD App made with Node/Express JS y MongoDB, 
### Instalation
Download the code and add a `.env` file with:
- `PORT` Port for API
- `DATABASE_URL` MongoDB URL

Download dependecies and execute

### Paths
##### Create Contact
- `POST` /contacts/ - _Create Contact_
Body:
```json
{
    "name": "name",
    "nickname": "nickname",
    "email": "email@email.com"
}
```

output 
```json
{
  "createAt": "2021-01-04T19:41:39.294Z",
  "_id": "5ff3709c40743e0017bbf3a0",
  "name": "name",
  "nickname": "nicknanme",
  "email": "email@email.com",
  "__v": 0
}
```
- `GET` /contacts/all - _Get all Contacts_
    **this return all the contacts with the previous format**

- `DELETE` /contacts/`:id` - _DELETE the contact with that ID_