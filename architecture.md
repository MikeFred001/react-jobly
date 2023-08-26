- **NavBar**

- **RoutesList**
    - '/' -> HomePage
    - '/jobs' -> MainView
    - '/companies' -> MainView
    - '/companies/:handle' -> CompanyView

- **MainView**
    Params
    - companies / jobs
    Props
    State
    - Jobs
    - Companies
    Functions
    - FilterCards()

- **CompanyView**
    Params
    - company-handle
    State
    - companyData

- **SearchBar**
    Props
    - filterCards()
    State
    - formData

- **CardList**
    Props
    - jobs
    - companies

    - **CompanyCard**
        Props
        - Title
        - Handle
        - Description
        - Logo (optional)

    - **JobCard** (can optionally display assoc. company)
        Props
        - Title
        - Salary
        - Equity
        - Company (optional)

