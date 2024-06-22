
const images = document.querySelectorAll('.gallery img');
let currentImage = 0;

setInterval(() => {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}, 3000);

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  // Add code to send the form data to your email or a database
});


const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  section.addEventListener('mouseenter', () => {
    section.classList.add('active');
  });
  section.addEventListener('mouseleave', () => {
    section.classList.remove('active');
  });
});


const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Add code to validate the form inputs and send the form data to an email address or a database
});

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Form validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Send form data to email address or database
  // Replace with your own email sending or database logic
  alert('Form submitted successfully!');
});


const loadingElement = document.querySelector('.loading');

form.addEventListener('submit', (e) => {
  // ...

  // Display loading animation
  loadingElement.style.display = 'block';

  // Send form data to email address or database
  // Replace with your own email sending or database logic

  // Hide loading animation
  loadingElement.style.display = 'none';
});


const resultElement = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  // ...

  // Send form data to email address or database
  // Replace with your own email sending or database logic

  if (/* form submission successful */) {
    resultElement.classList.add('success');
    resultElement.innerText = 'Form submitted successfully!';
  } else {
    resultElement.classList.add('error');
    resultElement.innerText = 'Form submission failed. Please try again.';
  }

  resultElement.style.display = 'block';
});

if (/* form submission successful */) {
  // ...

  // Reset the form
  form.reset();
}

const countdownElement = document.querySelector('.countdown');

const eventType = 'Launch'; // Replace with your event type
const eventDate = 'February 27, 2025 12:00:00 GMT-0500'; // Replace with your event date

