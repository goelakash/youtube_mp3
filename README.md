# youtube_mp3

A firefox add-on to automatically inspect a browser session and download audio for all the youtube videos running in all the tabs.

The add-on is active by default. For every firefox window, the add-on will continuously scan after each interval and download the youtube video playing in a tab.

The download is based on the tool [youtube-dl](https://github.com/rg3/youtube-dl).

The server is written in Python using Flask.

###Prequisites - 

- **python 2** 

- **youtube-dl**

- **flask**

- **jpm** (currently for development version)

You can install pip and then pip install youtube-dl and flask

```
#On Debian and ubuntu-related distros (using apt package manager)

sudo apt-get install python-pip npm
sudo pip install youtube-dl flask
sudo npm install jpm --global
```

###Usage -

1. Run the ```server.py```
2. ```cd``` into ```addon``` folder
3. run the firefox session using:
``` jpm run -b /usr/bin/firefox ```
