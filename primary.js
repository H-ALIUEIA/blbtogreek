let book_title = "";
let book_new_old = true;
const create_translation_text_one = create_back_button();
main();

function main()
{
    try
    {
        home_screen();
    }
    catch(err){}
    try
    {
        in_screen();
    }
    catch(err){}
    try
    {
        menu();
    }
    catch(err){}
    try
    {
        menu_in();
    }
    catch(err){}
    try
    {
        verses_screen();
    }
    catch(err){}
}

var getJSON = function(url, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function()
    {
        var status = xhr.status;
        if (status === 200)
        {
            callback(null, xhr.response);
        }
        else
        {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

function translateverse2(translatetext, hebrewverse, type)
{
    var sourceText = translatetext;
    var sourceLang = 'en';
    var targetLang = 'el';
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    getJSON(url, function(err, data)
    {
    	if(err !== null)
    	{
    		console.log("error");
    	}
    	else
    	{
    	    if(type == 1)
    	    {
				const finishedhebrewtext = data[0][0][0].split("/./");
				for(let i = 0; i<hebrewverse.children.length; i++)
				{
					if(finishedhebrewtext.length-1 >= i)
					{
						const hebrewversetext = document.createElement("p");
						hebrewversetext.innerText = finishedhebrewtext[i+1];
						hebrewverse.children[i].children[0].children[0].before(hebrewversetext);
					}
				}
    		}
    		else if(type == 2)
    		{
    			translated = data[0][0][0];
				const translatedtext = document.createElement("p");
				translatedtext.innerText = translated;
				lexiconposition = document.getElementsByClassName("lexStrongsDef");
				for(var i = 0; i< lexiconposition.length; i++)
				{
				    lexiconposition[i].children[0].before(translatedtext);
				    lexiconposition[i].before(translatedtext);
				    lexiconposition[i].parentElement.children[0].innerText = "Oρισμοί του Strong";
				}
    		}
    	}
    });
}

function translateverse()
{
	try
	{
    	hebrewverse = document.getElementById("concTable");
    	var combine = "";
    	for(let i = 0; i<hebrewverse.children.length; i++)
    	{
    		combine = combine.concat("/./", hebrewverse.children[i].children[0].children[0].innerText);
    	}
    	translateverse2(combine, hebrewverse, 1);
    }
    catch(err){}
}

function in_screen()
{
    try
    {
        document.getElementById("appBarQN").textContent = language_setup().QuickNav.toString();
        document.getElementById("appBarQN_Resp").textContent = language_setup().QuickNav.toString();
    }
    catch(err){}
}

function addgreekverses()
{
    try
    {
        const text_verse = document.querySelectorAll('a[data-type="toolsHover"]');
        for(let i = 0; i<text_verse.length; i++)
        {
            try
            {
                const text_element = text_verse[i].parentElement.parentElement.parentElement.children[2];
                const text_with_strong_verse = text_element.lastChild.innerText;
                const new_translated_verse = document.createElement("h2");
                new_translated_verse.innerHTML = verses(text_verse[i].getAttribute("data-bible-id"));
                text_element.insertBefore(new_translated_verse,text_element.children[0]);
                hreftag = text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].href;
                hrefbook = hreftag.substring(hreftag.nthIndexOf('/',4)+1,hreftag.nthIndexOf('/',4)+4);
                hrefchapter = hreftag.substring(hreftag.nthIndexOf('/',5)+1,hreftag.nthIndexOf('/',6));
                hrefverse = hreftag.substring(hreftag.nthIndexOf('/',6)+1,hreftag.nthIndexOf('/',7));
                if(hrefbook == "gen")
                {
                    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().genesis_short.toString()+" "+hrefchapter+":"+hrefverse;
                }
                else if(hrefbook == "exo")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().exodus_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "lev")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().leviticus_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "num")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().numbers_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "deu")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().deuteronomy_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jos")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().joshua_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jdg")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().judges_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "rth")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().ruth_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1sa")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_samuel_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2sa")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_samuel_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1ki")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_kings_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2ki")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_kings_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1ch")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_chronicles_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2ch")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_chronicles_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "ezr")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().ezra_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "neh")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().nehemiah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "est")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().esther_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "job")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().job_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "psa")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().psalms_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "pro")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().proverbs_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "ecc")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().ecclesiastes_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "sng")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().song_of_songs_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "isa")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().isaiah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jer")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().jeremiah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "lam")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().lamentations_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "eze")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().ezekiel_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "dan")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().daniel_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "hos")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().hosea_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "joe")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().joel_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "amo")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().amos_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "oba")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().obadiah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jon")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().jonah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "mic")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().micah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "nah")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().nahum_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "hab")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().habakkuk_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "zep")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().zephaniah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "hag")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().haggai_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "zec")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().zechariah_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "mal")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().malachi_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "mat")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().matthew_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "mar")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().mark_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "luk")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().luke_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jhn")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().john_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "act")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().acts_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "rom")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().romans_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1co")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_corinthians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2co")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_corinthians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "gal")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().galatians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "eph")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().ephesians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "phl")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().philippians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "col")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().colossians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1th")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_thessalonians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2th")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_thessalonians_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1ti")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_timothy_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2ti")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_timothy_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "tit")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().titus_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "phm")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().philemon_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "heb")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().hebrews_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jas")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().james_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1pe")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_peter_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2pe")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_peter_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "1jo")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().one_john_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "2jo")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().two_john_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "3jo")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().three_john_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "jde")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().jude_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
				else if(hrefbook == "rev")
				{
				    text_verse[i].parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText = language_setup().revelation_short.toString()+" "+hrefchapter+":"+hrefverse;
				}
            }
            catch(err){}
        }
    }
    catch(err){}
}

