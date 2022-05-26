def sum_pairs(arr, target):
    finalArray = []
    for currentIndex in range(len(arr)):
        if target - arr[currentIndex] in arr[currentIndex+1:]:
            finalArray.append([arr[currentIndex], target - arr[currentIndex]])
    return finalArray

