/* =========================================================
   WEDDING INVITATION
   MAIN JAVASCRIPT
========================================================= */

/* =========================================================
   WEDDING CONFIGURATION
========================================================= */

const WEDDING = {
  couple: {
    groom: "Abdelrahman",
    bride: "Menna",
  },
  music: {
    file: "assets/wedding-music.mp3",

    autoplay: true,
  },
  date: {
    day: "08",
    month: "OCTOBER",
    year: "2026",
    dayName: "Thursday",
    time: "7:00 PM",
    countdown: "2026-10-08T19:00:00",
  },

  ceremony: {
    time: "7:00 PM",
    description: "The celebration begins",
  },

  knot: {
    time: "7:30 PM",
    description: "We say “I do” and begin forever",
  },

  celebration: {
    time: "UNTIL LATE",
    description: "Dinner, dancing & beautiful memories",
  },

  location: {
    venue: "Grand Hayat Hall",
    city: "Helwan, Cairo Governorate, Egypt",

    mapsUrl: "https://maps.app.goo.gl/4y2tpC6CAPcMr5GL6",

    embedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2221.641309219969!2d31.317358475545877!3d29.83849397502801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUwJzE4LjYiTiAzMcKwMTknMTEuOCJF!5e1!3m2!1sen!2seg!4v1789921793672!5m2!1sen!2seg"
     
  },

  gallery: [
    {
      src: "assets/photo1.jpg",
      caption: "A beautiful beginning",
    },
    {
      src: "assets/photo2.jpg",
      caption: "Moments together",
    },
    {
      src: "assets/photo3.jpg",
      caption: "Forever memories",
    },
  ],

  book: {
    title: "Guest Book",
    smallTitle: "OUR",
    introduction:
      "Leave us a little piece of your heart and a beautiful memory to keep forever.",

    greeting: "Dear Abdelrahman & Menna,",

    emptyMessage:
      "Leave us a beautiful message to make our guest book complete. ❤️",

    emptyName: "— Your message",

    openButton: "OPEN OUR BOOK",
    closeButton: "CLOSE BOOK",
    writeButton: "❧ WRITE IN OUR BOOK",
  },
};
const themes = {

    sage: {

        name:
            "Sage & Cream",

        colors: [
            "#FAF7EF",
            "#F3EEE3",
            "#858666",
            "#C99C4D"
        ],

        variables: {

            "--background":
                "#FAF7EF",

            "--background-secondary":
                "#F3EEE3",

            "--background-accent":
                "#EBE3D2",

            "--primary":
                "#858666",

            "--primary-dark":
                "#666747",

            "--accent":
                "#C99C4D",

            "--accent-soft":
                "#E1C48B",

            "--text":
                "#38372F",

            "--text-light":
                "#77736A",

            "--card":
                "#FFFDF8",

            "--border":
                "#DDD1BA",

            "--script":
                "#C47F68"

        }

    },


    rose: {

        name:
            "Dusty Rose",

        colors: [
            "#FBF5F3",
            "#F0DFDB",
            "#A97879",
            "#C89D59"
        ],

        variables: {

            "--background":
                "#FBF5F3",

            "--background-secondary":
                "#F0DFDB",

            "--background-accent":
                "#E9D2CD",

            "--primary":
                "#A97879",

            "--primary-dark":
                "#794F51",

            "--accent":
                "#C89D59",

            "--accent-soft":
                "#E0C28A",

            "--text":
                "#403638",

            "--text-light":
                "#7A7072",

            "--card":
                "#FFFDFC",

            "--border":
                "#E0CCCA",

            "--script":
                "#B86F70"

        }

    },


    champagne: {

        name:
            "Champagne",

        colors: [
            "#FCF8EE",
            "#F1E6D1",
            "#A88B51",
            "#C49A50"
        ],

        variables: {

            "--background":
                "#FCF8EE",

            "--background-secondary":
                "#F1E6D1",

            "--background-accent":
                "#E6D6B8",

            "--primary":
                "#A88B51",

            "--primary-dark":
                "#70572F",

            "--accent":
                "#C49A50",

            "--accent-soft":
                "#E0C389",

            "--text":
                "#40382D",

            "--text-light":
                "#777064",

            "--card":
                "#FFFDF8",

            "--border":
                "#DDD0B6",

            "--script":
                "#B68B5C"

        }

    },


    dustyBlue: {

        name:
            "Dusty Blue",

        colors: [
            "#F5F7F6",
            "#E3EBEC",
            "#78949A",
            "#C8A66A"
        ],

        variables: {

            "--background":
                "#F5F7F6",

            "--background-secondary":
                "#E3EBEC",

            "--background-accent":
                "#D5E1E3",

            "--primary":
                "#78949A",

            "--primary-dark":
                "#506E74",

            "--accent":
                "#C8A66A",

            "--accent-soft":
                "#DEC58E",

            "--text":
                "#354145",

            "--text-light":
                "#6F7C80",

            "--card":
                "#FFFFFF",

            "--border":
                "#D0DDDE",

            "--script":
                "#AE7A70"

        }

    },


    lavender: {

        name:
            "Lavender",

        colors: [
            "#F9F6FA",
            "#EAE2EF",
            "#947EA2",
            "#C7A56A"
        ],

        variables: {

            "--background":
                "#F9F6FA",

            "--background-secondary":
                "#EAE2EF",

            "--background-accent":
                "#DED2E7",

            "--primary":
                "#947EA2",

            "--primary-dark":
                "#68516F",

            "--accent":
                "#C7A56A",

            "--accent-soft":
                "#DFC590",

            "--text":
                "#403943",

            "--text-light":
                "#77717C",

            "--card":
                "#FFFFFF",

            "--border":
                "#DDD2E3",

            "--script":
                "#AD7B7C"

        }

    },


    terracotta: {

        name:
            "Terracotta",

        colors: [
            "#FBF4EB",
            "#EDDDCF",
            "#A9684E",
            "#C49B5E"
        ],

        variables: {

            "--background":
                "#FBF4EB",

            "--background-secondary":
                "#EDDDCF",

            "--background-accent":
                "#E4C9B3",

            "--primary":
                "#A9684E",

            "--primary-dark":
                "#784634",

            "--accent":
                "#C49B5E",

            "--accent-soft":
                "#DFC28A",

            "--text":
                "#483A34",

            "--text-light":
                "#7B6E67",

            "--card":
                "#FFFDF9",

            "--border":
                "#DECABE",

            "--script":
                "#B66F55"

        }

    },


    dark: {

        name:
            "Dark & Gold",

        colors: [
            "#1D1D1A",
            "#292923",
            "#C5A55F",
            "#C47F68"
        ],

        variables: {

            "--background":
                "#1D1D1A",

            "--background-secondary":
                "#282820",

            "--background-accent":
                "#302E25",

            "--primary":
                "#858666",

            "--primary-dark":
                "#656542",

            "--accent":
                "#C5A55F",

            "--accent-soft":
                "#DFC789",

            "--text":
                "#F5F1E7",

            "--text-light":
                "#BDB9AE",

            "--card":
                "#292923",

            "--border":
                "#464438",

            "--script":
                "#D09278"

        }

    },


    olive: {

        name:
            "Olive & Sand",

        colors: [
            "#F8F4E9",
            "#EAE1CE",
            "#7F805D",
            "#C49D61"
        ],

        variables: {

            "--background":
                "#F8F4E9",

            "--background-secondary":
                "#EAE1CE",

            "--background-accent":
                "#DDD2B7",

            "--primary":
                "#7F805D",

            "--primary-dark":
                "#5B5B40",

            "--accent":
                "#C49D61",

            "--accent-soft":
                "#DDC38B",

            "--text":
                "#414134",

            "--text-light":
                "#777663",

            "--card":
                "#FFFDF7",

            "--border":
                "#DAD1BC",

            "--script":
                "#AE7A64"

        }

    }

};
/* =========================================================
   SUPABASE CONFIGURATION
========================================================= */

