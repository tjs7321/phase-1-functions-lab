function distanceFromHqInBlocks(st) {
    let blockDis = Math.abs(42-st)
    return blockDis
}

function distanceFromHqInFeet(st) {
    let ftDis = (distanceFromHqInBlocks(st) * 264)
    return ftDis
}

function distanceTravelledInFeet(start, end) {
    let disTrav = Math.abs((end - start)*264)
    return disTrav
}

function calculatesFarePrice(start, end) {
    let farePrice = ((distanceTravelledInFeet(start, end))-400) * 0.02
    if (distanceTravelledInFeet(start, end) <= 400)
        return 0
    else if (distanceTravelledInFeet(start, end) <= 2000)
        return farePrice
    else if (distanceTravelledInFeet(start, end) <=2500)
        return 25
    else if (distanceTravelledInFeet(start, end) > 2500)
        return "cannot travel that far"
}