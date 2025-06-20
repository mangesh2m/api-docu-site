---
id: getting-started
title: Overview
sidebar_label: Overview
---

# BrewBuddy API Documentation

Welcome to the **BrewBuddy Automatic Coffee Maker Machine** API reference.

This documentation will help you understand how to programmatically interact with the BrewBuddy device, whether you're building a smart home integration, a mobile companion app, or automated workflows.

---

## What is BrewBuddy?

**BrewBuddy** is a Wi-Fi-enabled coffee machine designed for home and office environments. It supports remote control, custom brew profiles, maintenance alerts, and telemetry data — all accessible via a RESTful API.

---

## API Base URL

https://api.brewbuddy.io/v1

All endpoints in this documentation are prefixed with `/v1`.

---

## Authentication

The API uses **Bearer Token Authentication**. You will need an API key to make authorized requests.

Refer to the [Authentication](./authentication.md) section to learn how to obtain and use your token.

---

## Core Features

- ☕ Start and stop brewing remotely
- 🧠 Set or load custom brew profiles
- 🔄 Monitor machine status in real time
- 🔧 Schedule or perform cleaning cycles
- 📊 Fetch usage history and telemetry logs

---

## Quick Example

```bash
curl -X POST https://api.brewbuddy.io/v1/brew \
  -H "Authorization: Bearer <your_api_key>" \
  -H "Content-Type: application/json" \
  -d '{"strength": "strong", "size": "medium"}'