const countdown = () => {
  const eventDateTime = new Date(eventDate).getTime();
  const currentDateTime = new Date().getTime();
  const timeRemaining = eventDateTime - currentDateTime;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const countdownText = `${eventType} in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

  countdownElement.innerText = countdownText;
};
setInterval(countdown, 1000);


const modalElement = document.querySelector('.modal');

const showModal = () => {
  modalElement.style.display = 'block';
};

const hideModal = () => {
  modalElement.style.display = 'none';
};

// Replace with your specific element
const infoButton = document.querySelector('#info-button');

infoButton.addEventListener('click', showModal);


const notificationElement = document.querySelector('.notification');

const showNotification = (message) => {
  notificationElement.innerText = message;
  notificationElement.style.display = 'block';
  setTimeout(hideNotification, 3000); // Hide notification after 3 seconds
};

const hideNotification = () => {
  notificationElement.style.display = 'none';
};

// Example usage:
showNotification('Welcome to our website!');

const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales',
      data: [100, 200, 300, 400, 500],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.(link unavailable)', {
  attribution: '&copy; <a href="(link unavailable)">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

const blogPosts = [
  {
    title: "Post 1",
    excerpt: "This is a summary of post 1.",
    link: "#"
  },
  {
    title: "Post 2",
    excerpt: "This is a summary of post 2.",
    link: "#"
  },
  {
    title: "Post 3",
    excerpt: "This is a summary of post 3.",
    link: "#"
  }
];

const blogPostList = document.getElementById("blog-posts");

blogPosts.forEach((post) => {
  const listItem = document.createElement("li");
  const title = document.createElement("h2");
  const excerpt = document.createElement("p");
  const link = document.createElement("a");

  title.textContent = post.title;
  excerpt.textContent = post.excerpt;
  link.textContent = "Read more";
  link.href = post.link;

  listItem.appendChild(title);
  listItem.appendChild(excerpt);
  listItem.appendChild(link);

  blogPostList.appendChild(listItem);
});

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchQuery = searchInput.value.toLowerCase();
  // Add code to search for the query and display the results
});

const faqs = [
  {
    question: "What is the return policy?",
    answer: "Returns are accepted within 30 days.",
    link: "#return-policy"
  },
  {
    question: "How do I track my order?",
    answer: "Use our order tracking tool.",
    link: "#order-tracking"
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept Visa, Mastercard, and PayPal.",
    link: null
  }
];

const faqList = document.getElementById("faqs").querySelector("ul");

faqs.forEach((faq) => {
  const faqListItem = document.createElement("li");
  const question = document.createElement("h3");
  const answer = document.createElement("p");
  const link = faq.link ? document.createElement("a") : null;

  question.textContent = faq.question;
  answer.textContent = faq.answer;
  if (link) {
    link.textContent = "Learn more";
    link.href = faq.link;
    answer.appendChild(link);
  }

  faqListItem.appendChild(question);
  faqListItem.appendChild(answer);
  faqList.appendChild(faqListItem);
});


const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  // Add code to send the form data to your email or a database
});


const socialMediaLinks = [
  {
    icon: "fa-facebook",
    link: "(link unavailable)"
  },
  {
    icon: "fa-twitter",
    link: "(link unavailable)"
  },
  {
    icon: "fa-instagram",
    link: "(link unavailable)"
  },
  {
    icon: "fa-linkedin",
    link: "(link unavailable)"
  }
];

const socialMediaList = document.getElementById("social-media").querySelector("ul");

socialMediaLinks.forEach((link) => {
  const socialMediaListItem = document.createElement("li");
  const icon = document.createElement("i");
  const linkElement = document.createElement("a");

  icon.className = link.icon;
  linkElement.href = link.link;
  linkElement.textContent = link.link;

  socialMediaListItem.appendChild(icon);
  socialMediaListItem.appendChild(linkElement);
  socialMediaList.appendChild(socialMediaListItem);
});
const newsletterSignupForm = document.getElementById("newsletter-signup");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  // Add code to send the email address to your newsletter list
});

const socialMediaLinks = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/levas.kamwajo.7"
  },
  {
    icon: "fa-twitter",
    link: "https://www.twitter.com/yourprofile"
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/yourprofile"
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/yourprofile"
  }
];

const socialMediaList = document.getElementById("social-media").querySelector("ul");

socialMediaLinks.forEach((link) => {
  const socialMediaListItem = document.createElement("li");
  const icon = document.createElement("i");
  const linkElement = document.createElement("a");

  icon.className = link.icon;
  linkElement.href = link.link;
  linkElement.textContent = link.link;

  socialMediaListItem.appendChild(icon);
  socialMediaListItem.appendChild(linkElement);
  socialMediaList.appendChild(socialMediaListItem);
});

const recentPosts = [
  {
    title: "Post 1",
    excerpt: "This is a summary of post 1.",
    link: "#"
  },
  {
    title: "Post 2",
    excerpt: "This is a summary of post 2.",
    link: "#"
  },
  {
    title: "Post 3",
    excerpt: "This is a summary of post 3.",
    link: "#"
  }
];

const recentPostsList = document.getElementById("recent-posts").querySelector("ul");

recentPosts.forEach((post) => {
  const postListItem = document.createElement("li");
  const title = document.createElement("h3");
  const excerpt = document.createElement("p");
  const link = document.createElement("a");

  title.textContent = post.title;
  excerpt.textContent = post.excerpt;
  link.textContent = "Read more";
  link.href = post.link;

  postListItem.appendChild(title);
  postListItem.appendChild(excerpt);
  postListItem.appendChild(link);
  recentPostsList.appendChild(postListItem);
});

const categories = [
  {
    name: "Category 1",
    link: "#"
  },
  {
    name: "Category 2",
    link: "#"
  },
  {
    name: "Category 3",
    link: "#"
  }
];

const categoriesList = document.getElementById("categories").querySelector("ul");

categories.forEach((category) => {
  const categoryListItem = document.createElement("li");
  const categoryName = document.createElement("a");

  categoryName.textContent = category.name;
  categoryName.href = category.link;

  categoryListItem.appendChild(categoryName);
  categoriesList.appendChild(categoryListItem);
});

const tags = [
  {
    name: "Tag 1",
    link: "#"
  },
  {
    name: "Tag 2",
    link: "#"
  },
  {
    name: "Tag 3",
    link: "#"
  }
];

const tagsList = document.getElementById("tags").querySelector("ul");

tags.forEach((tag) => {
  const tagListItem = document.createElement("li");
  const tagName = document.createElement("a");

  tagName.textContent = tag.name;
  tagName.href = tag.link;

  tagListItem.appendChild(tagName);
  tagsList.appendChild(tagListItem);
});

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  // Add code to search for the term and display the results
});

const relatedPosts = [
  {
    title: "Post 1",
    excerpt: "This is a summary of post 1.",
    link: "#"
  },
  {
    title: "Post 2",
    excerpt: "This is a summary of post 2.",
    link: "#"
  },
  {
    title: "Post 3",
    excerpt: "This is a summary of post 3.",
    link: "#"
  }
];

const relatedPostsList = document.getElementById("related-posts").querySelector("ul");

relatedPosts.forEach((post) => {
  const postListItem = document.createElement("li");
  const title = document.createElement("h3");
  const excerpt = document.createElement("p");
  const link = document.createElement("a");

  title.textContent = post.title;
  excerpt.textContent = post.excerpt;
  link.textContent = "Read more";
  link.href = post.link;

  postListItem.appendChild(title);
  postListItem.appendChild(excerpt);
  postListItem.appendChild(link);
  relatedPostsList.appendChild(postListItem);
});

const authorBio = {
  name: "Author Name",
  image: "#",
  description: "This is a description of the author."
};

const authorImage = document.getElementById("author-bio").querySelector("img");
const authorDescription = document.getElementById("author-description");

authorImage.src = authorBio.image;
authorDescription.textContent = authorBio.description;


const popularPosts = [
  {
    title: "Post 1",
    excerpt: "This is a summary of post 1.",
    link: "#"
  },
  {
    title: "Post 2",
    excerpt: "This is a summary of post 2.",
    link: "#"
  },
  {
    title: "Post 3",
    excerpt: "This is a summary of post 3.",
    link: "#"
  }
];

const popularPostsList = document.getElementById("popular-posts").querySelector("ul");

popularPosts.forEach((post) => {
  const postListItem = document.createElement("li");
  const title = document.createElement("h3");
  const excerpt = document.createElement("p");
  const link = document.createElement("a");

  title.textContent = post.title;
  excerpt.textContent = post.excerpt;
  link.textContent = "Read more";
  link.href = post.link;

  postListItem.appendChild(title);
  postListItem.appendChild(excerpt);
  postListItem.appendChild(link);
  popularPostsList.appendChild(postListItem);
});

const recentComments = [
  {
    text: "This is a comment.",
    author: "Author Name"
  },
  {
    text: "This is another comment.",
    author: "Another Author"
  },
  {
    text: "This is yet another comment.",
    author: "Yet Another Author"
  }
];

const recentCommentsList = document.getElementById("recent-comments").querySelector("ul");

recentComments.forEach((comment) => {
  const commentListItem = document.createElement("li");
  const commentText = document.createElement("p");
  const commentAuthor = document.createElement("p");

  commentText.textContent = comment.text;
  commentAuthor.textContent = comment.author;

  commentListItem.appendChild(commentText);
  commentListItem.appendChild(commentAuthor);
  recentCommentsList.appendChild(commentListItem);
});


const relatedCategories = [
  {
    name: "Category 1",
    link: "#"
  },
  {
    name: "Category 2",
    link: "#"
  },
  {
    name: "Category 3",
    link: "#"
  }
];

const relatedCategoriesList = document.getElementById("related-categories").querySelector("ul");

relatedCategories.forEach((category) => {
  const categoryListItem = document.createElement("li");
  const categoryLink = document.createElement("a");

  categoryLink.textContent = category.name;
  categoryLink.href = category.link;

  categoryListItem.appendChild(categoryLink);
  relatedCategoriesList.appendChild(categoryListItem);
});



const socialMediaProfiles = [
  {
    name: "Facebook",
    link: "#"
  },
  {
    name: "Twitter",
    link: "#"
  },
  {
    name: "Instagram",
    link: "#"
  }
];

const socialMediaProfilesList = document.getElementById("social-media-profiles").querySelector("ul");

socialMediaProfiles.forEach((profile) => {
  const profileListItem = document.createElement("li");
  const profileLink = document.createElement("a");

  profileLink.textContent = profile.name;
  profileLink.href = profile.link;

  profileListItem.appendChild(profileLink);
  socialMediaProfilesList.appendChild(profileListItem);
});

const upcomingEvents = [
  {
    name: "Event 1",
    date: "2024-07-01",
    link: "#"
  },
  {
    name: "Event 2",
    date: "2024-07-15",
    link: "#"
  },
  {
    name: "Event 3",
    date: "2024-08-01",
    link: "#"
  }
];

const upcomingEventsList = document.getElementById("upcoming-events").querySelector("ul");

upcomingEvents.forEach((event) => {
  const eventListItem = document.createElement("li");
  const eventLink = document.createElement("a");
  const eventDate = document.createElement("p");

  eventLink.textContent = event.name;
  eventLink.href = event.link;
  eventDate.textContent = event.date;

  eventListItem.appendChild(eventLink);
  eventListItem.appendChild(eventDate);
  upcomingEventsList.appendChild(eventListItem);
});

const featuredProducts = [
  {
    name: "Product 1",
    image: "#",
    link: "#"
  },
  {
    name: "Product 2",
    image: "#",
    link: "#"
  },
  {
    name: "Product 3",
    image: "#",
    link: "#"
  }
];

const featuredProductsList = document.getElementById("featured-products").querySelector("ul");

featuredProducts.forEach((product) => {
  const productListItem = document.createElement("li");
  const productLink = document.createElement("a");
  const productImage = document.createElement("img");
  const productName = document.createElement("p");

  productLink.href = product.link;
  productImage.src = product.image;
  productName.textContent = product.name;

  productListItem.appendChild(productImage);
  productListItem.appendChild(productName);
  productListItem.appendChild(productLink);
  featuredProductsList.appendChild(productListItem);
});


const testimonials = [
  {
    quote: "This is a great product!",
    author: "John Doe",
    company: "ABC Corporation"
  },
  {
    quote: "I love this product!",
    author: "Jane Smith",
    company: "XYZ Inc."
  },
  {
    quote: "This product is amazing!",
    author: "Bob Johnson",
    company: "123 Enterprises"
  }
];

const testimonialsList = document.getElementById("testimonials").querySelector("ul");

testimonials.forEach((testimonial) => {
  const testimonialListItem = document.createElement("li");
  const quote = document.createElement("p");
  const author = document.createElement("p");
  const company = document.createElement("p");

  quote.textContent = testimonial.quote;
  author.textContent = testimonial.author;
  company.textContent = testimonial.company;

  testimonialListItem.appendChild(quote);
  testimonialListItem.appendChild(author);
  testimonialListItem.appendChild(company);
  testimonialsList.appendChild(testimonialListItem);
});

const faqs = [
  {
    question: "What is this product?",
    answer: "This is a great product!",
    link: "#"
  },
  {
    question: "How does it work?",
    answer: "It works great!",
    link: "#"
  },
  {
    question: "Is it easy to use?",
    answer: "Yes, it's very easy to use!",
    link: "#"
  }
];

const faqsList = document.getElementById("faqs").querySelector("ul");

faqs.forEach((faq) => {
  const faqListItem = document.createElement("li");
  const question = document.createElement("p");
  const answer = document.createElement("p");
  const link = document.createElement("a");

  question.textContent = faq.question;
  answer.textContent = faq.answer;
  link.textContent = "Learn more";
  link.href = faq.link;

  faqListItem.appendChild(question);
  faqListItem.appendChild(answer);
  faqListItem.appendChild(link);
  faqsList.appendChild(faqListItem);
});


const teamMembers = [
  {
    name: "John Doe",
    title: "CEO",
    image: "johndoe.jpg",
    bio: "John is the CEO of our company."
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager",
    image: "image2.jpg",
    bio: "Jane is our Marketing Manager."
  },
  {
    name: "Bob Johnson",
    title: "Sales Manager",
    image: "logo.jpg",
    bio: "Bob is our Sales Manager."
  }
];

const teamMembersList = document.getElementById("team-members").querySelector("ul");

teamMembers.forEach((teamMember) => {
  const teamMemberListItem = document.createElement("li");
  const image = document.createElement("img");
  const name = document.createElement("h3");
  const title = document.createElement("p");
  const bio = document.createElement("p");

  image.src = teamMember.image;
  name.textContent = teamMember.name;
  title.textContent = teamMember.title;
  bio.textContent = teamMember.bio;

  teamMemberListItem.appendChild(image);
  teamMemberListItem.appendChild(name);
  teamMemberListItem.appendChild(title);
  teamMemberListItem.appendChild(bio);
  teamMembersList.appendChild(teamMemberListItem);
});

const services = [
  {
    icon: "fa fa-design",
    title: "Graphic Design",
    description: "We offer graphic design services."
  },
  {
    icon: "fa fa-code",
    title: "Web Development",
    description: "We offer web development services."
  },
  {
    icon: "fa fa-camera",
    title: "Photography",
    description: "We offer photography services."
  }
];

const servicesList = document.getElementById("services").querySelector("ul");

services.forEach((service) => {
  const serviceListItem = document.createElement("li");
  const icon = document.createElement("i");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  icon.className = service.icon;
  title.textContent = service.title;
  description.textContent = service.description;

  serviceListItem.appendChild(icon);
  serviceListItem.appendChild(title);
  serviceListItem.appendChild(description);
  servicesList.appendChild(serviceListItem);
});


const testimonials = [
  {
    quote: "Great service!",
    name: "John Doe",
    company: "ABC Corporation"
  },
  {
    quote: "Excellent work!",
    name: "Jane Smith",
    company: "XYZ Inc."
  },
  {
    quote: "Professional and reliable.",
    name: "Bob Johnson",
    company: "123 Enterprises"
  }
];

const testimonialsList = document.getElementById("testimonials").querySelector("ul");

testimonials.forEach((testimonial) => {
  const testimonialListItem = document.createElement("li");
  const quote = document.createElement("p");
  const name = document.createElement("p");
  const company = document.createElement("p");

  quote.textContent = testimonial.quote;
  name.textContent = testimonial.name;
  company.textContent = testimonial.company;

  testimonialListItem.appendChild(quote);
  testimonialListItem.appendChild(name);
  testimonialListItem.appendChild(company);
  testimonialsList.appendChild(testimonialListItem);
});



const awards = [
  {
    name: "Best Business Award",
    year: "2020",
    description: "Awarded for outstanding business performance."
  },
  {
    name: "Innovation Award",
    year: "2019",
    description: "Awarded for innovative solutions in the industry."
  },
  {
    name: "Customer Service Award",
    year: "2018",
    description: "Awarded for excellent customer service."
  }
];

const awardsList = document.getElementById("awards").querySelector("ul");

awards.forEach((award) => {
  const awardListItem = document.createElement("li");
  const name = document.createElement("p");
  const year = document.createElement("p");
  const description = document.createElement("p");

  name.textContent = award.name;
  year.textContent = award.year;
  description.textContent = award.description;

  awardListItem.appendChild(name);
  awardListItem.appendChild(year);
  awardListItem.appendChild(description);
  awardsList.appendChild(awardListItem);
});