/*
   Replace these with your own Supabase project values.

   IMPORTANT:
   Use the ANON/PUBLISHABLE key in frontend code.
   NEVER put your service_role key here.
*/

const SUPABASE_URL = "https://zeirvgpdliuxuxzmywsg.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_KxaPvyYPh-GNjNq6NYpbGw_bGAB7vMc";

let supabaseClient = null;

/* =========================================================
   INITIALIZE SUPABASE
========================================================= */

if (
  typeof window.supabase !== "undefined" &&
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes("YOUR-PROJECT")
) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
  );
} else {
  console.warn(
    "Supabase is not configured. RSVP and Guest Book database features are disabled.",
  );
}

/* =========================================================
   DOM HELPERS
========================================================= */

function getElement(id) {
  return document.getElementById(id);
}

/* =========================================================
   APPLY WEDDING DATA
========================================================= */

function applyWeddingData() {
  const groomElements = document.querySelectorAll("[data-groom]");

  const brideElements = document.querySelectorAll("[data-bride]");

  const coupleElements = document.querySelectorAll("[data-couple]");

  const dayElements = document.getElementById("heroDay");

  const monthElements = document.querySelectorAll("[data-month]");

  const yearElements = document.querySelectorAll("[data-year]");

  const dayNameElements = document.getElementById("heroDayName");

  const timeElements = document.querySelectorAll("[data-time]");

  const venueElements = document.getElementById("venueName");

  const cityElements = document.querySelectorAll("[data-city]");

  groomElements.forEach(element => {
    element.textContent = WEDDING.couple.groom;
  });

  brideElements.forEach(element => {
    element.textContent = WEDDING.couple.bride;
  });

  coupleElements.forEach(element => {
    element.textContent = `${WEDDING.couple.groom} & ${WEDDING.couple.bride}`;
  });

  dayElements.textContent = WEDDING.date.day;
  

  monthElements.forEach(element => {
    element.textContent = WEDDING.date.month;
  });

  yearElements.forEach(element => {
    element.textContent = WEDDING.date.year;
  });

  dayNameElements.textContent = WEDDING.date.dayName;
  
  timeElements.forEach(element => {
    element.textContent = WEDDING.date.time;
  });

  venueElements.textContent = WEDDING.location.venue;

  cityElements.forEach(element => {
    element.textContent = WEDDING.location.city;
  });

  const ceremonyTime = document.querySelectorAll("[data-ceremony-time]");

  ceremonyTime.forEach(element => {
    element.textContent = WEDDING.ceremony.time;
  });

  const ceremonyDescription = document.querySelectorAll(
    "[data-ceremony-description]",
  );

  ceremonyDescription.forEach(element => {
    element.textContent = WEDDING.ceremony.description;
  });

  const knotTime = document.querySelectorAll("[data-knot-time]");

  knotTime.forEach(element => {
    element.textContent = WEDDING.knot.time;
  });

  const knotDescription = document.querySelectorAll("[data-knot-description]");

  knotDescription.forEach(element => {
    element.textContent = WEDDING.knot.description;
  });

  const celebrationTime = document.querySelectorAll("[data-celebration-time]");

  celebrationTime.forEach(element => {
    element.textContent = WEDDING.celebration.time;
  });

  const celebrationDescription = document.querySelectorAll(
    "[data-celebration-description]",
  );

  celebrationDescription.forEach(element => {
    element.textContent = WEDDING.celebration.description;
  });

  const mapsLinks = document.querySelectorAll("#mapButton");

  mapsLinks.forEach(element => {
    element.href = WEDDING.location.mapsUrl;

    element.target = "_blank";

    element.rel = "noopener noreferrer";
  });

  const mapFrames = document.querySelectorAll("#mapFrame");

  mapFrames.forEach(element => {
    element.src = WEDDING.location.embedUrl;
  });
}

