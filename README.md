# Projektbewertungen-Software


## Frameworks:

|num|name|Language|framework|
|-|-|-|-|
|1|Server|Java| |
|2|Client|Typescript|Angular|
|3|Database|sql|postgres|
|4|Styling|CSS|TailwindCSS|



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

### 
