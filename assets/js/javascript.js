window.onload = () => {

  console.log("JS2 Loaded");
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);



  const game = {
    wins: 0,
    attempts: 10,
    gameObj: [],
    gameWord: null,
    letter: "",
    usedWords: [],
    usedLetters: [],
    correctLetters: [],
    wordLetters: [],
    words: [
      {
        word: "dances with wolves",
        image: "assets/images/dances-with-wolves.jpg",
        info: {
          description: "A Civil War soldier develops a relationship with a band of Lakota Indians. Attracted by the simplicity of their lifestyle, he chooses to leave his former life behind to be with them. Having observed him, they give the name Dances With Wolves. Soon he is a welcomed member of the tribe and falls in love with a white woman who has been raised in the tribe. Tragedy results when Union soldiers arrive with designs on the land.",
          release: "November 21, 1990 (USA)",
          director: "Kevin Costner"
        }
      },
      {
        word: "tombstone",
        image: "assets/images/tombstone.jpg",
        info: {
          description: "Wyatt Earp (Kurt Russell) and his brothers, Morgan (Bill Paxton) and Virgil (Sam Elliott), have left their gunslinger ways behind them to settle down and start a business in the town of Tombstone, Ariz. While they aren't looking to find trouble, trouble soon finds them when they become targets of the ruthless Cowboy gang. Now, together with Wyatt's best friend, Doc Holliday (Val Kilmer), the brothers pick up their guns once more to restore order to a lawless land.",
          release: "December 24, 1993 (USA)",
          director: "George P. Cosmatos, Kevin Jarre"
        }
      },
      {
        word: "hostiles",
        image: "assets/images/hostiles.jpg",
        info: {
          description: "In 1892, legendary Army Capt. Joseph Blocker reluctantly agrees to escort a dying Cheyenne war chief and his family back to their tribal land. Embarking on a harrowing and perilous journey from Fort Berringer, N.M., to the grasslands of Montana, they soon encounter a young widow whose family was killed on the plains. The travelers must now band together to survive a punishing landscape that's crawling with hostile Comanches and vicious outliers.",
          release: "December 22, 2017 (USA)",
          director: "Scott Cooper"
        }
      },
      {
        word: "django unchained",
        image: "assets/images/django.jpg",
        info: {
          description: "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave.",
          release: "December 25, 2012 (USA)",
          director: "Quentin Tarantino"
        }
      },
      {
        word: "unforgiven",
        image: "assets/images/unforgiven.jpg",
        info: {
          description: "When prostitute Delilah Fitzgerald (Anna Thomson) is disfigured by a pair of cowboys in Big Whiskey, Wyoming, her fellow brothel workers post a reward for their murder, much to the displeasure of sheriff Little Bill Daggett (Gene Hackman), who doesn't allow vigilantism in his town. Two groups of gunfighters, one led by aging former bandit William Munny (Clint Eastwood), the other by the florid English Bob (Richard Harris), come to collect the reward, clashing with each other and the sheriff.",
          release: "August 3, 1992 (USA)",
          director: "Clint Eastwood"
        }
      },
      {
        word: "true grit",
        image: "assets/images/true-grit.jpg",
        info: {
          description: "After an outlaw named Tom Chaney (Josh Brolin) murders her father, feisty 14-year-old farm girl Mattie Ross (Hailee Steinfeld) hires Rooster Cogburn (Jeff Bridges), a boozy, trigger-happy lawman, to help her find Chaney and avenge her father. The bickering duo are not alone in their quest, for a Texas Ranger named LaBoeuf (Matt Damon) is also tracking Chaney for reasons of his own. Together the unlikely trio ventures into hostile territory to dispense some Old West justice.",
          release: "December 22, 2010 (USA)",
          director: "Ethan Coen, Joel Coen"
        }
      },
      {
        word: "open range",
        image: "assets/images/open-range.jpg",
        info: {
          description: "Boss Spearman (Robert Duvall) and his cowhands Charley (Kevin Costner) and Mose (Abraham Benrubi) are driving cattle across a large expanse of country. When Mose ventures into a sparse village to buy a few necessities, he is met with violent hostility from Denton Baxter (Michael Gambon), an affluent landowner, and his right-hand man, Poole (James Russo). When Mose doesn't come back, Boss and Charley realize he's in trouble, so they plot to get him back and get revenge on those who captured him.",
          release: "August 11, 2003 (USA)",
          director: "Kevin Costner"
        }
      },
      {
        word: "the quick and the dead",
        image: "assets/images/the-quick-and-the-dead.jpg",
        info: {
          description: "A mysterious woman gunslinger, Ellen (Sharon Stone), saunters into the town of Redemption looking for revenge. Her father was killed by the town's sadistic mayor, Herod (Gene Hackman), who is in the midst of organizing a quick-draw tournament. The lady enters, joining a cast of miscreants and outlaws for a brutal competition in which the loser dies. Among the competitors is \"The Kid\" (Leonardo DiCaprio), an upstart who has his own score to settle with Herod.",
          release: "February 10, 1995 (USA)",
          director: "Sam Raimi"

        }
      },
      {
        word: "the outlaw josey wales",
        image: "assets/images/the-outlaw-josey-wales.jpg",
        info: {
          description: "Josey Wales (Clint Eastwood) watches helplessly as his wife and child are murdered, by Union men led by Capt. Terrill (Bill McKinney). Seeking revenge, Wales joins the Confederate Army. He refuses to surrender when the war ends, but his fellow soldiers go to hand over their weapons -- and are massacred by Terrill. Wales guns down some of Terrill's men and flees to Texas, where he tries to make a new life for himself, but the bounty on his head endangers him and his new surrogate family.",
          release: "June 26, 1976 (USA)",
          director: "Clint Eastwood"
        }
      }
    ],
    chooseWord: function() {
      if (this.usedWords.length !== this.words.length) {
        this.gameObj = this.words[Math.floor(Math.random() * this.words.length)];
        this.gameWord = this.gameObj.word;
        if (this.usedWords.indexOf(this.gameWord) === -1) {
          this.usedWords.push(this.gameWord);
          this.wordLetters = this.gameWord.split('');
        } else {
          this.chooseWord();
        }
      } else {
        console.log("end game");
      }
    },
    breakWord: function() {
      for (var i = 0; i < this.gameWord.length; i++) {
        if (this.gameWord[i] === " ") {
          console.log("space");
          this.correctLetters.push("&nbsp; &nbsp;");
        } else {
          this.correctLetters.push("&nbsp;_&nbsp;");
        }
      }
      $("#word").innerHTML = this.correctLetters.join("");
    },
    setImage: function() {
      $("#gameImage").src = this.gameObj.image;
      $("#description").innerHTML = this.gameObj.info.description;
      $("#release").innerHTML = this.gameObj.info.release;
      $("#director").innerHTML = this.gameObj.info.director;
      $("#gameWord").innerHTML = this.gameObj.word;
    },
    checkIncorrect: function(letter) {
      if (this.usedLetters.indexOf(letter) === -1 && this.wordLetters.indexOf(letter) === -1) {
        this.usedLetters.push(letter);
        this.attempts--;
        $("#guesses").innerHTML = this.attempts;
        $("#used").innerHTML = this.usedLetters.join(" ");
      }
    },
    checkCorrect: function(letter) {
      if (this.usedLetters.indexOf(letter) === -1 && this.wordLetters.indexOf(letter) !== -1) {
        this.usedLetters.push(letter);
        for (var i = 0; i < this.wordLetters.length; i++) {
          if (letter == this.wordLetters[i]) {
            this.correctLetters[i] = letter;
          }
        }
        $("#word").innerHTML = this.correctLetters.join(" ");
        $("#used").innerHTML = this.usedLetters.join(" ");
      }
    },
    checkStatus: function() {
      let withSpaces = [...this.correctLetters];
      for (var i = 0; i < withSpaces.length; i++) {
        if (withSpaces[i] === "&nbsp; &nbsp;") {
          withSpaces[i] = " ";
        }
      }
      if (this.attempts === 0) {
        $("#outcome").innerHTML = this.wins;
        $("#modal").style.display = "block";
      } else if (withSpaces.join("") === this.gameWord) {
        this.wins++

        $("#img-container").style.display = "block";
      }
    },
    checkSelect: function(letter) {
      this.checkIncorrect(letter);
      this.checkCorrect(letter);
      this.checkStatus();
    },
    testRun: function() {
      this.attempts = 10;
      this.gameWord = null;
      this.letter = "";
      this.usedLetters = [];
      this.correctLetters = [];
      this.wordLetters = [];
      $("#score").innerHTML = this.wins;
      $("#guesses").innerHTML = this.attempts;
      // $("#score").innerHTML = this.wins;
      // $("#modal").style.display = "none";
      // $("#img-container").style.display = "none";
      // $("#guesses").innerHTML = this.attempts;
      // $("#used").innerHTML = this.usedLetters.join(" ");
      // $("#gameImage").innerHTML = "";
      // $("#word").innerHTML = "";
      this.chooseWord();
      this.breakWord();
      this.setImage();
    },
    clearBoard: function() {

      $("#modal").style.display = "none";
      $("#img-container").style.display = "none";

      $("#used").innerHTML = "";
      // $("#gameImage").innerHTML = "";
      $("#word").innerHTML = "";
      game.testRun();
    }

  }

  document.onkeyup = function(event) {
    const isLetter = /[A-Za-z]/;
    game.letter = String.fromCharCode(event.which).toLowerCase();
    if (isLetter.test(game.letter)) {
      game.checkSelect(game.letter);
    }
    // game.checkSelect(game.letter);
  }
  game.testRun();

  $("#img-container").addEventListener("click", game.clearBoard);

  $(".reset-btn").addEventListener("click", game.clearBoard);
}