/* =========================================================
   COUNTDOWN
========================================================= */

const countdownDays = getElement("days");

const countdownHours = getElement("hours");

const countdownMinutes = getElement("minutes");

const countdownSeconds = getElement("seconds");

function updateCountdown() {
  const weddingDate = new Date(WEDDING.date.countdown).getTime();

  const now = new Date().getTime();

  const difference = weddingDate - now;

  if (difference <= 0) {
    if (countdownDays) {
      countdownDays.textContent = "00";
    }

    if (countdownHours) {
      countdownHours.textContent = "00";
    }

    if (countdownMinutes) {
      countdownMinutes.textContent = "00";
    }

    if (countdownSeconds) {
      countdownSeconds.textContent = "00";
    }

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (countdownDays) {
    countdownDays.textContent = String(days).padStart(2, "0");
  }

  if (countdownHours) {
    countdownHours.textContent = String(hours).padStart(2, "0");
  }

  if (countdownMinutes) {
    countdownMinutes.textContent = String(minutes).padStart(2, "0");
  }

  if (countdownSeconds) {
    countdownSeconds.textContent = String(seconds).padStart(2, "0");
  }
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* =========================================================
   RSVP MODAL
========================================================= */

const rsvpModal = getElement("rsvpModal");

const rsvpForm = getElement("rsvpForm");

const closeRSVPButton = getElement("closeRSVP");

function showRSVP() {
  if (!rsvpModal) {
    return;
  }

  rsvpModal.classList.add("show");

  document.body.classList.add("modal-open");
}

function closeRSVP() {
  if (!rsvpModal) {
    return;
  }

  rsvpModal.classList.remove("show");

  document.body.classList.remove("modal-open");
}

if (closeRSVPButton) {
  closeRSVPButton.addEventListener("click", function (event) {
    event.preventDefault();

    closeRSVP();
  });
}

/*
   Close when clicking outside
   the modal content.
*/

if (rsvpModal) {
  rsvpModal.addEventListener("click", function (event) {
    if (event.target === rsvpModal) {
      closeRSVP();
    }
  });
}

/*
   ESC closes modal
*/

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeRSVP();
  }
});

