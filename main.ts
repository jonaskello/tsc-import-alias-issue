import * as utils from '@utils/.';
import * as cmd from '@cmd/.';

const main = () => {
  const myMessage = 'A MESSAGE';

  utils.myUtils(myMessage);
  cmd.runCmd();
};

main();

