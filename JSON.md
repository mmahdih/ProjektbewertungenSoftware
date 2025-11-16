localhost:4200/api/users

```http
{
    "firstName": "Max",
    "lastName": "Mustermann",
    "email": "max@wdwd",
    "password": "dwdw",
    "createdAt": "2025-10-04T15:30:00"
}
```

localhost:4200/api/add/learning_field

```http
{
  "learningFieldName": "Mathematik",
  "learningFieldDescription": "Grundlagen Algebra",
  "learningFieldWeighting": 1.0
}
```

http://localhost:4200/api/user/{userId}/connect/learningfield/{leariningfieldId}

```http
-- nothing
````

http://localhost:4200/api/user/{userId}/learningfield/{leariningfieldId}/new/grade

```http
{
    "value": 2.0,
    "gradeWeighting": 2.0,
    "date": "2025-10-04T15:30:00"
}
```

http://localhost:4200/api/add/role

```http
{
    "name": "Student"
}
```

http://localhost:4200/api/user/{userId}/connect/role/{roleId}

```http
-- nothing
```

http://localhost:4200/api/add/class

```http
{
    "schoolClassName": "10BE13"
}
```

http://localhost:4200/api/user/{userId}/connect/class/{classId}

```http
-- nothing
```

http://localhost:4200/api/add/project

```http
{
    "projectName": "IoT",
    "projectDescription": "Arduino"
}
```

http://localhost:4200/api/project/{projectId}/connect/learningfield/{learningfieldId}

```http
-- nothing
```

http://localhost:4200/api/show/all/users

```http
-- nothing
```

http://localhost:4200/api/show/all/classes

```http
-- nothing
```

http://localhost:4200/api/show/all/roles

```http
-- nothing
```

http://localhost:4200/api/user/{userId}/learningfield/{learningfieldId}/grades

```http
-- nothing
```

http://localhost:4200/api/user/{userId}/grades

```http
-- nothing
```

http://localhost:4200/api/show/all/projects

```http
-- nothing
```

http://localhost:4200/api/user/{userId}/project/{projectId}/add/review

```http
[
  {
    "questionId": "959a274d-90f2-490d-91ba-b27ac3f06ca9",
    "reviewedUserId": "448a21b8-7e7c-430f-8887-c099a96a34f1",
    "rating": 4.5
  },
  {
    "questionId": "d2bb2c52-b102-460e-a359-41e0aee08ad6",
    "reviewedUserId": "c63b57a9-94dd-4db4-9ad1-b2c245c4fa0d",
    "rating": 3.8
  }
]
```