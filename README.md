# hey cinema

This app is the result of a technical coding challenge to test my React skills for a job opportunity.

## The Task

Create a semantic, user-friendly page in React with the following:

1. The basic heycinema header, as seen in the styleguide (provided to me, but not included in repo)
2. A search bar that takes a string and calls the OMDb search endpoint on submit
3. A list of search results, displayed as tiles, showing each result’s:
    * image
    * name
    * rating
    * and year of release
4. Loading and error states

Your app should be mobile-friendly, and take extensibility, maintainability, and state management into consideration.

## How to use

This is the standard bit about doing `npm install`, `npm start`, and `npm build` (or the `yarn` alternatives).
No need, really, to elaborate.

I've hosted the app on http://hey-cinema.surge.sh/ if you want to kick the tyres and take the app for a spin.

## What I might do differently

This really is a basic app. Sadly, given a lack of spare time, I skipped over a few things:

* There is a distinct lack of testing, which bugs me to no end. I should have implemented tests first, but instead I
  just haven't been able to get to it. If required, I will add them later.

* At the moment I am only showing 1 page of results. It would be nice to have pagination.

* I haven't added any CTAs. At the very least, each result should have a link to see more details, as there is a lot
  of information returned in the API which would be cool to see.

* It would be good to implement an Advanced Search which allows the user to specify any of title, type (movie, series,
  or episode), year, or plot (short or full), and perhaps also to filter the results by any number of criteria.
