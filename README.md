# Wardrobify

Team:

- Ryan - Hats
- Isaiah - Shoes

## Design

This application allows a user to create, delete, and view instances of hats and shoes. These hats and shoes are placed in locations and bins, which are polled from the Wardrobe API.

![alt text](./resources/hat-shoes-microservice-bc.png "bc diagram")

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice

The hat model allows a user to add a fabric, style name, color, picture, and location to a hat.
The location model is a value object polled from the Wardrobe API, and has the following fields: closet name and import href.

### Restful API endpoints for hats

Base URL: http://localhost:8090

| Method | URL                 | What it does                           |
| ------ | ------------------- | -------------------------------------- |
| GET    | /api/hats/          | Gets a list of all the hats            |
| GET    | /api/hats/\<int:pk> | Gets the details of one hat            |
| POST   | /api/hats           | Creates a new hat with the posted data |
| PUT    | /api/hats/\<int:pk> | Updates the details of one hat         |
| DELETE | /api/hats/\<int:pk> | Deletes a single hat                   |

## Development

Run the following commands to start the application:

- [ ] docker volume create pgdata
- [ ] docker-compose build
- [ ] docker-compose up

Then navigate to the web application at http://localhost:3000/
