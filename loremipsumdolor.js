function objectTag() {
  var lorem = new Array();

  switch(document.loremForm.loremString.value) {
    case "latin": {
  				lorem[0] = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";
      break;
    }
  		case "silly": {
  				lorem[0] = "Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.";
   			break;
  		}
  		case "spanish": {
   			lorem[0] = "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit? de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.";
   			break;
  		}
  		case "italian": {
   			lorem[0] = "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es."
   			break;
  		}
 	}

  if ("characters" == document.loremForm.type.value) {
    var outputString = '';
    var numOfChars = document.loremForm.numbers.value;
    numOfChars = parseInt( numOfChars );
    var tempString = lorem.join( "\n\n" );
    while (
      outputString.length < numOfChars ) outputString += tempString;
      document.loremForm.output.value = outputString.substring(0, numOfChars ); // changed
    } else if("words" == document.loremForm.type.value) {
      var numOfWords = document.loremForm.numbers.value;
      numOfWords = parseInt( numOfWords );
      var list = new Array();
      var wordList = new Array();
      wordList = lorem[0].split( ' ' );
      var iParagraphCount = 0;
      var iWordCount = 0;

      while( list.length < numOfWords ) {
      	 if( iWordCount > wordList.length ) {
        		iWordCount = 0;
        		iParagraphCount++;
      		  if( iParagraphCount + 1 > lorem.length ) iParagraphCount = 0;
        		wordList = lorem[ iParagraphCount ].split( ' ' );
        		wordList[0] = "\n\n" + wordList[ 0 ];
      	 }
       	list.push( wordList[ iWordCount ] );
       	iWordCount++;
      }
    document.loremForm.output.value = list.join(' '); // changed
  } else {
    var numOfParagraphs = document.loremForm.numbers.value;
    numOfParagraphs = parseInt( numOfParagraphs );
    var list = new Array();
 			var iParagraphCount = 0;

    while(list.length < numOfParagraphs) {
      if(iParagraphCount +1 > lorem.length) {
        iParagraphCount = 0;
      }
      list.push( lorem[iParagraphCount] );
        iParagraphCount++;
    }
    document.loremForm.output.value = list.join( "\n\n" ); // changed
  }
}

function copypaste() {
  document.loremForm.output.focus();
  document.loremForm.output.select();
  therange=document.loremForm.output.createTextRange();
  therange.execCommand("Copy");
}
