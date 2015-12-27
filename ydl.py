import youtube_dl as ydl
import sys
import os

download_location = "/home/goelakash/Music/youtube/"

opts={    
    'format' : 'bestaudio',
    'download_archive': '/home/goelakash/Music/youtube/list.txt'
    }

with ydl.YoutubeDL(opts) as yd1:
    os.chdir(download_location)
    try:
        yd1.download([sys.argv[1]])
    except Exception as excp:
        print type(excp)
        print excp.args
        #print excp
    else:
        print "Download action complete"
    finally:
        print "Exiting..."