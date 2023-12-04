function findFirstRepeated(gifts) {

    // Check if all elements are numbers
    if (!gifts.every(Number.isFinite)) {
        //console.error('Invalid input: All elements in the array should be numbers.');
        return -1;
    }

    const length = gifts.length;

    if (length > 1) {
        let visited = [];
        let i = 0;
        while (i < length) {
            visited[i] = gifts[i];
            for (let j = 0; j < i; j++) {
                if (gifts[i] == visited[j]) {
                    return gifts[i];
                }
            }
            i++;
        }
    }
    return -1;

}