function verses_screen()
{
    try
    {
        const current_url = window.location.href;
        current_book_index = current_url.nthIndexOf('/',4);
        current_book = current_url.substring(current_book_index+1,current_book_index+4);
        current_book_chapter_index = current_url.nthIndexOf('/',5);
        current_book_chapter = current_url.substring(current_book_chapter_index+1,current_url.nthIndexOf('/',6));
        if(current_url.substring(current_url.nthIndexOf('/',3)+1, current_url.nthIndexOf('/',3)+8) == "lexicon")
        {
        	setTimeout(function()
        	{
            	stringtemp = document.getElementsByClassName("lexStrongsDef")[0].children[0].textContent;
            	stringtemp = stringtemp.substring(1,stringtemp.length).replaceAll(";",",");
        		translateverse2(stringtemp,"",2);
			}, 2000);
        }
        if(current_book == "gen")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().genesis_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "exo")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().exodus_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "lev")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().leviticus_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "num")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().numbers_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "deu")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().deuteronomy_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jos")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().joshua_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jdg")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().judges_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "rth")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().ruth_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1sa")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_samuel_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2sa")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_samuel_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1ki")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_kings_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2ki")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_kings_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1ch")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_chronicles_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2ch")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_chronicles_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "ezr")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().ezra_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "neh")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().nehemiah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "est")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().esther_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "job")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().job_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "psa")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().psalms_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "pro")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().proverbs_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "ecc")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().ecclesiastes_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "sng")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().song_of_songs_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "isa")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().isaiah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jer")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().jeremiah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "lam")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().lamentations_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "eze")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().ezekiel_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "dan")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().daniel_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "hos")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().hosea_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "joe")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().joel_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "amo")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().amos_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "oba")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().obadiah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jon")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().jonah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "mic")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().micah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "nah")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().nahum_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "hab")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().habakkuk_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "zep")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().zephaniah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "hag")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().haggai_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "zec")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().zechariah_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "mal")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().malachi_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "mat")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().matthew_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "mar")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().mark_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "luk")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().luke_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jhn")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().john_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "act")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().acts_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "rom")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().romans_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1co")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_corinthians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2co")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_corinthians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "gal")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().galatians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "eph")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().ephesians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "phl")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().philippians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "col")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().colossians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1th")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_thessalonians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2th")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_thessalonians_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1ti")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_timothy_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2ti")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_timothy_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "tit")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().titus_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "phm")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().philemon_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "heb")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().hebrews_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jas")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().james_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1pe")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_peter_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2pe")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_peter_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "1jo")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().one_john_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "2jo")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().two_john_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "3jo")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().three_john_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "jde")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().jude_full.toString()+" "+current_book_chapter;
        }
        else if(current_book == "rev")
        {
            document.querySelectorAll('h1')[0].innerHTML =language_setup().revelation_full.toString()+" "+current_book_chapter;
        }
    }
    catch(err){console.log(err);}
    try
    {
        addgreekverses();
    }
    catch(err){}
    try
    {
        const tools_texts_two = document.querySelectorAll('a[data-type="toolsHover"]');
        for(let i = 0; i<tools_texts_two.length; i++)
        {
			const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if(isMobile)
            {
	            tools_texts_two[i].textContent = language_setup().tools_text_short.toString();
            }
            else
            {
            	tools_texts_two[i].textContent = language_setup().tools_text.toString();
            }
            tools_texts_two[i].onclick = function()
        	{
        		setTimeout(function()
        		{
        			translateverse();
        			translatetextindicator = document.getElementById("concData");
        			if(translatetextindicator.children[0].children[3].children[0].innerText.includes("Google Translate"))
        			{
        				console.log("");
        			}
        			else
        			{
	        			translatetextindicator.children[0].children[3].children[0].innerHTML = "<p>Google Translate</p><br>"+translatetextindicator.children[0].children[3].children[0].innerHTML;
	        		}
				}, 2000);
        	}
        }
    }
    catch(err){}
    try
    {
    	const tools_texts_three = document.querySelectorAll('a[data-type="toolsHover"]');
    	for(let i = 0; i<tools_texts_three.length; i++)
    	{
    		tools_texts_three[i].parentElement.parentElement.parentElement.children[1].children[0].onclick = function()
    		{
    			setTimeout(function()
        		{
        			translateverse();
        			translatetextindicator = document.getElementById("concData");
        			if(translatetextindicator.children[0].children[3].children[0].innerText.includes("Google Translate"))
        			{
        				console.log("");
        			}
        			else
        			{
	        			translatetextindicator.children[0].children[3].children[0].innerHTML = "<p>Google Translate</p><br>"+translatetextindicator.children[0].children[3].children[0].innerHTML;
	        		}
				}, 2000);
    		}
    	}
    }
    catch(err){}
}

