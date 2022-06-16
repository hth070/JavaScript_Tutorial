function yesOrNo(input) {
    let word1 = input.shift().toLowerCase();
    let word2 = input.shift().toLowerCase();

    if (word1 === word2) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }

  yesOrNo(['asdf', 'ASDF']);
  yesOrNo(['asdf', 'asd']);
