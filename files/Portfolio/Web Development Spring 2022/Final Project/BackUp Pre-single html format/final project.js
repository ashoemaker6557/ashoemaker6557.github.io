function filter() {
//filters all other Table based on user input vs 1st column data
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function sortTable(n) {
//Sorts Weapon Table in ascending/descending order Alphabetically.
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function sortTableNum(n) {
  //Sorts Weapon Table in ascending/descending order Numerically
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (isNaN(x.innerHTML)) {
        x.innerHTML = "";
      }
      if (isNaN(y.innerHTML)) {
        y.innerHTML = "";
      }
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  let nodeList = document.querySelectorAll(".grey");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = "N/A";
  }
}

function filterSpace() {
  //dropdown function for weapon size
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterSpace2() {
  //dropdown function for ammo
  document.getElementById("myDropdown2").classList.toggle("show");
}

function filterCheckbox() {
  //filters all data based on small, medium, or large?
  const checkboxArray = document.querySelectorAll("input[type='radio']");
  var input, input2, filter, filter2, table, tr, td, td2, i, txtValue, txtValue2;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  if (checkboxArray[0].checked == true) {
    if (checkboxArray[3].checked == true || checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
      if (checkboxArray[3].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[3];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[4].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[4];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[5].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[5];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[6].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[6];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[7].checked == true) {
        input = checkboxArray[0];
        input2 = checkboxArray[7];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[0];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  if (checkboxArray[1].checked == true) {
    if (checkboxArray[3].checked == true || checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
      if (checkboxArray[3].checked == true) {
        input = checkboxArray[1];
        input2 = checkboxArray[3];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[4].checked == true) {
        input = checkboxArray[1];
        input2 = checkboxArray[4];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[5].checked == true) {
        input = checkboxArray[1];
        input2 = checkboxArray[5];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[6].checked == true) {
        input = checkboxArray[1];
        input2 = checkboxArray[6];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[7].checked == true) {
        input = checkboxArray[1];
        input2 = checkboxArray[7];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[1];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }  
  if (checkboxArray[2].checked == true) {
    if (checkboxArray[3].checked == true || checkboxArray[4].checked == true || checkboxArray[5].checked == true || checkboxArray[6].checked == true || checkboxArray[7].checked == true) {
      if (checkboxArray[3].checked == true) {
        input = checkboxArray[2];
        input2 = checkboxArray[3];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[4].checked == true) {
        input = checkboxArray[2];
        input2 = checkboxArray[4];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[5].checked == true) {
        input = checkboxArray[2];
        input2 = checkboxArray[5];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[6].checked == true) {
        input = checkboxArray[2];
        input2 = checkboxArray[6];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[7].checked == true) {
        input = checkboxArray[2];
        input2 = checkboxArray[7];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue2.toUpperCase().indexOf(filter2) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[2];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }  
}

function filterCheckbox2() {
  //filters all data based on ammo type
  const checkboxArray = document.querySelectorAll("input[type='radio']");
  var input, input2, filter, filter2, table, tr, td, td2, i, txtValue, txtValue2;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  if (checkboxArray[3].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
      if (checkboxArray[0].checked == true) {
        input = checkboxArray[3];
        input2 = checkboxArray[0];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[1].checked == true) {
        input = checkboxArray[3];
        input2 = checkboxArray[1];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[2].checked == true) {
        input = checkboxArray[3];
        input2 = checkboxArray[2];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[3];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  if (checkboxArray[4].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
      if (checkboxArray[0].checked == true) {
        input = checkboxArray[4];
        input2 = checkboxArray[0];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[1].checked == true) {
        input = checkboxArray[4];
        input2 = checkboxArray[1];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[2].checked == true) {
        input = checkboxArray[4];
        input2 = checkboxArray[2];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[4];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  if (checkboxArray[5].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
      if (checkboxArray[0].checked == true) {
        input = checkboxArray[5];
        input2 = checkboxArray[0];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[1].checked == true) {
        input = checkboxArray[5];
        input2 = checkboxArray[1];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[2].checked == true) {
        input = checkboxArray[5];
        input2 = checkboxArray[2];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[5];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  if (checkboxArray[6].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
      if (checkboxArray[0].checked == true) {
        input = checkboxArray[6];
        input2 = checkboxArray[0];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[1].checked == true) {
        input = checkboxArray[6];
        input2 = checkboxArray[1];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[2].checked == true) {
        input = checkboxArray[6];
        input2 = checkboxArray[2];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[6];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  if (checkboxArray[7].checked == true) {
    if (checkboxArray[0].checked == true || checkboxArray[1].checked == true || checkboxArray[2].checked == true) {
      if (checkboxArray[0].checked == true) {
        input = checkboxArray[7];
        input2 = checkboxArray[0];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[1].checked == true) {
        input = checkboxArray[7];
        input2 = checkboxArray[1];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
      if (checkboxArray[2].checked == true) {
        input = checkboxArray[7];
        input2 = checkboxArray[2];
        filter = input.value.toUpperCase();
        filter2 = input2.value.toUpperCase(); 
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        td2 = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter2) > -1 && txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      }
    } else {
      input = checkboxArray[7];
      filter = input.value.toUpperCase();
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
}
