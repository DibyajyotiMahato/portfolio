
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.25,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show-section");
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
