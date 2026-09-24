/* LITDOM ACADEMY - COURSE CURRICULUM & ASSESSMENT REPOSITORY */
const LITDOM_DATA = {
  courses: [
    {
      id: "editor-academy",
      title: "Editor Academy",
      category: "Editorial Craft",
      level: "Foundational to Advanced",
      duration: "4.5 Hours",
      icon: "✒️",
      description: "Transform raw manuscripts into published literature. Master line editing, substantive diagnosis, and author psychology.",
      supportedPaths: ["oneway", "practical"],
      modules: [
        {
          id: "mod-1",
          num: 1,
          title: "Who Is an Editor?",
          description: "The distinct identity, responsibilities, and philosophy of the modern editor.",
          passingScore: 4,
          sections: [
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
                  type: "audio",
                  title: "Masterclass Clip: Julian Sterling on 'The Invisible Touch'",
                  caption: "Listen to our Dean unpack why humility is the primary virtue of great line editors."
                },
                {
                  type: "example",
                  title: "Editorial Diagnosis: The Unedited vs. Refined Draft",
                  before: "He walked very quickly and with great haste towards the doorway because he was scared of what might happen next.",
                  after: "He bolted for the door, dreading what lurked behind him.",
                  explanation: "The edit eliminates redundant adverbs and vague phrasing, intensifying urgency while preserving the narrative tension."
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
                  title: "The Editorial Lens: Simulating Reader Immersion",
                  caption: "A diagnostic walkthrough demonstrating how to identify reader fatigue in early drafts."
                },
                {
                  type: "embed",
                  title: "Litdom Reader Experience Assessment Matrix",
                  caption: "Interactive framework used by editorial boards to evaluate narrative clarity and emotional cadence."
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
                  type: "exercise",
                  title: "Interactive Editorial Restraint Lab",
                  instructions: "Analyze the author's sentence. Click the highlighted phrase to see how a heavy-handed edit damages the author's intentional cadence:"
                },
                {
                  type: "download",
                  title: "Litdom Editor's Creed & Principles (.pdf)",
                  caption: "Core ethical commitments for independent and publishing house editors."
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
              question: "What is an editor's core identity in relation to the author's manuscript?",
              options: [
                "An objective diagnostician and the reader's empathetic surrogate",
                "A co-author who shares intellectual copyright",
                "A strict proofreader limited only to orthographic spelling checks",
                "A commercial censor enforcing market trends"
              ],
              correctIndex: 0
            },
            {
              question: "What danger arises when an editor lacks stylistic restraint?",
              options: [
                "The manuscript becomes too long",
                "The editor overwrites the author's authentic voice with their own preferences",
                "The proofreader has nothing left to do",
                "The author earns too much royalties"
              ],
              correctIndex: 1
            },
            {
              question: "Why must the editor read a manuscript 'from the outside in'?",
              options: [
                "To skip reading the difficult middle chapters",
                "To overcome the author's 'curse of knowledge' and experience the text as a newcomer",
                "To search exclusively for grammatical errors",
                "To compare the work against bestsellers"
              ],
              correctIndex: 1
            },
            {
              question: "Which of the following queries demonstrates masterclass editorial humility?",
              options: [
                "This paragraph is terribly written; replace it immediately.",
                "I felt the tension slacken here; would tightening this dialogue sharpen Marcus's urgency?",
                "You must rewrite this scene using my vocabulary list.",
                "Delete chapter two without question."
              ],
              correctIndex: 1
            },
            {
              question: "Under the Litdom ethos, who possesses final creative agency over artistic choices?",
              options: [
                "The Typesetter",
                "The Editor",
                "The Author",
                "The Literary Agent"
              ],
              correctIndex: 2
            }
          ]
        },
        {
          id: "mod-2",
          num: 2,
          title: "The Hierarchy of Editing",
          description: "The taxonomy of editorial levels: Developmental, Line, Copyediting, and Proofreading.",
          passingScore: 4,
          sections: [
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
                  title: "Manuscript Triage: Identifying the Required Level of Polish",
                  caption: "Watch senior editors conduct a diagnostic triage on an incoming manuscript."
                },
                {
                  type: "example",
                  title: "Editorial Tiers in Action",
                  before: "Developmental: 'The protagonist gives up in Act 2 with no motivation.' Line: 'The sentence stumbled across repetitive syllables.' Copyedit: 'Changed toward to towards per house style.'",
                  after: "Each tier solves a distinct category of literary craftsmanship without confusing scope.",
                  explanation: "Knowing the boundary between structural advice and mechanical correction prevents scope creep."
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
                  type: "pdf",
                  title: "Developmental Diagnosis Worksheet & Beat Tracker (.pdf)",
                  caption: "A 10-point checklist for auditing scene tension, turning points, and thematic weight."
                },
                {
                  type: "exercise",
                  title: "Pacing Audit Exercise: Spotting the Sagging Middle",
                  instructions: "Review the chapter synopsis to identify where dramatic propulsion stalls."
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
                  type: "audio",
                  title: "Line Editor's Ear: Reading Aloud for Rhythmic Cadence",
                  caption: "Julian Sterling explains why the best line editors read every sentence out loud."
                },
                {
                  type: "download",
                  title: "Copyeditor's Quick Checklist: CMOS 18th Edition Standards",
                  caption: "Essential mechanical rules for punctuation, numbers, and capitalizations."
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
        {
          id: "mod-3",
          num: 3,
          title: "Editor–Author Relationship",
          description: "Cultivating creative trust, delivering constructive feedback, and navigating revision resistance.",
          passingScore: 4,
          sections: [
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
                  title: "Author Diplomacy: Transforming Confrontation into Collaboration",
                  caption: "Role-playing exercises showing how phrasing shapes author receptivity."
                },
                {
                  type: "example",
                  title: "Query Phrasing Comparison",
                  before: "Query: 'This dialogue is completely unrealistic. Nobody talks like this.'",
                  after: "Query: 'Clara seems guarded here. Could we shorten her responses to heighten her emotional subtext?'",
                  explanation: "The second query invites the author into a creative puzzle rather than declaring personal failure."
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
                  type: "pdf",
                  title: "Exemplary Editorial Letter: Annotated Real-World Archive (.pdf)",
                  caption: "A comprehensive sample letter demonstrating praise, diagnosis, and prescription."
                },
                {
                  type: "embed",
                  title: "Editorial Letter Structural Blueprint",
                  caption: "Visual breakdown of sections, tone distribution, and revision milestones."
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
                  type: "audio",
                  title: "Negotiation Masterclass: Finding the Third Way in Creative Deadlocks",
                  caption: "How master editors uncover the root problem behind an author's resistance."
                },
                {
                  type: "exercise",
                  title: "Diplomacy Simulator: Resolving an Author Impasse",
                  instructions: "Select the response that de-escalates tension while safeguarding narrative clarity."
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
        {
          id: "mod-4",
          num: 4,
          title: "Editorial Ethics & Integrity",
          description: "Intellectual property, confidentiality, AI disclosure, and sensitivity.",
          passingScore: 4,
          sections: [
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
                  type: "download",
                  title: "Litdom Professional Editorial Non-Disclosure & Services Agreement (.docx)",
                  caption: "Industry-standard legal contract safeguarding author copyright and defining editor deliverables."
                },
                {
                  type: "audio",
                  title: "Legal Briefing: Copyright Ownership and Work-For-Hire in Editing",
                  caption: "Julian Sterling reviews why an editor never gains copyright ownership over client prose."
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
                  title: "Case Study: Sensitivity Editing and Contextual Nuance",
                  caption: "Navigating difficult cultural themes with nuance and respect for artistic expression."
                },
                {
                  type: "example",
                  title: "Ethical vs. Unethical Editorial Intervention",
                  before: "Unethical: Secretly rewriting a character's religious views because the editor disagrees with them.",
                  after: "Ethical: Querying the author: 'This passage may trigger unintended reader backlash; here is how other authors have nuanced this nuance.'",
                  explanation: "The ethical editor illuminates consequences while trusting the author's informed conscience."
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
                  type: "pdf",
                  title: "Litdom Guild Guidelines for Generative AI & Plagiarism Screening (.pdf)",
                  caption: "Policy on client data protection, algorithmic tooling, and authorial disclosure."
                },
                {
                  type: "exercise",
                  title: "Fair Use & Attribution Diagnostic Lab",
                  instructions: "Analyze sample manuscript citations to determine whether permissions are required."
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
        {
          id: "mod-5",
          num: 5,
          title: "The Professional Editorial Pipeline",
          description: "From submission intake to production-ready file delivery.",
          passingScore: 4,
          sections: [
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
                  type: "audio",
                  title: "Masterclass Clip: The Discipline of the First Read",
                  caption: "Why premature line editing blinds the editor to foundational structural problems."
                },
                {
                  type: "example",
                  title: "Intake Protocol in Publishing Houses",
                  before: "Starting line edits on page 1 → Misses that the climax in chapter 20 renders chapters 2-4 obsolete.",
                  after: "Pen-free first read → Diagnoses macro architecture → Saves 40 hours of wasted line editing.",
                  explanation: "Macro clarity must always precede micro sentence intervention."
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
                  type: "download",
                  title: "Template: Litdom Master Manuscript Style Sheet (.docx)",
                  caption: "Customizable industry-standard style sheet ledger for developmental and copyediting passes."
                },
                {
                  type: "embed",
                  title: "Style Sheet Architecture & Ledger Blueprint",
                  caption: "Sample filled style sheet from a published novel showing character and timeline tracking."
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
                  title: "Pre-Flight Prep: Preparing Clean Files for Typesetting",
                  caption: "How to strip rogue formatting and prepare clean semantic manuscripts for book interior designers."
                },
                {
                  type: "exercise",
                  title: "Query Reconciliation Lab: Resolving Complex Track Changes",
                  instructions: "Review the author's comments and execute the final clean resolution pass."
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
          { q: "What is the difference between 'its' and 'it\'s'?", options: ["'Its' is possessive; 'it's' is a contraction for 'it is'", "'It's' is possessive; 'its' is plural", "Both are interchangeable", "'Its' is archaic English"], answer: 0 },
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
          { q: "Transforming 'tell' to 'show': 'John was nervous' becomes:", options: ["'John felt extremely nervous inside.'", "'John's knuckles whitened as he shredded the paper cup into ribbons.'", "'John told everyone he was nervous.'", "'John was in a state of high anxiety.'"], answer: 1 },
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
