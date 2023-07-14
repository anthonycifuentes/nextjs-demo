
# Moonshot Partners Demo Project
## Getting Started
First, run the development server:
```bash
npm  run  dev
# or
yarn  dev
# or
pnpm  dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This is a demonstration project built with Create Next App and powered by Next.js version 13. It showcases the new features and functionalities of the Next.js framework. The project aims to demonstrate the following:

-   **App Directory:** This project follows a specific directory structure to organize its components and pages. The following directories can be found in the `app` directory:
    
    -   **Layouts:** Contains the layout components used in the project.
    -   **Loading:** Contains the loading component used to display loading states.
    -   **Error:** Contains the error component used to handle error states.
-   **React Server Components:** This project leverages React Server Components to enable streaming of components on the server.
    
-   **Fetching:** Demonstrates different fetching strategies provided by Next.js, including `no-store`, `force-cache`, and `revalidate`.
    
-   **next/link:** Utilizes the `next/link` package to enable client-side navigation between pages.
    
-   **SEO:** Implements SEO features such as metadata and sitemap generation for better search engine optimization.
    

## About Moonshot Partners
[Moonshot Partners](https://www.moonshot.partners/) is the company where this demo project is being presented. They are a technology consultancy and development agency that specializes in helping businesses achieve their digital goals through innovative solutions.

## Project Structure
The project follows the following structure:
- app
  - page.js
  - layout.js
  - globals.css
  - sitemap.js
  - about
    - page.js
  - blog
    - error.js
    - layout.js
    - loading.js
    - page.js
    - components
      - post.js
    - [id]
      - page.js
  - products
    - pages.js
    - components
      - product-card.js
    - [id]
      - page.js


-   `page.js`: This file represents a page component used in the application.
-   `layout.js`: This file defines the layout component used in the project.
-   `globals.css`: Contains global CSS styles used throughout the application.
-   `sitemap.js`: Generates the sitemap for the project.
-   `about/page.js`: Represents the page component for the "About" section.
-   `blog/error.js`: Defines the error component used in the blog section.
-   `blog/layout.js`: Defines the layout component used in the blog section.
-   `blog/loading.js`: Defines the loading component used in the blog section.
-   `blog/page.js`: Represents the page component for the blog section.
-   `blog/components/post.js`: Represents the post component used in the blog section.
-   `blog/[id]/page.js`: Represents the page component for a specific blog post.
-   `products/pages.js`: Represents the pages component used in the products section.
-   `products/components/product-card.js`: Represents the product card component used in the products section.
-   `products/[id]/page.js`: Represents the page component for a specific product.

Feel free to explore the code and enjoy the demo of Next.js version 13 and its new features!

For more information about Moonshot Partners, please visit [https://www.moonshot.partners](https://www.moonshot.partners/).


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:
 - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
 
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.