/* =========================================================
   RSVP FORM
========================================================= */

if (rsvpForm) {
  rsvpForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const inputs = rsvpForm.querySelectorAll("input, select, textarea");

    const nameInput = getElement("guestName") || inputs[0];

    const guestsInput = getElement("guestNumber") || inputs[1];

    const attendanceInput = getElement("attendance") || inputs[2];

    const messageInput = getElement("guestMessage") || inputs[3];

    const name = nameInput ? nameInput.value.trim() : "";

    const guests = guestsInput ? guestsInput.value.trim() : "";

    const attendance = attendanceInput ? attendanceInput.value : "";

    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !attendance || !guests || !message) {
      alert("Please fill in all fields ❤️");

      return;
    }

    const guestNumber = Number(guests);

    if (!Number.isInteger(guestNumber) || guestNumber < 1 || guestNumber > 20) {
      alert("Please enter a valid number of guests.");

      return;
    }

    const submitButton = rsvpForm.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.disabled = true;

      submitButton.textContent = "SENDING...";
    }

    try {
      if (!supabaseClient) {
        throw new Error("Supabase is not configured.");
      }

      const { error } = await supabaseClient.from("wedding_messagesss").insert({
        name: name,

        attendance: attendance,

        guests: guestNumber,

        message: message,
      });

      if (error) {
        throw error;
      }

      alert(
        "Thank you! Your message has been added to our invitation book. ❤️",
      );

      rsvpForm.reset();

      closeRSVP();

      await loadGuestMessages();
    } catch (error) {
      console.error("Supabase RSVP error:", error);

      alert("Sorry, we couldn't save your RSVP. Please try again. ❤️");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;

        submitButton.textContent = "SEND RSVP";
      }
    }
  });
}

/* =========================================================
   REAL WEDDING INVITATION BOOK
========================================================= */

const realBook = getElement("realBook");

const bookCover = getElement("bookCover");

const bookToggleButton = getElement("bookToggleButton");

const bookPages = getElement("bookPages");

const leftPage = getElement("leftPage");

const rightPage = getElement("rightPage");

const leftMessage = getElement("leftMessage");

const rightMessage = getElement("rightMessage");

const leftName = getElement("leftName");

const rightName = getElement("rightName");

const leftDate = getElement("leftDate");

const rightDate = getElement("rightDate");

const previousPage = getElement("previousPage");

const nextPage = getElement("nextPage");

const currentPage = getElement("currentPage");

