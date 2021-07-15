function logGameState(game){
  console.log('field:');
  console.log(game.field);
  
  console.log('game rules:');
  console.log(`
    leftTop:${game.leftTopCornerColor},
    rightTop:${game.rightTopCornerColor},
    leftBottom:${game.leftBottomCornerColor},
    rightBottom:${game.rightBottomCornerColor}
  `);
  
  console.log('isCompleted:');
  console.log(game.isCompleted());
}

module.exports = {
  logGameState
};