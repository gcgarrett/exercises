# squares

Exercise to implement the `squares` function that takes a positive integer, `n`, and returns the sum of all squared positive integers between `1` and `n`, inclusive.

I started learning Go and wanted to ease myself into it with a simple exercise. Although this turned out to not be as simple as I initially thought because this function can produce some very big numbers! For instance, the input `65,535`, which is the largest unsigned 16 bit integer, will result in `93,822,844,764,160`, which is bigger than can fit in a unsigned 64 bit integer, so I'm unsure as to why Go allows this. I will have to do some digging and find out more (my initial search didn't result in anything but I probably just need to reword it, or, you know, rtfm).

Exercise comes from [cassidoo's newsletter](https://cassidoo.co/newsletter/), [issue #364](https://buttondown.com/cassidoo/archive/fff/)

## compiling
* Go: Run `go build` from the directory

## running
* NodeJS: `node squares.js`
* Python: `python3 squares.js`
* Go: `./squares`
