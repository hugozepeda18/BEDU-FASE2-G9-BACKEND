# BEDU-FASE2-G9-BACKEND
This is the repository for the second project of the BEDU Phase 2: Backend Fundamentals

Team 9:

* Hugo Armando Zepeda Ruiz
* Israel Nicolas Vallejo Barboza
* Isidro Salvador Briones Torres
* Ricardo Contreras Juárez
* Keny Almazan

### To run project in Local:

1.- Download prject of repository
$ git clone https://github.com/hugozepeda18/BEDU-FASE2-G9-BACKEND.git &

2.- run dependencies
$ npm install

3.- run project in dev for use nodemon
$ npm run dev

or run project for production
$ npm start

### To create project in Heroku with docker

1.- Login in Heroku
~$ heroku container:login

2.- Navigate to the app’s directory and create a Heroku app: (This step is optional, if the project is new)
~$ heroku create name_project
Creating name_project... done, stack is heroku-20
https://name_project.herokuapp.com/ | https://git.heroku.com/name_project.git

3.- Build the image (Name image equal to app) - (Remember that for this step, you must have docker installed)
~$ docker build . -t name_image:latest

4.- Push to Container Registry:
~$ heroku container:push web --app name_project

5.- Then release the image to your app:
~$ heroku container:release web --app name_project