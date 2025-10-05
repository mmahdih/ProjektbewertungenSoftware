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
    "roleName": "Student"
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