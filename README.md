# tech_challenge_201804
End of course tech challenge set by DevelopMe_. Build a five-a-side team picker. 

## The brief

The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).

It's up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

Optional advanced features might include:
support for n-a-side, where a list of any length can be split into two teams
support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly

Some suggestions

The employers will be looking at your code, so I would strongly suggest you look to demonstrate clear thinking, good quality code and use of comments.

You should document what you have done and why, to demonstrate your planning process, and clear thinking.

If your tool requires a particular environment to run (e.g. Node or PHP) then this should be documented (as a readme.md?) with instructions provided (e.g. a Vagrantfile, package.json, gulpfile.js etc.). In short: I shouldn't struggle to get it working on my local machine, and you shouldn't assume I know how it is supposed to work.

You might want to show your experience and competence with Git by version managing your project from the start and providing a link to the repository on GitHub.

## Build approach

Having thought about the brief, I decided to approach the task from a scalability point-of-view with responsiveness for mobile use in mind (I actually think the app as it stands looks better on mobile). I decided to start with functionalit that would construct any number of teams with any number of players. 

Once I had this functionality working, I decided that I'd run with the multi-team aspect and look at how to create a league-table. The user journey now starts with the option for a quick, one off team generation with the follow-on option to create a league once happy with the teams. I didn't get around to looking at team weighting, but for now I have implemented a "shuffle teams" function. 

For git, I used git flow and created feature branches from development for any changes. Develoment was merged with master for deployment. 

## Further aims

* **API:** I'd like to create a laravel API so that a user can log in and load their league information. The "my league" button would then become a "log in". Although the redux state persists, this wouldn't be a solution for long-term or multi device use. Unfortunately, a week is shorter than I thought and I ran out of time. 

* **Player weighting:** following on from the above, I'd like to create a record of each player's wins and losses and use that information to create more ballanced teams over time. Obviously this isn't feasible without an API to hold the data. 

* **Interactivity:** I'd like to integrate the score-keeping into the fixtures list and display the result of the match-up. 

* **Further league functionality:** I'd like to set up a knock-out round option. This would be an option instead of the league or on completion of the seasons games where the top 4/8/16 teams would be entered intot the knockout phase. 


See my Trello board for this project here: https://trello.com/b/a8E9FstS/dev-me-tech-challenge

## Get Started: 

* Clone or download and run `npm install`. 
* For styles, run `sass --watch styles/style.scss:styles/style.css` (I'll change this to use gulp when I have a chance since Ruby Sass has been depricated).

## Built with

* React
* Redux
