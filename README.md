<h1 align="center"> BrewBuddy API: Automate Your Coffee Experience! </h1>

<div style={{textAlign: 'center'}}>
  [![Docusaurus](https://img.shields.io/badge/Powered%20By-docusaurus-darkgreen?style=flat-square)](https://docusaurus.io) 
  [![ghpages](https://img.shields.io/badge/Powered%20By-GitHub%20Pages-black?style=flat-square&logo=github&&logoColor=white)](https://pages.github.com)
</div>

This website provides comprehensive documentation for the **BrewBuddy API**, built using [Docusaurus](https://docusaurus.io/), a modern static website generator. You can dive right into the **[API Docs](/docs/getting-started)** to learn more!

---

## Installation & Local Development

### Installation

To set up the project locally, first install the dependencies:

```bash
npm install
# or yarn install
```

### Local Development

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

```bash
npm start
# or yarn start
```

## Build & Deployment

### Build

This command generates static content into the build directory and can be served using any static content hosting service.

```bash
npm run build
# or yarn build
```

### Deployment

If you are using GitHub Pages for hosting (which you are!), your configured GitHub Actions workflow handles the deployment automatically on push to `main`.

## **Key API Endpoints Overview**

This is a GFM table to showcase common API endpoints.

| Endpoint                  | Method | Description                                     | Authentication Required |
| :------------------------ | :----- | :---------------------------------------------- | :---------------------- |
| `/v1/status`              | `GET`  | Get current machine status                      | No                      |
| `/v1/brew`                | `POST` | Start a brewing cycle                           | Yes                     |
| `/v1/profiles`            | `GET`  | List all available brew profiles                | No                      |
| `/v1/profiles/{id}`       | `PUT`  | Update a specific brew profile                  | Yes                     |
| `/v1/maintenance/clean`   | `POST` | Initiate a cleaning cycle                       | Yes                     |
| `/v1/telemetry`           | `GET`  | Fetch real-time telemetry data                  | Yes                     |

## **Project Status** (GFM Task List Example)

This is a GFM task list to track project progress.

- [x] Initial Docusaurus setup
- [x] Basic documentation content added
- [x] GitHub Pages deployment via Actions
- [ ] Implement custom homepage (this task is in progress!)
- [ ] Add more API reference documentation
- [ ] Integrate Swagger/OpenAPI spec (future)
- [ ] Create troubleshooting guide
  
:::note

This README uses GitHub Flavored Markdown (GFM) for tables and task lists, whereas for admonitions (such as this message), it uses Docusaurus-exclusive syntax. 

:::
