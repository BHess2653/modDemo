// console.log('Pirates are Loading');

exports.captain = () => {
  const hiddenXNumber = 33;
  info.x += hiddenXNumber;

  return info;
}

exports.firstMate = () => {
  const hiddenYNumber = -51;
  info.y += hiddenYNumber;

  return info;
}

exports.deckswab = (overrideStartingPoint) => {
  const startingPoint = overrideStartingPoint;
  return this.firstMate(this.captain(startingPoint));

  console.console.log(pointCaptainAugment);
}
