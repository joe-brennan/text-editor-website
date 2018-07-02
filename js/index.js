function pageLoad(){

  var table = document.getElementById("table")
  for (i=0; i<20; i++){
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
      span2.innerHTML += "<a class='google' href='https://www.google.co.uk/'>google</a>"
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
      span2.innerHTML += "<a class='reddit' href='https://www.reddit.com'>reddit</a>"
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
      span2.innerHTML += "<a class='email' href='https://mail.google.com/'>email</a>"
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
      span2.innerHTML += "<a class='youtube' href='https://www.youtube.com/'>youtube</a>"
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
      span2.innerHTML += "<a class='music' href='https://www.last.fm/user/GzzoMUHXHUxCBH'>music</a>"
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
      span2.innerHTML += "<a class='kent' href='https://moodle.kent.ac.uk/2017/my/'>kent moodle</a>"
      cell2.appendChild(span2);

      var bracket2 = document.createTextNode("/>");
      var span3 = document.createElement('span3');
      span3.className="firstAndLast";
      span3.appendChild(bracket2);
      cell2.appendChild(span3);
    }
  }
}
