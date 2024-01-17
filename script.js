function speaks(word) {
  const synth = window.speechSynthesis; // Corrected 'speechSynthesis' to 'window.speechSynthesis'
  const utterance = new SpeechSynthesisUtterance(word);
  const voices = synth.getVoices();
  const britishVoice = voices.find((voice) => voice.lang === "en-GB"); // Corrected 'voices' to 'voice'
  if (britishVoice) {
    utterance.voice = britishVoice;
  }
  synth.speak(utterance);
}
// Resetting the map and adding 20 new quizzes

const spellingBeeQuizzes = new Map();
spellingBeeQuizzes.set("Colleague", {
  definition:
    "A person with whom one works in the same organization or profession.",
  options: ["Colleague", "Colage", "Coleague"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Endeavour", {
  definition: "A serious determined effort.",
  options: ["Endeavor", "Endevour", "Endeavour"],
  correctAnswer: 3,
});
spellingBeeQuizzes.set("Leisure", {
  definition: "Time when one is not working or occupied; free time.",
  options: ["Liesure", "Leisure", "Leasure"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Favourite", {
  definition: "Preferred or liked more than others.",
  options: ["Favourite", "Favorit", "Favouriit"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Programme", {
  definition: "A planned series of events or performances.",
  options: ["Program", "Programme", "Programmee"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Judgement", {
  definition:
    "The ability to make considered decisions or come to sensible conclusions.",
  options: ["Judgment", "Judgement", "Judgmant"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Travelling", {
  definition: "The action of moving from one place to another.",
  options: ["Traveling", "Travelling", "Travelingg"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Neighbour", {
  definition:
    "A person living near or next door to the speaker or person referred to.",
  options: ["Neighbor", "Neighbour", "Neighboor"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Aluminium", {
  definition:
    "A silver-white metallic element, light, resistant to corrosion, and a good conductor of electricity.",
  options: ["Aluminum", "Aluminium", "Aluminuum"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Cancellation", {
  definition:
    "The action of cancelling something that has been arranged or planned.",
  options: ["Cancellation", "Cancelation", "Cancellattion"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Behaviour", {
  definition:
    "The way in which one acts or conducts oneself, especially towards others.",
  options: ["Behavior", "Behaviour", "Behavour"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Colourful", {
  definition: "Full of bright colors; vivid and interesting.",
  options: ["Colorfull", "Colourful", "Colurful"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Defence", {
  definition: "The action of defending from or resisting attack.",
  options: ["Defense", "Defence", "Deffence"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Encyclopedia", {
  definition:
    "A comprehensive reference work containing articles on a wide range of subjects.",
  options: ["Encyclopedia", "Encyclopaedia", "Encyclopædia"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Favourable", {
  definition: "Expressing approval, support, or encouragement.",
  options: ["Favorable", "Favourable", "Favourabble"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Glamorous", {
  definition: "Attractive in an exciting and special way; stylish.",
  options: ["Glamorous", "Glamourous", "Glamourus"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Honourable", {
  definition: "Worthy of respect or honor.",
  options: ["Honorable", "Honourable", "Honourabble"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Initialize", {
  definition:
    "To set up or designate the initial settings or starting point of something.",
  options: ["Initialize", "Initialise", "Innitiate"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Jewellery", {
  definition:
    "Personal ornaments, such as necklaces, rings, or bracelets, that are typically made from precious metals and gemstones.",
  options: ["Jewelery", "Jewellery", "Jewellary"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Knowledgeable", {
  definition: "Having or showing knowledge or intelligence.",
  options: ["Knowledgeable", "Knowledgable", "Nollijable"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Liquorice", {
  definition:
    "A sweet, aromatic black substance made by evaporation from the juice of a root.",
  options: ["Licorice", "Liquorice", "Liquoris"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Manoeuvre", {
  definition: "A movement or series of moves requiring skill and care.",
  options: ["Maneuver", "Manoeuvre", "Manouver"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Necessary", {
  definition: "Required to be done, achieved, or present; needed; essential.",
  options: ["Necessary", "Necessery", "Necesary"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Occasion", {
  definition: "A particular time or instance of an event.",
  options: ["Occasion", "Occassion", "Ocassion"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Parliament", {
  definition:
    "The highest legislature, consisting of the sovereign, the House of Lords, and the House of Commons.",
  options: ["Parliament", "Parlament", "Parlimant"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Queue", {
  definition:
    "A line or sequence of people or vehicles awaiting their turn to be attended to or to proceed.",
  options: ["Qeue", "Queue", "Queeue"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Rehearsal", {
  definition:
    "A practice or trial performance of a play or other work for later public performance.",
  options: ["Rehearsal", "Rehersal", "Rehursal"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Sceptical", {
  definition: "Not easily convinced; having doubts or reservations.",
  options: ["Skeptical", "Sceptical", "Sceptikal"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Theatre", {
  definition:
    "A building or outdoor area in which plays and other dramatic performances are given.",
  options: ["Theatre", "Theater", "Theatree"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Unbelievable", {
  definition: "Too extraordinary or improbable to believe.",
  options: ["Unbelievable", "Unbeleivable", "Unbelievabble"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Vocabulary", {
  definition: "The body of words used in a particular language.",
  options: ["Vocabulary", "Vocabluary", "Vocabbulary"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Wondrous", {
  definition: "Inspiring a feeling of wonder or delight; marvelous.",
  options: ["Wondrous", "Wonderous", "Wondrouss"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Xylophone", {
  definition:
    "A musical instrument played by striking a row of wooden bars of different lengths with mallets.",
  options: ["Xylophone", "Xylofon", "Xylophonne"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Yoghurt", {
  definition:
    "A semi-solid sourish food made from milk fermented by added bacteria.",
  options: ["Yogurt", "Yoghurt", "Yoghourt"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Zephyr", {
  definition: "A gentle, mild breeze.",
  options: ["Zephyr", "Zephur", "Zefyr"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Mistake", {
  definition:
    "An error or fault resulting from poor judgment, a misunderstanding, or faulty conduct.",
  options: ["Mistake", "Mistakke", "Misteak"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Rainfall", {
  definition: "The amount of rain that falls during a particular period.",
  options: ["Rainfall", "Rainfal", "Rainphall"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Villain", {
  definition:
    "A character whose evil actions or motives are important to the plot.",
  options: ["Villain", "Vilian", "Villane"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Sufficient", {
  definition: "Enough to meet the needs of a situation or a proposed end.",
  options: ["Sufficient", "Suficient", "Sufficiant"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Beautiful", {
  definition: "Pleasing the senses or mind aesthetically.",
  options: ["Beautiful", "Beutiful", "Beautifull"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Gorgeous", {
  definition: "Beautiful in a very special or attractive way.",
  options: ["Gorgeous", "Gorgous", "Gorjus"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Harbour", {
  definition:
    "A place on the coast where ships may moor in shelter, especially one protected from rough water.",
  options: ["Harbor", "Harbour", "Harbourr"],
  correctAnswer: 2,
});
spellingBeeQuizzes.set("Illegible", {
  definition: "Not clear enough to be read.",
  options: ["Illegible", "Ilegible", "Illegabble"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Jubilant", {
  definition: "Feeling or expressing great happiness and triumph.",
  options: ["Jubilant", "Jubillant", "Jubilantt"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Kangaroo", {
  definition:
    "A large plant-eating marsupial with a long powerful tail and strongly developed hindlimbs.",
  options: ["Kangaroo", "Kangeroo", "Kangaruu"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Landscape", {
  definition:
    "All the visible features of an area of countryside or land, often considered in terms of their aesthetic appeal.",
  options: ["Landscape", "Landscap", "Landscappe"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Mysterious", {
  definition: "Difficult or impossible to understand, explain, or identify.",
  options: ["Mysterious", "Mysteriouse", "Mysteriuss"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Negotiate", {
  definition:
    "Try to reach an agreement or compromise by discussion with others.",
  options: ["Negotiate", "Negociate", "Negociatte"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Obedient", {
  definition:
    "Complying or willing to comply with orders or requests; submissive to another's will.",
  options: ["Obedient", "Obidient", "Obbedient"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Pronunciation", {
  definition: "The way in which a word is pronounced.",
  options: ["Pronunciation", "Pronounciation", "Pronunsiation"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Quarantine", {
  definition:
    "A state, period, or place of isolation in which people or animals that have arrived from elsewhere or been exposed to infectious or contagious disease are placed.",
  options: ["Quarantine", "Quarantene", "Quarrantine"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Radiant", {
  definition: "Sending out light; shining or glowing brightly.",
  options: ["Radiant", "Radiantt", "Raydiant"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Sufficient", {
  definition: "Enough to meet the needs of a situation or a proposed end.",
  options: ["Sufficient", "Suficient", "Sufficiant"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Tongue", {
  definition:
    "The fleshy muscular organ in the mouth of a mammal, used for tasting, licking, swallowing, and (in humans) articulating speech.",
  options: ["Tongue", "Tounge", "Toungue"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Ubiquitous", {
  definition: "Present, appearing, or found everywhere.",
  options: ["Ubiquitous", "Ubiquitous", "Ubiquituous"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Vivid", {
  definition:
    "Producing powerful feelings or strong, clear images in the mind.",
  options: ["Vivid", "Vividd", "Vividde"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Wrestle", {
  definition:
    "Take part in a fight, either as sport or in earnest, that involves grappling with one's opponent and trying to throw or force them to the ground.",
  options: ["Wrestle", "Wresstle", "Wresttel"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Xanadu", {
  definition: "An idealized place of great or idyllic magnificence and beauty.",
  options: ["Xanadu", "Xanaddu", "Xanado"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Yield", {
  definition:
    "Produce or provide (a natural, agricultural, or industrial product).",
  options: ["Yield", "Yeld", "Yeild"],
  correctAnswer: 1,
});
spellingBeeQuizzes.set("Zest", {
  definition: "Great enthusiasm and energy.",
  options: ["Zest", "Zestt", "Zesst"],
  correctAnswer: 1,
});
let currentQuizIndex = 0; // Track the index of the current quiz

function showQuiz(index) {
  const [key, value] = Array.from(spellingBeeQuizzes)[index];
  const html = `<div class="card mb-3">
    <div class="card-header d-flex justify-content-between">
      <i class="bi-megaphone btn btn-outline-success d-flex align-items-center justify-content-between listens" id="listen" data-word="${key}">
        <span class="d-none d-sm-block p-1">Listen</span>
      </i>
      <i class="bi-megaphone btn btn-success d-flex align-items-center justify-content-between" id="listen-again" data-word="${key}">
        <span class="d-none d-sm-block p-1"> Listen again</span>
      </i>
    </div>
    <div class="card-body">
      <h4 class="card-title">
        Definition:
        <span class="defines">${value.definition}</span>
      </h4>
      <form action="" class="form-control">
        <div class="d-flex flex-row-reverse justify-content-end align-items-center h6">
          <label for="option1" class="ms-3 w-100">${value.options[0]}</label>
          <input type="radio" name="option1" id="1"/>
        </div>
        <div class="d-flex flex-row-reverse justify-content-end align-items-center h6">
          <label for="option2" class="ms-3 w-100">${value.options[1]}</label>
          <input type="radio" name="option1" id="2"/>
        </div>
        <div class="d-flex flex-row-reverse justify-content-end align-items-center h6">
          <label for="option3" class="ms-3 w-100">${value.options[2]}</label>
          <input type="radio" name="option1" id="3" />
        </div>
      </form>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <i class="bi-sign-stop h3 btn btn-danger h1 d-flex align-items-center">
        <span class="d-none d-sm-block p-1"> Stop</span>
      </i>
      <i class="bi-check2-all h3 btn btn-success h1 d-flex align-items-center" id="next-quiz">
        <span class="d-none d-sm-block">Continue</span>
      </i>
    </div>
  </div>`;

  document.querySelector(".quiz-container").innerHTML = html;

  const listens = document.querySelectorAll(".listens");
  listens.forEach((item) => {
    item.addEventListener("click", () => {
      const word = item.getAttribute("data-word");
      speaks(word);
    });
  });

  const nextQuizButton = document.getElementById("next-quiz");
  nextQuizButton.addEventListener("click", () => {
    currentQuizIndex++;
    if (currentQuizIndex < spellingBeeQuizzes.size) {
      showQuiz(currentQuizIndex);
    } else {
        alert("Congratulations! You completed all quizzes.");
        location.replace("index.html")
    }
  });
}
showQuiz(currentQuizIndex);