# 1️⃣ CREATE – Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Submit form
    F->>F: Client-side validation
    F->>B: POST /api/resources (JSON)

    B->>V: Validate request
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>S: create Resource(data)
        S->>DB: INSERT INTO resources
        DB-->>S: Result / Duplicate error

        alt Duplicate
            S-->>B: Duplicate detected
            B-->>F: 409 Conflict
            F-->>U: Show duplicate message
        else Success
            S-->>B: Created resource
            B-->>F: 201 Created
            F-->>U: Show success message
        end
    end
```

# 2️⃣ READ — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Open resources page
    F->>B: GET /resources
    B->>S: getAllResources()
    S->>DB: SELECT * FROM resources
    DB-->>S: Resource rows

   alt Success
        S-->>B: Resource list
        B-->>F: 200 OK + JSON
        F-->>U: Display resources
    else Server/DB error
        S-->>B: Error
        B-->>F: 500 Internal Server Error
        F-->>U: Show error message
    end
```

# 3️⃣ UPDATE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Edit resource and submit form
    F->>F: Client-side validation
    F->>B: PUT /resources/:id (JSON)

    B->>V: Validate request
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>S: updateResource(id, data)
        S->>DB: UPDATE resources WHERE id = ?
        DB-->>S: Update result

        alt Resource not found
            S-->>B: Resource not found
            B-->>F: 404 Not Found
            F-->>U: Show not found message
        else Success
            S-->>B: Updated resource
            B-->>F: 200 OK
            F-->>U: Show updated resource / success message
        end
    end
```

# 4️⃣ DELETE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram 
    participant U as User (Browser) 
    participant F as Frontend (resources.js) 
    participant B as Backend (Express Route) 
    participant S as Resource Service 
    participant DB as PostgreSQL 
    
    U->>F: Click delete resource 
    F->>B: DELETE /resources/:id 
    
    B->>S: deleteResource(id) 
    S->>DB: DELETE FROM resources WHERE id = ? 
    DB-->>S: Delete result 
    
    alt Resource not found 
        S-->>B: Not found 
        B-->>F: 404 Not Found 
        F-->>U: Show not found message 
    else Success
        S-->>B: Resource deleted 
        B-->>F: 204 No Content 
        F-->>U: Remove item / show success 
        
        F->>B: GET /resources 
        B->>F: 200 OK + JSON 
        F-->>U: Refresh resource list 
    end
```