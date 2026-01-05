# Project to showcase issues of using MUI 7 in a Module Federation Project

In a project I'm working on, we're using React 18 (not migrated to 19 yet), MUI 6 and Module Federation (1.5) with rsbuild. This setup works and we don't have issues currently.

In the process of migrating MUI 6 to MUI 7 we encountered issues with shared modules in Module Federation:

```
Uncaught (in promise) TypeError: _emotion_styled__rspack_import_0 is not a function
```

We've tried many things: Changing the shared dependencies definition in the module federation configuration in all kinds of ways, migrating to Module Federation 2.0, etc. Nothing helped, also all kinds of AI tools were clueless on how to solve it. Since it worked with MUI 6, I suspect it has something to do with MUI switching to an esm bundle. I suspect there's currently no way to use MUI 7 in a module federation context and here's my minimal project to try and prove that point.

If anyone can get this project working, I'd be very happy about that 🙌🏼

## How to get this project up and running
Not much is needed to get the app(s) to start up. First line of course gets all dependencies and the second line starts up both the container and components apps.

```
npm i
npm run all
```

Then open http://localhost:3001 to see the error mentioned above in the console.