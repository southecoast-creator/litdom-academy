/* =========================================================================
 * LITDOM ACADEMY - CURRICULUM ARCHITECTURE & DEVELOPER BLUEPRINT
 * =========================================================================
 * 
 * WELCOME DEAR DEVELOPER / INSTRUCTOR!
 * This file contains the complete curriculum data for Litdom Academy.
 * Everything is modular and structured in a clean, hierarchical tree:
 * 
 *   LITDOM_DATA
 *     └── courses [ Array of Courses ]
 *           └── modules [ Array of Modules ]
 *                 └── sections [ Array of Sections / Lessons ]
 *                       ├── content [ Array of Media/Editorial Blocks ]
 *                       └── test    [ Section Knowledge Check: 1 Question, 3 Options ]
 * 
 * -------------------------------------------------------------------------
 * HOW TO ADD / REMOVE / DUPLICATE CURRICULUM ELEMENTS:
 * -------------------------------------------------------------------------
 * 
 * [1] TO ADD A NEW COURSE:
 *     Copy the TEMPLATE_COURSE below and paste it inside the `courses` array.
 * 
 * [2] TO ADD A NEW MODULE:
 *     Copy the TEMPLATE_MODULE below and paste it inside any course's `modules` array.
 * 
 * [3] TO ADD A NEW SECTION:
 *     Copy the TEMPLATE_SECTION below and paste it inside any module's `sections` array.
 * 
 * [4] TO ADD A VIDEO WITH EDITABLE COUNTDOWN TIMER:
 *     In your section's `content` array, insert:
 *     {
 *       type: "video",
 *       id: "vid-unique-id",
 *       title: "Lecture Title",
 *       caption: "Short overview of the lesson video",
 *       durationSeconds: 25, // EDITABLE TIMER: Set duration in seconds for your own video (e.g., 60 = 1 min)
 *       videoUrl: "", // EDITABLE MEDIA: Optional URL to your MP4, YouTube embed, or local video file
 *       instructor: "Dean Julian Sterling",
 *       badge: "HD Masterclass"
 *     }
 *     NOTE: The timer duration and video URL can also be edited live directly inside the UI!
 * 
 * [5] TO ADD AN INTERACTIVE EDITORIAL EXERCISE (TURNS GREEN ON SUCCESS):
 *     In your section's `content` array, insert:
 *     {
 *       type: "interactive_exercise",
 *       id: "ex-unique-id",
 *       title: "Editorial Crucible: Exercise Title",
 *       category: "Line Polish & Cadence",
 *       instructions: "Explain the editorial challenge to the student.",
 *       draft: "The unedited sentence or passage containing the craft defect.",
 *       options: [
 *         {
 *           text: "Option A description...",
 *           correct: false,
 *           feedback: "Explain why this edit does not satisfy the craft principle."
 *         },
 *         {
 *           text: "Option B description (Correct)...",
 *           correct: true, // Setting correct: true turns the card and button emerald green!
 *           feedback: "Praise the learner and explain the craft theory.",
 *           polishedText: "The resulting polished sentence."
 *         }
 *       ]
 *     }
 * 
 * ========================================================================= */

