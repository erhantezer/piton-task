### π©DESCRIPTION

π Login Pages:

Email and password are validated on the login page. When the user logs in, they are directed to the product page.

π Product Page:

Our products are listed on the products page and when the product is clicked, the detail page opens.
π Like button is used to select/remove favorite products.

π Register pages

### π© PROJECT STRUCTURE

```js
βββ components
β   βββ Like.tsx
β   βββ Navbar.tsx
βββ next.config.js
βββ package-lock.json
βββ package.json
βββ pages
β   βββ _app.tsx
β   βββ _document.tsx
β   βββ api
β   β   βββ hello.ts
β   βββ index.tsx
β   βββ login.tsx
β   βββ products
β   β   βββ [id].tsx
β   βββ products.tsx
β   βββ register.tsx
βββ postcss.config.js
βββ public
β   βββ piton.ico
β   βββ piton.jpg
βββ store
β   βββ product.tsx
β   βββ store.tsx
βββ styles
β   βββ Home.module.css
β   βββ globals.css
βββ tailwind.config.js
βββ tsconfig.json

```

### π© Libraries and Technologies I use

- Next.js
- TypeScript
- Toastify
- Tailwindcss
- Redux
- Redux Toolkit
- React Hook Form
- React-Phone-Number
- Formik-Yup


### π© How does my project look

<p align="left">
  <img src="public/product.gif" width="700" title="hover text">
  
</p>


### π© How To Use

To clone and run this application, you'll need Git
```
# Clone this repository ($ git clone https://github.com/......)

   - Run the following command to install the required dependencies of the project

>> npm install [This command downloads all the dependencies in the project's package.json file and creates the necessary files to run the project.]

   - Run the following command to compile Typescript files:
>> npm run build [This command compiles all Typescript files in the project and converts them to JavaScript files.]
>> npm run start
>> Open the runserver
```