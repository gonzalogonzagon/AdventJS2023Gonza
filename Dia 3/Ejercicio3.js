function findNaughtyStep(original, modified) {
    if (!original) return '';
    if (!modified) return original[0];

    let i = 0;
    const olength = original.length;
    const mlength = modified.length;

    while (original[i] === modified[i] && i < olength && i < mlength) {
        i++;
    }

    if (i < olength )
    if (olength > mlength) return original[i];
    if (mlength > olength) return modified[i];

    return '';
} // INCOMPLETE