const LITDOM_DATA = {
  courses: [
    {
      /* -------------------------------------------------------------------
       * COURSE 1: EDITOR ACADEMY
       * ------------------------------------------------------------------- */
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
            /* --- SECTION 1.1 --- */
            {
              id: "sec-1-1",
              title: "The Editor's Persona & Role",
              duration: "8 mins",
              content: [
                {
                  type: "text",
                  title: "The Guardian of the Reader's Attention",
                  content: "<p>An editor is neither a glorified proofreader nor an authoritarian censor. The true editor acts as the author's most dedicated champion, an empathetic surrogate for the eventual reader, and an objective diagnostician of prose.</p><div class=\"callout-quote\">\"The best editors leave no fingerprints. They amplify the author's singular voice while quietly removing the obstructions that stand between the sentence and the reader's heart.\"</div><p>While the author is consumed with the creative act of birthing characters and themes into existence, the editor steps back to examine structure, cadence, semantic precision, and narrative momentum.</p>"
                },
                {
                  type: "video",
                  id: "vid-1-1",
                  title: "Masterclass: The Editor's Invisible Touch",
                  caption: "Dean Julian Sterling unpacks the philosophy of humble, high-impact editorial stewardship.",
                  durationSeconds: 20, // ⏱️ Enforced timer: 20 seconds playback required
                  instructor: "Dean Julian Sterling",
                  badge: "Litdom Studio Master Lecture"
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
                  instructions: "Analyze the author's sentence below. Choose the diagnostic edit that elevates the dramatic tension without colonizing the author's voice:",
                  draft: "She looked very closely at the locked wooden chest and then she slowly opened it with a nervous tremor in her hands.",
                  options: [
                    {
                      text: "Retain the original wording; adverbs convey necessary emotional description.",
                      correct: false,
                      feedback: "Notice how 'very closely' and 'slowly opened' dilute suspense. Weak adverbs tell the reader how to feel instead of immersing them directly."
                    },
                    {
                      text: "Line-Edit: 'She peered at the locked iron-bound chest, her hands trembling as the latch gave way.'",
                      correct: true,
                      feedback: "Masterful diagnosis! Replacing weak verb+adverb combinations with vivid active verbs ('peered', 'trembling') brings tactile immediacy.",
                      polishedText: "She peered at the iron-bound chest, her hands trembling as the latch gave way."
                    },
                    {
                      text: "Overhaul into poetic Victorian prose: 'With lamentable hesitation upon her countenance, she gazed upon the reliquary.'",
                      correct: false,
                      feedback: "Careful! Imposing heavy archaic ornamentation violates editorial humility by overwhelming the author's voice."
                    }
                  ]
                }
              ],
              test: {
                question: "What is the primary operational distinction between a writer and an editor?",
                options: [
                  "The writer creates raw substance; the editor clarifies and diagnoses that substance on behalf of the reader.",
                  "The editor rewrites the entire story in their own stylistic voice.",
                  "The editor's only job is catching typographical misspellings and punctuation errors."
                ],
                correctAnswer: 0,
                explanation: "The editor is an objective diagnostician who clarifies and optimizes the writer's vision without usurping their artistic authority."
              }
            },

            /* --- SECTION 1.2 --- */
            {
              id: "sec-1-2",
              title: "The Reader's Surrogate & Advocate",
              duration: "10 mins",
              content: [
                {
                  type: "text",
                  title: "Reading from the Outside In",
                  content: "<p>The author suffers from the curse of knowledge: they know what the character feels, what the room smells like, and what the subtext means because it exists in their imagination. The editor arrives with fresh, unclouded eyes.</p><p>As the reader's surrogate, the editor asks: <em>Does this transition make emotional sense? Is the scene dragging? Did the author assume I knew something never stated on the page?</em></p>"
                },
                {
                  type: "video",
                  id: "vid-1-2",
                  title: "The Editorial Lens: Simulating Reader Immersion",
                  caption: "A diagnostic walkthrough demonstrating how to identify reader fatigue in early drafts.",
                  durationSeconds: 25, // ⏱️ Enforced timer: 25 seconds playback required
                  instructor: "Prof. Arthur Pendelton",
                  badge: "Deep POV & Pacing"
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
                      feedback: "Passive voice further distances the reader and bleeds away all tension."
                    }
                  ]
                },
                {
                  type: "example",
                  title: "The Filter Word Elimination Matrix",
                  before: "She felt the biting chill in the wind and realized she had been left alone.",
                  after: "The wind bit through her wool coat. The courtyard stood desolate and silent.",
                  explanation: "Sensory facts dramatized directly generate far more reader empathy than internal self-reporting."
                }
              ],
              test: {
                question: "When acting as the 'reader's surrogate', what does the editor prioritize above all else?",
                options: [
                  "Maximizing the reading difficulty with archaic vocabulary.",
                  "Clarity, emotional immersion, and narrative momentum for the target audience.",
                  "Imposing external commercial tropes onto an unconventional narrative."
                ],
                correctAnswer: 1,
                explanation: "The surrogate tests whether the reader remains captivated and clear-headed throughout the manuscript."
              }
            },

            /* --- SECTION 1.3 --- */
            {
              id: "sec-1-3",
              title: "Humility, Restraint & Voice Preservation",
              duration: "9 mins",
              content: [
                {
                  type: "text",
                  title: "The Golden Rule of the Invisible Editor",
                  content: "<p>The cardinal sin of editing is <em>stylistic colonisation</em>: forcing an author's prose into the editor's preferred aesthetic. If an author writes sparse, clipped sentences like Hemingway, an editor must not inject lush Victorian descriptive flourishes.</p><p>Great editors honor the author's idiosyncratic rhythm while pruning actual defects.</p>"
                },
                {
                  type: "video",
                  id: "vid-1-3",
                  title: "Preserving Idiosyncratic Voice: The Hemingway vs. Faulkner Paradox",
                  caption: "Examining when unconventional sentence architecture is intentional art versus sloppy drafting.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Dean Julian Sterling",
                  badge: "Craft Ethics"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-1-3",
                  title: "Editorial Restraint Crucible: Honoring Staccato Cadence",
                  category: "Voice Preservation",
                  instructions: "The author intentionally uses short, blunt sentences to reflect shell-shocked trauma. Which editorial response demonstrates true restraint?",
                  draft: "The truck stopped. Dust rose. Rain began. No one spoke.",
                  options: [
                    {
                      text: "Combine all four sentences into one compound-complex sentence with multiple subordinating conjunctions.",
                      correct: false,
                      feedback: "Merging these destroys the author's intentional staccato cadence, smoothing away the bleak emotional exhaustion."
                    },
                    {
                      text: "Preserve the staccato structure; verify that the rhythmic starkness aligns with the scene's emotional weight.",
                      correct: true,
                      feedback: "Exceptional restraint! The editor honors the author's stylistic intent. Unconventional syntax that serves story is art, not an error.",
                      polishedText: "The truck stopped. Dust rose. Rain began. No one spoke. (Voice Preserved)"
                    },
                    {
                      text: "Add sensory metaphors and descriptive similes to make the text sound more literary.",
                      correct: false,
                      feedback: "Adding unprompted purple prose is stylistic colonisation."
                    }
                  ]
                }
              ],
              test: {
                question: "Why is editorial humility considered the foremost virtue in literary editing?",
                options: [
                  "Because an editor should never offer any critique or correction to an author.",
                  "Because the editor's fingerprint must remain invisible to allow the author's authentic voice to shine.",
                  "Because publishing contracts penalize assertive line editors."
                ],
                correctAnswer: 1,
                explanation: "Humility ensures the author's unique voice remains the star, free of editorially imposed mannerisms."
              }
            }
          ],
          assessment: [
            {
              question: "What is an editor's core loyalty during manuscript review?",
              options: [
                "To their own personal writing aspirations",
                "To the author's unique voice and the eventual reader's immersion",
                "To strict grammatical rules at the expense of literary style",
                "To commercial trends exclusively"
              ],
              correctIndex: 1
            },
            {
              question: "What is meant by 'stylistic colonisation'?",
              options: [
                "Translating a foreign manuscript into English",
                "Forcing an author's unique style to conform to the editor's personal taste",
                "Publishing in multiple countries",
                "Using British spelling conventions"
              ],
              correctIndex: 1
            },
            {
              question: "Why must an editor identify and eliminate unnecessary filter words?",
              options: [
                "Because filter words are illegal under copyright law",
                "Because they create emotional and psychic distance between the reader and the character's sensory reality",
                "To make the book shorter so printing costs are reduced",
                "Because dictionary editors requested their removal"
              ],
              correctIndex: 1
            },
            {
              question: "When evaluating prose, what does an editor listen for in their 'inner ear'?",
              options: [
                "Background room noise",
                "Sentence rhythm, cadence, musicality, and variety of syntax",
                "Spelling errors exclusively",
                "Word count thresholds per page"
              ],
              correctIndex: 1
            },
            {
              question: "How does editorial humility protect an idiosyncratic literary manuscript?",
              options: [
                "It prevents the editor from rewriting intentional artistic stylistic choices into bland generic prose",
                "It ensures the editor does no work at all",
                "It lowers the author's royalty expectations",
                "It guarantees an instant bestseller status"
              ],
              correctIndex: 0
            }
          ]
        },

        /* =================================================================
         * MODULE 2: The Hierarchy of Editing
         * ================================================================= */
        {
          id: "mod-2",
          num: 2,
          title: "The Hierarchy of Editing",
          description: "The taxonomy of editorial levels: Developmental, Line, Copyediting, and Proofreading.",
          passingScore: 4,
          sections: [
            /* --- SECTION 2.1 --- */
            {
              id: "sec-2-1",
              title: "The Four Tiers of Editorial Intervention",
              duration: "12 mins",
              content: [
                {
                  type: "text",
                  title: "Macro to Micro: Sequential Polish",
                  content: "<p>Effective editing is sequential. Attempting to fix comma splices while chapter 4 has a fatal structural hole is wasted effort. Professional publishing operates across four distinct levels:</p><p><strong>1. Developmental (Substantive):</strong> Premise, plot architecture, pacing, character arcs, and thematic coherence.</p><p><strong>2. Line Editing:</strong> Sentence cadence, rhythm, musicality, tone, transitions, and clarity.</p><p><strong>3. Copyediting:</strong> Grammar, syntax, factual consistency, and house style guides (e.g., CMOS).</p><p><strong>4. Proofreading:</strong> Layout orphans, typographic widows, and errant post-typesetting defects.</p>"
                },
                {
                  type: "video",
                  id: "vid-2-1",
                  title: "Manuscript Triage: Diagnosing the Required Tier",
                  caption: "Watch senior publishing editors evaluate an incoming manuscript sample and map the required editorial passes.",
                  durationSeconds: 25, // ⏱️ Enforced timer
                  instructor: "Helena Rostova, Senior Acquisitions Editor",
                  badge: "Manuscript Triage"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-2-1",
                  title: "Editorial Tiers Classifier",
                  category: "Editorial Scope",
                  instructions: "A manuscript arrives with a brilliant voice, but the antagonist's motivation in chapter 8 completely contradicts their confession in chapter 19. What editorial tier must handle this?",
                  draft: "Draft issue: 'Antagonist motive contradicts chapter 19; author also missed 14 commas in dialogue tags.'",
                  options: [
                    {
                      text: "Proofreading: Fix the formatting and typeset the file immediately.",
                      correct: false,
                      feedback: "Proofreading occurs only after the book is typeset. It never tackles character motive contradictions."
                    },
                    {
                      text: "Developmental (Substantive) Editing: Address character motivation, cause-and-effect logic, and narrative integrity first.",
                      correct: true,
                      feedback: "Spot-on! Major plot holes and character contradictions must be resolved at the macro Developmental level before word polish begins.",
                      polishedText: "Triage Decision: Developmental overhaul required prior to line-level polish."
                    },
                    {
                      text: "Copyediting: Correct the 14 missing commas and ignore the plot contradiction.",
                      correct: false,
                      feedback: "Polishing commas in a scene that will likely be deleted or rewritten during structural repair is wasted time and money."
                    }
                  ]
                }
              ],
              test: {
                question: "If an author submits a manuscript where chapter 3 contradicts the climax in chapter 11, which level of editing addresses this?",
                options: [
                  "Proofreading",
                  "Copyediting",
                  "Developmental (Substantive) Editing"
                ],
                correctAnswer: 2,
                explanation: "Structural inconsistencies and narrative contradictions fall squarely under Developmental Editing."
              }
            },

            /* --- SECTION 2.2 --- */
            {
              id: "sec-2-2",
              title: "Developmental Architecture & Narrative Pacing",
              duration: "14 mins",
              content: [
                {
                  type: "text",
                  title: "Diagnosing Macro Failures in Plot and Cadence",
                  content: "<p>A developmental editor examines narrative gravity. Common structural flaws include saggy middles, unearned character transformations, plot contrivances (deus ex machina), and expository infodumping.</p><p>To fix pacing, an editor tracks narrative beats against reader tension, prescribing scene cuts or expansions.</p>"
                },
                {
                  type: "video",
                  id: "vid-2-2",
                  title: "The Architecture of Dramatic Momentum",
                  caption: "How to map tension curves and diagnose the dreaded mid-manuscript slump.",
                  durationSeconds: 30, // ⏱️ Enforced timer
                  instructor: "Dean Julian Sterling",
                  badge: "Macro Structure"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-2-2",
                  title: "Pacing Diagnosis: Banishing the Expository Infodump",
                  category: "Narrative Propulsion",
                  instructions: "The author interrupts an adrenaline-fueled rooftop chase to insert three paragraphs explaining the 400-year history of the kingdom's taxation policy. Select the proper developmental diagnosis:",
                  draft: "Author text: As the assassin leaped across the tiles, let us pause to consider that in 1642, King Edward III established the Guild of Tile Makers under the Royal Charter...",
                  options: [
                    {
                      text: "Leave it alone; readers crave comprehensive historical worldbuilding at all times.",
                      correct: false,
                      feedback: "Dumping encyclopedic backstory during an action climax kills narrative momentum and disorients the reader."
                    },
                    {
                      text: "Prescribe an Immediate Cut: Excise the infodump; preserve the kinetic momentum of the rooftop chase and weave backstory organically later.",
                      correct: true,
                      feedback: "Masterful substantive critique! Never sacrifice dramatic tension for unprompted exposition. Worldbuilding must be delivered through immediate sensory action.",
                      polishedText: "The assassin sprang across the slate tiles, boots skidding in the rain. (Infodump cut; stakes preserved)"
                    },
                    {
                      text: "Change the font of the history lesson to italics to make it look artistic.",
                      correct: false,
                      feedback: "Formatting tweaks do not resolve foundational structural pacing stalls."
                    }
                  ]
                }
              ],
              test: {
                question: "What is an editor's primary remedy for a 'saggy middle' in a novel manuscript?",
                options: [
                  "Adding more adjectives to all descriptive passages.",
                  "Tightening narrative stakes, escalating conflicts, and eliminating redundant transitional scenes.",
                  "Changing the font size to reduce page count."
                ],
                correctAnswer: 1,
                explanation: "Mid-book sluggishness is resolved by raising stakes and pruning repetitive or aimless scenes."
              }
            },

            /* --- SECTION 2.3 --- */
            {
              id: "sec-2-3",
              title: "Line Editing vs. Copyediting Mechanics",
              duration: "11 mins",
              content: [
                {
                  type: "text",
                  title: "The Art of the Line vs. The Law of the Rule",
                  content: "<p>Line editing is artistic: it examines how words sound in the reader's inner ear, trimming flab, varying sentence lengths, and rooting out cliches.</p><p>Copyediting is rule-based: it enforces orthography, hyphenation, dialogue attribution rules, and factual verification.</p>"
                },
                {
                  type: "video",
                  id: "vid-2-3",
                  title: "The Musicality of Prose: Rhythm, Beats, and Meter",
                  caption: "A practical clinic demonstrating how varying sentence lengths creates narrative tension.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Prof. Arthur Pendelton",
                  badge: "Line Craft"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-2-3",
                  title: "Sentence Rhythm & Syntax Polish",
                  category: "Cadence & Musicality",
                  instructions: "Notice how every sentence below has the identical 6-word Subject-Verb-Object length, creating a monotonous droning rhythm. Select the edit that introduces rhythmic musicality:",
                  draft: "He walked into the dark room. He heard a strange scraping sound. He drew his polished silver sword. He waited in the chilly silence.",
                  options: [
                    {
                      text: "Leave as is; uniform sentence lengths make reading predictable and simple.",
                      correct: false,
                      feedback: "Uniform sentence length causes reader fatigue (the 'sing-song' effect). Good prose varies short staccato beats with longer flowing waves."
                    },
                    {
                      text: "Vary rhythm and syntax: 'He stepped into the dark. Somewhere in the shadows, metal scraped against stone. In one breath, he drew his sword and waited.'",
                      correct: true,
                      feedback: "Prose music restored! Combining short dramatic pauses with varied introductory clauses creates genuine literary suspense.",
                      polishedText: "He stepped into the dark. In the shadows, metal scraped stone. He drew his sword and waited."
                    },
                    {
                      text: "Join all four sentences with 'and... and... and...'",
                      correct: false,
                      feedback: "Run-on conjunction chains do not create dynamic rhythm."
                    }
                  ]
                }
              ],
              test: {
                question: "Which of the following editorial revisions represents Line Editing rather than Copyediting?",
                options: [
                  "Changing 'there' to 'their' because of a homophone error.",
                  "Fixing a misspelled city name from 'Copenhagen' to 'København'.",
                  "Restructuring a clunky 45-word sentence to improve musical rhythm and emotional impact."
                ],
                correctAnswer: 2,
                explanation: "Improving cadence, clarity, and sentence rhythm is the hallmark of Line Editing."
              }
            }
          ],
          assessment: [
            {
              question: "What is the correct sequential order of editorial interventions?",
              options: [
                "Developmental → Line Editing → Copyediting → Proofreading",
                "Proofreading → Copyediting → Line Editing → Developmental",
                "Copyediting → Developmental → Proofreading → Line Editing",
                "Line Editing → Proofreading → Developmental → Copyediting"
              ],
              correctIndex: 0
            },
            {
              question: "Which task belongs strictly to the Copyediting phase?",
              options: [
                "Resolving an irreconcilable plot hole between Act 1 and Act 3",
                "Enforcing consistent capitalization, serial commas, and house style rules",
                "Advising the author to delete an unnecessary secondary character",
                "Adjusting page margins and fixing printer font bleed"
              ],
              correctIndex: 1
            },
            {
              question: "What distinguishes Proofreading from Copyediting?",
              options: [
                "Proofreading is done before developmental editing",
                "Proofreading is the final sweep of designed pages/typeset proofs to catch layout glitches and missed typos",
                "Proofreading rewrites character dialogue",
                "Proofreading checks historical premises"
              ],
              correctIndex: 1
            },
            {
              question: "When a line editor notices that every sentence on a page begins with a participial phrase, what should they do?",
              options: [
                "Leave it alone because grammar checkers don't flag it",
                "Vary the sentence structures and syntax to restore rhythmic dynamism",
                "Delete all verbs from the page",
                "Demand that the author switch to third person"
              ],
              correctIndex: 1
            },
            {
              question: "Why is developmental editing performed before line editing?",
              options: [
                "Because developmental editing is cheaper",
                "Because polishing sentences that might be cut or rewritten during structural revision is wasted labor",
                "Because copyeditors don't know grammar",
                "Because literary agents require it"
              ],
              correctIndex: 1
            }
          ]
        },

        /* =================================================================
         * MODULE 3: Editor–Author Relationship
         * ================================================================= */
        {
          id: "mod-3",
          num: 3,
          title: "Editor–Author Relationship",
          description: "Cultivating creative trust, delivering constructive feedback, and navigating revision resistance.",
          passingScore: 4,
          sections: [
            /* --- SECTION 3.1 --- */
            {
              id: "sec-3-1",
              title: "The Psychology of Manuscript Critique",
              duration: "10 mins",
              content: [
                {
                  type: "text",
                  title: "Vulnerability and the Red Pen",
                  content: "<p>Handing over an unpolished manuscript triggers deep emotional vulnerability. Authors often react to criticism with defensive fight-or-flight instincts. The editor's tone determines whether an author feels inspired to revise or paralyzed by shame.</p><p>Deliver praise first. Acknowledge what works brilliantly before dissecting what requires surgery.</p>"
                },
                {
                  type: "video",
                  id: "vid-3-1",
                  title: "Author Diplomacy: Transforming Confrontation into Collaboration",
                  caption: "Role-playing exercises showing how query phrasing shapes author receptivity.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Dean Julian Sterling",
                  badge: "Author Diplomacy"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-3-1",
                  title: "Marginal Query Framing Crucible",
                  category: "Author Psychology",
                  instructions: "You encounter a dialogue scene where the protagonist sounds unnaturally robotic. How should you phrase your marginal query to invite collaboration rather than defensiveness?",
                  draft: "Passage: 'I am experiencing severe biochemical distress and I request your immediate intervention.'",
                  options: [
                    {
                      text: "Query: 'This dialogue is absurd and unrealistic. Rewrite this immediately.'",
                      correct: false,
                      feedback: "Harsh commands provoke author defensiveness and shut down creative problem-solving."
                    },
                    {
                      text: "Query: 'David's speech feels surprisingly clinical here. Is this an intentional defense mechanism, or could we sharpen his emotional panic to heighten reader urgency?'",
                      correct: true,
                      feedback: "Masterclass editorial diplomacy! You assume positive artistic intent while highlighting reader emotional impact.",
                      polishedText: "Collaborative query delivered: Author invited into diagnostic partnership."
                    },
                    {
                      text: "Query: 'Great job! No changes needed at all.'",
                      correct: false,
                      feedback: "Flattery that ignores a genuine issue abandons the editor's fiduciary duty to the reader."
                    }
                  ]
                }
              ],
              test: {
                question: "How should an editor frame challenging structural critiques to foster constructive author collaboration?",
                options: [
                  "As shared diagnostic inquiries highlighting reader impact rather than personal reprimands.",
                  "By using blunt sarcasm to toughen the author's skin for commercial publication.",
                  "By hiding all criticisms and pretending the draft is flawless."
                ],
                correctAnswer: 0,
                explanation: "Collaborative framing focuses on the reader's experience, preserving dignity and sparking motivation."
              }
            },

            /* --- SECTION 3.2 --- */
            {
              id: "sec-3-2",
              title: "Drafting the Masterclass Editorial Letter",
              duration: "12 mins",
              content: [
                {
                  type: "text",
                  title: "The Architecture of the Editorial Letter",
                  content: "<p>The editorial letter is the crown jewel of developmental editing. A standard 5-to-15 page editorial letter follows a clear architecture:</p><p>1. Enthusiastic appreciation of the core premise and artistic triumphs.<br>2. Macro structural analysis (pacing, stakes, worldbuilding).<br>3. Character trajectory evaluations.<br>4. Micro patterns and stylistic tendencies.<br>5. Concrete, actionable revision roadmap.</p>"
                },
                {
                  type: "video",
                  id: "vid-3-2",
                  title: "Dissecting a 12-Page Masterclass Editorial Letter",
                  caption: "A comprehensive breakdown of an actual developmental letter that helped launch a bestseller.",
                  durationSeconds: 25, // ⏱️ Enforced timer
                  instructor: "Helena Rostova",
                  badge: "Editorial Letters"
                },
                {
                  type: "example",
                  title: "Praise vs. Diagnosis Balance",
                  before: "Opening with 8 pages of structural failures → Author shuts down and refuses revisions.",
                  after: "Opening with 2 pages celebrating the author's singular voice → Author feels empowered to tackle structural surgery.",
                  explanation: "Validation establishes trust; critique delivers direction."
                }
              ],
              test: {
                question: "What is the primary objective of an editorial letter?",
                options: [
                  "To list every single typographical error found in the book.",
                  "To provide a holistic diagnosis of the work and an actionable, inspiring roadmap for substantive revision.",
                  "To calculate the commercial royalty advance."
                ],
                correctAnswer: 1,
                explanation: "The editorial letter synthesizes macro feedback into a clear, energizing path forward."
              }
            },

            /* --- SECTION 3.3 --- */
            {
              id: "sec-3-3",
              title: "Navigating Creative Disagreements & Resistance",
              duration: "10 mins",
              content: [
                {
                  type: "text",
                  title: "When the Author Says 'No'",
                  content: "<p>Conflict is inevitable when passionate artists collaborate. When an author rejects an edit, the editor must ask: <em>Is this a violation of facts/clarity, or a matter of creative taste?</em></p><p>If it is clarity, the editor explains the reader confusion. If it is purely taste, the author holds the ultimate prerogative. An editor advises; an author decides.</p>"
                },
                {
                  type: "video",
                  id: "vid-3-3",
                  title: "Resolving the Creative Impasse",
                  caption: "How master editors uncover the root intent behind an author's resistance.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Dean Julian Sterling",
                  badge: "Conflict Resolution"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-3-3",
                  title: "Author Agency & Creative Sovereignty",
                  category: "Creative Sovereignty",
                  instructions: "The author rejects your suggestion to change the tragic ending into a happier resolution. They explain that the tragedy is the philosophical core of their vision. What is your ethical response?",
                  draft: "Author note: 'I appreciate the commercial logic of a happy ending, but Marcus must die. That is the soul of this tragedy.'",
                  options: [
                    {
                      text: "Refuse to return the files until the author agrees to the happy ending.",
                      correct: false,
                      feedback: "An editor never extorts or bullies an author. That is an ethical breach."
                    },
                    {
                      text: "Respect the author's artistic sovereignty; help them make the tragic climax as emotionally resonant and earned as humanly possible.",
                      correct: true,
                      feedback: "True editorial mastery! An editor advises on craft, but the author holds the sovereign creative right to their vision.",
                      polishedText: "Consensus reached: Tragic climax intensified and emotionally earned."
                    },
                    {
                      text: "Secretly change the final chapter before sending the manuscript to production.",
                      correct: false,
                      feedback: "Secret alteration of an author's manuscript is a catastrophic breach of professional ethics."
                    }
                  ]
                }
              ],
              test: {
                question: "If an author firmly rejects an editor's suggested plot change that is not legally problematic, what should the editor do?",
                options: [
                  "Secretly alter the manuscript file without informing the author.",
                  "Ensure the author understands the reader impact, then respect the author's final creative decision.",
                  "Resign from the project and publicly complain about the author."
                ],
                correctAnswer: 1,
                explanation: "An ethical editor advocates for the reader but honors the author's sovereign artistic ownership."
              }
            }
          ],
          assessment: [
            {
              question: "What should immediately open an editorial letter before discussing flaws?",
              options: [
                "A detailed invoice for billing hours",
                "Genuine celebration of the manuscript's strengths, voice, and narrative achievements",
                "A stern warning regarding submission deadlines",
                "A list of grammatical errors"
              ],
              correctIndex: 1
            },
            {
              question: "When an author resists a suggested cut, what does that resistance frequently indicate?",
              options: [
                "The author hates the editor",
                "There is an underlying emotional intent in the scene that hasn't successfully translated to the page",
                "The manuscript is finished and cannot be altered",
                "The editor should immediately give up"
              ],
              correctIndex: 1
            },
            {
              question: "How should queries in the manuscript margins be phrased?",
              options: [
                "As collaborative suggestions and clarifying questions",
                "As non-negotiable imperatives with exclamation points",
                "In obscure academic jargon",
                "With negative value judgments about the author"
              ],
              correctIndex: 0
            },
            {
              question: "What is 'the curse of knowledge' in manuscript creation?",
              options: [
                "Knowing too many grammar rules",
                "The author unconsciously assuming the reader knows backstory details that are only inside the author's head",
                "Reading too many books on writing craft",
                "The difficulty of fact-checking historical fiction"
              ],
              correctIndex: 1
            },
            {
              question: "What is an editor's posture during creative disagreements?",
              options: [
                "Adversarial and unyielding",
                "Passive and indifferent",
                "Empathetic, clear, and respectful of the author's final artistic sovereignty",
                "Authoritarian and demanding"
              ],
              correctIndex: 2
            }
          ]
        },

        /* =================================================================
         * MODULE 4: Editorial Ethics & Integrity
         * ================================================================= */
        {
          id: "mod-4",
          num: 4,
          title: "Editorial Ethics & Integrity",
          description: "Intellectual property, confidentiality, AI disclosure, and sensitivity.",
          passingScore: 4,
          sections: [
            /* --- SECTION 4.1 --- */
            {
              id: "sec-4-1",
              title: "Confidentiality & Intellectual Property",
              duration: "9 mins",
              content: [
                {
                  type: "text",
                  title: "Safeguarding Unpublished Creative Capital",
                  content: "<p>Unpublished manuscripts are valuable intellectual property. Editors are entrusted with trade secrets, private memoirs, and novel premises long before copyright registration. An editor must never share, quote, or distribute client files without explicit written consent.</p>"
                },
                {
                  type: "video",
                  id: "vid-4-1",
                  title: "Copyright Boundaries in Manuscript Editing",
                  caption: "Legal parameters regarding work-for-hire, advisory services, and authorial ownership.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Counsel Marcus Vance, Esq.",
                  badge: "Publishing Law"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-4-1",
                  title: "Copyright & Credit Diagnostic",
                  category: "Legal & IP Ethics",
                  instructions: "You provide extensive developmental line revisions that transform a messy draft into a literary award winner. Does this entitle you to co-ownership of copyright or a percentage of future movie royalties without a prior agreement?",
                  draft: "Case study: Editor claims 20% ownership of copyright based on suggesting a major plot twist.",
                  options: [
                    {
                      text: "Yes, anyone who writes words into a manuscript becomes a legal co-author automatically.",
                      correct: false,
                      feedback: "Incorrect. Under standard publishing law and contracts, editorial feedback is a work-for-hire or advisory service. The author remains sole proprietor of copyright."
                    },
                    {
                      text: "No, editorial contributions are advisory; the author retains sole proprietary copyright ownership unless explicit contracts dictate otherwise.",
                      correct: true,
                      feedback: "Legally sound! Editors are paid service providers or salaried employees. Sole copyright remains with the creator.",
                      polishedText: "Legal standard upheld: 100% copyright retained by author."
                    },
                    {
                      text: "Only if the book gets adapted into a feature film.",
                      correct: false,
                      feedback: "Film rights stem from book copyright, which belongs solely to the author."
                    }
                  ]
                }
              ],
              test: {
                question: "Does an editor who suggests major plot lines and rewrites sentences acquire copyright ownership in the book?",
                options: [
                  "Yes, editors automatically become co-authors entitled to half of all future royalties.",
                  "No, editorial contributions are work-for-hire or advisory, and sole copyright remains with the author.",
                  "Only if the book sells more than 100,000 copies in paperback."
                ],
                correctAnswer: 1,
                explanation: "Editorial contributions do not grant copyright ownership; the author retains total proprietary ownership."
              }
            },

            /* --- SECTION 4.2 --- */
            {
              id: "sec-4-2",
              title: "Author Agency & Creative Integrity",
              duration: "10 mins",
              content: [
                {
                  type: "text",
                  title: "The Boundaries of Editorial Intervention",
                  content: "<p>An editor must never rewrite an author's work to fit the editor's personal political, ideological, or aesthetic preferences. When suggesting modifications to tone, sensitivity, or character representation, the editor provides historical and cultural context while leaving the choice to the creator.</p>"
                },
                {
                  type: "video",
                  id: "vid-4-2",
                  title: "Sensitivity and Nuance in Cultural Representation",
                  caption: "How to identify unintended stereotypes without censoring authentic artistic expression.",
                  durationSeconds: 25, // ⏱️ Enforced timer
                  instructor: "Helena Rostova",
                  badge: "Ethical Craft"
                },
                {
                  type: "example",
                  title: "Ethical vs. Unethical Intervention",
                  before: "Unethical: Silently deleting a character's religious beliefs because the editor personally disagrees with them.",
                  after: "Ethical: Querying the author: 'This historical reference may present anachronistic reader confusion; here is historical source material for your review.'",
                  explanation: "The ethical editor illuminates facts and context while honoring authorial conscience."
                }
              ],
              test: {
                question: "What is the ethical boundary regarding sensitivity or contextual queries?",
                options: [
                  "The editor must unilaterally censor any content they find objectionable.",
                  "The editor highlights potential reader impact and offers constructive alternatives, leaving final choice to the author.",
                  "The editor must ignore all cultural inaccuracies and offensive slurs."
                ],
                correctAnswer: 1,
                explanation: "Ethical editing informs and advises without unilaterally imposing censorship."
              }
            },

            /* --- SECTION 4.3 --- */
            {
              id: "sec-4-3",
              title: "Attribution, Plagiarism & AI Disclosure",
              duration: "11 mins",
              content: [
                {
                  type: "text",
                  title: "Transparency in the Modern Publishing Era",
                  content: "<p>The integration of machine learning and large language models into editorial workflows requires strict ethical boundaries. Using AI tools on client manuscripts without their express written authorization violates confidentiality agreements.</p><p>Furthermore, editors must actively diagnose potential plagiarism and ensure fair use guidelines are strictly observed.</p>"
                },
                {
                  type: "video",
                  id: "vid-4-3",
                  title: "AI Disclosure and Confidentiality Protocols",
                  caption: "Why feeding client drafts into cloud AI models without permission breaches fiduciary trust.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Dean Julian Sterling",
                  badge: "Integrity & AI"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-4-3",
                  title: "AI Ethics & Client Confidentiality Protocol",
                  category: "Digital Integrity",
                  instructions: "You are swamped with work and consider pasting five chapters of an unpublished client novel into a public cloud AI tool to generate quick summaries. What does the Litdom code of ethics demand?",
                  draft: "Scenario: Pasting client manuscript into public AI chatbot to save 3 hours of summary writing.",
                  options: [
                    {
                      text: "Proceed freely; anything on the internet is fair game for productivity.",
                      correct: false,
                      feedback: "Public AI platforms may ingest input text for training, exposing your client's unpublished creative work to third parties."
                    },
                    {
                      text: "Halt immediately. Obtain express written client consent before processing client files through external AI systems to safeguard copyright and privacy.",
                      correct: true,
                      feedback: "Exemplary ethical integrity! Confidential client prose must never be uploaded into external servers or AI pipelines without explicit written authorization.",
                      polishedText: "Client privacy safeguarded: Strict confidentiality maintained."
                    },
                    {
                      text: "Proceed as long as you change the protagonist's name first.",
                      correct: false,
                      feedback: "A superficial name change does not protect the manuscript's unique plot, voice, and proprietary ideas."
                    }
                  ]
                }
              ],
              test: {
                question: "What is an editor's ethical obligation regarding the use of generative AI tools on an author's manuscript?",
                options: [
                  "Editors may upload client chapters to public AI models without asking, since it speeds up work.",
                  "Editors must obtain explicit author consent before processing manuscript text through third-party AI systems.",
                  "Editors must replace all author writing with AI-generated text."
                ],
                correctAnswer: 1,
                explanation: "Uploading confidential drafts into external AI platforms without consent breaches client confidentiality."
              }
            }
          ],
          assessment: [
            {
              question: "Under what condition may an editor share excerpts of an unpublished manuscript with colleagues?",
              options: [
                "Whenever the editor wants feedback on social media",
                "Only with the author's explicit written permission",
                "If the editor conceals the author's name",
                "If the excerpt is under 500 words"
              ],
              correctIndex: 1
            },
            {
              question: "What constitutes editorial conflict of interest?",
              options: [
                "Editing a manuscript in a genre the editor enjoys reading",
                "Using confidential manuscript concepts to write a competing book of one's own",
                "Recommending another professional proofreader",
                "Charging industry standard freelance rates"
              ],
              correctIndex: 1
            },
            {
              question: "How does the Litdom code treat authorial copyright in relation to editorial suggestions?",
              options: [
                "The editor owns a percentage of the copyright",
                "The author retains 100% of copyright; editorial feedback is advisory service",
                "Copyright transfers to the publishing house automatically",
                "The editor and author must file a joint trademark"
              ],
              correctIndex: 1
            },
            {
              question: "What is the ethical procedure if an editor spots clear, intentional plagiarism in a manuscript?",
              options: [
                "Silently change a few words and pretend it didn't happen",
                "Immediately document the source, alert the author privately, and explain the legal necessity of rewriting or securing permissions",
                "Call the police immediately",
                "Publish the manuscript under the editor's name"
              ],
              correctIndex: 1
            },
            {
              question: "What is the primary virtue an editor brings to delicate cultural and sensitivity evaluations?",
              options: [
                "Moral superiority",
                "Empathetic contextual awareness paired with author empowerment",
                "Total indifference to reader reactions",
                "Desire to ban controversial books"
              ],
              correctIndex: 1
            }
          ]
        },

        /* =================================================================
         * MODULE 5: The Professional Editorial Pipeline
         * ================================================================= */
        {
          id: "mod-5",
          num: 5,
          title: "The Professional Editorial Pipeline",
          description: "From submission intake to production-ready file delivery.",
          passingScore: 4,
          sections: [
            /* --- SECTION 5.1 --- */
            {
              id: "sec-5-1",
              title: "From Manuscript Intake to First Blind Read",
              duration: "10 mins",
              content: [
                {
                  type: "text",
                  title: "The Sacred Pen-Free Read",
                  content: "<p>The amateur editor grabs a red pen on page 1 and begins slashing sentences. The master editor undertakes the <em>First Blind Read</em>: reading the entire manuscript uninterrupted, without marking corrections or taking notes.</p><p>This allows the editor to experience the narrative trajectory, emotional momentum, and holistic pacing as an ordinary reader would.</p>"
                },
                {
                  type: "video",
                  id: "vid-5-1",
                  title: "The Discipline of the Pen-Free Read",
                  caption: "Why marking up the first read blinds you to the macro emotional arc of the book.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Dean Julian Sterling",
                  badge: "Workflow Masterclass"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-5-1",
                  title: "Intake Protocol Decision Lab",
                  category: "Workflow & Strategy",
                  instructions: "A 90,000-word thriller manuscript lands on your desk. The author is desperate for immediate feedback on Chapter 1. How should you approach the intake workflow?",
                  draft: "Client request: 'Please line edit and copyedit Chapter 1 today while I finish Chapter 25!'",
                  options: [
                    {
                      text: "Comply immediately: Line edit Chapter 1 down to the comma before reading anything else.",
                      correct: false,
                      feedback: "Line editing Chapter 1 in isolation risks wasting hours if the ending changes the premise of the beginning."
                    },
                    {
                      text: "Explain the Professional Intake Protocol: Insist on receiving the complete draft and performing a blind first read to ensure Chapter 1 serves the complete narrative arc.",
                      correct: true,
                      feedback: "Masterclass editorial pipeline discipline! Macro story logic must always be understood before micro sentence polish begins.",
                      polishedText: "Protocol applied: Full manuscript intake scheduled for holistic assessment."
                    },
                    {
                      text: "Skim Chapter 1 for 30 seconds and send a random generic critique.",
                      correct: false,
                      feedback: "Superficial reactions fail professional publishing standards."
                    }
                  ]
                }
              ],
              test: {
                question: "Why does a professional editor conduct a 'pen-free first read' before marking up a manuscript?",
                options: [
                  "To charge the client for doing nothing.",
                  "To absorb the holistic reading experience, narrative arc, and pacing without getting bogged down in micro corrections.",
                  "Because software markup tools take hours to boot up."
                ],
                correctAnswer: 1,
                explanation: "The blind read preserves the editor's singular opportunity to experience the story with virgin reader eyes."
              }
            },

            /* --- SECTION 5.2 --- */
            {
              id: "sec-5-2",
              title: "The Manuscript Style Sheet",
              duration: "13 mins",
              content: [
                {
                  type: "text",
                  title: "The Sacred Ledger of Continuity",
                  content: "<p>A Style Sheet is the editor's continuity bible. It tracks:</p><p>• Character names, ages, physical traits, eye colors.<br>• Timeline chronology (e.g., 'Tuesday, October 14th').<br>• Orthographic rules (e.g., 'OK' vs. 'okay', hyphenations like 'blood-red').<br>• Made-up fantasy/sci-fi terms, foreign words, and capitalization standards.</p>"
                },
                {
                  type: "video",
                  id: "vid-5-2",
                  title: "Building the Continuity Ledger: The Master Style Sheet",
                  caption: "A hands-on walkthrough building an unshakeable editorial style sheet for a 400-page fantasy novel.",
                  durationSeconds: 25, // ⏱️ Enforced timer
                  instructor: "Prof. Arthur Pendelton",
                  badge: "Continuity Architecture"
                },
                {
                  type: "example",
                  title: "Style Sheet Continuity Rescue",
                  before: "Chapter 3: 'Lord Tyler had emerald green eyes.' → Chapter 22: 'Lord Tyler stared with icy sapphire blue eyes.'",
                  after: "Style Sheet flag: Catches eye color shift before typesetting, saving publisher from reader ridicule.",
                  explanation: "A rigorous style sheet protects the author's credibility across long-form manuscripts."
                }
              ],
              test: {
                question: "What is the primary function of a Manuscript Style Sheet?",
                options: [
                  "To increase invoice fees artificially.",
                  "To maintain strict orthographic, character, and chronological consistency across the entire book.",
                  "To replace the book's final table of contents."
                ],
                correctAnswer: 1,
                explanation: "The style sheet prevents contradictions (e.g., eye colors changing from brown to blue in chapter 14)."
              }
            },

            /* --- SECTION 5.3 --- */
            {
              id: "sec-5-3",
              title: "Author Reconciliation & Production Handoff",
              duration: "11 mins",
              content: [
                {
                  type: "text",
                  title: "Closing Queries and Locking Layout",
                  content: "<p>Once the author returns the marked-up draft, the editor performs the <em>Reconciliation Pass</em>: reviewing every resolved query, accepting approved track changes, and harmonizing lingering disagreements.</p><p>Once reconciled, the clean document is prepared for typesetting with standardized hierarchy tags (H1, H2, body, blockquotes).</p>"
                },
                {
                  type: "video",
                  id: "vid-5-3",
                  title: "Typesetting Pre-Flight: File Hygiene & Semantic Tagging",
                  caption: "Stripping rogue styles and preparing pristine manuscripts for interior book designers.",
                  durationSeconds: 20, // ⏱️ Enforced timer
                  instructor: "Helena Rostova",
                  badge: "Production Handoff"
                },
                {
                  type: "interactive_exercise",
                  id: "ex-5-3",
                  title: "Reconciliation & Pre-Flight Verification",
                  category: "Production Handoff",
                  instructions: "The author accepts 95% of your tracked edits, but left two ambiguous marginal questions unresolved. The production typesetter is requesting the file immediately. What is the correct handoff procedure?",
                  draft: "Status: 2 marginal queries open; typesetter emailing for deadline delivery.",
                  options: [
                    {
                      text: "Delete the 2 queries without resolving them and send the file to the typesetter anyway.",
                      correct: false,
                      feedback: "Sending ambiguous or unresolved queries to interior layout leads to costly resets on galley proofs."
                    },
                    {
                      text: "Execute the Reconciliation Protocol: Ping the author for immediate closure on the two queries, clean all markup, verify semantic tags, and hand off a locked file.",
                      correct: true,
                      feedback: "Impeccable production discipline! A clean, reconciled handoff protects printer deadlines and eliminates post-typesetting chaos.",
                      polishedText: "File Reconciled: Semantic hierarchy verified and delivered to layout."
                    },
                    {
                      text: "Reject the entire book and send it back to Chapter 1.",
                      correct: false,
                      feedback: "Overreacting stalls publishing operations. A quick reconciliation query resolves the issue."
                    }
                  ]
                }
              ],
              test: {
                question: "What occurs during the Author Query Reconciliation Pass?",
                options: [
                  "The author's revisions are discarded without review.",
                  "The editor systematically verifies every author response, accepts agreed changes, and cleans the file for production.",
                  "The editor sends the raw unproofed draft to the printer."
                ],
                correctAnswer: 1,
                explanation: "Reconciliation finalizes all tracked edits and resolves remaining marginal queries before typesetting."
              }
            }
          ],
          assessment: [
            {
              question: "What is the first mandatory step upon receiving a new full manuscript for substantive editing?",
              options: [
                "Sending it to the cover designer",
                "Conducting an uninterrupted first blind read to grasp holistic momentum and premise",
                "Fixing all commas on the first 10 pages",
                "Running automated spellcheck and returning the file"
              ],
              correctIndex: 1
            },
            {
              question: "Which of the following items belongs on an editor's Manuscript Style Sheet?",
              options: [
                "Character eye color, timeline dates, and treatment of numbers/spelling conventions",
                "The editor's grocery shopping list",
                "Social media follower statistics of the publisher",
                "The print shop's paper weight inventory"
              ],
              correctIndex: 0
            },
            {
              question: "Why should an editor never skip maintaining a style sheet on complex novels?",
              options: [
                "Authors will sue the editor",
                "Memory degrades across 400 pages, leading to continuity contradictions in character traits and timelines",
                "Style sheets are required by national law",
                "Computers will refuse to save the document"
              ],
              correctIndex: 1
            },
            {
              question: "What is 'file hygiene' in the professional editorial pipeline?",
              options: [
                "Wiping the computer monitor with antiseptic spray",
                "Ensuring consistent file naming, version control, semantic heading styles, and clean track changes",
                "Deleting all backup files every Friday",
                "Using only lowercase letters in filenames"
              ],
              correctIndex: 1
            },
            {
              question: "At what point in the publishing workflow is a manuscript considered 'locked' against major structural rewrites?",
              options: [
                "When the author writes chapter one",
                "Before the developmental editor reads it",
                "When copyediting is reconciled and the file is handed over to the interior typesetter",
                "After 10,000 copies have been printed"
              ],
              correctIndex: 2
            }
          ]
        }
      ],

      /* =================================================================
       * CAPSTONE FINAL EXAMINATION (50 RIGOROUS QUESTIONS)
       * ================================================================= */
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
          { q: "What is 'the curse of knowledge' in creative writing?", options: ["Knowing too many vocabulary words", "The author failing to realize details clear in their head aren't on the page", "Holding an advanced degree in literature", "Over-researching historical facts"], answer: 1 },
          { q: "In what sequential order should an editor perform a full book overhaul?", options: ["Developmental → Line Editing → Copyediting → Proofreading", "Proofreading → Developmental → Line Editing → Copyediting", "Line Editing → Proofreading → Copyediting → Developmental", "Copyediting → Line Editing → Developmental → Proofreading"], answer: 0 },
          { q: "Why should an editor conduct a pen-free first read of a full manuscript?", options: ["To save red ink", "To experience holistic narrative momentum and emotional pacing with fresh eyes", "To verify the word count", "Because clients don't pay for early reads"], answer: 1 },
          { q: "What is the primary function of a Manuscript Style Sheet?", options: ["To record character traits, timeline milestones, and orthographic conventions", "To calculate billable hourly rates", "To outline marketing strategies", "To store author banking details"], answer: 0 },
          { q: "When an author receives a 10-page editorial letter, what should be the opening tone?", options: ["Strict and demanding", "Sarcastic and challenging", "Appreciative of the vision and celebrating key artistic achievements", "Cold and bureaucratic"], answer: 2 },
          { q: "How should queries in the manuscript margin be framed?", options: ["As commands: 'Fix this immediately!'", "As collaborative questions illuminating reader impact: 'Could Marcus be more urgent here?'", "In rhetorical insults", "As multiple choice trivia"], answer: 1 },
          { q: "If an author refuses to adopt a non-legal stylistic suggestion, who has final authority?", options: ["The editor", "The author", "The publisher's legal team", "The book reviewer"], answer: 1 },
          { q: "Does suggesting structural edits grant the editor co-ownership of copyright?", options: ["Yes, after 100 edits", "No, the author retains sole proprietary copyright ownership", "Only in nonfiction works", "Yes, upon commercial publication"], answer: 1 },
          { q: "Under what circumstance may an editor share unpublished client chapters publicly?", options: ["Never, unless with explicit written author authorization", "Whenever they want feedback on social media", "If the author is an unpublished novice", "If the excerpt is less than 1,000 words"], answer: 0 },
          { q: "What is an editor's ethical obligation regarding generative AI tools on client drafts?", options: ["Use AI freely without telling the author", "Obtain explicit client consent before processing client files through external AI", "Reject any client who uses a computer", "Replace all author dialogue with AI"], answer: 1 },
          { q: "What is a 'saggy middle' in novel architecture?", options: ["A physical defect in book binding", "A loss of dramatic tension and narrative momentum in Act 2", "A chapter that has too few adjectives", "A font spacing inconsistency"], answer: 1 },
          { q: "How should an editor fix repetitive sentence syntax on a page?", options: ["Delete every second sentence", "Vary sentence lengths, starting clauses, and rhythmic cadence", "Switch the entire story to poetry", "Add passive voice throughout"], answer: 1 },
          { q: "What is 'editorial colonisation'?", options: ["Translating a book into English", "Forcing an author's unique voice to conform to the editor's personal style", "Working with foreign authors", "Printing books overseas"], answer: 1 },
          { q: "Which punctuation mark is standard in CMOS for dialogue attribution?", options: ["A semicolon inside quotes", "A comma inside closing quotation marks before the attribution tag", "A colon after the attribution tag", "An em dash replacing all quotes"], answer: 1 },
          { q: "What does an em dash (—) without surrounding spaces indicate in narrative prose?", options: ["A completed thought", "An abrupt break in thought or sudden interruption", "A minor pause equal to a comma", "A typographical error"], answer: 1 },
          { q: "What is the difference between 'its' and 'it\\'s'?", options: ["'Its' is possessive; 'it\\'s' is a contraction for 'it is'", "'It\\'s' is possessive; 'its' is plural", "Both are interchangeable", "'Its' is archaic English"], answer: 0 },
          { q: "What is an 'orphan' in typesetting proofreading?", options: ["A character whose parents died in chapter 1", "The first line of a paragraph appearing alone at the bottom of a page", "A footnote without a citation", "A missing title page"], answer: 1 },
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
