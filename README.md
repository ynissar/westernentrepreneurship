# w5entrepreneurs.ca

Source code for w5entrepreneurs.ca!

- JS/HTML/CSS website built with custom react components for dynamic portions
- Built with non-technical development in mind (see documentation) to update `opportunities` and `team`.
- If you need help, please reach out to someone with technical experience on the W5 team

## Deployed! 🚀

Check out the deployed website here: [https://w5entrepreneurs.ca/](https://w5entrepreneurs.ca/).

## Non-technical documentation

> This section offers information on how to update different sections of
> the website that require maintenance. This is aimed at people who are
> not familiar with web development. Keep this README open in a separate
> tab for a more smooth process.

### Opportunities

1. From the project page, navigate to src -> pages -> opportunities
2. Enter the file opportunitiesData.js
3. Press the pencil icon to edit the file
4. Add events by following the JSON pattern (format in which previous events are written). Ensure that the event description is ~290 characters and title is fewer than 40 characters. Ignore the image property. Commit your changes at the bottom of the page.
5. In order to add an event photo, navigate to src -> images -> events. Press the add file button. The size of the event photo has to be 750x500. Commit your changes at the bottom of the page.
6. Go to the index.js file in src -> image -> events. Add an import statement in the same format as the previous statements (Note: you need to reference the file name of the event photo you uploaded). The name of the image you imported should then be added to the list of names of files exported. Commit your changes at the bottom of the page.
7. Navigate back to src -> pages -> opportunities and enter the opportunitiesData.js file again. Import the file we exported in the last step by adding the file name to the existing import statement at the top of the file. Now, add the image property and reference the image in our newly added event. At the top. Commit your changes at the bottom of the page.

### Team

1. From the project page, navigate to src -> pages -> team
2. Enter the file teamData.js
3. Press the pencil icon to edit the file
4. Add team members by following the JSON pattern (format in which previous team members are written). Ignore the image property. Commit your changes at the bottom of the page.
5. In order to add a headshot, navigate to src -> images -> team. Press the add file button. The size of the headshot has to be 400x400. Commit your changes at the bottom of the page.
6. Go to the index.js file in src -> image -> team. Press the pencil icon to edit. Add an import statement in the same format as the previous statements (Note: you need to reference the file name of the headshot photo you uploaded). The name of the image you imported should then be added to the list of names of files exported. Commit your changes at the bottom of the page.
7. Navigate back to src -> pages -> team and enter the teamData.js file again. Import the file we exported in the last step by adding the file name to the existing import statement at the top of the file. Now, add the image property and reference the image in our newly added event. At the top. Commit your changes at the bottom of the page.

## Getting Started (Technical)

> This section contains information on how to run the site on your
> local machine. You should be familiar with HTML, CSS, JavaScript,
> NPM, React, and Git.

### General Info

This site utilizes a mix between React, TailwindCSS and vanilla HTML/CSS/JS. For pages featuring repetitive components, we use React to dynamically render HTML from JSON. This was done to make updating pages a simple and straightforward process.

### Setup

1. Clone the repo to your local machine
2. After running npm install, run the server with npm run start.
3. Using prettier or another code formatter is highly recommended in order to maintain format consistency.

## Roadmap

- Refactor to use styled-components