function home_screen()
{
    try
    {
        document.getElementsByClassName("home-search__title")[0].textContent = language_setup().search_the_bible_title.toString();
    }
    catch(err){}
    try
    {
        document.getElementById("searchHelps01").firstElementChild.textContent = language_setup().Help.toString();
    }
    catch(err){}
    try
    {
        document.getElementById("searchHelps01_Resp").textContent = language_setup().Help.toString();
    }
    catch(err){}
    try
    {
        document.getElementById("ctxtQN").firstElementChild.textContent = language_setup().QuickNav.toString();
        document.getElementById("appBarQN_Resp").textContent = language_setup().QuickNav.toString();
    }
    catch(err){}
}

function change_back_button(text_to_put, new_old)
{
    try
    {
        if(new_old)
        {
            document.getElementsByClassName("qn-title ot-title")[1].innerHTML = text_to_put;
        }
        else
        {
            document.getElementsByClassName("qn-title nt-title")[1].innerHTML = text_to_put;
        }
    }
    catch(err){}
}

function create_back_button()
{
    try
    {
        const old_testament_title = document.getElementsByClassName("qn-title ot-title")[0];
        const create_translation_text_one = document.createElement("h2");
        const back_button = document.getElementsByClassName("back-btn")[0];
        back_button.textContent = language_setup().back_button_text.toString();
        back_button.after(create_translation_text_one);
        create_translation_text_one.innerHTML = '<br><br><a class="red" style="color:red;hover:text-decoration:none;font-size:1.875em;">('+language_setup().translate_button_text.toString()+')</a><br>';
        back_button.onclick = function()
        {
            old_testament_title.innerHTML = '<a class="red" style="color:red;hover:text-decoration:none;">('+language_setup().translate_button_text.toString()+')</a><br>Old Testament';
        }
        return create_translation_text_one;
    }
    catch(err)
    {
        return null;
    }
}

