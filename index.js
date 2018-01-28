function download_books() {

    let tdNodes = document.getElementsByClassName("adbl-library-item-title");
    
    let titles = [];
    
    for (let td of tdNodes) {
        titles.push(td.childNodes[1].innerText);
    }
    
    let encodedTitles = titles.map(title => encodeURIComponent(title));

    // let csvContent = "data:text/csv;charset=utf-8,";
    // titleArray.forEach(function(rowArray){let titleNodes = document.getElementsByClassName("adbl-library-item-title");

    // let csvContent = "data:text/csv;charset=utf-8,";
    // titleArray.forEach(function(rowArray){
    //    let row = rowArray.join(",");
    //    csvContent += row + "\r\n";
    // });

    // var link = document.createElement("a");
    // link.setAttribute("href", encodedUri);
    // link.setAttribute("download", "my_data.csv");
    // document.body.appendChild(link);
    
    // link.click()
    //    let row = rowArray.join(",");
    //    csvContent += row + "\r\n";
    // });

}
