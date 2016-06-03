# rpg-game
RPG style game using phaser.io

### Handy resources from phaser.io

* [method searchs](http://phaser.io/learn/chains)
* [Sandbox](http://phaser.io/sandbox)
* [Phaser Chains] for Intellij plugin. This is a great plugin for intellij. It lets you search the API very easily.
* [gamedevacademy.org] (https://gamedevacademy.org/html5-phaser-tutorial-top-down-games-with-tiled/) Tutorial using phaser
for top down rpg games
* [tiled] (http://www.mapeditor.org/) An open source map tile map editor
* [gamefromscratch.com] (http://www.gamefromscratch.com/post/2015/10/14/Tiled-Map-Editor-Tutorial-Series.aspx) This has
info on games and tutorials for tiled
* [opengameart.org] (http://opengameart.org/) Contains a lot of royalty free sprites

[Phaser Chains]: https://bitbucket.org/boniatillo/phaserchains

## Instructions for setting up intellij with github

If you don't already have github installed go to https://git-scm.com/download/win this will start the download for windows

Once you have github installed go to `file > settings > github` then set the host to github.com
set the Auth Type to Token then create a token, this will fill in the token section.

Click on Git then for Path to Git executable navigate to the git.exe should be located in the bin
of where you installed git. Mine installed here C:\Program Files\Git\bin\git.exe.

At this point you should be able to click on the VCS select checkout from version control
select github then just put in the repository address and that's it.

If you have a local web server set up already you can go to file > settings > build, execute, deployment > deployment
then click the + to add a new module select the local or mounted folder then just add your root folder and your changes
will be added and you can open them up in a web browser.

You can make commits just like we do at work.

## How to run with Maven + Jetty

You must use a webserver, even to run this site from localhost.  Phaser
does some advanced graphics stuff which, for security reasons, browsers
will not allow from a url with a `file://` scheme.

You are welcome to run the project with any webserver, however, here is
an easy way to get up and running with Maven and Jetty

1. Get a recent version of Maven (3.3+), and Java (1.8+)
2. Open a terminal, and navigate (`cd`) to the project directory
3. Type `mvn jetty:run`

The project will start up on `http://localhost:8080/`

Alternately, you can start Jetty from IntelliJ: search for the `jetty:run` goal under the `plugins` heading, in the Maven sidebar dohicky.

## Examples:

I think this is a good example of getting other characters to follow
http://phaser.io/examples/v2/p2-physics/distance-constraint
