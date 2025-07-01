const questionsData = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Markdown Language",
        "HyperLoop Machine Language",
        "None of the above",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which tag is used for headings in HTML?",
      options: ["<head>", "<h1> to <h6>", "<title>", "<heading>"],
      answer: "<h1> to <h6>",
    },
    {
      question: "Which HTML tag is used to display an image?",
      options: ["<image>", "<img>", "<pic>", "<src>"],
      answer: "<img>",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<lb>", "<break>", "<br>", "<line>"],
      answer: "<br>",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      answer: "<a>",
    },
  ],

  css: [
    {
      question: "What is the correct CSS syntax to make all <p> elements bold?",
      options: [
        "p {font-weight: bold;}",
        "p {text-size: bold;}",
        "p {font: bold;}",
        "bold.p { }",
      ],
      answer: "p {font-weight: bold;}",
    },
    {
      question: "Which property is used to change the background color?",
      options: ["bgcolor", "background-color", "color", "background"],
      answer: "background-color",
    },
    {
      question: "How do you make text italic in CSS?",
      options: [
        "font-style: italic;",
        "text-style: italic;",
        "style: italic;",
        "font: italic;",
      ],
      answer: "font-style: italic;",
    },
    {
      question: "Which value of position places an element relative to its first positioned ancestor?",
      options: ["static", "relative", "absolute", "fixed"],
      answer: "absolute",
    },
    {
      question: "Which CSS unit is relative to the root element?",
      options: ["em", "rem", "%", "vh"],
      answer: "rem",
    },
  ],

  js: [
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: "//",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which method is used to output text in the console?",
      options: ["print()", "log()", "console.log()", "write()"],
      answer: "console.log()",
    },
    {
      question: "What does NaN stand for in JavaScript?",
      options: ["Not a Number", "No actual Name", "New and Null", "None above"],
      answer: "Not a Number",
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["Number", "String", "Boolean", "All of the above"],
      answer: "All of the above",
    },
  ],

  accessibility: [
    {
      question: "Which HTML attribute improves accessibility for images?",
      options: ["src", "alt", "title", "href"],
      answer: "alt",
    },
    {
      question: "Which element helps screen readers understand document structure?",
      options: ["<div>", "<section>", "<header>", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is ARIA in web accessibility?",
      options: [
        "A programming language",
        "Accessibility Rich Internet Applications",
        "A screen reader tool",
        "None of the above",
      ],
      answer: "Accessibility Rich Internet Applications",
    },
    {
      question: "What attribute provides a text label for form inputs?",
      options: ["id", "for", "aria-label", "name"],
      answer: "aria-label",
    },
    {
      question: "Which input attribute ensures the field must be filled out?",
      options: ["required", "placeholder", "readonly", "validate"],
      answer: "required",
    },
  ],
};
