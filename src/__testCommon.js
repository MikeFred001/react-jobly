const testJobs = [
  {
      "id": 1,
      "title": "Test Title 1",
      "salary": 110000,
      "equity": "0",
      "companyHandle": "test-company-1",
      "companyName": "Test Company 1"
  },
  {
      "id": 2,
      "title": "Test Title 2",
      "salary": 200000,
      "equity": "0",
      "companyHandle": "test-company-2",
      "companyName": "Test Company 2"
  }
]

const testCompanies = [
  {
    "handle": "test-company-1",
    "name": "Test Company 1",
    "description": "Test description 1",
    "numEmployees": 1,
    "logoUrl": "/logos/logo1.png"
  },
  {
    "handle": "test-company-2",
    "name": "Test Company 2",
    "description": "Test description 2",
    "numEmployees": 2,
    "logoUrl": null
  }
]

export { testJobs, testCompanies };