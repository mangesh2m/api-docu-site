---
id: authentication
title: Authentication
sidebar_label: Authentication
---

# Authentication

All BrewBuddy API endpoints are protected and require a valid API token using **Bearer Token Authentication**.

Tokens are issued per device or developer account. This allows you to integrate BrewBuddy securely into apps, home automation scripts, or services.

---

## Obtaining an API Token

To request an API key:

1. Register or log into your BrewBuddy developer account.
2. Navigate to **API Access** under your profile.
3. Click **Generate API Key**.
4. Copy and store the token safely — it won't be shown again.

> 🔐 Treat your API token like a password. Do **not** expose it in frontend or client-side code.

---

## Using the API Token

All requests to protected endpoints require the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY_HERE
```
Example Requests

```curl
curl -X GET https://api.brewbuddy.io/v1/status \
  -H "Authorization: Bearer sk_live_2ffg93fjkf9k3"
  ```

```python
import requests

headers = {
    "Authorization": "Bearer sk_live_2ffg93fjkf9k3"
}

res = requests.get("https://api.brewbuddy.io/v1/status", headers=headers)
print(res.json())
```
```node.js
const axios = require('axios');

const res = await axios.get('https://api.brewbuddy.io/v1/status', {
  headers: {
    Authorization: 'Bearer sk_live_2ffg93fjkf9k3'
  }
});

console.log(res.data);
```


