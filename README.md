# Polymer 2.0-preview ***learning*** :rocket:  

:warning: ***---------- Learning === notReady -----------***

> Here is Polymer 2.0-preview and here is my very first attempt to it!  

## Goal  

I'm trying to learn, writing this app, during the [Polymer 2](https://www.polymer-project.org/1.0/blog/2016-09-09-polymer-2.0) development, so it of course may not work in some stage.  
It's an **experimental** application in every sense.

## Play with it

#### Install

Clone the repo and install deps:  

    $ git clone LasaleFamine/polymer2-sample
    $ npm install

`Bower` is installed as `devDependencies` and will run after the `npm install`.

You will see that Bower is pointing to the [new "preview" branch of the Polymer repository](https://github.com/Polymer/polymer/tree/2.0-preview).

> **NOTE**: Bower will install the components within the 'app/assets/bower' folder as configured within the '.bowerrc'.  

#### Run  

**[superstatic](https://github.com/firebase/superstatic)** is the web-server I choose for dev (and for trying it of course :D). Simply run:

    $ npm start

Superstatic will listen on `localhost:8080`.

## Gotchas  

#### Browser

- I have tested the app only with Chrome 52.0.

#### Webpack & Babel

- The default configuration used for Polymer 1.x not working.

## TODOs

- Working Webpack (currently I'm trying to make a working-build with Webpack)
- Creation of a simple CSS template
- Expand with new functionality
- New DOM APIs
- Testing
