function calculateDifference() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    if (!startDate || !endDate || startDate > endDate) {
        document.getElementById('result').innerHTML = 'Please enter valid dates.';
        return;
    }

    var timeDifference = endDate.getTime() - startDate.getTime();
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerHTML = 'The difference is ' + daysDifference + ' days.';
}
