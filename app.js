(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // })
})();


(function () {
    emailjs.init("QdV7ifPIcdSwZm0sj");
  })();

  function sendemail(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var number = document.getElementById("number").value;

    var templateParams = {
      email: email,
      to_name: name,
      message: message,
      subject: subject,
      number: number,
    };

    emailjs
      .send("service_3kc2hco", "template_xrnvt8t", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        window.alert("Sent successfully!");

        // Reset the form fields
        document.getElementById("contactForm").reset();
      })
      .catch(function (error) {
        console.log("FAILED...", error);
        window.alert("Failed to send email. Please try again.");
      });
  }
