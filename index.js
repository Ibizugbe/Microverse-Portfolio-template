const menuOpen = document.querySelector('.bi-list');
const containerNav = document.querySelector('.container-nav');
const menuClose = document.querySelector('.close-hamb');
const navList = document.querySelector('.nav-list');
const about = document.querySelectorAll('.mobile-nav-links');

menuOpen.addEventListener('click', () => {
  containerNav.style.display = 'flex';
  navList.style.display = 'none';
});

menuClose.addEventListener('click', () => {
  containerNav.style.display = 'none';
  navList.style.display = 'flex';
});

about.forEach((n) => {
  n.addEventListener('click', () => {
    containerNav.style.display = 'none';
    navList.style.display = 'flex';
  });
});

// popup window
const projects = [
  {
    name: 'Tonic',
    featuredImg: 'Assets/other-images/1st-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-1.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://ibizugbe.github.io/My-Portfolio/',
    sourceCode: 'https://github.com/Ibizugbe/My-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'Assets/other-images/2nd-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-2.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://ibizugbe.github.io/My-Portfolio/',
    sourceCode: 'https://github.com/Ibizugbe/My-Portfolio',
  },

  {
    name: 'Tonic',
    featuredImg: 'Assets/other-images/3rd-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-3.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://ibizugbe.github.io/My-Portfolio/',
    sourceCode: 'https://github.com/Ibizugbe/My-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'Assets/other-images/4th-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-4.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://ibizugbe.github.io/My-Portfolio/',
    sourceCode: 'https://github.com/Ibizugbe/My-Portfolio',
  },
];

projects.forEach((element, i) => {
  // create all elements used for card
  const projectContainer = document.querySelector('#projects');
  const projectDiv = document.createElement('div');
  const projectImageDiv = document.createElement('div');
  const projectContentDiv = document.createElement('div');
  const projectImageWeb = document.createElement('img');
  const projectImageMobile = document.createElement('img');
  const countImage = document.createElement('img');
  const countImage2 = document.createElement('img');
  const canopyText = document.createElement('h3');
  const backText = document.createElement('h3');
  const yearText = document.createElement('h3');
  const projectHeader = document.createElement('h2');
  const projectBody = document.createElement('div');
  const projectDescription = document.createElement('div');
  const pDescription = document.createElement('p');
  const languageUl = document.createElement('ul');
  const projectBtn = document.createElement('button');

  // initialise elements
  // card image
  projectImageWeb.src = element.featuredImg;
  projectImageWeb.classList.add('project-image-web');
  projectImageWeb.alt = 'project-image';
  projectImageMobile.src = element.featuredImgMobile;
  projectImageMobile.classList.add('first-project-image');
  projectImageMobile.alt = 'First-project';
  // cardheader
  projectHeader.classList.add('project-heading');
  projectHeader.innerText = element.name;
  // stact text
  canopyText.innerText = 'canopy';
  canopyText.classList.add('content-text', 'canopy');
  countImage.src = './Assets/vectors/Counter.svg';
  countImage.classList.add('count-vector');
  backText.innerText = 'Back end dev';
  backText.classList.add('content-text');
  countImage2.src = './Assets/vectors/Counter.svg';
  countImage2.classList.add('count-vector');
  yearText.innerText = '2018';
  yearText.classList.add('content-text');
  pDescription.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required';
  languageUl.classList.add('languages');
  // place elements in document
  projectDiv.classList.add('project');
  projectDiv.append(projectImageDiv, projectContentDiv);
  projectImageDiv.classList.add('project-image');
  projectImageDiv.append(projectImageMobile, projectImageWeb);
  projectContentDiv.classList.add('project-content');
  projectContentDiv.append(projectHeader, projectBody);
  projectBody.classList.add('project-body');
  projectBody.append(projectDescription, pDescription, languageUl, projectBtn);
  projectDescription.classList.add('description');
  projectDescription.append(
    canopyText,
    countImage,
    backText,
    countImage2,
    yearText,
  );

  projects[i].technologies.forEach((tech, n) => {
    const languageLi = document.createElement('li');
    languageLi.classList.add('language-used');
    languageUl.append(languageLi);
    languageLi.innerText = projects[i].technologies[n];
  });

  projectContainer.appendChild(projectDiv);

  projectBtn.classList.add('btn', 'project-link');
  projectBtn.innerText = 'see project';
  // reverse  card
  if (i % 2 !== 0) {
    projectDiv.classList.add('card-reverse');
  }
});

// Menu PopUP
const modalContainer = document.querySelector('.modal-container');
const modal = document.createElement('div');
modalContainer.append(modal);
modal.classList.add('modal');

modal.innerHTML = `
<div class="modal-header">
    <h4 class="modal-heading">Tonic</h4>
    <h4 class="modal-close">&times;</h4>
</div>
<div class="small-description">
  <p class="canopy modal-describe">CANOPY</p>
  <img
    src="./Assets/vectors/Counter.svg"
    class="count-vector"
    alt="null"
  />
  <p class="modal-describe">BACK END DEV</p>
  <img
    src="./Assets/vectors/Counter.svg"
    class="count-vector"
    alt="null"
  />
  <p class="modal-describe">2015</p>
</div>
<img
  src="./Assets/other-images/Modal-Snapshoot-Portfolio.png"
  class="modal-img"
  alt=""
/>
<div class="modal-content">
  <p class="modal-texts">
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy
  </p>
  <div class="modal-contact">
    <ul class="languages modal-ul">
      <li class="language-used modal-li">HTML</li>
      <li class="language-used modal-li">CSS</li>
      <li class="language-used modal-li">Bootstrap</li>
      <li class="language-used modal-li">gitHub</li>
      <li class="language-used modal-li">Ruby</li>
      <li class="language-used modal-li">javaScript</li>
    </ul>
    <hr class="modal-hr" />
    <a href="https://ibizugbe.github.io/My-Portfolio/">
      <button class="btn modal-btn" type="submit">
        See live
        <img
          src="./Assets/vectors/git-modalicon.svg"
          class="modal-vectors"
          alt="git"
        />
      </button>
    </a>
    <a href="https://github.com/Ibizugbe/My-Portfolio">
      <button class="btn modal-btn" type="submit">
        See Source
        <img
          src="./Assets/vectors/source-code-icon.svg"
          class="modal-vectors"
          alt="source-code"
        />
      </button>
    </a>
  </div>
</div>
`;

const modalBtnPop = document.querySelectorAll('.project-link');
const closeButton = document.querySelector('.modal-close');
// eventlistener to open modal
modalBtnPop.forEach((n) => {
  n.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
  });
});

// listen for close
closeButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});


// form validation
const contactForm = document.querySelector('#contact-form');
const contactEmail = document.querySelector('#contact-email');
const errorHolder = document.querySelector('.error');
contactForm.addEventListener('submit', (e) => {
  let message = contactEmail.value;
  let messageList = message.replace(/[^a-zA-Z]/g, '').split('');
  for (let i = 0; i < messageList.length; (i = i + 1);) {
    if (messageList[i] === messageList[i].toUpperCase()) {
      errorHolder.innerText = 'Error: emails must be written with lowercase characters.';
      e.preventDefault();
    }
  }
});
