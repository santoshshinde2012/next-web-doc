# Next Web Docs Template

A modern documentation website template built with Next.js, featuring Markdoc content, interactive API documentation, global search, and dark/light theme support.

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

### Content Structure

- Documentation pages are created as Markdown files in the `/src/app` directory
- API documentation is powered by OpenAPI specifications in the `/public/api` folder
- The main layout and styling can be customized in the `/src/components` directory

## Features

### Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/markdoc/search.mjs` file.

### API Documentation

The template includes interactive API documentation with the following features:

- Built with [Redoc](https://github.com/Redocly/redoc) for beautiful documentation rendering
- [Swagger UI](https://swagger.io/tools/swagger-ui/) integration for API testing
- Support for multiple API versions with an easy-to-use version selector
- Toggle between "Documentation" and "Try API" modes

To customize the API documentation:
1. Update the OpenAPI specifications in `/public/api` directory
2. Modify the API versions in `/src/app/api-docs/page.tsx`

### Theme Support

The template includes both light and dark theme support using the next-themes library, with automatic detection of system preferences.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Next.js](https://nextjs.org/docs) - The React framework for production
- [Markdoc](https://markdoc.io) - Powerful, flexible markdown authoring
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Headless UI](https://headlessui.dev) - Unstyled, accessible UI components
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - Next-generation full-text search library
- [Redoc](https://github.com/Redocly/redoc) - OpenAPI documentation generator
- [Swagger UI](https://swagger.io/tools/swagger-ui/) - Interactive API documentation
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale