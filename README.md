# Honeycomb

A very simple project management tool.

_Honeycomb will never be as feature-rich as something like JIRA; I am only one person that already has a full-time job.
This is really being built as a way to practice the latest NextJS and React packages while trying to not get too rusty
during paternity leave._

## Required Dependencies

[NodeJS v20.18.0](https://nodejs.org/en/download/package-manager)

[Bad API](https://github.com/zackdavis88/bad-api/tree/develop)

## Setup

### Install pnpm

The preferred way to run this API is via [pnpm](https://pnpm.io/) which can be installed with:

```bash
npm install -g pnpm
```

### Install node_modules

```bash
pnpm install
```

### Create .env config

Create a file named `.env` at the root of the repository with the following contents:

```.env
# Run this command to get an AUTH_SECRET value `openssl rand -base64 32`
# or use whatever secret phrase you want. This is used for JWT encryption/decryption.
AUTH_SECRET=SUPER_SECRET_LOL

# This is the auth route on the UI server.
AUTH_URL=http://localhost:8080/api/auth

# This is the API url.
API_URL=http://localhost:3000
```

## Start Up

For local development you can run

```bash
pnpm dev
```

For prod you can run

```bash
pnpm build
pnpm start
```
