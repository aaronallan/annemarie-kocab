# Annemarie Kocab Site

## Local development
1. Open terminal App
2. `cd /Users/RachelMagid/Documents/Rachel/Personal/AK Website/annemarie-kocab`
3. `npm start` runs the project at http://localhost:3000/.
4. `control + c` to stop server

**Before updating local files:**

1. Open the Github App
2. Ensure you're on the "gh-pages" branch
3. Ensure you have the most recent updates `(shift + cmd + P)`
4. Make local changes.

## Updating production

1. Run site locally
2. Make changes.
3. Using the Github app:
* Review Changes (additions in green, deletions in red)
* Add a commit message in the input box labeled "Summary"
* Commit changes (Click button that says "Commit to gh-pages")
* Push Changes to production site `(cmd + P)`

## Adding new pages

There are a few steps required to add a new page:

1. In `index.html` add a link to the new page. The new link should look like this: `<li class="menu-item"><a href="#about">About</a></li>` (At this point it won't link to anything).
2. Add a new template to the `/templates` directory (the name should match the template value in the next step).
3. Setup router to handle the new page in `js/ApplicationRouter.js`:
* Define a new route in the initialize function. `this.aboutView = new ContentPaneView({template: 'about'});`
* Add the new route to the routes object `"about" : "about",`
* Add a function to call when the route is hit.
```
about: function() {
	this.switchView(this.aboutView);
	this.setActiveTab('#about');
},
```
4. Test new page.
5. Note: new pages may require style updates to the navigation.

## Resources
1. HTML - https://digital.com/tools/html-cheatsheet/
2. CSS - https://www.onblastblog.com/css3-cheat-sheet/
