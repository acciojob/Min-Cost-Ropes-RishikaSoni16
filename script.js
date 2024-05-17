function mincost(arr) {
    let minCost = 0;

    // Convert the array into a min-heap
    arr.sort((a, b) => a - b);

    // Continue until there is only one element in the array
    while (arr.length > 1) {
        // Extract the two smallest elements from the array
        const min1 = arr.shift();
        const min2 = arr.shift();

        // Combine the two elements and calculate the cost
        const combined = min1 + min2;
        minCost += combined;

        // Insert the combined result back into the array
        arr.push(combined);

        // Re-sort the array to maintain the min-heap property
        arr.sort((a, b) => a - b);
    }

    return minCost;
}

module.exports=mincost;
