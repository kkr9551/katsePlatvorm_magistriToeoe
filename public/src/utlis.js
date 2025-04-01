function downloadCSV(csv, filename) {
    //var csvFile;
    //var downloadLink;

    //retrieve csv file from experiment
    const csvFile = new Blob([csv], {type: 'text/csv'});

    //download link
    const downloadLink = document.createElement("a");

    //retrieve file name
    downloadLink.download = filename;

    //create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    //hide download link
    downloadLink.style.display = 'none';

    //add the link to the DOM
    document.body.appendChild(downloadLink);

    downloadLink.click();
}