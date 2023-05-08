# Data Fetching in Decoupled React + Drupal

[back to main project README](../../README.md)

## Summary

The goal for this exercise is to create a React app in Drupal that can fetch data from Drupal using the Drupal JSON API. We'll also look at loading data from an external API.

For an extra challenge, you may use a data fetching library to handle loading states, errors states, and client-side caching.

## Acceptance Criteria

- Add a new React app in Drupal as a block module 
  - This can be a new module or feel free to reuse the same custom module from [Part 1](./1-create-custom-react-block.md)
- Sample content has been added to drupal. 
  - The [Devel module](https://www.drupal.org/docs/contributed-modules/devel) can be useful for generating sample content, but you may also add content manually through the Drupal admin.
- The JSON API module has been enabled in Drupal
- A fetch request is being made from the The React app to the Drupal JSON API to load Drupal content in our React app.
- A fetch request is being made from the React app to an external API to display non-drupal content in the same React app.
  - The [PokeAPI](https://pokeapi.co/) is excellent for an external API option
- [Challenge] A data fetching library is used to handle loading and error states for  fetch requests.
- [Challenge] A data fetching library is used handle client-side caching.
[TanStack Query](https://tanstack.com/query/latest) is recommended for both Challenge criteria, but there are many other libraries that solve similar problems.

## Helpful Resources

- Documentation: [JSON:API Drupal Docs](https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/api-overview)
- Tutorial: [JSON:API Resource Requests](https://drupalize.me/tutorial/jsonapi-resource-requests?p=3003)
- Documentation: [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Documentation: [Fetching data with Effects](https://react.dev/reference/react/useEffect#fetching-data-with-effects)

### Extra Challenge Resources 

- Documentation: [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)\
- Examples: [TanStack Query Examples](https://tanstack.com/query/latest/docs/react/examples/react/basic)

## Setup Instructions

// TODO - Example Solution in-progress


