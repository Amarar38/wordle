body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

hr {
    width: 500px;
}

#title {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 2px;
}

#board {
    width: 350px;
    height: 420px;
    margin: 0 auto;
    margin-top: 3px;
    display: flex;
    flex-wrap: wrap;
}

.tile {
    /* Box */
    border: 2px solid lightgray;
    width: 60px;
    height: 60px;
    margin: 2.5px;

    /* Text */
    color: black;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.correct {
    background-color: #6AAA64;
    color: white;
    border-color: white;
}

.present {
    background-color: #C9B458;
    color: white;
    border-color: white;
}

.absent {
    background-color: #787C7E;
    color: white;
    border-color:white;
}


.keyboard-row {
    width: 400px;

    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.key-tile {
    width: 36px;
    height: 40px;
    margin: 1px;
    border: 1px solid lightgray;

    /* Text */
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.enter-key-tile {
    width: 76px;
    height: 40px;
    margin: 1px;
    border: 1px solid lightgray;

    /* Text */
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
