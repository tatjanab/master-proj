const topics = [
  {
    title: "Physics",
    enabled: true,
    subtopics: [
      {
        title: "Classical mechanics",
        enabled: true,
        subtopics: [
          {
            title: "Newton's laws",
            enabled: true,
            subtopics: [],
          },
          {
            title: "Work and energy",
            enabled: false,
            subtopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Math",
    enabled: false,
    subtopics: [
      {
        title: "Algebra",
        enabled: true,
        subtopics: [
          {
            title: "Something",
            enabled: false,
            subtopics: [],
          },
          {
            title: "Something else",
            enabled: true,
            subtopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Electromagnetism",
    enabled: true,
    subtopics: [
      {
        title: "Maxwell's equations",
        enabled: true,
        subtopics: [],
      },
      {
        title: "Electric fields",
        enabled: false,
        subtopics: [],
      },
    ],
  },
];

export default topics;