function menu_in()
{
    try
    {
        document.getElementById("appBarQN").onclick = function()
        {
            const old_testament_title = document.getElementsByClassName("qn-title ot-title")[0];
            old_testament_title.innerHTML = '<a class="red" style="color:red;hover:text-decoration:none;">('+language_setup().translate_button_text.toString()+')</a><br>Old Testament';
            old_testament_title.onclick = function()
            {
                menu_list();
            }
        }
        document.getElementById("appBarQN_Resp").onclick = function()
        {
            const old_testament_title = document.getElementsByClassName("qn-title ot-title")[0];
            old_testament_title.innerHTML = '<a class="red" style="color:red;hover:text-decoration:none;">('+language_setup().translate_button_text.toString()+')</a><br>Old Testament';
            old_testament_title.onclick = function()
            {
                menu_list();
            }
        }
    }
    catch(err){}
}

function menu()
{
    try
    {
        document.getElementById("ctxtQN").firstElementChild.onclick = function()
        {
            const old_testament_title = document.getElementsByClassName("qn-title ot-title")[0];
            old_testament_title.innerHTML = '<a class="red" style="color:red;hover:text-decoration:none;">('+language_setup().translate_button_text.toString()+')</a><br>Old Testament';
            old_testament_title.onclick = function()
            {
                menu_list();
            }
        }
        document.getElementById("appBarQN_Resp").onclick = function()
        {
            const old_testament_title = document.getElementsByClassName("qn-title ot-title")[0];
            old_testament_title.innerHTML = '<a class="red" style="color:red;hover:text-decoration:none;">('+language_setup().translate_button_text.toString()+')</a><br>Old Testament';
            old_testament_title.onclick = function()
            {
                menu_list();
            }
        }
    }
    catch(err){}
}

