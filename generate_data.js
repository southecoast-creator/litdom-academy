const fs = require('fs');

// We will construct the complete, pristine LITDOM_DATA
const dataScript = `/* =========================================================================
 * LITDOM ACADEMY - CURRICULUM ARCHITECTURE & COURSE DATA
 * =========================================================================
 *
 * ARCHITECTURAL HIERARCHY:
 *   COURSE
 *     └── MODULE
 *           └── SECTION
 *                 ├── CONTENT (Dynamic array of blocks in exact sequence:
 *                 │            text, video, audio, canva, image, document, resource, exercise, example)
 *                 └── SECTION ASSESSMENT (5 multiple-choice questions, passing score: 3/5)
 *           └── MODULE ASSESSMENT (5 multiple-choice questions, passing score: 4/5)
 *     └── FINAL EXAM (50 multiple-choice questions, passing score: 45/50)
 *     └── CERTIFICATE (Unlocked upon passing all modules + final exam)
 *
 * ========================================================================= */

const LITDOM_DATA = {
  courses: [
    {
      /* ===================================================================
       * COURSE 1: EDITOR ACADEMY
       * =================================================================== */
      id: "editor-academy",
      title: "Editor Academy",
      category: "Editorial Craft",
      level: "Foundational to Advanced",
      duration: "4.5 Hours",
      icon: "quill",
      description: "Transform raw manuscripts into published literature. Master line editing, substantive diagnosis, and author psychology.",
      supportedPaths: ["oneway", "practical"],
      modules: [
        /* =================================================================
         * MODULE 1: Who Is an Editor?
         * ================================================================= */
        {
          id: "mod-1",
          num: 1,
          title: "Who Is an Editor?",
          description: "The distinct identity, responsibilities, and philosophy of the modern editor.",
          passingScore: 4,
          sections: [
            /* --- SECTION 1.1: The Editor's Persona & Role --- */
            {
              id: "sec-1-1",
              title: "The Editor's Persona & Role",
              duration: "8 mins",
              summary: "Understanding the advocate, the guardian, and the mirror of literary craft.",
              content: [
                {
                  type: "text",
                  title: "The Guardian of the Reader's Attention",
                  content: "<p>An editor is neither a glorified proofreader nor an authoritarian censor. The true editor acts as the author's most dedicated champion, an empathetic surrogate for the eventual reader, and an objective diagnostician of prose.</p><div class=\\"callout-quote\\">\\"The best editors leave no fingerprints. They amplify the author's singular voice while quietly removing the obstructions that stand between the sentence and the reader's heart.\\"</div><p>While the author is consumed with the creative act of birthing characters and themes into existence, the editor steps back to examine structure, cadence, semantic precision, and narrative momentum.</p>"
                },
                {
                  type: "video",
                  id: "vid-1-1",
                  title: "Masterclass: The Editor's Invisible Touch",
                  caption: "Dean Julian Sterling unpacks the philosophy of humble, high-impact editorial stewardship.",
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                  instructor: "Dean Julian Sterling",
                  badge: "Litdom Studio Master Lecture",
                  duration: "04:12"
                },
                {
                  type: "example",
                  title: "Editorial Diagnosis: Unedited vs. Refined Draft",
                  before: "He walked very quickly and with great haste towards the doorway because he was scared of what might happen next.",
                  after: "He bolted for the door, dreading what lurked behind him.",
                  explanation: "The edit eliminates redundant adverbs ('very quickly', 'with great haste') and vague summary ('what might happen next'), intensifying visceral urgency."
                },
                {
                  type: "interactive_exercise",
                  id: "ex-1-1",
                  title: "Editorial Crucible: Eliminating Adverbial Flab",
                  category: "Line Polish & Cadence",
                  instructions: "Analyze the author's sentence below. Choose the diagnostic edit that elevates dramatic tension without colonizing the author's voice:",
                  draft: "She looked very closely at the locked wooden chest and then she slowly opened it with a nervous tremor in her hands.",
                  options: [
                    {
                      text: "Retain the original wording; adverbs convey necessary emotional description.",
                      correct: false,
                      feedback: "Notice how 'very closely' and 'slowly opened' dilute suspense. Weak adverbs tell the reader how to feel instead of immersing them directly."
                    },
                    {
                      text: "Line-Edit: 'She peered at the iron-bound chest, her hands trembling as the latch gave way.'",
                      correct: true,
                      feedback: "Masterful diagnosis! Replacing weak verb+adverb combinations with vivid active verbs ('peered', 'trembling') brings tactile immediacy.",
                      polishedText: "She peered at the iron-bound chest, her hands trembling as the latch gave way."
                    },
                    {
                      text: "Overhaul into archaic prose: 'With lamentable hesitation upon her countenance, she gazed upon the reliquary.'",
                      correct: false,
                      feedback: "Careful! Imposing heavy archaic ornamentation violates editorial humility by overwhelming the author's voice."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 1.1 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is the primary operational distinction between a writer and an editor?",
                    options: [
                      "The writer creates raw substance; the editor clarifies and diagnoses that substance on behalf of the reader.",
                      "The editor rewrites the entire story in their own stylistic voice.",
                      "The editor's only job is catching typographical misspellings and punctuation errors.",
                      "The writer works exclusively with agents, while editors only talk to printers."
                    ],
                    answer: 0,
                    explanation: "The editor is an objective diagnostician who clarifies and optimizes the writer's vision without usurping their artistic authority."
                  },
                  {
                    q: "Why is the editor described as 'leaving no fingerprints'?",
                    options: [
                      "To avoid legal liability for author copyright claims",
                      "Because the polished manuscript should reflect the author's pure voice, not the editor's idiosyncratic style",
                      "Because modern editing is conducted completely digitally without paper",
                      "To ensure anonymous publishing for ghostwriters"
                    ],
                    answer: 1,
                    explanation: "Master editors preserve and amplify the author's voice, removing obstacles rather than imposing their own personal style."
                  },
                  {
                    q: "Which mindset is considered the greatest hazard to an editor's work?",
                    options: [
                      "Strict adherence to narrative pacing",
                      "Editorial arrogance (treating the manuscript as a raw canvas for the editor's own writing)",
                      "Checking historical facts in non-fiction",
                      "Reading drafts multiple times"
                    ],
                    answer: 1,
                    explanation: "Editorial arrogance alienates authors and distorts their authentic intent into an artificial imitation of the editor."
                  },
                  {
                    q: "What is the editor's role regarding the reader's attention span?",
                    options: [
                      "Enforcing 150-word limits on all paragraphs",
                      "Diagnosing fatigue points, sluggish transitions, and narrative stalls before the book reaches the market",
                      "Adding cliffhangers to every single page",
                      "Replacing complex words with basic colloquialisms"
                    ],
                    answer: 1,
                    explanation: "Editors act as early readers, pinpointing moments where pace drags or emotional engagement slackens."
                  },
                  {
                    q: "When an editor diagnoses a sentence with multiple redundant adverbs, what should be their primary craft remedy?",
                    options: [
                      "Add explanatory footnotes",
                      "Substitute weak verb-adverb pairs with precise, sensory active verbs",
                      "Surround the adverbs in quotation marks",
                      "Convert the sentence into passive voice"
                    ],
                    answer: 1,
                    explanation: "Choosing potent verbs (e.g. 'bolted' instead of 'ran very quickly') sharpens cadence and narrative punch."
                  }
                ]
              }
            },

            /* --- SECTION 1.2: The Reader's Surrogate & Advocate --- */
            {
              id: "sec-1-2",
              title: "The Reader's Surrogate & Advocate",
              duration: "10 mins",
              summary: "Reading from the outside in to diagnose reader fatigue and cognitive confusion.",
              content: [
                {
                  type: "text",
                  title: "Reading from the Outside In",
                  content: "<p>The author suffers from the curse of knowledge: they know what the character feels, what the room smells like, and what the subtext means because it exists in their imagination. The editor arrives with fresh, unclouded eyes.</p><p>As the reader's surrogate, the editor asks: <em>Does this transition make emotional sense? Is the scene dragging? Did the author assume I knew something never stated on the page?</em></p>"
                },
                {
                  type: "audio",
                  id: "aud-1-2",
                  title: "Audio Lecture: Simulating Reader Immersion",
                  caption: "Prof. Arthur Pendelton dissects psychic distance and identifying reader fatigue.",
                  src: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
                  instructor: "Prof. Arthur Pendelton",
                  duration: "03:45"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-1-2",
                  title: "Deep POV Lab: Stripping Filter Words",
                  category: "Psychic Distance & POV",
                  instructions: "Filter words (saw, heard, felt, realized) create artificial distance between the reader and the protagonist. Select the edit that establishes deep POV:",
                  draft: "Marcus saw the shadow flicker across the alley wall and he heard the distinct click of a revolver hammer being cocked.",
                  options: [
                    {
                      text: "Keep the filter words; they prove Marcus is consciously observing the scene.",
                      correct: false,
                      feedback: "Incorrect. The reader already knows Marcus is the viewpoint character. Reminding them that Marcus 'saw' and 'heard' pulls the reader outside his body."
                    },
                    {
                      text: "Strip the filters: 'A shadow flickered across the alley wall. The metallic click of a revolver hammer echoed in the cold.'",
                      correct: true,
                      feedback: "Brilliant edit! By removing the filter verbs ('saw', 'heard'), the reader experiences the sensory events directly alongside Marcus.",
                      polishedText: "A shadow flickered across the alley wall. The sharp click of a revolver hammer sliced through the silence."
                    },
                    {
                      text: "Add passive construction: 'The shadow was seen by Marcus while the sound was perceived.'",
                      correct: false,
                      feedback: "This introduces both passive voice and emotional abstraction, completely draining tension."
                    }
                  ]
                },
                {
                  type: "example",
                  title: "Diagnostic Example: Filtered vs. Immersive POV",
                  before: "Elena felt a wave of icy dread wash over her when she realized the front door was ajar.",
                  after: "Icy dread pooled in her gut. The front door stood ajar.",
                  explanation: "Removing 'felt' and 'realized' collapses the psychic distance, plunging the reader immediately into Elena's visceral terror."
                }
              ],
              assessment: {
                title: "Section 1.2 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What psychological phenomenon often blinds writers to plot holes and ambiguities in their own manuscripts?",
                    options: [
                      "The Curse of Knowledge",
                      "Imposter Syndrome",
                      "Confirmation Bias in typesetting",
                      "The Hawthorne Effect"
                    ],
                    answer: 0,
                    explanation: "The 'Curse of Knowledge' occurs when the writer assumes the reader shares their internal worldbuilding without it being conveyed on the page."
                  },
                  {
                    q: "What are 'filter words' in narrative prose?",
                    options: [
                      "Profanities removed for public consumption",
                      "Verbs of sensory perception (saw, heard, felt, noticed) that distance the reader from direct experience",
                      "Punctuation marks used to separate clauses",
                      "Technical jargon restricted to sci-fi and medical thrillers"
                    ],
                    answer: 1,
                    explanation: "Filter words remind the reader that a character is experiencing something rather than allowing the reader to experience it directly."
                  },
                  {
                    q: "How does stripping filter words improve narrative immersion?",
                    options: [
                      "It doubles the word count of the chapter",
                      "It collapses psychic distance, making sensory details immediate and visceral",
                      "It makes the prose adhere strictly to legal copyright conventions",
                      "It converts third-person narrative into first-person automatically"
                    ],
                    answer: 1,
                    explanation: "Removing perceptual intermediaries allows the reader to stand inside the viewpoint character's sensory consciousness."
                  },
                  {
                    q: "When an editor notices a reader would be disoriented by a sudden time jump, what is the best craft recommendation?",
                    options: [
                      "Delete the subsequent chapter entirely",
                      "Provide a grounding temporal or sensory transition beat at the start of the scene",
                      "Add a five-page expositional summary",
                      "Change the tense from past to present continuously"
                    ],
                    answer: 1,
                    explanation: "A brief transitional beat anchors the reader in space and time without derailing narrative momentum."
                  },
                  {
                    q: "Why is the editor called the 'advocate of the future reader'?",
                    options: [
                      "Because the editor sets the retail price of the printed hardcover",
                      "Because the editor encounters the text with the same baseline innocence as an uninitiated buyer",
                      "Because editors write reviews on commercial bookstore websites",
                      "Because the editor represents the author in literary agency negotiations"
                    ],
                    answer: 1,
                    explanation: "The editor is the last objective eye before the manuscript enters the commercial marketplace."
                  }
                ]
              }
            },

            /* --- SECTION 1.3: Humility, Restraint & Voice Preservation --- */
            {
              id: "sec-1-3",
              title: "Humility, Restraint & Voice Preservation",
              duration: "9 mins",
              summary: "Mastering the boundary between diagnostic correction and personal stylistic taste.",
              content: [
                {
                  type: "canva",
                  id: "cnv-1-3",
                  title: "Canva Deck: The Editor's Code of Restraint",
                  caption: "Interactive visual deck on identifying and respecting idiosyncratic authorial cadence.",
                  src: "https://www.canva.com/design/DAGQ7q5wY48/view?embed",
                  embedUrl: "https://www.canva.com/design/DAGQ7q5wY48/view?embed"
                },
                {
                  type: "text",
                  title: "Editorial Humility vs. Stylistic Imperialism",
                  content: "<p>The novice editor enters a manuscript with a red pen and a subconscious desire to rewrite every sentence in their own likeness. The master editor enters with deep reverence for idiosyncratic voice.</p><div class=\\"callout-quote\\">\\"Never change a sentence simply because you would have phrased it differently. Change it only if it violates clarity, breaks narrative promise, or betrays the author's own aesthetic vision.\\"</div>"
                },
                {
                  type: "example",
                  title: "Preserving Voice vs. Fixing Syntax",
                  before: "Ain't nobody round these parts seen Silas since the river froze over.",
                  after: "[RETAINED - Dialect / Character Voice]",
                  explanation: "Correcting this dialect sentence to 'Nobody around here has seen Silas' destroys regional authenticity and character verisimilitude."
                },
                {
                  type: "resource",
                  id: "res-1-3",
                  title: "The Editorial Restraint Checklist",
                  description: "A printable PDF diagnostic scorecard: 7 litmus tests before intervening in an author's sentence.",
                  fileName: "Litdom_Restraint_Scorecard.pdf",
                  fileSize: "420 KB",
                  downloadUrl: "#"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-1-3",
                  title: "Voice Preservation Challenge",
                  category: "Editorial Restraint",
                  instructions: "The narrator speaks with rugged, rhythmic Southern gothic cadence. Choose the editor's proper response:",
                  draft: "The night had teeth, sharp and silver-cold, biting clean through my coat.",
                  options: [
                    {
                      text: "Rewrite to literal phrasing: 'The night temperature was very cold and penetrated my wool outerwear.'",
                      correct: false,
                      feedback: "Fatal mistake! This sterilizes poetic metaphor into bureaucratic reportage."
                    },
                    {
                      text: "Preserve the evocative metaphor and cadence intact without intervention.",
                      correct: true,
                      feedback: "Exceptional editorial restraint! The imagery ('had teeth', 'biting clean through') is striking, clear, and rich in voice.",
                      polishedText: "The night had teeth, sharp and silver-cold, biting clean through my coat."
                    },
                    {
                      text: "Flag as a factual error because nights do not anatomically possess teeth.",
                      correct: false,
                      feedback: "Literalism is the death of literary editing. Metaphor is central to artistic storytelling."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 1.3 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "Under what condition is an editor justified in altering an author's sentence structure?",
                    options: [
                      "Whenever the editor thinks their own vocabulary sounds more sophisticated",
                      "Only when the sentence suffers from unintentional ambiguity, broken syntax, or pacing failure",
                      "Whenever a sentence contains more than 15 words",
                      "Only if the author explicitly gives verbal permission on each paragraph"
                    ],
                    answer: 1,
                    explanation: "Editors intervene for communicative failure and craft breakdown, never for personal stylistic vanity."
                  },
                  {
                    q: "What is 'stylistic imperialism' in manuscript editing?",
                    options: [
                      "Using British spelling conventions in an American publication",
                      "Imposing the editor's personal aesthetic and sentence structure over the author's organic style",
                      "Translating books into international languages without royalties",
                      "Insisting on hardcover binding over trade paperback"
                    ],
                    answer: 1,
                    explanation: "Stylistic imperialism occurs when an editor attempts to remake an author in the editor's image."
                  },
                  {
                    q: "How should an editor treat intentional dialect or vernacular speech in dialogue?",
                    options: [
                      "Standardize all grammar to formal Chicago Manual of Style specifications",
                      "Honor the dialect's phonetic integrity and rhythm while ensuring readability",
                      "Delete all dialect and replace it with footnotes",
                      "Replace dialect with Latin root translations"
                    ],
                    answer: 1,
                    explanation: "Authentic character voice is paramount; editors preserve cadence while checking for reader accessibility."
                  },
                  {
                    q: "What should an editor do when encountering a rule-breaking fragment that delivers potent dramatic punch?",
                    options: [
                      "Attach a coordinating conjunction and complete predicate regardless of dramatic effect",
                      "Celebrate and retain the deliberate fragment as a calculated craft technique",
                      "Flag it as an unforgivable mechanical error",
                      "Report the manuscript to the publisher's legal team"
                    ],
                    answer: 1,
                    explanation: "Deliberate stylistic fragments are standard craft tools for tension, shock, and cadence."
                  },
                  {
                    q: "What is the true measure of a successful editorial pass?",
                    options: [
                      "The author feels their original vision has been realized with greater clarity and power than before",
                      "The editor rewrote at least 40% of the manuscript text",
                      "Every sentence conforms to mathematical grade-level reading formulas",
                      "The editor receives co-author credit on the front cover"
                    ],
                    answer: 0,
                    explanation: "The author should feel elevated and understood, recognizing their book in its sharpest possible incarnation."
                  }
                ]
              }
            }
          ],
          assessment: {
            title: "Module 1 Comprehensive Assessment",
            passingScore: 4,
            totalQuestions: 5,
            questions: [
              {
                q: "What core philosophy unifies all three sections of Module 1 regarding an editor's relationship to prose?",
                options: [
                  "The editor is the author's intellectual superior",
                  "The editor is an objective, humble surrogate for the reader who amplifies authorial voice without usurpation",
                  "The editor's primary responsibility is commercial marketing",
                  "The editor should make every book sound like classic Victorian literature"
                ],
                answer: 1,
                explanation: "Module 1 establishes the editor as a reader's surrogate and respectful guardian of the author's vision."
              },
              {
                q: "Which technique effectively eliminates unnecessary psychic distance in high-stakes scenes?",
                options: [
                  "Multiplying filter words like 'she perceived' and 'he noticed'",
                  "Removing filter words and immersing the reader in direct sensory phenomena",
                  "Using exclusively passive verb constructions",
                  "Inserting authorial explanations between character dialogue lines"
                ],
                answer: 1,
                explanation: "Stripping filter words bridges psychic distance, placing the reader squarely inside the dramatic reality."
              },
              {
                q: "How does the 'Curse of Knowledge' negatively impact an unedited draft?",
                options: [
                  "It causes authors to write books that are too short",
                  "Authors leave vital narrative bridges unwritten because the information exists clearly in their own imagination",
                  "It makes characters speak too many foreign languages",
                  "It causes printing equipment to misalign margins"
                ],
                answer: 1,
                explanation: "Writers take for granted background details that their readers cannot possibly know without textual evidence."
              },
              {
                q: "What is the appropriate editorial response to idiosyncratic dialect that sounds compelling but breaks strict grammar rules?",
                options: [
                  "Correct it ruthlessly to textbook grammar",
                  "Preserve the authentic voice and rhythmic cadence, confirming internal consistency",
                  "Delete all characters who speak with regional cadence",
                  "Force all characters to speak in iambic pentameter"
                ],
                answer: 1,
                explanation: "Preserving organic character cadence with consistency is a cornerstone of literary integrity."
              },
              {
                q: "Which phrase best articulates the standard of excellence for Litdom Academy editors?",
                options: [
                  "Leave no fingerprints on the author's heart",
                  "Correct every deviation from 19th-century grammar",
                  "Maximize the count of red-pen annotations",
                  "Rewrite the ending to match commercial trends"
                ],
                answer: 0,
                explanation: "Litdom editors work invisibly, leaving the author's authentic craft shining unencumbered."
              }
            ]
          }
        },

        /* =================================================================
         * MODULE 2: The Hierarchy of Editing
         * ================================================================= */
        {
          id: "mod-2",
          num: 2,
          title: "The Hierarchy of Editing",
          description: "Developmental, line, copyediting, and proofreading: the four distinct interventions.",
          passingScore: 4,
          sections: [
            /* --- SECTION 2.1: The Four Tiers of Editorial Intervention --- */
            {
              id: "sec-2-1",
              title: "The Four Tiers of Editorial Intervention",
              duration: "9 mins",
              summary: "Deconstructing developmental, line editing, copyediting, and proofreading.",
              content: [
                {
                  type: "text",
                  title: "Macro to Micro: The Editorial Funnel",
                  content: "<p>Editing is not a single undifferentiated process. It is a hierarchical pipeline moving from grand architecture down to microscopic typographical alignment. Applying line polish to a scene that will be cut in a structural rewrite is wasted energy.</p><div class=\\"callout-quote\\">\\"Never polish the brass knobs on a door that is about to be demolished in the developmental overhaul.\\"</div>"
                },
                {
                  type: "video",
                  id: "vid-2-1",
                  title: "Video Lecture: The Four Tiers Explained",
                  caption: "Dr. Evelyn Reed diagrams the progressive stages of professional publishing.",
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                  instructor: "Dr. Evelyn Reed",
                  badge: "Publishing Workflow",
                  duration: "03:55"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-2-1",
                  title: "Editorial Tier Classification Challenge",
                  category: "Editorial Funnel",
                  instructions: "Read the editorial diagnosis below and identify which tier of editing it belongs to: 'The protagonist's sudden change of heart in Chapter 14 lacks emotional causality and needs earlier foreshadowing.'",
                  draft: "Diagnosis: 'The protagonist's change of heart in Chapter 14 lacks emotional causality.'",
                  options: [
                    {
                      text: "Copyediting (checking pronoun agreement and capitalization)",
                      correct: false,
                      feedback: "Incorrect. Copyediting focuses on grammatical and mechanical correctness, not plot plausibility."
                    },
                    {
                      text: "Developmental / Structural Editing (evaluating character motivation and narrative arc)",
                      correct: true,
                      feedback: "Correct! Emotional causality, foreshadowing, and character arc are foundational developmental issues.",
                      polishedText: "Tier: Developmental Editing (Character Arc & Emotional Causality)"
                    },
                    {
                      text: "Proofreading (checking typesetting errors and typos)",
                      correct: false,
                      feedback: "Proofreading is the final stage before printing, strictly catching layout errors."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 2.1 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is the proper sequential order of the four editing tiers in standard publishing?",
                    options: [
                      "Proofreading → Copyediting → Line Editing → Developmental Editing",
                      "Developmental Editing → Line Editing → Copyediting → Proofreading",
                      "Line Editing → Proofreading → Developmental Editing → Copyediting",
                      "Copyediting → Developmental Editing → Proofreading → Line Editing"
                    ],
                    answer: 1,
                    explanation: "Work flows from macro structural architecture down to micro typesetting and typographical verification."
                  },
                  {
                    q: "What is the primary concern of developmental editing?",
                    options: [
                      "Serial comma rules and hyphenation standards",
                      "Premise, narrative pacing, character arcs, thematic coherence, and structure",
                      "Font kerning and page layout widows",
                      "Checking spelling against the Merriam-Webster dictionary"
                    ],
                    answer: 1,
                    explanation: "Developmental editing addresses the foundational storytelling pillars and manuscript blueprint."
                  },
                  {
                    q: "What distinguishes line editing from copyediting?",
                    options: [
                      "Line editing refines rhythm, tone, and musicality; copyediting enforces mechanical rules, consistency, and syntax",
                      "Line editing is done by authors; copyediting is done by printers",
                      "There is no difference; they are interchangeable commercial terms",
                      "Line editing only applies to poetry"
                    ],
                    answer: 0,
                    explanation: "Line editing is stylistic and aesthetic; copyediting is grammatical, technical, and regulatory."
                  },
                  {
                    q: "Why is it counterproductive to perform copyediting before developmental revisions are finalized?",
                    options: [
                      "Copyeditors charge higher hourly rates than developmental editors",
                      "Chapters and scenes may be completely rewritten or deleted during the developmental stage",
                      "Publishers prohibit copyediting on digital word processors",
                      "Authors are legally banned from viewing copyedits early"
                    ],
                    answer: 1,
                    explanation: "Polishing sentences that get discarded during structural overhauls wastes valuable time and creative energy."
                  },
                  {
                    q: "What is the strict function of a proofread?",
                    options: [
                      "To rewrite weak character dialogue",
                      "To conduct a final quality check on formatted proof pages, catching orphans, typos, and layout glitches",
                      "To reorganize the chapter structure",
                      "To write the book's marketing blurb"
                    ],
                    answer: 1,
                    explanation: "Proofreading is the final safeguard on laid-out pages before printing or digital release."
                  }
                ]
              }
            },

            /* --- SECTION 2.2: Developmental Architecture & Narrative Pacing --- */
            {
              id: "sec-2-2",
              title: "Developmental Architecture & Narrative Pacing",
              duration: "11 mins",
              summary: "Diagnosing structural drag, scene tension, and three-act narrative mechanics.",
              content: [
                {
                  type: "canva",
                  id: "cnv-2-2",
                  title: "Canva Blueprint: The Narrative Pacing Wave",
                  caption: "Visualizing scene pulse, emotional troughs, and climax architecture.",
                  src: "https://www.canva.com/design/DAGQ7q5wY48/view?embed",
                  embedUrl: "https://www.canva.com/design/DAGQ7q5wY48/view?embed"
                },
                {
                  type: "text",
                  title: "Scene Function: Enter Late, Leave Early",
                  content: "<p>A common developmental flaw in novice manuscripts is the stagnant scene. Every scene in fiction must accomplish at least two things simultaneously: advance dramatic conflict and alter character state.</p><p>If a scene can be removed without collapsing the causal chain of the plot, it is decorative filler and must be cut or merged.</p>"
                },
                {
                  type: "example",
                  title: "Structural Scene Diagnosis",
                  before: "Chapter 6 consists of two detectives drinking coffee in silence for 12 pages discussing their childhood pets.",
                  after: "Merged into Chapter 7: The dialogue occurs in transit while they race to intercept a fleeing suspect.",
                  explanation: "Injecting urgency and physical action turns static backstory into dynamic character revelation under pressure."
                },
                {
                  type: "interactive_exercise",
                  id: "ex-2-2",
                  title: "Developmental Pacing Crucible",
                  category: "Structural Dynamics",
                  instructions: "The midpoint of a 90,000-word thriller lags severely. The protagonist spends three chapters waiting in a hotel lobby. Choose the structural intervention:",
                  draft: "Problem: Protagonist sits passively waiting for a phone call across three chapters.",
                  options: [
                    {
                      text: "Add sensory descriptions of the wallpaper and carpets to pass the time.",
                      correct: false,
                      feedback: "This amplifies reader boredom by lingering on static background dressing."
                    },
                    {
                      text: "Force an antagonistic complication: an operative breaks into the room, forcing an active escape choice.",
                      correct: true,
                      feedback: "Exemplary structural diagnosis! Converting passive waiting into an immediate crisis restores momentum and character agency.",
                      polishedText: "Resolution: Midpoint reversal - Hotel sanctuary compromised; protagonist forced into active evasive maneuver."
                    },
                    {
                      text: "Tell the reader that waiting is an authentic real-life experience.",
                      correct: false,
                      feedback: "Realism does not excuse dramatic inertia. Fiction requires emotional stakes and forward motion."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 2.2 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is the foundational requirement for every viable narrative scene?",
                    options: [
                      "It must contain at least one joke",
                      "It must alter the emotional or tactical status quo of the characters through conflict",
                      "It must be exactly 2,500 words long",
                      "It must introduce a brand new character"
                    ],
                    answer: 1,
                    explanation: "Scenes must produce a meaningful shift; if characters end where they began, the scene is static."
                  },
                  {
                    q: "What does the craft principle 'Enter late, leave early' prescribe for scene construction?",
                    options: [
                      "Arrive late to author meetings and exit before paying",
                      "Begin the scene as close to the core conflict as possible and end immediately upon its resolution",
                      "Only edit scenes late at night",
                      "Skip the climax of every chapter"
                    ],
                    answer: 1,
                    explanation: "Trimming narrative throat-clearing at the start and lingering aftermath at the end keeps pacing brisk."
                  },
                  {
                    q: "What is a 'sagging middle' in narrative manuscript diagnosis?",
                    options: [
                      "The spine binding of a thick printed book",
                      "A developmental failure in Act 2 where stakes plateau and characters react without initiative",
                      "A chapter with uneven paragraph indentation",
                      "An overabundance of dialogue tags"
                    ],
                    answer: 1,
                    explanation: "Act 2 often suffers from stagnation when the midpoint reversal lacks sufficient stakes escalation."
                  },
                  {
                    q: "How can an editor diagnose whether a subplot is contributing to or dragging down the primary narrative?",
                    options: [
                      "Count how many adjectives appear in the subplot",
                      "Determine if the subplot's thematic or emotional payoff directly impacts the protagonist's central crisis",
                      "Ask if the subplot has more dialogue than the main plot",
                      "Check if the subplot characters have shorter names"
                    ],
                    answer: 1,
                    explanation: "Effective subplots echo, contrast, or complicate the core dramatic question."
                  },
                  {
                    q: "When a developmental editor recommends 'killing your darlings', what does this classic maxim refer to?",
                    options: [
                      "Eliminating beloved sentences or scenes that do not serve the manuscript's greater purpose",
                      "Writing murder mysteries exclusively",
                      "Deleting all romantic relationships in the story",
                      "Refusing to work with debut authors"
                    ],
                    answer: 0,
                    explanation: "Even brilliant prose must be pruned if it impedes narrative momentum or thematic coherence."
                  }
                ]
              }
            },

            /* --- SECTION 2.3: Line Editing vs. Copyediting Mechanics --- */
            {
              id: "sec-2-3",
              title: "Line Editing vs. Copyediting Mechanics",
              duration: "10 mins",
              summary: "Mastering the boundary between musical line work and regulatory grammar enforcement.",
              content: [
                {
                  type: "image",
                  id: "img-2-3",
                  title: "Editorial Markup Reference: Proofreader's Marks",
                  caption: "Standardized editorial annotations for line and copy interventions.",
                  src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
                  alt: "Manuscript proofreading and editorial markings"
                },
                {
                  type: "text",
                  title: "The Dual Lenses: Artistry vs. Orthography",
                  content: "<p>Line editing asks: <em>Is this sentence melodious? Does the cadence mirror the emotional heartbeat of the scene?</em> Copyediting asks: <em>Is this grammatically sound according to the Chicago Manual of Style? Are hyphenations consistent throughout?</em></p>"
                },
                {
                  type: "example",
                  title: "Line Edit vs. Copyedit in Action",
                  before: "Raw Draft: 'The well known author said, that he would rather die, then write badly.'",
                  after: "Copyedit: 'The well-known author said that he would rather die than write badly.'\\nLine Edit: 'He swore he would rather perish than commit a clumsy sentence.'",
                  explanation: "The copyedit fixes the hyphen, comma splice, and 'then/than' error. The line edit elevates cadence and emotional punch."
                },
                {
                  type: "interactive_exercise",
                  id: "ex-2-3",
                  title: "Line & Copy Diagnosis Lab",
                  category: "Line vs Copy",
                  instructions: "Identify whether the following intervention is a Line Edit or a Copyedit: Changing 'each of the soldiers have rifles' to 'each of the soldiers has rifles'.",
                  draft: "Intervention: 'have' -> 'has' for subject-verb agreement with singular 'each'.",
                  options: [
                    {
                      text: "Line Edit (enhancing poetic rhythm and voice)",
                      correct: false,
                      feedback: "Incorrect. Subject-verb agreement is a strict grammatical rule, not a stylistic preference."
                    },
                    {
                      text: "Copyedit (enforcing grammatical rule of singular agreement with 'each')",
                      correct: true,
                      feedback: "Exact! Enforcing grammatical precision and syntax rules is the fundamental duty of copyediting.",
                      polishedText: "Classification: Copyedit (Subject-Verb Number Concordance)"
                    },
                    {
                      text: "Developmental Edit (rebuilding character motivation)",
                      correct: false,
                      feedback: "Subject-verb agreement is microscopic syntax, far removed from macro developmental architecture."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 2.3 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "Which of the following tasks falls squarely under the jurisdiction of a Copyeditor rather than a Line Editor?",
                    options: [
                      "Diagnosing rhythmic dissonance in a climactic speech",
                      "Ensuring that 'post office' is hyphenated consistently according to the chosen dictionary edition",
                      "Trimming three redundant paragraphs to increase suspense",
                      "Deepening the tragic resonance of an ending"
                    ],
                    answer: 1,
                    explanation: "Mechanical consistency, dictionary alignment, and style guide enforcement are copyediting hallmarks."
                  },
                  {
                    q: "What is the primary industry style guide for trade book publishing in the United States?",
                    options: [
                      "The AP Stylebook (Associated Press)",
                      "The Chicago Manual of Style (CMOS)",
                      "The MLA Handbook",
                      "The Bluebook: A Uniform System of Citation"
                    ],
                    answer: 1,
                    explanation: "CMOS is the definitive reference standard for trade, literary, and academic book publishing."
                  },
                  {
                    q: "When a line editor notices repeated sentence lengths across an entire chapter, what craft problem are they identifying?",
                    options: [
                      "Subject-verb disagreement",
                      "Monotony of cadence (lack of syntactic variation)",
                      "Dangling participles",
                      "Copyright infringement"
                    ],
                    answer: 1,
                    explanation: "Varying sentence length creates musicality and prevents prose from sounding droning or flat."
                  },
                  {
                    q: "What is an editor's 'Style Sheet'?",
                    options: [
                      "A catalog of fashionable clothes worn by the author",
                      "A living reference document tracking character names, timelines, spelling choices, and specific capitalization rules",
                      "The invoice sent to the publisher at project completion",
                      "A list of fonts installed on the editor's computer"
                    ],
                    answer: 1,
                    explanation: "A style sheet maintains meticulous internal consistency across long manuscripts."
                  },
                  {
                    q: "If an author deliberately breaks a grammatical rule to produce a poetic line effect, how should a line editor collaborate with the copyeditor?",
                    options: [
                      "Demand the author be dropped from the publishing house",
                      "Record the author's deliberate stylistic departure on the Style Sheet so copyediting does not revert it",
                      "Change it secretly without informing anyone",
                      "Add an apology note in the book's acknowledgments"
                    ],
                    answer: 1,
                    explanation: "Noting intentional departures on the style sheet protects poetic nuance from mechanical flattening."
                  }
                ]
              }
            }
          ],
          assessment: {
            title: "Module 2 Comprehensive Assessment",
            passingScore: 4,
            totalQuestions: 5,
            questions: [
              {
                q: "What fundamental risk occurs when an editor conflates line editing with developmental editing?",
                options: [
                  "The book becomes too cheap to manufacture",
                  "The editor wastes hours polishing sentence-level prose in chapters that require fundamental structural amputation",
                  "The font size increases unintentionally",
                  "The copyright expires prematurely"
                ],
                answer: 1,
                explanation: "Structural health must always precede stylistic polish in the editorial hierarchy."
              },
              {
                q: "In narrative developmental diagnosis, what is the 'Core Dramatic Question'?",
                options: [
                  "The author's salary negotiation question",
                  "The central dilemma or goal driving the protagonist's arc that the story promises to answer by the climax",
                  "The question asked by the printer about paper weight",
                  "The dedication line on the title page"
                ],
                answer: 1,
                explanation: "The core dramatic question establishes the narrative engine and anchors reader investment."
              },
              {
                q: "Which style manual governs literary trade publishing, and what is its standard companion dictionary?",
                options: [
                  "APA Style and the Oxford English Dictionary",
                  "The Chicago Manual of Style (CMOS) and Merriam-Webster's Collegiate Dictionary",
                  "MLA Handbook and Wikipedia",
                  "AP Stylebook and Cambridge Dictionary"
                ],
                answer: 1,
                explanation: "Trade publishing relies on CMOS paired with Merriam-Webster's Collegiate Dictionary as standard."
              },
              {
                q: "What is the defining attribute of a stagnant scene requiring structural intervention?",
                options: [
                  "It has fewer than three adjectives",
                  "It leaves character relationships, conflict status, and knowledge states unchanged from start to finish",
                  "It is set in an outdoor location",
                  "It contains dialogue between more than two speakers"
                ],
                answer: 1,
                explanation: "Without change or conflict escalation, a scene ceases to be drama and becomes dead weight."
              },
              {
                q: "How does a master editor preserve idiosyncratic author voice during rigorous line polish?",
                options: [
                  "By never changing any word under any circumstances",
                  "By distinguishing between intentional rhythmic deviations and accidental mechanical errors",
                  "By rewriting dialogue to match standard textbook speech",
                  "By eliminating all metaphors and similes"
                ],
                answer: 1,
                explanation: "The master editor honors deliberate aesthetic choices while clarifying unintentional clumsiness."
              }
            ]
          }
        },

        /* =================================================================
         * MODULE 3: Editor–Author Relationship
         * ================================================================= */
        {
          id: "mod-3",
          num: 3,
          title: "Editor–Author Relationship",
          description: "Author psychology, diplomatic marginalia, and the master editorial letter.",
          passingScore: 4,
          sections: [
            /* --- SECTION 3.1: The Psychology of Manuscript Critique --- */
            {
              id: "sec-3-1",
              title: "The Psychology of Manuscript Critique",
              duration: "9 mins",
              summary: "Navigating vulnerability, defensiveness, and authorial attachment.",
              content: [
                {
                  type: "audio",
                  id: "aud-3-1",
                  title: "Audio Masterclass: Empathy in Critique",
                  caption: "Dean Julian Sterling discusses managing author anxiety and building collaborative trust.",
                  src: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
                  instructor: "Dean Julian Sterling",
                  duration: "04:10"
                },
                {
                  type: "text",
                  title: "The Manuscript as an Organ of the Author",
                  content: "<p>Writers do not hand you a neutral stack of paper; they hand you their exposed nervous system. Even experienced authors experience deep vulnerability upon receiving developmental feedback.</p><div class=\\"callout-quote\\">\\"A critique that crushes the author's spirit will never produce a great revision. The editor's primary psychological goal is to make the author eager to sit down at the desk again.\\"</div>"
                },
                {
                  type: "example",
                  title: "Destructive vs. Constructive Feedback Framing",
                  before: "Marginal Note: 'This chapter makes no sense. The climax is completely unearned and your villain is a cartoon cliché.'",
                  after: "Constructive Note: 'The confrontation here has immense potential! If we reveal Malakor's hidden motive two scenes earlier, this climax will land with devastating emotional weight.'",
                  explanation: "The first note attacks the author's competence; the second diagnoses the issue and points toward empowering creative solutions."
                },
                {
                  type: "interactive_exercise",
                  id: "ex-3-1",
                  title: "Editorial Diplomacy Crucible",
                  category: "Author Psychology",
                  instructions: "An author's emotional climax feels melodramatic. Choose the margin query that inspires revision without triggering defensiveness:",
                  draft: "Author's draft: 'She wept a million rivers of agonizing sorrow, tearing her hair.'",
                  options: [
                    {
                      text: "Query: 'This is awful, amateur melodrama. Delete it immediately.'",
                      correct: false,
                      feedback: "Hostile criticism generates immediate defensiveness and breaks author-editor collaboration."
                    },
                    {
                      text: "Query: 'Elena's grief here is profound. If we focus on a single concrete detail—like her hands struggling with the locket—her heartbreak will feel even more raw and immediate for the reader.'",
                      correct: true,
                      feedback: "Exemplary diplomacy! Acknowledging the emotional objective while offering a concrete craft pathway inspires the author to elevate the prose.",
                      polishedText: "Diplomatic Query: Validate emotional intent + provide concrete sensory grounding pathway."
                    },
                    {
                      text: "Query: 'Nobody cries like this. Fix your grammar.'",
                      correct: false,
                      feedback: "Dismissive and inaccurate; the flaw is emotional staging, not grammar."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 3.1 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is the psychological impact of purely negative manuscript feedback on an author?",
                    options: [
                      "It makes them work faster and write longer books",
                      "It induces creative paralysis and defensive entrenchment, impeding revision",
                      "It guarantees an instant bestseller",
                      "It forces them to switch to non-fiction writing"
                    ],
                    answer: 1,
                    explanation: "Crushing an author's confidence causes resistance and hinders the revision process."
                  },
                  {
                    q: "What is the 'Praise-to-Critique Ratio' recommended for developmental notes?",
                    options: [
                      "100% critique, zero praise to keep them humble",
                      "Grounding critique in genuine recognition of the manuscript's strengths so the author knows what to preserve",
                      "Fabricating false compliments on every sentence",
                      "Refusing to write any written notes"
                    ],
                    answer: 1,
                    explanation: "Identifying what works gives the author a solid artistic anchor when overhauling weaker elements."
                  },
                  {
                    q: "How should an editor frame a major plot diagnosis in marginal notes?",
                    options: [
                      "As an authoritarian decree: 'You must delete this character'",
                      "As a collaborative inquiry: 'What if we tested...?' or 'Here is what the reader experiences when...'",
                      "As a threat to terminate the publishing contract",
                      "As an anonymous complaint"
                    ],
                    answer: 1,
                    explanation: "Framing queries as reader experiences respects author agency and fosters collaborative solutions."
                  },
                  {
                    q: "When an author responds defensively to an editorial query, what is the best initial response?",
                    options: [
                      "Immediately escalate the argument to company executives",
                      "Listen empathetically to understand the underlying creative intent that was obscured on the page",
                      "Accept all errors and publish the unedited book",
                      "Insult the author's writing education"
                    ],
                    answer: 1,
                    explanation: "Defensiveness usually signals that the author's vision was not fully translated into words."
                  },
                  {
                    q: "Why is authorial trust considered an editor's most valuable asset?",
                    options: [
                      "Because it allows the editor to charge double rates",
                      "Because an author who trusts you will willingly undertake radical, challenging developmental overhauls",
                      "Because it makes the legal contract shorter",
                      "Because trust eliminates the need for proofreading"
                    ],
                    answer: 1,
                    explanation: "Major structural revisions require profound vulnerability; trust makes that bravery possible."
                  }
                ]
              }
            },

            /* --- SECTION 3.2: Drafting the Masterclass Editorial Letter --- */
            {
              id: "sec-3-2",
              title: "Drafting the Masterclass Editorial Letter",
              duration: "10 mins",
              summary: "The definitive document: structure, rhetoric, and developmental roadmaps.",
              content: [
                {
                  type: "video",
                  id: "vid-3-2",
                  title: "Video Masterclass: Anatomy of the Editorial Letter",
                  caption: "Senior Editor Claire Montgomery dissects a real 8-page developmental letter.",
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                  instructor: "Claire Montgomery",
                  badge: "Editorial Masterwork",
                  duration: "04:30"
                },
                {
                  type: "text",
                  title: "The Sovereign Document of Publishing",
                  content: "<p>The editorial letter (or memo) is the intellectual centerpiece of developmental editing. Ranging from 4 to 15 single-spaced pages, it translates chaotic impressions into an inspiring, systematic roadmap for the next draft.</p><p>Key structural sections include: <strong>The Salutation & Celebration of Vision</strong>, <strong>Core Thematic Overview</strong>, <strong>Character Diagnostics</strong>, <strong>Pacing & Plot Architecture</strong>, and <strong>Practical Revision Roadmap</strong>.</p>"
                },
                {
                  type: "document",
                  id: "doc-3-2",
                  title: "Sample Master Editorial Letter Template",
                  caption: "Complete annotated developmental letter layout with structural headings and diagnostic frameworks.",
                  src: "#",
                  fileName: "Litdom_Master_Editorial_Letter_Template.pdf",
                  fileSize: "850 KB"
                },
                {
                  type: "example",
                  title: "Opening the Editorial Letter: Calibration",
                  before: "'Dear Author, I finished your book. Here are all 47 problems that need immediate fixing before this is readable.'",
                  after: "'Dear Eleanor, Reading The Shadow of the Spire has been a captivating experience. Your voice is luminous, and your worldbuilding has a rich tactile weight. As we prepare this manuscript for readers, our work together will focus on unlocking the full dramatic potential of Act 2...'",
                  explanation: "The second letter establishes partnership, honors creative ambition, and sets a collaborative tone for rigorous revision."
                }
              ],
              assessment: {
                title: "Section 3.2 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is the primary function of the developmental editorial letter?",
                    options: [
                      "To provide a comprehensive, prioritized strategic blueprint for revising the manuscript's macro elements",
                      "To list every single typo and punctuation mark in the book",
                      "To calculate printer costs and paper grain specifications",
                      "To replace the book's promotional jacket blurb"
                    ],
                    answer: 0,
                    explanation: "The editorial letter synthesizes overarching themes, character arcs, and structural revisions into a clear action plan."
                  },
                  {
                    q: "Where should an editor discuss typographical errors and serial commas?",
                    options: [
                      "On page 1 of the developmental editorial letter",
                      "In the copyediting phase via in-line Track Changes, never in the macro developmental letter",
                      "In the book's front dedication",
                      "In personal text messages to the author's family"
                    ],
                    answer: 1,
                    explanation: "Microscopic syntax issues do not belong in a high-level developmental letter."
                  },
                  {
                    q: "How should an editorial letter be organized for maximum clarity?",
                    options: [
                      "Chronologically page by page from page 1 to 400",
                      "Topically by major structural pillar: Vision & Praise → Theme → Characters → Pacing/Plot → Revision Roadmap",
                      "Randomly as thoughts occur to the editor",
                      "Alphabetically by character names"
                    ],
                    answer: 1,
                    explanation: "Topical organization helps the author grasp broad architectural issues rather than getting lost in minute details."
                  },
                  {
                    q: "Why is a concrete 'Next Steps Revision Roadmap' essential at the close of an editorial letter?",
                    options: [
                      "It provides clear, bite-sized revision phases so the author does not feel overwhelmed by the task ahead",
                      "It tells the author how much to tip the editor",
                      "It informs the marketing team when to launch social media ads",
                      "It is legally required by copyright law"
                    ],
                    answer: 0,
                    explanation: "Breaking massive developmental revisions into structured phases prevents creative overwhelm."
                  },
                  {
                    q: "What tone should an editor maintain throughout the entire editorial letter?",
                    options: [
                      "Sarcastic and aloof",
                      "Rigorous, intellectually incisive, empathetic, and relentlessly constructive",
                      "Completely uncritical flattery",
                      "Authoritarian and demanding"
                    ],
                    answer: 1,
                    explanation: "Great editors combine high artistic standards with deep empathy and constructive problem-solving."
                  }
                ]
              }
            },

            /* --- SECTION 3.3: Navigating Creative Disagreements & Resistance --- */
            {
              id: "sec-3-3",
              title: "Navigating Creative Disagreements & Resistance",
              duration: "8 mins",
              summary: "Resolving impasses, author pushback, and maintaining editorial integrity.",
              content: [
                {
                  type: "canva",
                  id: "cnv-3-3",
                  title: "Canva Deck: The Conflict Resolution Matrix",
                  caption: "Strategic pathways for resolving author-editor impasses without breaking collaboration.",
                  src: "https://www.canva.com/design/DAGQ7q5wY48/view?embed",
                  embedUrl: "https://www.canva.com/design/DAGQ7q5wY48/view?embed"
                },
                {
                  type: "text",
                  title: "The Author's Ultimate Sovereignty",
                  content: "<p>Unless a manuscript contains defamatory libel, factual fraud, or hate speech, the author owns the copyright and holds ultimate artistic veto. The editor's job is not to enforce surrender, but to ensure that whatever choice the author makes is executed with maximum craft clarity.</p><div class=\\"callout-quote\\">\\"If an author rejects your solution, do not fight for your specific idea. Dig deeper to discover the underlying problem you both agree exists, and let the author invent their own solution.\\"</div>"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-3-3",
                  title: "Creative Impasse Resolution Lab",
                  category: "Conflict Resolution",
                  instructions: "The author rejects your suggestion to kill off a redundant mentor character. How do you respond?",
                  draft: "Author response: 'I refuse to kill Master Caleb. He is too important to my world!'",
                  options: [
                    {
                      text: "Secretly delete the character right before sending the file to the typesetter.",
                      correct: false,
                      feedback: "Unforgivable breach of editorial ethics and trust."
                    },
                    {
                      text: "Shift focus to the underlying craft problem: 'I respect Caleb's importance! The core issue is that he currently solves the climax for the protagonist, stealing her agency. If Caleb remains alive, how can we ensure the protagonist achieves the victory through her own grit?'",
                      correct: true,
                      feedback: "Masterful mediation! You preserve the author's emotional boundary while protecting the dramatic craft requirement of protagonist agency.",
                      polishedText: "Diplomatic Shift: Validate character retention + redirect focus to restoring protagonist agency."
                    },
                    {
                      text: "Tell the author that their book will be an embarrassing failure unless they obey your instructions.",
                      correct: false,
                      feedback: "Hostile, unprofessional, and destructive to creative partnership."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 3.3 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "Who holds the ultimate artistic decision-making authority over a literary manuscript?",
                    options: [
                      "The editor",
                      "The author (whose name and copyright appear on the work)",
                      "The printer",
                      "The bookstore cashier"
                    ],
                    answer: 1,
                    explanation: "The author retains creative sovereignty over their manuscript; the editor advises and guides."
                  },
                  {
                    q: "When an author adamantly rejects an editor's suggested plot change, what is the best course of action?",
                    options: [
                      "Argue until the author surrenders in tears",
                      "Step back from the specific prescription, identify the root symptom, and invite the author to propose their own remedy",
                      "Cancel the author's royalties immediately",
                      "Leave a scathing review online"
                    ],
                    answer: 1,
                    explanation: "Focusing on the underlying dramatic problem allows the author to find an organic solution they love."
                  },
                  {
                    q: "What is an 'editorial hill to die on'?",
                    options: [
                      "A scenic hiking location for publishing conferences",
                      "A rare, non-negotiable issue (such as severe factual error, libel, or plagiarism) where an editor must stand firm",
                      "Every single punctuation query in the manuscript",
                      "A disagreement over font colors"
                    ],
                    answer: 1,
                    explanation: "Editors conserve capital for genuine emergencies involving legal, factual, or ethical integrity."
                  },
                  {
                    q: "Why is it dangerous for an editor to fall in love with their own proposed solutions?",
                    options: [
                      "Because the editor might demand co-author royalties",
                      "Because the editor's job is diagnosing problems, not co-writing the manuscript in their own image",
                      "Because editors are not allowed to be creative",
                      "Because publishers forbid editors from speaking to writers"
                    ],
                    answer: 1,
                    explanation: "The best solution is always the one that originates organically from the author's creative engine."
                  },
                  {
                    q: "How does an experienced editor differentiate between an author being 'defensive' versus 'protective of authentic voice'?",
                    options: [
                      "By listening closely to determine whether the author is protecting clarity or defending sloppy execution",
                      "By consulting astrological star signs",
                      "Defensiveness and voice protection are completely identical",
                      "By asking the author's parents"
                    ],
                    answer: 0,
                    explanation: "Understanding when an author is defending intentional craft nuance versus resisting hard work is key."
                  }
                ]
              }
            }
          ],
          assessment: {
            title: "Module 3 Comprehensive Assessment",
            passingScore: 4,
            totalQuestions: 5,
            questions: [
              {
                q: "What is the ultimate objective of the developmental editorial letter?",
                options: [
                  "To catalog typos",
                  "To provide an inspiring, macro-strategic blueprint that energizes the author to tackle rigorous revision",
                  "To terminate publishing contracts",
                  "To dictate marketing copy"
                ],
                answer: 1,
                explanation: "The editorial letter is the master architectural document that guides and inspires deep revision."
              },
              {
                q: "How should an editor respond when an author rejects a specific suggested plot remedy?",
                options: [
                  "Insist on the remedy or resign",
                  "Clarify the underlying diagnostic symptom and support the author in developing their own alternate solution",
                  "Ignore the problem completely and do nothing",
                  "Alter the text without telling the author"
                ],
                answer: 1,
                explanation: "Collaborative editors focus on the underlying craft problem, welcoming author-driven remedies."
              },
              {
                q: "What role does psychological empathy play in high-level editorial stewardship?",
                options: [
                  "It causes editors to miss deadlines",
                  "It fosters psychological safety, allowing authors to embrace demanding structural surgery with trust",
                  "It is an obstacle to professional editing",
                  "It eliminates the need for contracts"
                ],
                answer: 1,
                explanation: "Trust and empathy enable authors to navigate the vulnerability of profound manuscript overhaul."
              },
              {
                q: "Which element does NOT belong in an overarching developmental letter?",
                options: [
                  "Thematic analysis",
                  "Character arc diagnostics",
                  "Punctuation corrections and spelling inconsistency lists",
                  "Macro narrative pacing recommendations"
                ],
                answer: 2,
                explanation: "Microscopic punctuation and spelling belong in copyediting in-line markup, not the developmental letter."
              },
              {
                q: "What defines editorial mastery in author collaboration at Litdom Academy?",
                options: [
                  "Forcing the author to adopt the editor's personal literary style",
                  "Cultivating the author's singular artistic voice to its highest potential through diagnostic clarity and restraint",
                  "Writing at least three chapters of the book yourself",
                  "Ensuring every book wins a commercial award"
                ],
                answer: 1,
                explanation: "Litdom editors amplify the author's singular genius with humility, precision, and craft stewardship."
              }
            ]
          }
        },

        /* =================================================================
         * MODULE 4: Editorial Ethics & Integrity
         * ================================================================= */
        {
          id: "mod-4",
          num: 4,
          title: "Editorial Ethics & Integrity",
          description: "Confidentiality, intellectual property, plagiarism, AI disclosure, and sensitivity.",
          passingScore: 4,
          sections: [
            /* --- SECTION 4.1: Confidentiality & Intellectual Property --- */
            {
              id: "sec-4-1",
              title: "Confidentiality & Intellectual Property",
              duration: "9 mins",
              summary: "Fiduciary responsibilities, non-disclosure, and protecting unpublished intellectual property.",
              content: [
                {
                  type: "video",
                  id: "vid-4-1",
                  title: "Video Masterclass: Legal Fiduciary Duties",
                  caption: "Litigation attorney and publishing consultant Marcus Vance on non-disclosure and copyright protection.",
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                  instructor: "Marcus Vance, Esq.",
                  badge: "Publishing Law",
                  duration: "03:50"
                },
                {
                  type: "text",
                  title: "The Sacred Trust of Unpublished Manuscripts",
                  content: "<p>When an author sends you an unpublished draft, they entrust you with their legal intellectual property and vulnerable creative labor. Leaking plot twists, sharing manuscript files without consent, or discussing private author revisions violates both ethical standards and contractual fiduciary duties.</p>"
                },
                {
                  type: "resource",
                  id: "res-4-1",
                  title: "Standard Editorial NDA & Fiduciary Agreement",
                  description: "Standard model non-disclosure agreement protecting unpublished manuscripts and author identity.",
                  fileName: "Litdom_Standard_Editorial_NDA.pdf",
                  fileSize: "380 KB",
                  downloadUrl: "#"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-4-1",
                  title: "Confidentiality Protocol Challenge",
                  category: "Editorial Ethics",
                  instructions: "A high-profile author sends you an early draft of an anticipated fantasy sequel. A literary friend asks you: 'Does the main character die at the end?' What is your ethical obligation?",
                  draft: "Scenario: Friend asks you for private manuscript plot spoilers over dinner.",
                  options: [
                    {
                      text: "Tell them the spoiler in confidence, asking them not to post it online.",
                      correct: false,
                      feedback: "Severe breach of confidentiality. Even private disclosure violates fiduciary trust."
                    },
                    {
                      text: "Maintain absolute confidentiality and decline to confirm or deny any details: 'I hold strict client confidentiality and cannot discuss unpublished manuscripts.'",
                      correct: true,
                      feedback: "Exemplary professional integrity! Protecting the author's unpublished work is non-negotiable.",
                      polishedText: "Protocol: Strict non-disclosure maintained. Client work protected without exception."
                    },
                    {
                      text: "Charge your friend $50 for a leaked copy of Chapter 30.",
                      correct: false,
                      feedback: "Illegal, criminal, and results in immediate professional disbarment."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 4.1 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is an editor's primary legal and ethical obligation regarding unpublished manuscripts?",
                    options: [
                      "Share interesting excerpts with personal friends for feedback",
                      "Maintain absolute confidentiality and protect the author's intellectual property from unauthorized disclosure",
                      "Sell early draft copies to literary blogs",
                      "Post plot summaries on social media to generate buzz"
                    ],
                    answer: 1,
                    explanation: "Unpublished manuscripts are confidential intellectual property held under strict professional trust."
                  },
                  {
                    q: "What legal document typically establishes the confidentiality parameters between a freelance editor and an author?",
                    options: [
                      "A Non-Disclosure Agreement (NDA) or confidentiality clause within the editorial service agreement",
                      "A library card application",
                      "A Wikipedia attribution license",
                      "A Certificate of Deposit"
                    ],
                    answer: 0,
                    explanation: "NDAs and contractual confidentiality clauses define the legal duty of care for sensitive materials."
                  },
                  {
                    q: "If an editor inadvertently leaks an author's manuscript to an unauthorized third party, what consequences may follow?",
                    options: [
                      "Immediate promotion to senior editor",
                      "Breach of contract litigation, loss of professional reputation, and potential damages for copyright infringement",
                      "A minor verbal warning with no legal consequence",
                      "Automatic receipt of royalty bonuses"
                    ],
                    answer: 1,
                    explanation: "Leaking proprietary drafts exposes the editor to severe legal liability and career termination."
                  },
                  {
                    q: "Can an editor claim partial copyright over a book because they contributed significant developmental suggestions?",
                    options: [
                      "Yes, editors automatically own 50% of the book",
                      "No, editing constitutes work-for-hire or advisory stewardship; the author retains full copyright ownership unless explicitly contracted otherwise",
                      "Only if the book wins a Pulitzer Prize",
                      "Yes, but only for the chapters they edited in Track Changes"
                    ],
                    answer: 1,
                    explanation: "Standard publishing custom and copyright law keep ownership wholly with the author."
                  },
                  {
                    q: "How should an editor safely store client manuscript files on digital devices?",
                    options: [
                      "In public shared Google Drive folders without passwords",
                      "On password-protected, encrypted drives with secure backup protocols and access restrictions",
                      "On public computers in local coffee shops",
                      "By printing hundreds of copies and leaving them in common areas"
                    ],
                    answer: 1,
                    explanation: "Digital security protocols safeguard proprietary manuscripts against leaks and data breaches."
                  }
                ]
              }
            },

            /* --- SECTION 4.2: Author Agency & Creative Integrity --- */
            {
              id: "sec-4-2",
              title: "Author Agency & Creative Integrity",
              duration: "8 mins",
              summary: "Respecting cultural context, authentic voice, and author autonomy.",
              content: [
                {
                  type: "text",
                  title: "Honoring Cultural Nuance & Lived Experience",
                  content: "<p>Authors frequently write from specific cultural, regional, or linguistic traditions that may diverge from the editor's personal background. The ethical editor does not sanitize cultural idioms to match mainstream hegemony.</p><div class=\\"callout-quote\\">\\"Never mistake cultural difference for linguistic error. An editor's role is to ensure the author's cultural world resonates with truth, not to dilute it for comfort.\\"</div>"
                },
                {
                  type: "audio",
                  id: "aud-4-2",
                  title: "Audio Lecture: Cultural Idioms & Voice Integrity",
                  caption: "Prof. Arthur Pendelton on preserving authentic colloquial idioms and linguistic heritage.",
                  src: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
                  instructor: "Prof. Arthur Pendelton",
                  duration: "03:30"
                },
                {
                  type: "example",
                  title: "Cultural Nuance vs. Mechanical Correction",
                  before: "Manuscript: 'She sucked her teeth and made a tsk sound, giving him side-eye.'\\nEditor Note: 'This is informal slang; change to 'She made a vocalization of annoyance.''",
                  after: "Masterclass Editorial Choice: Retain the rich, culturally specific gesture intact without flattening intervention.",
                  explanation: "Sanitizing vibrant cultural mannerisms strips the prose of visceral character reality."
                }
              ],
              assessment: {
                title: "Section 4.2 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "How should an ethical editor handle culturally specific idioms and vocabulary?",
                    options: [
                      "Replace them with generic standard American or British English",
                      "Respect their authenticity, checking for internal consistency while avoiding sanitization",
                      "Require the author to add parenthetical footnotes defining every colloquial word",
                      "Delete all passages featuring multicultural expressions"
                    ],
                    answer: 1,
                    explanation: "Preserving cultural authenticity honors the author's voice and broadens literary richness."
                  },
                  {
                    q: "What is the function of a 'Sensitivity / Authenticity Reader' in modern publishing?",
                    options: [
                      "To censor books and ban challenging themes",
                      "To examine manuscripts for inaccurate cultural representation, harmful stereotypes, and authentic lived nuance",
                      "To proofread punctuation in children's books exclusively",
                      "To calculate marketing algorithms for bestsellers"
                    ],
                    answer: 1,
                    explanation: "Authenticity readers provide specialized cultural insight to ensure authentic portrayal and avoid cliché."
                  },
                  {
                    q: "When an author writes about a background unfamiliar to the editor, what is the editor's ethical duty?",
                    options: [
                      "Impose their own assumptions on the text",
                      "Research thoroughly, query with curiosity, and recommend specialized authenticity consultation if needed",
                      "Refuse to read the manuscript",
                      "Rewrite the characters to match the editor's hometown"
                    ],
                    answer: 1,
                    explanation: "Ethical editors approach unfamiliar cultural contexts with scholarly humility and dedicated research."
                  },
                  {
                    q: "Why is it unethical for an editor to insert their own political or personal manifesto into an author's manuscript?",
                    options: [
                      "Because the editor does not own the book or bear public responsibility for its message",
                      "Because publishers only allow historical non-fiction",
                      "Because politics are illegal in fiction",
                      "Because readers only buy books with pictures"
                    ],
                    answer: 0,
                    explanation: "Usurping an author's book to preach the editor's personal ideology violates editorial integrity."
                  },
                  {
                    q: "What defines 'Author Agency' in the editorial partnership?",
                    options: [
                      "The author's right to choose their literary agent",
                      "The author's fundamental right to make final creative determinations about their own narrative",
                      "The author's legal requirement to attend all marketing events",
                      "The author's ability to edit other writers' books"
                    ],
                    answer: 1,
                    explanation: "Author agency centers the writer as the ultimate creator and sovereign steward of their art."
                  }
                ]
              }
            },

            /* --- SECTION 4.3: Attribution, Plagiarism & AI Disclosure --- */
            {
              id: "sec-4-3",
              title: "Attribution, Plagiarism & AI Disclosure",
              duration: "9 mins",
              summary: "Detection, copyright infringement, transparent attribution, and generative AI ethics.",
              content: [
                {
                  type: "canva",
                  id: "cnv-4-3",
                  title: "Canva Infographic: Plagiarism & AI Transparency Guide",
                  caption: "A taxonomy of plagiarism, fair use boundaries, and generative AI disclosure protocols.",
                  src: "https://www.canva.com/design/DAGQ7q5wY48/view?embed",
                  embedUrl: "https://www.canva.com/design/DAGQ7q5wY48/view?embed"
                },
                {
                  type: "text",
                  title: "The Editorial Line on Originality and AI",
                  content: "<p>Plagiarism is the mortal sin of publishing. An editor must possess sharp pattern-recognition to detect lifted passages, patchwriting, and uncredited citations. In the era of generative AI, the editor must also enforce transparency regarding algorithmic generation versus authentic human craftsmanship.</p>"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-4-3",
                  title: "Plagiarism & Attribution Crucible",
                  category: "Integrity & Citation",
                  instructions: "In a non-fiction manuscript, the author copies a 200-word paragraph verbatim from a scholarly journal without quotes or citation. How does the editor proceed?",
                  draft: "Manuscript contains uncredited verbatim text from an academic source.",
                  options: [
                    {
                      text: "Leave it alone; fair use allows taking any text under 500 words without permission.",
                      correct: false,
                      feedback: "Dangerous misconception! Verbatim copying without attribution is unambiguous plagiarism."
                    },
                    {
                      text: "Flag the passage immediately as verbatim plagiarism, requiring proper quotation marks, attribution, and formal citation (or complete authorial reformulation).",
                      correct: true,
                      feedback: "Essential ethical intervention! Protecting the author and publisher from copyright infringement is mandatory.",
                      polishedText: "Intervention: Mandatory attribution and citation protocol enforced."
                    },
                    {
                      text: "Slightly change two adjectives and keep it uncredited.",
                      correct: false,
                      feedback: "This is 'patchwriting'—a deceptive form of plagiarism that remains unethical."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 4.3 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is 'patchwriting' in manuscript editing?",
                    options: [
                      "Sewing colorful fabric patches onto a manuscript cover",
                      "Superficially altering a few words or rearranging sentences from a source without true synthesis or attribution",
                      "Writing quick chapter outlines on index cards",
                      "Translating text into computer code"
                    ],
                    answer: 1,
                    explanation: "Patchwriting is a deceptive form of intellectual theft that fails to synthesize or credit source material."
                  },
                  {
                    q: "What constitutes 'Fair Use' of copyrighted material in literary publishing?",
                    options: [
                      "Using any amount of text as long as you really enjoy the author's work",
                      "Limited, transformative use (such as brief quotes for critique, review, or parody) that does not harm the market for the original",
                      "Re-publishing an entire rival novel under a different title",
                      "Copying song lyrics without paying licensing fees"
                    ],
                    answer: 1,
                    explanation: "Fair use is strictly limited and transformative; song lyrics, in particular, almost always require paid licensing."
                  },
                  {
                    q: "Why must an editor be cautious about song lyrics appearing in fiction drafts?",
                    options: [
                      "Because music lyrics are fiercely protected under music publisher copyrights and fair use rarely applies",
                      "Because readers dislike music in books",
                      "Because songs make the paper heavier to print",
                      "Because musicians are prohibited from reading fiction"
                    ],
                    answer: 0,
                    explanation: "Music publishers vigorously litigate lyric usage; quotes beyond song titles require explicit permissions."
                  },
                  {
                    q: "What is the ethical protocol when an author utilizes generative AI tools during drafting?",
                    options: [
                      "Conceal it completely from the publisher and public",
                      "Follow transparent disclosure guidelines according to publisher policy and copyright office registration standards",
                      "Claim the AI model was a human co-author named Claude",
                      "Delete all vowels from the manuscript"
                    ],
                    answer: 1,
                    explanation: "Transparency regarding generative tools protects legal copyrightability and institutional trust."
                  },
                  {
                    q: "What should an editor do if an author refuses to remove verifiable, blatant plagiarism from a draft?",
                    options: [
                      "Publish it anyway and split the lawsuit costs",
                      "Refuse to certify the manuscript and escalate the breach to the publishing executive or withdraw from freelance service",
                      "Send the author a complimentary box of chocolates",
                      "Delete the editor's name from the contract and stay quiet"
                    ],
                    answer: 1,
                    explanation: "An ethical editor cannot be complicit in intentional copyright fraud or plagiarism."
                  }
                ]
              }
            }
          ],
          assessment: {
            title: "Module 4 Comprehensive Assessment",
            passingScore: 4,
            totalQuestions: 5,
            questions: [
              {
                q: "What legal duty binds an editor regarding an unpublished manuscript entrusted to their care?",
                options: [
                  "The duty to read the book aloud on television",
                  "Strict fiduciary confidentiality and protection of proprietary intellectual property",
                  "The right to sell plot outlines to third-party screenwriters",
                  "No legal duty exists until the book is printed"
                ],
                answer: 1,
                explanation: "Unpublished manuscripts are confidential property held under legal and ethical fiduciary care."
              },
              {
                q: "Why must editors preserve culturally specific dialect and idioms rather than normalizing them?",
                options: [
                  "To save ink during the printing process",
                  "To honor authentic character voice, avoid cultural sanitization, and celebrate linguistic diversity",
                  "Because CMOS prohibits standard grammar in all modern novels",
                  "To confuse international readers"
                ],
                answer: 1,
                explanation: "Preserving authentic idioms safeguards cultural verisimilitude and artistic integrity."
              },
              {
                q: "What distinguishes legitimate paraphrasing from unethical 'patchwriting'?",
                options: [
                  "Legitimate paraphrasing completely digests and expresses ideas in original prose with citation; patchwriting merely swaps synonyms",
                  "Patchwriting is done with pens, while paraphrasing is done with computers",
                  "Paraphrasing is illegal in the United States",
                  "There is no difference between the two"
                ],
                answer: 0,
                explanation: "True synthesis reformulates ideas in original authorial structure and voice, giving credit where due."
              },
              {
                q: "Under U.S. and international copyright law, who owns the developmental changes suggested by an editor in Track Changes?",
                options: [
                  "The editor owns a copyright stake in the final book",
                  "The author retains full sole copyright; editorial guidance is advisory stewardship or work-for-hire",
                  "The software company that made the word processor",
                  "The national library archive"
                ],
                answer: 1,
                explanation: "Editorial contributions belong to the work-for-hire / stewardship domain, preserving single author ownership."
              },
              {
                q: "What is an editor's ultimate ethical boundary regarding their role?",
                options: [
                  "To act as the author's master",
                  "To act as a principled craftsman serving the reader's clarity while fiercely protecting authorial agency",
                  "To maximize word count for printer billings",
                  "To rewrite every book into their own autobiography"
                ],
                answer: 1,
                explanation: "Ethical editing is service: championing reader clarity while upholding author sovereignty."
              }
            ]
          }
        },

        /* =================================================================
         * MODULE 5: The Professional Editorial Pipeline
         * ================================================================= */
        {
          id: "mod-5",
          num: 5,
          title: "The Professional Editorial Pipeline",
          description: "From intake to first read, manuscript style sheets, reconciliation, and press preparation.",
          passingScore: 4,
          sections: [
            /* --- SECTION 5.1: From Manuscript Intake to First Blind Read --- */
            {
              id: "sec-5-1",
              title: "From Manuscript Intake to First Blind Read",
              duration: "9 mins",
              summary: "Establishing the intake audit, objective blind reading, and holistic manuscript diagnosis.",
              content: [
                {
                  type: "text",
                  title: "The Golden Rule of the First Read: Hands Off",
                  content: "<p>The biggest beginner mistake is opening a manuscript and immediately making red-pen corrections on page 1. You cannot judge a scene's necessity or understand a character's pacing until you have experienced the entire story as a reader.</p><div class=\\"callout-quote\\">\\"The first read is sacred. It is the only time you will ever experience the manuscript with virgin innocence. Never hold a pen during the first blind read.\\"</div>"
                },
                {
                  type: "video",
                  id: "vid-5-1",
                  title: "Video Masterclass: The Intake Audit & First Pass",
                  caption: "Managing Editor Julian Sterling outlines the four-step manuscript intake audit.",
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                  instructor: "Dean Julian Sterling",
                  badge: "Pipeline Masterclass",
                  duration: "04:15"
                },
                {
                  type: "document",
                  id: "doc-5-1",
                  title: "Manuscript Intake Diagnostic Checklist",
                  caption: "Standard editorial intake checklist: word count audit, font normalization, and structural assessment rubric.",
                  src: "#",
                  fileName: "Litdom_Intake_Audit_Checklist.pdf",
                  fileSize: "510 KB"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-5-1",
                  title: "Intake Protocol Lab",
                  category: "Editorial Intake",
                  instructions: "You receive an 85,000-word thriller draft. The author used 4 different fonts, random tab indentations, and colored highlights. What is your first technical step?",
                  draft: "Received file with erratic formatting, mismatched fonts, and multiple indent styles.",
                  options: [
                    {
                      text: "Begin correcting comma splices immediately on Chapter 1.",
                      correct: false,
                      feedback: "Violates the pipeline! Never edit raw text before formatting normalization."
                    },
                    {
                      text: "Perform formatting normalization: strip erratic styling, apply standard Times New Roman 12pt double-spaced body font, clean tabs to standard paragraph styles, and audit total word count.",
                      correct: true,
                      feedback: "Standard professional intake! Normalizing typography creates a clean baseline for objective reading.",
                      polishedText: "Protocol: Formatting baseline established (12pt standard, paragraph styles normalized, word count audited)."
                    },
                    {
                      text: "Send the file back and insult the author's word processor skills.",
                      correct: false,
                      feedback: "Unprofessional. Formatting normalization is a standard service."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 5.1 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "Why is it strictly forbidden to make line edits or markups during the first blind read of a manuscript?",
                    options: [
                      "Because the editor needs to save red ink",
                      "Because the editor cannot evaluate pacing, character trajectory, or structural necessity without knowing the whole narrative arc",
                      "Because copyright law prohibits notes on the first day",
                      "Because word processors crash if you edit on the first read"
                    ],
                    answer: 1,
                    explanation: "You only get one chance to experience the text innocently as a reader; marking text distorts that experience."
                  },
                  {
                    q: "What is the primary technical objective of the manuscript 'Intake Audit'?",
                    options: [
                      "Standardize font, spacing, and styles into a clean baseline file and verify complete word count",
                      "Design the final full-color book jacket",
                      "Email the author's relatives",
                      "Negotiate film adaptation rights"
                    ],
                    answer: 0,
                    explanation: "Cleaning erratic formatting ensures the editor and typesetter work from a reliable master file."
                  },
                  {
                    q: "What should an editor record immediately after completing the first blind read?",
                    options: [
                      "A grocery shopping list",
                      "Holistic diagnostic impressions: emotional resonance, confusion points, pacing peaks, and thematic coherence",
                      "Every typo in Chapter 3",
                      "The printer invoice total"
                    ],
                    answer: 1,
                    explanation: "Fresh, unadulterated holistic reactions capture what an authentic reader feels across the narrative journey."
                  },
                  {
                    q: "What standard manuscript format is traditionally used in trade publishing intake?",
                    options: [
                      "Single-spaced Comic Sans font in hot pink",
                      "12-point serif font (such as Times New Roman or Courier), double-spaced, 1-inch margins, left-aligned",
                      "All-caps bold text with zero paragraph breaks",
                      "Handwritten parchment in calligraphic ink"
                    ],
                    answer: 1,
                    explanation: "Standard double-spaced 12pt format provides legibility and space for editorial notes and markup."
                  },
                  {
                    q: "What is an editor evaluating when checking the 'macro pacing curve' during the first pass?",
                    options: [
                      "How fast the author can type on a keyboard",
                      "Whether narrative tension escalates appropriately toward the climax or sags under descriptive stagnation",
                      "How quickly the delivery service brings the manuscript",
                      "The number of pages per hour the editor reads"
                    ],
                    answer: 1,
                    explanation: "Macro pacing evaluates the rhythm of tension, release, and momentum across the entire book."
                  }
                ]
              }
            },

            /* --- SECTION 5.2: The Manuscript Style Sheet --- */
            {
              id: "sec-5-2",
              title: "The Manuscript Style Sheet",
              duration: "10 mins",
              summary: "Constructing the living lexicon: character timelines, spelling decisions, and house style rules.",
              content: [
                {
                  type: "text",
                  title: "The Living Lexicon of Editorial Consistency",
                  content: "<p>A style sheet is the authoritative bible created by the editor for a specific manuscript. Over a 100,000-word novel, an author will spell a fantasy town three different ways, change a character's eye color from blue to hazel in Chapter 18, and alternate between 'okay' and 'OK'.</p><p>The style sheet tracks every proper noun, timeline beat, hyphenation decision, and worldbuilding term.</p>"
                },
                {
                  type: "document",
                  id: "doc-5-2",
                  title: "Master Editorial Style Sheet Template",
                  caption: "Fully categorized multi-tab reference sheet: Character Bible, Worldbuilding Glossary, Number Conventions, and Word List.",
                  src: "#",
                  fileName: "Litdom_Style_Sheet_Master_Template.pdf",
                  fileSize: "680 KB"
                },
                {
                  type: "example",
                  title: "Style Sheet Entry Example",
                  before: "In Chapter 3: 'Castle Stormwatch'\\nIn Chapter 12: 'Storm-watch Fortress'\\nIn Chapter 24: 'Stormwatch keep'",
                  after: "Style Sheet Master Record: 'Stormwatch Castle' (single word, capitalized, Castle capitalized when following specific name).",
                  explanation: "Documenting the canonical spelling prevents contradictory variations from slipping into the printed volume."
                },
                {
                  type: "interactive_exercise",
                  id: "ex-5-2",
                  title: "Style Sheet Compilation Lab",
                  category: "Style Sheets",
                  instructions: "You find the following two spellings in the manuscript: 'mid-morning' on page 42 and 'midmorning' on page 110. How do you resolve this?",
                  draft: "Discrepancy: 'mid-morning' vs 'midmorning'.",
                  options: [
                    {
                      text: "Leave both as they are to give variety to the reader.",
                      correct: false,
                      feedback: "Inconsistent spelling looks amateurish and disrupts professional reading."
                    },
                    {
                      text: "Consult Merriam-Webster Collegiate Dictionary (CMOS authority): M-W lists 'midmorning' as a closed compound. Adopt 'midmorning' on the Style Sheet and standardize throughout.",
                      correct: true,
                      feedback: "Flawless copyediting procedure! Consulting the chosen authority dictionary and documenting the canonical choice enforces total consistency.",
                      polishedText: "Style Sheet Record: 'midmorning' (closed per M-W Collegiate Dictionary; standardized across all chapters)."
                    },
                    {
                      text: "Flip a coin and pick randomly.",
                      correct: false,
                      feedback: "Editing relies on established lexicographical authority, not randomness."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 5.2 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What is the primary function of a Manuscript Style Sheet?",
                    options: [
                      "To track billing invoices and postage stamps",
                      "To maintain meticulous internal consistency across spelling, character traits, timelines, and grammatical conventions",
                      "To tell the author how to dress for media interviews",
                      "To replace the book's table of contents"
                    ],
                    answer: 1,
                    explanation: "The style sheet is the living canonical record guaranteeing editorial and worldbuilding consistency."
                  },
                  {
                    q: "When an author invents fictional terminology or fantasy language in a novel, where should those rules be logged?",
                    options: [
                      "In the Worldbuilding & Glossary section of the Style Sheet",
                      "In the editor's personal diary",
                      "On the book's barcode sticker",
                      "Nowhere; consistency does not matter in fantasy"
                    ],
                    answer: 0,
                    explanation: "Logging invented terms ensures capitalization, spelling, and grammar of worldbuilding remain constant."
                  },
                  {
                    q: "What are the standard categories typically included in a comprehensive editorial style sheet?",
                    options: [
                      "Author hobbies, coffee preferences, and favorite sports teams",
                      "General Rules & Style Manuals used, Alphabetical Word List, Character List (with physical traits & spellings), Timeline, and Geography",
                      "Printer model numbers, paper warehouse addresses, and freight rates",
                      "Bookstore discount schedules"
                    ],
                    answer: 1,
                    explanation: "These sections cover both linguistic mechanics and narrative continuity."
                  },
                  {
                    q: "Who receives the completed style sheet when the editor finishes their pass?",
                    options: [
                      "The author, subsequent copyeditors, proofreaders, and the production typesetter",
                      "Bookstore customers who buy the book",
                      "The local library archivist exclusively",
                      "Nobody; the style sheet is destroyed immediately"
                    ],
                    answer: 0,
                    explanation: "The style sheet accompanies the manuscript through every production handoff to maintain uniformity."
                  },
                  {
                    q: "If the chosen dictionary (e.g. Merriam-Webster) does not contain a specific compound word, how does the editor proceed?",
                    options: [
                      "Leave it inconsistent across chapters",
                      "Establish a canonical rule based on CMOS principles, record it on the Style Sheet, and enforce it consistently",
                      "Ban the author from using compound words",
                      "Rewrite the sentence in French"
                    ],
                    answer: 1,
                    explanation: "The editor establishes a clear internal rule and documents it for all future editorial stages."
                  }
                ]
              }
            },

            /* --- SECTION 5.3: Author Reconciliation & Production Handoff --- */
            {
              id: "sec-5-3",
              title: "Author Reconciliation & Production Handoff",
              duration: "9 mins",
              summary: "Managing Track Changes, query resolution, clean file preparation, and typesetter handoff.",
              content: [
                {
                  type: "video",
                  id: "vid-5-3",
                  title: "Video Masterclass: Clean File Preparation & Production",
                  caption: "Production Director Thomas Sterling on preparing files for typography, InDesign, and print casting.",
                  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                  instructor: "Thomas Sterling",
                  badge: "Production Pipeline",
                  duration: "04:00"
                },
                {
                  type: "text",
                  title: "Reconciliation: The Final Polish of Partnership",
                  content: "<p>Once the author returns the edited manuscript with their responses to your queries, the reconciliation phase begins. In this stage, the editor reviews author-accepted edits, resolves remaining queries, cleans extraneous Track Changes markup, and delivers pristine files ready for interior layout and typesetting.</p>"
                },
                {
                  type: "resource",
                  id: "res-5-3",
                  title: "Production Handoff Checklist",
                  description: "Final quality assurance scorecard before shipping manuscript files to typesetting and interior layout.",
                  fileName: "Litdom_Production_Handoff_Scorecard.pdf",
                  fileSize: "440 KB",
                  downloadUrl: "#"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-5-3",
                  title: "Production File Preparation Challenge",
                  category: "Production Handoff",
                  instructions: "Before handing a final manuscript file to the interior typesetter (book designer), what must the editor ensure regarding Track Changes and comments?",
                  draft: "Manuscript contains 84 unresolved margin queries and visible Track Changes markings.",
                  options: [
                    {
                      text: "Send the file with all red markup and arguments visible so the typesetter can read the debates.",
                      correct: false,
                      feedback: "Disastrous! Typesetters require a clean, finalized file. Unresolved markup causes layout errors."
                    },
                    {
                      text: "Accept all finalized revisions, delete all resolved margin comments, verify clean semantic hierarchy (H1/H2 styles), and provide a clean master document alongside the Style Sheet.",
                      correct: true,
                      feedback: "Flawless production handoff! Providing clean master files with proper heading tags ensures seamless typesetting.",
                      polishedText: "Handoff Status: Clean master file generated; all changes accepted; margin queries resolved; style sheet packaged."
                    },
                    {
                      text: "Convert the file into a JPEG image.",
                      correct: false,
                      feedback: "Typesetters cannot layout books from image files."
                    }
                  ]
                }
              ],
              assessment: {
                title: "Section 5.3 Knowledge Certification",
                passingScore: 3,
                totalQuestions: 5,
                questions: [
                  {
                    q: "What does 'Reconciliation' mean in the professional editorial workflow?",
                    options: [
                      "An apology letter sent to the author",
                      "The systematic process of reviewing author responses to queries, accepting agreed changes, and finalizing the text",
                      "The accounting calculation of printing costs",
                      "The author firing the editor"
                    ],
                    answer: 1,
                    explanation: "Reconciliation aligns editor queries and author choices into a single unified master draft."
                  },
                  {
                    q: "Why must all Track Changes markup be accepted and comments removed before sending files to the typesetter?",
                    options: [
                      "Because typesetters charge extra for every comment left in the file",
                      "Because typesetting software (like Adobe InDesign) can import unresolved comments or deleted text directly into the page proofs",
                      "Because margin comments increase the weight of paper",
                      "Because comments violate postal shipping rules"
                    ],
                    answer: 1,
                    explanation: "Unresolved markup can accidentally corrupt the layout file or appear in printed proofing sheets."
                  },
                  {
                    q: "What is 'semantic styling' in manuscript file preparation for typesetters?",
                    options: [
                      "Color-coding adjectives with highlighter pens",
                      "Using standardized paragraph styles (e.g. Chapter Title, H1, H2, Body Text, Block Quote) so layout software maps them accurately",
                      "Adding emojis next to character names",
                      "Writing in rhyming couplets"
                    ],
                    answer: 1,
                    explanation: "Semantic styles ensure InDesign templates cleanly map manuscript hierarchy to book typography."
                  },
                  {
                    q: "What should an editor do if an author accidentally introduced new grammatical errors in their revisions during reconciliation?",
                    options: [
                      "Ignore them because the author wrote them",
                      "Quietly correct them or raise a swift, courteous query to ensure the newly added text maintains the established standard",
                      "Cancel the book's release immediately",
                      "Post the errors on social media"
                    ],
                    answer: 1,
                    explanation: "Editors conduct a clean sweep of author additions to prevent newly introduced errors from slipping through."
                  },
                  {
                    q: "What package of materials constitutes a complete, professional editorial handoff to production?",
                    options: [
                      "A single handwritten napkin note",
                      "The Clean Master Manuscript File, the Final Style Sheet, and any Art / Special Character logs",
                      "A box of random pens and old notebooks",
                      "The author's personal passport copy"
                    ],
                    answer: 1,
                    explanation: "The clean manuscript plus comprehensive style documentation provides everything production requires."
                  }
                ]
              }
            }
          ],
          assessment: {
            title: "Module 5 Comprehensive Assessment",
            passingScore: 4,
            totalQuestions: 5,
            questions: [
              {
                q: "Why is the first blind read of an intact manuscript considered sacred in editorial methodology?",
                options: [
                  "Because it is the only time the editor experiences the book with genuine reader innocence and emotional immersion",
                  "Because editors read faster on the first day",
                  "Because contracts stipulate that no pens can touch paper on Mondays",
                  "Because authors only allow one reading before publication"
                ],
                answer: 0,
                explanation: "The first read provides uncorrupted perception of pacing, suspense, and emotional narrative arc."
              },
              {
                q: "What is the primary role of the Manuscript Style Sheet throughout the production pipeline?",
                options: [
                  "To calculate author royalties",
                  "To serve as the living, authoritative record of spelling, timeline, character traits, and stylistic rules",
                  "To design the promotional bookstore poster",
                  "To replace the book's index"
                ],
                answer: 1,
                explanation: "The style sheet preserves meticulous continuity through line editing, copyediting, and proofreading."
              },
              {
                q: "What is the critical final step an editor must perform before delivering files to interior design and typesetting?",
                options: [
                  "Convert the file to audio",
                  "Accept all revisions, clear all margin comments, and provide a clean, semantically styled master document",
                  "Double the word count of the climax",
                  "Add thirty new footnotes"
                ],
                answer: 1,
                explanation: "Clean files prevent layout glitches, software crashes, and stray comments from contaminating proofs."
              },
              {
                q: "How does the professional editorial pipeline guarantee both artistic power and technical precision?",
                options: [
                  "By having one person do everything in a single 2-hour session",
                  "By establishing a disciplined sequence moving from macro structural diagnosis down to microscopic proof verification",
                  "By relying on spellcheck software without human intervention",
                  "By letting bookstore clerks make final text changes"
                ],
                answer: 1,
                explanation: "The hierarchical pipeline ensures big-picture storytelling and fine-grained syntax both receive mastery."
              },
              {
                q: "What is the ultimate definition of editorial mastery at Litdom Academy?",
                options: [
                  "Making every book sound like the editor wrote it",
                  "Clarifying and amplifying the author's singular artistic voice while leaving an invisible fingerprint of excellence",
                  "Finding the maximum number of errors on every page",
                  "Winning awards for the editor's personal brilliance"
                ],
                answer: 1,
                explanation: "Litdom editors work with profound humility, elevating the author's vision to immortal literature."
              }
            ]
          }
        }
      ],

      /* ===================================================================
       * CAPSTONE FINAL EXAMINATION: The Editorial Board Examination
       * 50 Comprehensive Questions Covering All 5 Curriculum Modules
       * Passing Requirement: 45 of 50 (90%)
       * =================================================================== */
      finalExam: {
        title: "The Editorial Board Examination",
        passingScore: 45,
        totalQuestions: 50,
        questions: [
          { q: "What is the primary role of an editor relative to the author?", options: ["To replace the author's voice with their own", "To act as the author's champion and reader's objective diagnostician", "To handle marketing and publicity", "To determine legal copyright royalties"], answer: 1 },
          { q: "Which editing level addresses overarching premise, pacing, and narrative architecture?", options: ["Copyediting", "Proofreading", "Developmental Editing", "Typesetting"], answer: 2 },
          { q: "Which editing level refines sentence musicality, cadence, and concision?", options: ["Line Editing", "Proofreading", "Fact-checking", "Index compilation"], answer: 0 },
          { q: "Which editing level enforces grammar, syntax, and house style rules like CMOS?", options: ["Copyediting", "Developmental Editing", "Plot architecture", "Sensitivity screening"], answer: 0 },
          { q: "What is proofreading strictly designed to accomplish?", options: ["Rewriting plot climaxes", "Catching final layout orphans, typos, and typesetting flaws", "Adding new secondary characters", "Conducting author interviews"], answer: 1 },
          { q: "Why is editorial humility essential when line editing an idiosyncratic author?", options: ["To avoid legal liability", "To preserve the author's singular voice rather than imposing editor preferences", "Because editors earn less than writers", "Because readers dislike good grammar"], answer: 1 },
          { q: "What is the 'Curse of Knowledge' in authoring early drafts?", options: ["The writer knowing real secrets", "The author assuming readers know details only pictured in the author's imagination", "Using too many scientific words", "Having a PhD in literature"], answer: 1 },
          { q: "What is the function of the developmental editorial letter?", options: ["To fire the author", "To provide a comprehensive, strategic blueprint for revising macro elements", "To print on the back cover", "To send to book clubs"], answer: 1 },
          { q: "Which of the following belongs in a style sheet?", options: ["Character eye colors, canonical fantasy spellings, and serial comma choice", "The editor's home address", "The printing press serial number", "The author's bank account"], answer: 0 },
          { q: "What should an editor do during the first blind read of an intact manuscript?", options: ["Correct every comma splice on page 1", "Experience the manuscript innocently as a reader without line-marking", "Rewrite the ending", "Design the chapter title fonts"], answer: 1 },
          { q: "What does 'Enter late, leave early' mean in scene construction?", options: ["Arrive late to editorial meetings", "Begin a scene close to conflict and end immediately upon its resolution", "Only edit after midnight", "Skip chapter 1 entirely"], answer: 1 },
          { q: "In third-person POV, what are 'filter words'?", options: ["Profanities", "Verbs of perception (saw, heard, felt) that increase psychic distance", "Adjectives ending in -ful", "Foreign language terms"], answer: 1 },
          { q: "Why should an editor cut 'Marcus saw the shadow move' to 'A shadow moved'?", options: ["To save paper", "To collapse psychic distance and immerse the reader in immediate action", "Because 'Marcus' is an unpopular name", "Because shadows cannot move"], answer: 1 },
          { q: "What is an editor's responsibility regarding unpublished client drafts?", options: ["Share excerpts on personal social media", "Maintain absolute fiduciary confidentiality and protect intellectual property", "Sell early copies to bloggers", "Give drafts to competing authors"], answer: 1 },
          { q: "What is 'patchwriting'?", options: ["Sewing book bindings by hand", "Superficially altering a few words of another's work without synthesis or citation", "Writing short chapters", "Formatting computer code"], answer: 1 },
          { q: "Under standard trade publishing contracts, who retains ultimate copyright ownership?", options: ["The editor", "The author", "The typesetter", "The bookstore owner"], answer: 1 },
          { q: "How should an editor advise an author who writes authentic regional dialect?", options: ["Sterilize all grammar to standard formal English", "Honor dialect integrity and cadence while ensuring reader accessibility", "Delete all dialogue completely", "Force characters to speak Latin"], answer: 1 },
          { q: "What is an 'editorial hill to die on'?", options: ["A scenic mountain in Vermont", "A non-negotiable legal, factual, or ethical breach requiring an editor to take a stand", "Every single semicolon disagreement", "A font dispute with the designer"], answer: 1 },
          { q: "What is a 'sagging middle' in developmental plotting?", options: ["A bent book spine", "An Act 2 slump where conflict plateaus and characters act passively", "A chapter with short paragraphs", "A paperback without illustrations"], answer: 1 },
          { q: "What does CMOS stand for in professional editorial practice?", options: ["Central Manuscript Operating System", "The Chicago Manual of Style", "Creative Manuscript Organization Standard", "Copyright Management Office Standard"], answer: 1 },
          { q: "What is the standard companion dictionary to CMOS in US trade publishing?", options: ["Oxford English Dictionary", "Merriam-Webster's Collegiate Dictionary", "Urban Dictionary", "Cambridge Academic Lexicon"], answer: 1 },
          { q: "What is an orphan in typography proofreading?", options: ["A character whose parents died in chapter 1", "The first line of a paragraph appearing alone at the bottom of a page", "A footnote without a citation", "A missing title page"], answer: 1 },
          { q: "What is a 'widow' in typesetting proofreading?", options: ["The last line of a paragraph appearing alone at the top of a page", "A deleted chapter", "An author who writes alone", "An uncredited translation"], answer: 0 },
          { q: "Why should an editor eliminate unnecessary 'filter words' (saw, heard, felt, noticed)?", options: ["To make the book shorter", "To close the psychic distance between the reader and the character's experience", "Because filter words are grammatically illegal", "Because CMOS forbids verbs of perception"], answer: 1 },
          { q: "Example of eliminating filter words: 'She heard the thunder rumble' becomes:", options: ["'Thunder rumbled across the valley.'", "'She perceived the sound of thunder.'", "'She was listening to thunder.'", "'The thunder was heard by her.'"], answer: 0 },
          { q: "What is 'head-hopping' in third-person narrative fiction?", options: ["A rapid, disorienting shift of POV between characters within the same scene", "Characters jumping over obstacles", "Writing in the second person", "A chapter with multiple settings"], answer: 0 },
          { q: "How should an editor correct unintentional head-hopping?", options: ["Anchor the scene strictly in one character's sensory consciousness per scene/chapter", "Change all characters to the same name", "Delete all thoughts from the book", "Switch to first-person plural"], answer: 0 },
          { q: "What is an 'infodump'?", options: ["A computer crash that deletes drafts", "A massive chunk of expository backstory dumped onto the reader, stalling action", "An appendix at the back of a textbook", "A research bibliography"], answer: 1 },
          { q: "How should an editor advise handling essential worldbuilding backstory?", options: ["Dump it all into a 40-page prologue", "Weave it organically into character actions, dialogue, and immediate sensory details", "Delete all worldbuilding completely", "Put it into footnotes"], answer: 1 },
          { q: "What is 'passive voice'?", options: ["Polite dialogue between characters", "A grammatical structure where the subject receives the action rather than performing it", "Writing about quiet subjects", "Using past tense verbs"], answer: 1 },
          { q: "Which sentence uses the active voice?", options: ["The chalice was stolen by the rogue.", "The rogue stole the ancient chalice.", "The chalice had been seen being stolen.", "There was a theft of the chalice by the rogue."], answer: 1 },
          { q: "What does 'show, don't tell' encourage writers to do?", options: ["Include illustrations on every page", "Dramatize emotion through concrete sensory actions rather than abstract declarations", "Avoid describing physical settings", "Only write screenplays"], answer: 1 },
          { q: "Transforming 'tell' to 'show': 'John was nervous' becomes:", options: ["'John felt extremely nervous inside.'", "'John\\'s knuckles whitened as he shredded the paper cup into ribbons.'", "'John told everyone he was nervous.'", "'John was in a state of high anxiety.'"], answer: 1 },
          { q: "What is a 'deus ex machina'?", options: ["A sci-fi robot character", "An unearned, contrived resolution dropped into a plot without prior setup", "A Latin stylistic device", "The climax of a romance novel"], answer: 1 },
          { q: "How does an editor prevent a deus ex machina resolution?", options: ["Ensure the protagonist resolves the crisis using tools, skills, or choices set up earlier", "Make the ending even more random", "Add more characters at the end", "Change the villain's identity in the epilogue"], answer: 0 },
          { q: "What is an Oxford (serial) comma?", options: ["A comma used only in Oxford University texts", "The comma placed immediately before the coordinating conjunction in a series of three or more items", "A comma used after a question mark", "A decorative punctuation mark"], answer: 1 },
          { q: "Which sentence contains a correct serial comma?", options: ["We bought apples, oranges and pears.", "We bought apples, oranges, and pears.", "We bought, apples oranges and pears.", "We, bought apples, oranges, and pears."], answer: 1 },
          { q: "When is a hyphen used in compound modifiers before a noun?", options: ["Always, regardless of word class", "When two words act as a single unit modifying the noun (e.g., 'well-known author')", "Never in modern prose", "Only after adverbs ending in -ly"], answer: 1 },
          { q: "Does an adverb ending in -ly take a hyphen in a compound modifier (e.g., 'happily married')?", options: ["Yes, always", "No, CMOS rule specifies no hyphen with -ly adverbs", "Only in British English", "Only at the beginning of sentences"], answer: 1 },
          { q: "What is the primary virtue of dialogue in literary fiction?", options: ["Accurately recording boring real-life chitchat", "Advancing character relationships, revealing subtext, and creating conflict", "Teaching readers grammar", "Padding the word count"], answer: 1 },
          { q: "What are 'dialogue tags' vs. 'action beats'?", options: ["They are identical terms", "Tags indicate speech ('she said'); beats show physical action ('She slammed the phone down.')", "Tags are for poetry; beats are for novels", "Tags are only used in screenplays"], answer: 1 },
          { q: "Why should an editor prune excessive descriptive dialogue tags ('she pontificated', 'he expostulated')?", options: ["Because 'said' is largely invisible and keeps reader focus on character words", "Because descriptive tags take up too much ink", "Because tags are grammatically incorrect", "Because authors cannot write tags"], answer: 0 },
          { q: "What is psychic distance in narrative point of view?", options: ["The physical distance between two characters", "The degree of intimacy between the narrator's lens and the character's internal mind", "The speed at which a character thinks", "The genre of science fiction"], answer: 1 },
          { q: "What is 'reconciliation' at the conclusion of an editorial pass?", options: ["An apology letter from the editor", "Systematically reviewing author queries, accepting agreed edits, and cleaning file markup", "The financial accounting of printing costs", "The author accepting all changes blindly"], answer: 1 },
          { q: "When preparing manuscript files for typesetters, what is 'semantic tagging'?", options: ["Adding hashtags to the text", "Using proper heading hierarchies (H1 for chapter titles, H2 for subheads, body styles)", "Coloring text with neon highlighters", "Writing comments in the margins"], answer: 1 },
          { q: "What is an editor's responsibility regarding factual verification in fiction?", options: ["Ignore all factual errors because it's fiction", "Check historical dates, geographical realities, and technical procedures to prevent immersion breaks", "Rewrite the history books to match the story", "Report the author to historians"], answer: 1 },
          { q: "What is the hallmark of masterclass editorial commentary?", options: ["Vague feedback like 'This doesn't work'", "Specific diagnoses explaining why something fails and concrete pathways to elevate it", "Punishing harsh criticism", "Praising everything unconditionally"], answer: 1 },
          { q: "Why must an editor maintain emotional neutrality during author revisions?", options: ["Because authors are business clients, not enemies or pupils", "To avoid being involved in the project", "Because emotions waste billable time", "Because contracts prohibit emotion"], answer: 0 },
          { q: "What is the ultimate definition of editorial mastery at Litdom Academy?", options: ["Making every book read like it was written by the editor", "Clarifying and amplifying the author's authentic voice while leaving an invisible fingerprint", "Finding the maximum number of errors per page", "Winning literary prizes for editing"], answer: 1 }
        ]
      }
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.LITDOM_DATA = LITDOM_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LITDOM_DATA };
}
`;

fs.writeFileSync('litdom_data.js', dataScript);
fs.writeFileSync('app/src/main/assets/litdom_data.js', dataScript);
console.log('Successfully wrote updated litdom_data.js to root and app/src/main/assets!');
