# Lagos State Economic Summit API

> Lagos State Economic Summit 2020.

## Quick Start

```bash
# Install dependencies
npm i

# Install dev-dependencies
npm i -D nodemon

# Install optional dependencies (works with Windows only)
npm i --save-optional win-node-env

# Serve on localhost:5004 (development)
npm run dev

# Serve on localhost:5004 (production)
npm start

# Import sample data into mongodb
node seeder -i

# Delete data from mongodb
node seeder -d
```

### Testing

| Routes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description       |
| ----------------------------------------------------------------- | ---------------------------------------|
| POST &nbsp; &nbsp; &nbsp; api/v1/auth/register                    | Register a User - SME/Non-SME/Admin    |
| POST &nbsp; &nbsp; &nbsp; api/v1/auth/login                       | Login a User - Admin                   |
| POST &nbsp; &nbsp; &nbsp; api/v1/admin/users                      | Create a User - SME/Non-SME/Admin      |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/:id            | Get a user                             |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users                | Get all users                          |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/smes           | Get all users - SME's                  |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/non-smes       | Get all users - Non SME's              |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/smes-non-smes  | Get all users - SME's & Non SME's      |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/admins         | Get all users - Admins                 |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/today          | Get all registered users - Today       |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/week           | Get all registered users - This Week   |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/month          | Get all registered users - This Month  |
| PUT &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/users/:id            | Update a user                          |
| DELETE &nbsp;api/v1/admin/users/:id                              | Delete a user                          |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/export/users         | Export all users as CSV                |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/export/smes          | Export all smes as CSV                 |
| GET &nbsp; &nbsp; &nbsp; &nbsp; api/v1/admin/export/non-smes      | Export all non-smes as CSV             |