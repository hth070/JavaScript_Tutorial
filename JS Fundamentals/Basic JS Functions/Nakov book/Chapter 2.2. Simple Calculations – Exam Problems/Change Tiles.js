function balconi(input){
    let square = Number(input[0]);
    let wOfTiles = Number(input[1]);
    let lOfTiles = Number(input[2]);
    let wOfBench = Number(input[3]);
    let lOfBench = Number(input[4]);
    let areaOfSquare = (square * square);
    let areaOfTiles = wOfTiles * lOfTiles;
    let timeTiles = 0.2;
    let areaOfBench = wOfBench * lOfBench;
    let finalArea = areaOfSquare - areaOfBench;
    let numberOfTiles = finalArea / areaOfTiles; 
    let finalTime = numberOfTiles * timeTiles;
    console.log(+numberOfTiles.toFixed(2));
    console.log(+finalTime.toFixed(2));
}
balconi([20, 5, 4, 1, 2]);

