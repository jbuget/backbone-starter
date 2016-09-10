const context = require.context(/*directory*/'.', /*recursive*/true, /*match files*//_test.js$/);
context.keys().forEach(context);
