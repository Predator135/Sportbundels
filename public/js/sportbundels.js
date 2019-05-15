$(document).ready(function(){ 

    $( "#van" ).datetimepicker({
        step: 15,
        dateFormat:'Y-m-d', 
        timeFormat:'h:m'
    });

    $( "#tot" ).datetimepicker({
        step: 15,
        dateFormat:'Y-m-d', 
        timeFormat:'h:m'
    });
    
    $('#crtbtn').click(function(){
        
        var titel = document.getElementById("titel").value;
        var omschrijving = document.getElementById("omschrijving").value;
        var van = document.getElementById("van").value;
        var tot = document.getElementById("tot").value;

        if(titel === ""){
            alert("Voer een titel in");
        }
        if(omschrijving === ""){
            alert("Voer een omschrijving in");
        }
        if(van === ""){
            alert("Voer een begin datum in");
        }
        if(tot === ""){
            alert("Voer een eind datum in");
        }
        else{     

            var table = document.getElementById("table");

            var tr = document.createElement("tr");

            var td_titel = document.createElement("td");
            var td_omschrijving = document.createElement("td");
            var td_van = document.createElement("td");
            var td_tot = document.createElement("td");
            var td_checkbox = document.createElement("td");
            td_checkbox.classList.add("checkbx");

            var text_titel = document.createTextNode(titel);
            var text_omschrijving = document.createTextNode(omschrijving);
            var text_van = document.createTextNode(van);
            var text_tot = document.createTextNode(tot);
            var text_checkbox = document.createElement("input");
            text_checkbox.setAttribute("type", "checkbox");

            td_titel.appendChild(text_titel);
            td_omschrijving.appendChild(text_omschrijving);
            td_van.appendChild(text_van);
            td_tot.appendChild(text_tot);
            td_checkbox.appendChild(text_checkbox);

            tr.appendChild(td_checkbox);
            tr.appendChild(td_titel);
            tr.appendChild(td_omschrijving);
            tr.appendChild(td_van);
            tr.appendChild(td_tot);
            

            $("#table tbody").append(tr);
            
            //console.log($data_g);
            
            document.getElementById("titel").value = "";
            omschrijving = document.getElementById("omschrijving").value = "";
            document.getElementById("van").value = "";
            document.getElementById("tot").value = "";
        }
    });

    $('#checkb').click(function(){

        var x = document.getElementById("table").childNodes;
        var count = x[0].nextSibling.children.length - 1;
        var newAr = [];

        if(count>2){

            for(i=1; 2>=i; i++){

                var titel = x[0].nextSibling.children[i].childNodes[3].textContent;
                var omschrijving = x[0].nextSibling.children[i].childNodes[5].textContent;
                var van = x[0].nextSibling.children[i].childNodes[7].textContent;
                var tot = x[0].nextSibling.children[i].childNodes[9].textContent;
                var boxval = x[0].nextElementSibling.children[i].children[0].children[0].checked;

                //Calculatie Van-tijd naar Google standaard
                var vY = van.slice(0,4);
                var vM = van.slice(5,7); 
                var vD = van.slice(8,10); 
                var vT = van.slice(11); 

                //Calculatie Tot-tijd naar Google standaard
                var tY = tot.slice(0,4);
                var tM = tot.slice(5,7); 
                var tD = tot.slice(8,10); 
                var tT = tot.slice(11); 

                var van_corrected = vY + "-" + vM + "-" + vD + "T" + vT + ":00+01:00";
                var tot_corrected = tY + "-" + tM + "-" + tD + "T" + tT + ":00+01:00";

                var entry = { "title": titel , "omschrijving": omschrijving , "van": van_corrected , "tot": tot_corrected};
                if(boxval === true){
                    newAr.push(entry);
                }
            }

            for(i=3; count>=i; i++){
                var titel = x[0].nextSibling.children[i].childNodes[1].textContent;
                var omschrijving = x[0].nextSibling.children[i].childNodes[2].textContent;
                var van = x[0].nextSibling.children[i].childNodes[3].textContent;
                var tot = x[0].nextSibling.children[i].childNodes[4].textContent;
                var boxval = x[0].nextElementSibling.children[i].children[0].children[0].checked;

                //Calculatie Van-tijd naar Google standaard
                var vY = van.slice(0,4);
                var vM = van.slice(5,7); 
                var vD = van.slice(8,10); 
                var vT = van.slice(11); 

                //Calculatie Tot-tijd naar Google standaard
                var tY = tot.slice(0,4);
                var tM = tot.slice(5,7); 
                var tD = tot.slice(8,10); 
                var tT = tot.slice(11); 

                var van_corrected = vY + "-" + vM + "-" + vD + "T" + vT + ":00+01:00";
                var tot_corrected = tY + "-" + tM + "-" + tD + "T" + tT + ":00+01:00";

                var entry = { "title": titel , "omschrijving": omschrijving , "van": van_corrected , "tot": tot_corrected};
                if(boxval === true){
                    newAr.push(entry);
                }
                }   

            }
        else{

            for(i=1; 2>=i; i++){

                var titel = x[0].nextSibling.children[i].childNodes[3].textContent;
                var omschrijving = x[0].nextSibling.children[i].childNodes[5].textContent;
                var van = x[0].nextSibling.children[i].childNodes[7].textContent;
                var tot = x[0].nextSibling.children[i].childNodes[9].textContent;
                var boxval = x[0].nextElementSibling.children[i].children[0].children[0].checked;

                //Calculatie Van-tijd naar Google standaard
                var vY = van.slice(0,4);
                var vM = van.slice(5,7); 
                var vD = van.slice(8,10); 
                var vT = van.slice(11); 

                //Calculatie Tot-tijd naar Google standaard
                var tY = tot.slice(0,4);
                var tM = tot.slice(5,7); 
                var tD = tot.slice(8,10); 
                var tT = tot.slice(11); 

                var van_corrected = vY + "-" + vM + "-" + vD + "T" + vT + ":00+01:00";
                var tot_corrected = tY + "-" + tM + "-" + tD + "T" + tT + ":00+01:00";

                var entry = { "title": titel , "omschrijving": omschrijving , "van": van_corrected , "tot": tot_corrected};
                if(boxval === true){
                    newAr.push(entry);
                }
            }
        }
        //console.log(newAr);

        $.post('store', {newAr}, aftermath)

        function aftermath(data){
            console.log(data);
            alert(data);
        }
    });
        
    $('#selb').click(function(){

        var clas = document.getElementsByClassName('checkbx');

        for(i=0; i<clas.length; i+1){
        clas[i].classList.remove("checkbx");
        }

    });

    $('#syncb').click(function(){
        $.get('check', aftermath)

        function aftermath(data){
            console.log(data);
            if(data === "no val"){
                window.location.href = window.location.href + "cal";
            }
        }
        //console.log(window.location.href);
    });

    $('#mainch').click(function(){
        var x = document.getElementById("table").childNodes;
        var count = x[1].children.length-1;
        
        for(i=1; i<=count; i++){
            x[1].children[i].children[0].children[0].checked = true;
        }
    });
});