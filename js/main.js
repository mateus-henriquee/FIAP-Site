document.getElementById("scrollDownBtn").addEventListener("click", function () {
    const allDivs = document.querySelectorAll("div");
    const lastDiv = allDivs[allDivs.length - 1];
    lastDiv.scrollIntoView({ behavior: "smooth" });
});