package main

import "fmt"

func generateLoadKey(clothingItem []string) string {
	color := clothingItem[0]
	fabricType := clothingItem[1]

	if fabricType == "delicate" {
		return fmt.Sprintf("%s-delicate", color)
	} else {
		return fmt.Sprintf("%s-mixed", color)
	}
}

func minLaundryLoads(laundryList [][]string) int {
	loads := make(map[string]bool)

	for _, clothingItem := range laundryList {
		itemKey := generateLoadKey(clothingItem)
		loads[itemKey] = true
	}

	return len(loads)
}

func main() {
	testValues := [][][]string{
		{
			{"red", "normal"},
			{"blue", "normal"},
			{"red", "delicate"},
			{"blue", "heavy"},
		},
		{
			{"white", "normal"},
			{"white", "delicate"},
			{"white", "normal"},
			{"white", "heavy"},
		},
		{
			{"purple", "delicate"},
			{"purple", "heavy"},
			{"pink", "heavy"},
			{"pink", "delicate"},
			{"tan", "delicate"},
			{"tan", "heavy"},
		},
		{
			{"black", "normal"},
			{"black", "heavy"},
			{"black", "heavy"},
			{"black", "normal"},
			{"black", "normal"},
			{"black", "heavy"},
		},
	}

	for _, testValue := range testValues {
		fmt.Printf("minLaundryLoads(%v)\n%d\n", testValue, minLaundryLoads(testValue))
	}
}
