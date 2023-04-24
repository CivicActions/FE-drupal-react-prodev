# Integrate React with a Custom Drupal Theme

[back to main project README](../../README.md)

## Summary

The goal for this exercise is to create a custom Drupal theme that includes a React app as part of its codebase. The React app will be stored in its own directory within the theme and will be attached to a theme template using libraries.yml.

For an additional challenge, you may have this app display conditionally based on the value of a custom field on a content type. You can also try adding a second React app and configuring the apps to share dependencies between them.

## Acceptance Criteria

- A new custom drupal theme has been created
  - The theme can be created manually or using the Starterkit theme generator
- A React app has been added to the theme
- A library pointing to the production build of the React app has been created in THEME_NAME.libraries.yml
- The React app has been added to a theme template and is shown on at least one page on the site
- [Challenge] A boolean field has been added to a content type and the React app will only show on the page if that custom field is set to true
- [Challenge] Multiple React apps are added to the same page and both apps utilize the same 'react' and 'react-dom' dependencies

## Helpful Resources

- Tutorial: [Connect React to a Drupal Theme or Module](https://drupalize.me/tutorial/connect-react-drupal-theme-or-module?p=3253)
- Documentation: [Create a new Drupal Starter Kit theme](https://www.drupal.org/docs/core-modules-and-themes/core-themes/starterkit-theme)
- Documentation: [Theming Drupal](https://www.drupal.org/docs/develop/theming-drupal)
- Documentation: [Adding assets (CSS, JS) to a Drupal theme via *.libraries.yml](https://www.drupal.org/docs/develop/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml)
- Cheat Sheet: [Drupal Theming Cheat Sheet](https://drupalize.me/guide/theming-cheat-sheet)

### Extra Challenge Resources

- Documentation: [Preprocessing and modifying attributes in a .theme file](https://www.drupal.org/docs/8/theming-drupal-8/modifying-attributes-in-a-theme-file)
- Documentation: [Rollup Configuration options - input](https://rollupjs.org/configuration-options/#input)
  - Note that applications can have multiple entry points

## Setup Instructions

Skip to step 3 if Docker and DDEV are already installed.

1. [Install Docker or Colima](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/)
2. [Install DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/)
3. Clone this repo to your local machine
4. `cd` to the root of the project
5. Run the setup commands below in you terminal
```bash
ddev start
ddev composer install
ddev site-install p2
```
Run the launch command to open the site unauthenticated
```bash
ddev launch
```
Or run the drush user login command to generate a one-time login
```bash
ddev drush uli
```
