var url 
var submit = document.getElementById("submit")

clear.addEventListener("click", clearing);
submit.addEventListener("click", submiting);


function myFunction() {
  url = 'http://198.46.160.246:7777/api/infer'  
  var customcheckbox = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < customcheckbox.length; i++) {
    if (customcheckbox[i].checked) {
      txt = txt + customcheckbox[i].value;
    }
  }
  // document.getElementById("order").value = url +txt;
  url = url + txt
  console.log("The link is " + url)
  return url;
}

function submiting(){
	console.log("dah masuk" + url)
	var proxyUrl = 'https://cors-anywhere.herokuapp.com/', targetUrl = url
			fetch(proxyUrl + targetUrl)
  			.then(blob => blob.json())
		    .then(data => {
		    console.table(data);
		    document.getElementById("demo").innerHTML = "<br> Here are the list of the restaurant <br>" + JSON.stringify(data.results, null, 2);
		    return data;
		  })
		  .catch(e => {
		    console.log(e);
		    return e;
		  });
}



