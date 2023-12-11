document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var indexNumber = document.getElementById("searchInput").value;
    // Redirect to the student.html page with the index number as a query parameter
    window.location.href = "student.html?index=" + indexNumber;

      
  });
  