const totalPages = getElement("totalPages");

const closeBookButton = getElement("closeBookButton");

const bookCloseControl = getElement("bookCloseControl");

/* =========================================================
   BOOK STATE
========================================================= */

let guestBookMessages = [];

let bookIndex = 0;

let bookIsOpen = false;

let bookIsTurning = false;

/* =========================================================
   DATE FORMAT
========================================================= */

function formatBookDate(date) {
  if (!date) {
    return "07 • 10 • 2026";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "07 • 10 • 2026";
  }

  return parsedDate.toLocaleDateString("en-GB");
}

/* =========================================================
   BOOK CONTROLS
========================================================= */

function updateBookControls() {
  const total = Math.max(1, guestBookMessages.length);

  if (currentPage) {
    currentPage.textContent = Math.min(bookIndex + 1, total);
  }

  if (totalPages) {
    totalPages.textContent = total;
  }

  if (previousPage) {
    previousPage.disabled = bookIndex <= 0;
  }

  if (nextPage) {
    nextPage.disabled = bookIndex + 2 >= guestBookMessages.length;
  }
}

/* =========================================================
   UPDATE BOOK CONTENT
========================================================= */

function updateBookPages() {
  const left = guestBookMessages[bookIndex];

  const right = guestBookMessages[bookIndex + 1];

  /* LEFT PAGE */

  if (leftMessage) {
    leftMessage.textContent = left?.message || WEDDING.book.emptyMessage;
  }

  if (leftName) {
    leftName.textContent = left
      ? `— ${left.name || "Guest"}`
      : "— " + WEDDING.couple.groom + " & " + WEDDING.couple.bride;
  }

  if (leftDate) {
    leftDate.textContent = formatBookDate(left?.created_at);
  }

  /* RIGHT PAGE */

  if (rightMessage) {
    rightMessage.textContent = right?.message || WEDDING.book.emptyMessage;
  }

  if (rightName) {
    rightName.textContent = right
      ? `— ${right.name || "Guest"}`
      : WEDDING.book.emptyName;
  }

  if (rightDate) {
    rightDate.textContent = formatBookDate(right?.created_at);
  }

  updateBookControls();
}

/* =========================================================
   OPEN BOOK
========================================================= */

function openBook() {
  if (!realBook || !bookCover || bookIsOpen) {
    return;
  }

  console.log("OPEN BOOK CLICKED");

  bookIndex = 0;

  bookIsOpen = true;

  updateBookPages();

  bookCover.classList.add("open");

  realBook.classList.add("book-is-open");

  if (bookCloseControl) {
    bookCloseControl.classList.add("show");
  }

  if (bookToggleButton) {
    bookToggleButton.textContent = "BOOK OPENED";
  }
}

/* =========================================================
   CLOSE BOOK
========================================================= */

function closeBook() {
  if (!realBook || !bookCover || !bookIsOpen) {
    return;
  }

  console.log("CLOSE BOOK CLICKED");

  bookIsOpen = false;

  bookCover.classList.remove("open");

  realBook.classList.remove("book-is-open");

  if (bookCloseControl) {
    bookCloseControl.classList.remove("show");
  }

  if (bookToggleButton) {
    bookToggleButton.textContent = WEDDING.book.openButton;
  }

  bookIndex = 0;

  updateBookPages();
}

/* =========================================================
   OPEN BOOK BUTTON
========================================================= */

if (bookToggleButton) {
  bookToggleButton.addEventListener("click", function (event) {
    event.preventDefault();

    event.stopPropagation();

    openBook();
  });
}

/* =========================================================
   CLOSE BOOK BUTTON
========================================================= */

if (closeBookButton) {
  closeBookButton.addEventListener("click", function (event) {
    event.preventDefault();

    event.stopPropagation();

    closeBook();
  });
}

/* =========================================================
   PAGE TURN
========================================================= */

