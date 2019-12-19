var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var experience = document.getElementById("experience");

      about.onclick = function() {
        var modal = document.getElementById("modal-about");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
          modal.style.display = "none";
        }
      }
      portfolio.onclick = function() {
        var modal = document.getElementById("modal-portfolio");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[1];
        span.onclick = function() {
          modal.style.display = "none";
        }
      }
      contact.onclick = function() {
        var modal = document.getElementById("modal-contact");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[2];
        span.onclick = function() {
          modal.style.display = "none";
        }
      }
      experience.onclick = function() {
        var modal = document.getElementById("modal-experience");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[3];
        span.onclick = function() {
          modal.style.display = "none";
        }
      }      