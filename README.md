# Wardrobify

Team:

- Ryan - Hats
- Isaiah - Shoes

## Design

This application allows a user to create, delete, and view instances of hats and shoes. These hats and shoes are placed in locations and bins, which are polled from the Wardrobe API.

![alt text](./resources/hat-shoes-microservice-bc.png "bc diagram")

## Shoes microservice

The shoes model allows a user to add a shoe to a bin according to the manufacturer, model name, color, and a picture. The bin model is a value object polled from the Wardrobe API, and has the following fields: closet name and import href.

## Hats microservice

The hat model allows a user to add a fabric, style name, color, picture, and location to a hat.
The location model is a value object polled from the Wardrobe API, and has the following fields: closet name and import href.

### Restful API endpoints for shoes

| Method | URL                 | What it does                           |
| ------ | ------------------- | -------------------------------------- |
| GET    | /api/shoes/          | Gets a list of all the shoes            |
| GET    | /api/shoes/\<int:pk> | Gets the details of a pair of shoes           |
| POST   | /api/shoes           | Creates a new pair of shoes with the posted data |
| PUT    | /api/shoes/\<int:pk> | Updates the details of a pair of shoes         |
| DELETE | /api/shoes/\<int:pk> | Deletes a single pair of shoes                   |

### Restful API endpoints for hats

| Method | URL                 | What it does                           |
| ------ | ------------------- | -------------------------------------- |
| GET    | /api/hats/          | Gets a list of all the hats            |
| GET    | /api/hats/\<int:pk> | Gets the details of one hat            |
| POST   | /api/hats           | Creates a new hat with the posted data |
| PUT    | /api/hats/\<int:pk> | Updates the details of one hat         |
| DELETE | /api/hats/\<int:pk> | Deletes a single hat                   |

## Development

TODO: steps to start application
