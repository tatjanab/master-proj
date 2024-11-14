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
            enabled: true,
            subtopics: [],
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
            enabled: true,
            subtopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Chemistry",
    enabled: true,
    subtopics: [
      {
        title: "Organic chemistry",
        enabled: true,
        subtopics: [
          {
            title: "Hydrocarbons",
            enabled: true,
            subtopics: [],
          },
          {
            title: "Functional groups",
            enabled: true,
            subtopics: [],
          },
        ],
      },
      {
        title: "Inorganic chemistry",
        enabled: true,
        subtopics: [
          {
            title: "Periodic table",
            enabled: true,
            subtopics: [],
          },
          {
            title: "Coordination chemistry",
            enabled: true,
            subtopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Biology",
    enabled: false,
    subtopics: [
      {
        title: "Genetics",
        enabled: false,
        subtopics: [
          {
            title: "Mendelian genetics",
            enabled: true,
            subtopics: [],
          },
          {
            title: "DNA replication",
            enabled: true,
            subtopics: [],
          },
        ],
      },
      {
        title: "Cell biology",
        enabled: true,
        subtopics: [
          {
            title: "Cell structure",
            enabled: true,
            subtopics: [],
          },
          {
            title: "Cell division",
            enabled: true,
            subtopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Astronomy",
    enabled: true,
    subtopics: [
      {
        title: "Planets",
        enabled: true,
        subtopics: [
          {
            title: "Solar system",
            enabled: true,
            subtopics: [],
          },
          {
            title: "Exoplanets",
            enabled: true,
            subtopics: [],
          },
        ],
      },
      {
        title: "Stars",
        enabled: true,
        subtopics: [
          {
            title: "Stellar evolution",
            enabled: true,
            subtopics: [],
          },
          {
            title: "Black holes",
            enabled: true,
            subtopics: [],
          },
        ],
      },
      {
        title: "Quantum mechanics",
        enabled: false,
        subtopics: [
          {
            title: "Quantum entanglement",
            enabled: true,
            subtopics: [
              {
                title: "Quantum tunneling",
                enabled: true,
                subtopics: [],
              },
              {
                title: "Wave-particle duality",
                enabled: true,
                subtopics: [
                  {
                    title: "Heisenberg uncertainty principle",
                    enabled: true,
                    subtopics: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default topics;
