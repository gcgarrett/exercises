package main

import "fmt"

func squares(n uint16) uint64 {
    var max = uint64(n)
    var i uint64 = 0
    var result uint64 = 0

    for ; i <= max; i++ {
        result = result + (i * i)
    }

    return result
}

func main() {
    testValues := [8]uint16{2, 5, 10, 12, 25, 100, 1000, 65535}

    for _, value := range testValues {
        fmt.Printf("squares(%d)\n%d\n", value, squares(value))
    }
}
