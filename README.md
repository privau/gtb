# GTB-Solver
## Production:
https://gtb.priv.au

## To Use This Offline:
- Download the source code.
- Open index.html in a browser.
- Type in hints given by the game and possible results will show up.
- You can add onto the words in wordlist/wordlist.js (words from the end of the submissions.txt aren't added yet)

## Run with docker:
`docker run -i --restart always --name 'GTB-Solver' -p 127.0.0.1:5000:80 vojkovic/gtb`

The Solver will now be run on port 5000.