function turnBookPage(direction) {
  if (!bookIsOpen || bookIsTurning || !leftPage || !rightPage) {
    return;
  }

  /* NEXT */

  if (direction === "next") {
    if (bookIndex + 2 >= guestBookMessages.length) {
      return;
    }

    bookIsTurning = true;

    rightPage.classList.add("turn-next");

    setTimeout(function () {
      bookIndex += 2;

      updateBookPages();
    }, 550);

    setTimeout(function () {
      rightPage.classList.remove("turn-next");

      bookIsTurning = false;
    }, 1100);

    return;
  }

  /* PREVIOUS */

  if (direction === "previous") {
    if (bookIndex <= 0) {
      return;
    }

    bookIsTurning = true;

    leftPage.classList.add("turn-previous");

    setTimeout(function () {
      bookIndex -= 2;

      updateBookPages();
    }, 550);

    setTimeout(function () {
      leftPage.classList.remove("turn-previous");

      bookIsTurning = false;
    }, 1100);
  }
}

/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextPage) {
  nextPage.addEventListener("click", function () {
    turnBookPage("next");
  });
}

/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (previousPage) {
  previousPage.addEventListener("click", function () {
    turnBookPage("previous");
  });
}

/* =========================================================
   LOAD GUEST MESSAGES
========================================================= */

async function loadGuestMessages() {
  try {
    if (!supabaseClient) {
      guestBookMessages = [];

      updateBookPages();

      return;
    }

    const { data, error } = await supabaseClient
      .from("wedding_messagesss")
      .select("id,name,attendance,guests,message,created_at")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Error loading guest book:", error);

      guestBookMessages = [];

      updateBookPages();

      return;
    }

    guestBookMessages = data || [];

    bookIndex = 0;

    updateBookPages();
  } catch (error) {
    console.error("Unexpected guest book error:", error);

    guestBookMessages = [];

    updateBookPages();
  }
}

/* =========================================================
   INITIAL BOOK STATE
========================================================= */

updateBookPages();

loadGuestMessages();

/* =========================================================
   MOBILE SWIPE
========================================================= */

let touchStartX = 0;

let touchEndX = 0;

if (realBook) {
  realBook.addEventListener(
    "touchstart",
    function (event) {
      if (!bookIsOpen) {
        return;
      }

      touchStartX = event.touches[0].clientX;
    },
    {
      passive: true,
    },
  );

  realBook.addEventListener(
    "touchend",
    function (event) {
      if (!bookIsOpen) {
        return;
      }

      touchEndX = event.changedTouches[0].clientX;

      handleBookSwipe();
    },
    {
      passive: true,
    },
  );
}

/* =========================================================
   HANDLE SWIPE
========================================================= */

function handleBookSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) < 50) {
    return;
  }

  /*
     Swipe LEFT
     → Next page
  */

  if (swipeDistance < 0) {
    turnBookPage("next");
  } else {
    /*
       Swipe RIGHT
       → Previous page
    */

    turnBookPage("previous");
  }
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

const animatedSections = document.querySelectorAll(
  ".story," +
    ".details," +
    ".location," +
    ".countdown-section," +
    ".gallery," +
    ".rsvp," +
    ".guest-book," +
    ".footer",
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  animatedSections.forEach(section => {
    sectionObserver.observe(section);
  });
} else {
  animatedSections.forEach(section => {
    section.classList.add("show");
  });
}

/* =========================================================
   WRITE IN BOOK BUTTON
========================================================= */

const writeBookButton = getElement("writeBookButton");

if (writeBookButton) {
  writeBookButton.addEventListener("click", function () {
    showRSVP();
  });
}

/* =========================================================
   RSVP BUTTONS
========================================================= */

const rsvpButtons = document.querySelectorAll("[data-open-rsvp]");

rsvpButtons.forEach(button => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    showRSVP();
  });
});

/* =========================================================
   GALLERY
========================================================= */

function loadGallery() {
  const galleryContainer = getElement("galleryGrid");

  if (!galleryContainer) {
    return;
  }

  /*
     If the HTML already contains
     gallery cards, don't overwrite them.
  */

  if (galleryContainer.children.length > 0) {
    return;
  }

  WEDDING.gallery.forEach((photo, index) => {
    const card = document.createElement("figure");
    console.log(index);

    card.className = "photo-frame";

    const image = document.createElement("img");

    image.src = photo.src;

    image.alt = photo.caption;

    const caption = document.createElement("figcaption");

    caption.textContent = photo.caption;

    card.appendChild(image);

    card.appendChild(caption);

    galleryContainer.appendChild(card);
  });
}