function menu_list()
{
    try
    {
        const old_testament_title = document.getElementsByClassName("qn-title ot-title")[0];
        const old_testament_list = document.getElementsByClassName("books-table ot-table")[0];
        const new_testament_title = document.getElementsByClassName("qn-title nt-title")[0];
        const new_testament_list = document.getElementsByClassName("books-table nt-table")[0];
        old_testament_title.innerHTML = language_setup().old_testament_title.toString();
        old_testament_list.children[0].textContent = language_setup().genesis_short.toString();
        old_testament_list.children[0].onclick = function()
        {
            book_title = language_setup().genesis_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[1].textContent = language_setup().exodus_short.toString();
        old_testament_list.children[1].onclick = function()
        {
            book_title = language_setup().exodus_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[2].textContent = language_setup().leviticus_short.toString();
        old_testament_list.children[2].onclick = function()
        {
            book_title = language_setup().leviticus_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[3].textContent = language_setup().numbers_short.toString();
        old_testament_list.children[3].onclick = function()
        {
            book_title = language_setup().numbers_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[4].textContent = language_setup().deuteronomy_short.toString();
        old_testament_list.children[4].onclick = function()
        {
            book_title = language_setup().deuteronomy_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[5].textContent = language_setup().joshua_short.toString();
        old_testament_list.children[5].onclick = function()
        {
            book_title = language_setup().joshua_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[6].textContent = language_setup().judges_short.toString();
        old_testament_list.children[6].onclick = function()
        {
            book_title = language_setup().judges_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[7].textContent = language_setup().ruth_short.toString();
        old_testament_list.children[7].onclick = function()
        {
            book_title = language_setup().ruth_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[8].textContent = language_setup().one_samuel_short.toString();
        old_testament_list.children[8].onclick = function()
        {
            book_title = language_setup().one_samuel_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[9].textContent = language_setup().two_samuel_short.toString();
        old_testament_list.children[9].onclick = function()
        {
            book_title = language_setup().two_samuel_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[10].textContent = language_setup().one_kings_short.toString();
        old_testament_list.children[10].onclick = function()
        {
            book_title = language_setup().one_kings_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[11].textContent = language_setup().two_kings_short.toString();
        old_testament_list.children[11].onclick = function()
        {
            book_title = language_setup().two_kings_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[12].textContent = language_setup().one_chronicles_short.toString();
        old_testament_list.children[12].onclick = function()
        {
            book_title = language_setup().one_chronicles_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[13].textContent = language_setup().two_chronicles_short.toString();
        old_testament_list.children[13].onclick = function()
        {
            book_title = language_setup().two_chronicles_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[14].textContent = language_setup().ezra_short.toString();
        old_testament_list.children[14].onclick = function()
        {
            book_title = language_setup().ezra_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[15].textContent = language_setup().nehemiah_short.toString();
        old_testament_list.children[15].onclick = function()
        {
            book_title = language_setup().nehemiah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[16].textContent = language_setup().esther_short.toString();
        old_testament_list.children[16].onclick = function()
        {
            book_title = language_setup().esther_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[17].textContent = language_setup().job_short.toString();
        old_testament_list.children[17].onclick = function()
        {
            book_title = language_setup().job_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[18].textContent = language_setup().psalms_short.toString();
        old_testament_list.children[18].onclick = function()
        {
            book_title = language_setup().psalms_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[19].textContent = language_setup().proverbs_short.toString();
        old_testament_list.children[19].onclick = function()
        {
            book_title = language_setup().proverbs_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[20].textContent = language_setup().ecclesiastes_short.toString();
        old_testament_list.children[20].onclick = function()
        {
            book_title = language_setup().ecclesiastes_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[21].textContent = language_setup().song_of_songs_short.toString();
        old_testament_list.children[21].onclick = function()
        {
            book_title = language_setup().song_of_songs_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[22].textContent = language_setup().isaiah_short.toString();
        old_testament_list.children[22].onclick = function()
        {
            book_title = language_setup().isaiah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[23].textContent = language_setup().jeremiah_short.toString();
        old_testament_list.children[23].onclick = function()
        {
            book_title = language_setup().jeremiah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[24].textContent = language_setup().lamentations_short.toString();
        old_testament_list.children[24].onclick = function()
        {
            book_title = language_setup().lamentations_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[25].textContent = language_setup().ezekiel_short.toString();
        old_testament_list.children[25].onclick = function()
        {
            book_title = language_setup().ezekiel_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[26].textContent = language_setup().daniel_short.toString();
        old_testament_list.children[26].onclick = function()
        {
            book_title = language_setup().daniel_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[27].textContent = language_setup().hosea_short.toString();
        old_testament_list.children[27].onclick = function()
        {
            book_title = language_setup().hosea_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[28].textContent = language_setup().joel_short.toString();
        old_testament_list.children[28].onclick = function()
        {
            book_title = language_setup().joel_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[29].textContent = language_setup().amos_short.toString();
        old_testament_list.children[29].onclick = function()
        {
            book_title = language_setup().amos_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[30].textContent = language_setup().obadiah_short.toString();
        old_testament_list.children[30].onclick = function()
        {
            book_title = language_setup().obadiah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[31].textContent = language_setup().jonah_short.toString();
        old_testament_list.children[31].onclick = function()
        {
            book_title = language_setup().jonah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[32].textContent = language_setup().micah_short.toString();
        old_testament_list.children[32].onclick = function()
        {
            book_title = language_setup().micah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[33].textContent = language_setup().nahum_short.toString();
        old_testament_list.children[33].onclick = function()
        {
            book_title = language_setup().nahum_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[34].textContent = language_setup().habakkuk_short.toString();
        old_testament_list.children[34].onclick = function()
        {
            book_title = language_setup().habakkuk_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[35].textContent = language_setup().zephaniah_short.toString();
        old_testament_list.children[35].onclick = function()
        {
            book_title = language_setup().zephaniah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[36].textContent = language_setup().haggai_short.toString();
        old_testament_list.children[36].onclick = function()
        {
            book_title = language_setup().haggai_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[37].textContent = language_setup().zechariah_short.toString();
        old_testament_list.children[37].onclick = function()
        {
            book_title = language_setup().zechariah_full.toString();
            book_new_old = true;
        }
        old_testament_list.children[38].textContent = language_setup().malachi_short.toString();
        old_testament_list.children[38].onclick = function()
        {
            book_title = language_setup().malachi_full.toString();
            book_new_old = true;
        }
        new_testament_title.innerHTML = language_setup().new_testament_title.toString();
        new_testament_list.children[0].textContent = language_setup().matthew_short.toString();
        new_testament_list.children[0].onclick = function()
        {
            book_title = language_setup().matthew_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[1].textContent = language_setup().mark_short.toString();
        new_testament_list.children[1].onclick = function()
        {
            book_title = language_setup().mark_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[2].textContent = language_setup().luke_short.toString();
        new_testament_list.children[2].onclick = function()
        {
            book_title = language_setup().luke_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[3].textContent = language_setup().john_short.toString();
        new_testament_list.children[3].onclick = function()
        {
            book_title = language_setup().john_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[4].textContent = language_setup().acts_short.toString();
        new_testament_list.children[4].onclick = function()
        {
            book_title = language_setup().acts_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[5].textContent = language_setup().romans_short.toString();
        new_testament_list.children[5].onclick = function()
        {
            book_title = language_setup().romans_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[6].textContent = language_setup().one_corinthians_short.toString();
        new_testament_list.children[6].onclick = function()
        {
            book_title = language_setup().one_corinthians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[7].textContent = language_setup().two_corinthians_short.toString();
        new_testament_list.children[7].onclick = function()
        {
            book_title = language_setup().two_corinthians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[8].textContent = language_setup().galatians_short.toString();
        new_testament_list.children[8].onclick = function()
        {
            book_title = language_setup().galatians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[9].textContent = language_setup().ephesians_short.toString();
        new_testament_list.children[9].onclick = function()
        {
            book_title = language_setup().ephesians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[10].textContent = language_setup().philippians_short.toString();
        new_testament_list.children[10].onclick = function()
        {
            book_title = language_setup().philippians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[11].textContent = language_setup().colossians_short.toString();
        new_testament_list.children[11].onclick = function()
        {
            book_title = language_setup().colossians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[12].textContent = language_setup().one_thessalonians_short.toString();
        new_testament_list.children[12].onclick = function()
        {
            book_title = language_setup().one_thessalonians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[13].textContent = language_setup().two_thessalonians_short.toString();
        new_testament_list.children[13].onclick = function()
        {
            book_title = language_setup().two_thessalonians_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[14].textContent = language_setup().one_timothy_short.toString();
        new_testament_list.children[14].onclick = function()
        {
            book_title = language_setup().one_timothy_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[15].textContent = language_setup().two_timothy_short.toString();
        new_testament_list.children[15].onclick = function()
        {
            book_title = language_setup().two_timothy_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[16].textContent = language_setup().titus_short.toString();
        new_testament_list.children[16].onclick = function()
        {
            book_title = language_setup().titus_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[17].textContent = language_setup().philemon_short.toString();
        new_testament_list.children[17].onclick = function()
        {
            book_title = language_setup().philemon_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[18].textContent = language_setup().hebrews_short.toString();
        new_testament_list.children[18].onclick = function()
        {
            book_title = language_setup().hebrews_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[19].textContent = language_setup().james_short.toString();
        new_testament_list.children[19].onclick = function()
        {
            book_title = language_setup().james_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[20].textContent = language_setup().one_peter_short.toString();
        new_testament_list.children[20].onclick = function()
        {
            book_title = language_setup().one_peter_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[21].textContent = language_setup().two_peter_short.toString();
        new_testament_list.children[21].onclick = function()
        {
            book_title = language_setup().two_peter_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[22].textContent = language_setup().one_john_short.toString();
        new_testament_list.children[22].onclick = function()
        {
            book_title = language_setup().one_john_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[23].textContent = language_setup().two_john_short.toString();
        new_testament_list.children[23].onclick = function()
        {
            book_title = language_setup().two_john_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[24].textContent = language_setup().three_john_short.toString();
        new_testament_list.children[24].onclick = function()
        {
            book_title = language_setup().three_john_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[25].textContent = language_setup().jude_short.toString();
        new_testament_list.children[25].onclick = function()
        {
            book_title = language_setup().jude_full.toString();
            book_new_old = false;
        }
        new_testament_list.children[26].textContent = language_setup().revelation_short.toString();
        new_testament_list.children[26].onclick = function()
        {
            book_title = language_setup().revelation_full.toString();
            book_new_old = false;
        }
        create_translation_text_one.onclick = function()
        {
            change_back_button(book_title, book_new_old);
        }
    }
    catch(err){}
}
