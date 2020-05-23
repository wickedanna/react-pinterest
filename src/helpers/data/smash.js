import boardsData from './boardsData';
import pinsData from './pinsData';

const completelyRemoveBoard = (boardId) => new Promise((resolve, reject) => {
  // delete the board
  boardsData.deleteBoard(boardId)
    .then(() => {
      // get all pins by BoardId
      pinsData.getPinsByBoardId(boardId)
        .then((pins) => {
          // loop over pins and delete
          pins.forEach((pin) => pinsData.deletePin(pin.id));
          resolve();
        });
    })
    .catch((err) => reject(err));
});


export default { completelyRemoveBoard };
