# minLaundryLoads

Exercise to implement the `minLaundryLoads` function that takes a list of clothing items, each with a color and a fabric type, and calculates the minimum number of loads to wash all of the cloths. The instructions for washing the cloths are:
* Cloths of the same color can be washed together
* `normal` and `heavy` fabric types can be washed together
* `delicate` fabric types must be washed separately

For instance, two clothing items that are blue and where one is a normal fabric type and the other is heavy can be washed together (e.g. 1 laundry load), but two clothing items that are blue but where one is normal and the other is delicate cannot be washed together (e.g. 2 laundry loads). Two clothing items of different color are washed separately regardless of fabric type (e.g. 2 laundry loads).

For my solutions I used sets to store only unique values of clothing items. After processing all of the clothing items, the size of the set is returned as the answer. Each clothing item is converted into a string key, which is stored in the set, of the format `{color}-{type}`. For `normal` and `heavy` fabric types, `type` is set to `mixed`. For `delicate`, `type` is set to `delicate`.

For the Go implementation, since Go does not natively support sets I used a map.

Exercise comes from [cassidoo's newsletter](https://cassidoo.co/newsletter/), [issue #371](https://buttondown.com/cassidoo/archive/show-me-your-friends-and-ill-show-you-your-future/)

## compiling
* Go: Run `go build` in the directory

## running
* Go:     `./minLaundryLoads`
* NodeJS: `node minLaundryLoads.js`
* Python: `python3 minLaundryLoads.py`

## output
Prints results from various inputs to the command line
