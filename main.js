var listItems = document.getElementById("our-list").getElementsByTagName("li")
var listItems2 = document.getElementById("our-list2").getElementsByTagName("li")
var anjing
var url = 'http://198.46.160.246:7777/api/infer'
var clear = document.getElementById("clear")
var submit = document.getElementById("submit")

clear.addEventListener("click", clearing);
submit.addEventListener("click", submiting);

for (var i = 0; i< listItems.length; i++) {
	listItems[i].addEventListener("click", activateItem);
}

for (var i = 0; i< listItems2.length; i++) {	
		listItems2[0].addEventListener("click", less);
	 	listItems2[1].addEventListener("click", between);
	 	listItems2[2].addEventListener("click", more);
	 	
}


function activateItem(){	
	anjing = this.innerHTML;	
	console.log(this.innerHTML);
	url = url + "/" +anjing;
	console.log(url);
}

function less() {
	url = url + "/10";
	console.log(url)
}

function between() {
	url = url + "/30";
	console.log(url)
}

function more() {
	url = url + "/55";
	console.log(url)
}

function clearing(){
	url = 'http://198.46.160.246:7777/api/infer'
}

function submiting(){
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



