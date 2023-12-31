# VLC-Random-Seek
A small script to randomly jump through a video timeline, using the VLC web interface. Useful when you want to add background noise for parties, events, etc.
When running the script, it will ask for the duration of the excerpt (default = 2 seconds). Every X seconds, it will randomply jump again, and so on indefinitely or until you reload the page.

## How to run
* Open VLC, go to settings > Show settings [ALL]
* Interface > Main interface > Check [Web]
* Interface > Main interface > Lua > Define Lua HTTP Password
* Open http://localhost:8080/ in web browser, leave the username empty and type the password defined in the previous step
* Paste the contents from vlc-random-seek.js in the console and hit ENTER.
* Done
