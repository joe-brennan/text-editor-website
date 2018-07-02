function pageLoad(){

  var table = document.getElementById("table")
  for (i=0; i<22; i++){
    var row = table.insertRow(i);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = i+1;

    if (i == 0){
      cell2.className="homepage";
      cell2.innerHTML = "&lt;homepage/&gt;";
      cell2.setAttribute("href", "http://www.microsoft.com")
    }

    if (i == 3){

      var bracket1 = document.createTextNode("<");
      var span1 = document.createElement('span');
      span1.className="firstAndLast";
      span1.appendChild(bracket1);
      cell2.appendChild(span1);

      var span2 = document.createElement("span2");
      var link = document.createTextNode("google");
      span2.className="google";
      span2.appendChild(link );
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }

    if (i == 5){

      var bracket1 = document.createTextNode("<");
      var span1 = document.createElement('span');
      span1.className="firstAndLast";
      span1.appendChild(bracket1);
      cell2.appendChild(span1);

      var span2 = document.createElement("span2");
      var link = document.createTextNode("reddit");
      span2.className="reddit";
      span2.appendChild(link );
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }

    if (i == 7){

      var bracket1 = document.createTextNode("<");
      var span1 = document.createElement('span');
      span1.className="firstAndLast";
      span1.appendChild(bracket1);
      cell2.appendChild(span1);

      var span2 = document.createElement("span2");
      var link = document.createTextNode("email");
      span2.className="email";
      span2.appendChild(link );
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }

    if (i == 9){

      var bracket1 = document.createTextNode("<");
      var span1 = document.createElement('span');
      span1.className="firstAndLast";
      span1.appendChild(bracket1);
      cell2.appendChild(span1);

      var span2 = document.createElement("span2");
      var link = document.createTextNode("reddit");
      span2.className="reddit";
      span2.appendChild(link );
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }

    if (i == 11){

      var bracket1 = document.createTextNode("<");
      var span1 = document.createElement('span');
      span1.className="firstAndLast";
      span1.appendChild(bracket1);
      cell2.appendChild(span1);

      var span2 = document.createElement("span2");
      var link = document.createTextNode("music");
      span2.className="music";
      span2.appendChild(link );
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }

    if (i == 13){

      var bracket1 = document.createTextNode("<");
      var span1 = document.createElement('span');
      span1.className="firstAndLast";
      span1.appendChild(bracket1);
      cell2.appendChild(span1);

      var span2 = document.createElement("span2");
      var link = document.createTextNode("kent moodle");
      span2.className="kent";
      span2.appendChild(link );
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }


  }
  //var tds = document.getElementsByTagName('td');

//   for(var i = 0; tds[i]; i++) {
//     if(tds[i].innerHTML == '1'){
//       tds[i].
//     }
//     if(tds[i].innerHTML == '5') tds[i].innerHTML = '';
// }
}

/**
    <a href="https://www.google.co.uk/"><h2 class="google">google</h2></a>
    <a href="https://www.reddit.com/"><h2 class="reddit">reddit</h2></a>
    <a href="https://mail.google.com/mail/u/0/?tab=im#inbox"><h2 class="email">email</h2></a>
    <a href="https://www.youtube.com/"><h2 class="youtube">youtube</h2></a>
    <a href="https://www.last.fm/user/GzzoMUHXHUxCBH"><h2 class="music">music</h2></a>
    <a href="https://moodle.kent.ac.uk/2017/my/"><h2 class="kent">kent moodle</h2></a>
    **/
