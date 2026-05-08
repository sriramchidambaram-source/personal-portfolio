function readMore() {
    let btn = document.getElementById("more");
    let el = document.getElementById("dev-more");
            if (el.style.display === "none"){
                el.style.display = "block";
                btn.innerHTML = "Show Less";
            } else {
                el.style.display = "none";
                btn.innerHTML = "Read More";
            }
}