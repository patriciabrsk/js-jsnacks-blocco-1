/**
 *  Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi, 
 *  Gatsby vuole generare una falsa lista di 10 invitati.
 *
 * Ogni nome e cognome devono avere la prima lettera maiuscola
 * mini-bonus :  possiamo anche avere doppi nomi casuali
 *
 */


const names = ["reckless","rectangular","ready","real","realistic","reasonable","red","reflecting","regal","regular","reliable","relieved","remarkable","remorseful","remote","repentant","required","respectful","responsible","repulsive","revolving","rewarding","rich","rigid","right","ringed","ripe","roasted","robust","rosy","rotating","rotten","rough","round","rowdy","royal","rubbery","spectavid","voluminous","wan","warlike","warm","warmhearted","warped","wary","wasteful","watchful","waterlogged","watery","wavy","wealthy","weak","weary","webbed","wee","weekly","weepy","weighty","weird","welcome","well-documented","well-groomed","well-informed","well-lit","well-made","well-off","well-to-do","well-worn","wet","which","whimsical","whirlwind","whispered","white","whole","whopping","wicked","wide","wide-eyed","wiggly","wild","willing","wilted","winding","windy","winged","wiry","wise","witty","wobbly","woeful","wonderful","wooden","woozy","wordy","worldly","worn","worried","worrisome","worse","worst","worthless","worthwhile","worthy","wrathful","wretched","writhing","wrong","wry","yawning","yearly","yellow","yellowish","young","youthful","yummy","zany","zealous","zesty","zigzag","rocky"];

const surnames = ["people","history","way","art","world","information","map","family","government","health","system","computer","meat","year","thanks","music","person","reading","method","data","food","understanding","theory","law","bird","literature","problem","software","control","knowledge","power","ability","economics","love","internet","television","science","library","nature","fact","product","idea","temperature","investment","area","society","activity","story","magazine","newspaper","relationship","teaching","cell","dealer","debate","finding","lake","member","message","phone","scene","appearance","association","concept","customer","death","discussion","housing","inflation","insurance","mood","woman","advice","blood","effort","expression","importance","opinion","payment","reality","responsibility","situation","skill","statement","wealth","application","city","county","depth"];

const randomGuestsList = [];

for (i = 0; i < 10; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    // console.log(randomName.charAt(0).toUpperCase() + randomName.slice(1));

    let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    // console.log(randomSurname.charAt(0).toUpperCase() + randomSurname.slice(1));
    randomGuestsList.push((randomName.charAt(0).toUpperCase() + randomName.slice(1)) + " " + (randomSurname.charAt(0).toUpperCase() + randomSurname.slice(1)));
}

console.log(randomGuestsList);