/* =========================================================
   MUSIC PLAYER
========================================================= */

function initializeMusic() {
  const music = document.getElementById("backgroundMusic");

  const musicButton = document.getElementById("musicButton");

  if (!music) {
    return;
  }

  /* =====================================================
       MUSIC FILE
    ===================================================== */

  music.src = WEDDING.music.file;

  /* =====================================================
       MUSIC STATE
    ===================================================== */

  let musicPlaying = false;

  /* =====================================================
       UPDATE BUTTON
    ===================================================== */

  function updateMusicButton() {
    if (!musicButton) {
      return;
    }

    musicPlaying = !music.paused;

    if (musicPlaying) {
      musicButton.classList.add("playing");

      musicButton.textContent = "🔊";

      musicButton.setAttribute("aria-label", "Pause music");
    } else {
      musicButton.classList.remove("playing");

      musicButton.textContent = "🔇";

      musicButton.setAttribute("aria-label", "Play music");
    }
  }

  /* =====================================================
       INITIAL STATE
    ===================================================== */

  updateMusicButton();

  /* =====================================================
       AUTOPLAY
    ===================================================== */

  if (WEDDING.music.autoplay) {
    music
      .play()
      .then(function () {
        updateMusicButton();
      })
      .catch(function (error) {
        /*
                       Browser may block autoplay
                       until the user interacts
                       with the page.
                    */

        console.warn("Autoplay was blocked:", error);

        updateMusicButton();
      });
  }

  /* =====================================================
       MUSIC BUTTON
    ===================================================== */

  if (musicButton) {
    musicButton.addEventListener("click", async function (event) {
      event.preventDefault();

      event.stopPropagation();

      try {
        if (music.paused) {
          await music.play();

          updateMusicButton();
        } else {
          music.pause();

          updateMusicButton();
        }
      } catch (error) {
        console.warn("Music could not be played:", error);

        updateMusicButton();
      }
    });
  }

  /* =====================================================
       KEEP BUTTON IN SYNC
    ===================================================== */

  music.addEventListener("play", updateMusicButton);

  music.addEventListener("pause", updateMusicButton);

  music.addEventListener("ended", updateMusicButton);
}
/* =========================================================
   THEME TESTER
========================================================= */

const themeTester =
    getElement("themeTester");

const themeOpen =
    getElement("themeOpen");

const themeClose =
    getElement("themeClose");

const themeList =
    getElement("themeList");


/* =========================================================
   OPEN THEME TESTER
========================================================= */

if (themeOpen) {

    themeOpen.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (themeTester) {

                themeTester.classList.remove(
                    "hidden"
                );

            }


            themeOpen.classList.remove(
                "visible"
            );

        }
    );

}


/* =========================================================
   CLOSE THEME TESTER
========================================================= */

if (themeClose) {

    themeClose.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (themeTester) {

                themeTester.classList.add(
                    "hidden"
                );

            }


            if (themeOpen) {

                themeOpen.classList.add(
                    "visible"
                );

            }

        }
    );

}


/* =========================================================
   CREATE THEME OPTIONS
========================================================= */

