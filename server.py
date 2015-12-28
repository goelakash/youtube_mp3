import youtube_dl as ydl
import sys
import os
from flask import Flask,request,Response

app = Flask(__name__)

download_location = "/home/goelakash/Music/youtube/"

opts={   
    'youtube_include_dash_manifest': False,
    'format' : 'bestaudio',
    'download_archive': '/home/goelakash/Music/youtube/list.txt'
    }


@app.route("/")
def hello():
    return "Hello! Add song url to the link to download."


@app.route("/<path:url>",methods=['GET'])
def download_song(url):
    v = request.args.get('v')
    url = url+"?v="+v 
    #return url
    with ydl.YoutubeDL(opts) as yd1:
        os.chdir(download_location)
        try:
            yd1.download([url])
        except Exception as excp:
            return ("No content. URL maybe invalid",400)
        else:
            return ("Download queued.",200)
        #finally:
            #return (status="

if __name__ == "__main__":
    app.run()
