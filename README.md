# Projektbewertungen-Software


## Frameworks:

|num|name|Language|framework|
|-|-|-|-|
|1|Server|Java| |
|2|Client|Typescript|Angular|
|3|Database|sql|postgres|
|4|Styling|CSS|TailwindCSS|



## Rest API Framework Auswahl
- [x] [Spring Boot](https://medium.com/@ronaka2328/choosing-the-right-java-framework-for-rest-apis-a-comprehensive-guide-0816f2bfc89a)
    - Is Muture
    - Has more Docu
    
- [ ] Quarkus
- [ ] Vert.x



# App Components:

## Users:

    - Admin
    - Teacher
    - Student

# Database structure:

## Tables:

### User
    - uuid
    - fullName
    - username
    - password
    - role
    - school
    - class_id (classes)
    - Note_ID (Noten)

### Noten
    - Note_ID
    - LF_ID (Lerneflede)

### Noten_Entries
    - NE_ID
    - Note
    - Note_ID (Noten)

### Lerneflede
    - LF_ID
    - LF_Number

### classes
    - class_id
    - class_name