function createThemeOptions() {

    if (!themeList) {

        return;

    }


    /*
       Clear existing buttons
       so we don't create duplicates.
    */

    themeList.innerHTML = "";


    Object.entries(
        themes
    ).forEach(
        function (
            [
                themeKey,
                theme
            ]
        ) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "theme-option";


            button.dataset.theme =
                themeKey;


            /* =========================================
               THEME NAME
            ========================================= */

            const name =
                document.createElement(
                    "span"
                );


            name.className =
                "theme-name";


            name.textContent =
                theme.name;


            /* =========================================
               COLOR PREVIEW
            ========================================= */

            const colors =
                document.createElement(
                    "div"
                );


            colors.className =
                "theme-colors";


            theme.colors.forEach(
                function (
                    color
                ) {

                    const colorCircle =
                        document.createElement(
                            "span"
                        );


                    colorCircle.className =
                        "theme-color";


                    colorCircle.style.backgroundColor =
                        color;


                    colors.appendChild(
                        colorCircle
                    );

                }
            );


            button.appendChild(
                name
            );


            button.appendChild(
                colors
            );


            /* =========================================
               CLICK
            ========================================= */

            button.addEventListener(
                "click",
                function () {

                    applyTheme(
                        themeKey
                    );

                }
            );


            themeList.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   APPLY THEME
========================================================= */

function applyTheme(
    themeKey
) {

    const theme =
        themes[
            themeKey
        ];


    if (!theme) {

        return;

    }


    /* =========================================
       APPLY CSS VARIABLES
    ========================================= */

    Object.entries(
        theme.variables
    ).forEach(
        function (
            [
                variable,
                value
            ]
        ) {

            document.documentElement.style.setProperty(
                variable,
                value
            );

        }
    );


    /* =========================================
       BODY THEME
    ========================================= */

    document.body.dataset.theme =
        themeKey;


    /* =========================================
       SAVE THEME
    ========================================= */

    localStorage.setItem(
        "wedding-theme",
        themeKey
    );


    /* =========================================
       ACTIVE BUTTON
    ========================================= */

    const themeOptions =
        document.querySelectorAll(
            "#themeList [data-theme]"
        );


    themeOptions.forEach(
        function (
            option
        ) {

            option.classList.remove(
                "active"
            );

        }
    );


    const activeOption =
        document.querySelector(
            `#themeList [data-theme="${themeKey}"]`
        );


    if (activeOption) {

        activeOption.classList.add(
            "active"
        );

    }

}


/* =========================================================
   CREATE THEME BUTTONS
========================================================= */

createThemeOptions();


/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "wedding-theme"
    );


if (
    savedTheme &&
    themes[savedTheme]
) {

    applyTheme(
        savedTheme
    );

} else {

    /*
       Default theme
    */

    applyTheme(
        "sega"
    );

}
/* =========================================================
   FLOATING DECORATIONS
========================================================= */

function createFloatingDecorations() {
  const container = getElement("floatingDecorations");

  if (!container) {
    return;
  }

  /*
     Don't duplicate decorations
  */

  if (container.children.length > 0) {
    return;
  }

  const hearts = ["♡", "♥", "♡", "♥", "♡"];

  hearts.forEach((heart, index) => {
    const element = document.createElement("span");

    element.className = `floating-heart heart-${index + 1}`;

    element.textContent = heart;

    container.appendChild(element);
  });

  for (let index = 1; index <= 6; index++) {
    const star = document.createElement("span");

    star.className = `floating-star star-${index}`;

    star.textContent = "✦";

    container.appendChild(star);
  }
}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.addEventListener("click", function (event) {
  const link = event.target.closest('a[href^="#"]');

  if (!link) {
    return;
  }

  const targetId = link.getAttribute("href");

  if (!targetId || targetId === "#") {
    return;
  }

  const target = document.querySelector(targetId);

  if (!target) {
    return;
  }

  event.preventDefault();

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/* =========================================================
   PREVENT BODY SCROLL WHEN MODAL IS OPEN
========================================================= */

const bodyObserver = new MutationObserver(function () {
  if (rsvpModal && rsvpModal.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

if (rsvpModal) {
  bodyObserver.observe(rsvpModal, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
  "error",
  function (event) {
    if (event.target && event.target.tagName === "IMG") {
      event.target.classList.add("image-error");
    }
  },
  true,
);

/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  applyWeddingData();

  loadGallery();

  createFloatingDecorations();

  updateCountdown();

  updateBookPages();

  initializeMusic();
});

/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener("visibilitychange", function () {
  /*
       Refresh countdown when the
       user comes back to the page.
    */

  if (!document.hidden) {
    updateCountdown();
  }
});

/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log("💍 Wedding invitation initialized successfully.");

console.log(`❤️ ${WEDDING.couple.groom} & ${WEDDING.couple.bride}`);

console.log(
  `📅 ${WEDDING.date.day} ${WEDDING.date.month} ${WEDDING.date.year}`,
);
