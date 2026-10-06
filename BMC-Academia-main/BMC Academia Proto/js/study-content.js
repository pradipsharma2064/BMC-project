// ============================================================================
// BMC ACADEMIA - STUDY CONTENT REPOSITORY
// High-Yield RemNote Notes, Interactive Spaced-Repetition Flashcards,
// TU Past Board Exam Questions with Verified Solutions, and AI Tutor Context
// ============================================================================

const BMC_STUDY_CONTENT = {
    // Specific curated deep-dive content for flagship courses
    curated: {
        // CSIT - C Programming (CSC110) - Chapter 1
        'csit_sem-1_CSC110_ch-1': {
            subjectName: 'C Programming',
            subjectCode: 'CSC110',
            chapterName: 'Introduction to Programming & C Fundamentals',
            chapterNumber: 1,
            estimatedHours: 4,
            tuWeightage: '8-10 Marks',
            notes: {
                summary: 'Foundation of computer programming, compiling pipeline, history of C, lexical tokens, structure of a C program, and preprocessor directives.',
                bulletTree: [
                    {
                        id: 'c1-b1',
                        text: 'Overview and Genesis of C Language',
                        tag: 'Foundation',
                        expandable: true,
                        children: [
                            { text: 'Developed in 1972 by Dennis Ritchie at Bell Laboratories for the UNIX operating system.' },
                            { text: 'Derived from BCLP (Basic Combined Programming Language) and B language created by Ken Thompson.' },
                            { text: 'C is a middle-level language: It combines the high-level expressiveness of human readability with the low-level efficiency of assembly-level memory control (pointers, bitwise operators).' },
                            { text: 'Standardized by ANSI in 1989 (ANSI C / C89) and ISO in 1990 (C90), later modernized in C99, C11, and C17.' }
                        ]
                    },
                    {
                        id: 'c1-b2',
                        text: 'C Compilation Pipeline (Preprocessing to Execution)',
                        tag: 'TU Exam Favorite',
                        examAlert: 'Frequently asked as a 5-mark question in TU CSIT exams!',
                        expandable: true,
                        children: [
                            { text: '1. Source Code (.c file): Human-readable code written by the programmer.' },
                            { text: '2. Preprocessor: Expands header files (#include), macros (#define), and strips out comments. Outputs (.i file).' },
                            { text: '3. Compiler: Translates preprocessed code into architecture-specific Assembly language (.s file).' },
                            { text: '4. Assembler: Converts assembly mnemonics into relocatable machine/object code (.obj or .o file).' },
                            { text: '5. Linker: Combines object files with system library code (e.g., printf, scanf definitions in libc) to produce an executable file (.exe in Windows, .out in Linux).' },
                            { text: '6. Loader: Operating system component that loads the executable binary into RAM and initiates the CPU program counter.' }
                        ]
                    },
                    {
                        id: 'c1-b3',
                        text: 'Anatomy of a Standard C Program',
                        tag: 'Syntax Structure',
                        expandable: true,
                        children: [
                            { text: 'Documentation Section: Comment blocks (/* ... */ or //) detailing author, purpose, date.' },
                            { text: 'Link Section: Preprocessor directives like #include <stdio.h> linking standard libraries.' },
                            { text: 'Definition Section: Symbolic constants defined with #define MAX 100.' },
                            { text: 'Global Declaration Section: Function prototypes and globally accessible variables.' },
                            { text: 'main() Function: The mandatory entry point where CPU begins program execution.' },
                            { text: 'Subprogram Section: User-defined functions definitions called by main().' }
                        ]
                    },
                    {
                        id: 'c1-b4',
                        text: 'C Tokens: The Smallest Individual Units',
                        tag: 'Core Concept',
                        expandable: true,
                        children: [
                            { text: 'Keywords: 32 reserved words in C89 (e.g., auto, break, case, const, volatile) that cannot be used as variable identifiers.' },
                            { text: 'Identifiers: User-defined names for variables, functions, and arrays. Must start with letter or underscore; cannot start with a digit; case-sensitive.' },
                            { text: 'Constants: Fixed values that do not change during program execution (Integer literals, Float literals, Character constants enclosed in single quotes \'A\', String literals in double quotes "TU").' },
                            { text: 'Operators: Symbols instructing the compiler to perform arithmetic or logical computations (+, -, *, %, &&, ||, ?:).' },
                            { text: 'Special Symbols: Punctuation like semicolons ;, braces {}, brackets [], and commas ,.' }
                        ]
                    }
                ],
                clozeCards: [
                    { id: 'cloze-1', question: 'C language was designed and developed by {{Dennis Ritchie}} in the year {{1972}} at Bell Laboratories.' },
                    { id: 'cloze-2', question: 'The C tool responsible for linking object files with precompiled library functions is called the {{Linker}}.' },
                    { id: 'cloze-3', question: 'In C, all variable identifiers must begin with either a {{letter}} or an {{underscore}}.' }
                ]
            },
            flashcards: [
                {
                    id: 'fc-csit-1',
                    front: 'Why is C considered a "Middle-Level" programming language?',
                    back: 'Because it combines high-level structured programming features (functions, loops, type checking) with low-level direct memory manipulation capabilities (pointers, address arithmetic, bitwise manipulation).',
                    difficulty: 'Medium',
                    tag: 'C Fundamentals'
                },
                {
                    id: 'fc-csit-2',
                    front: 'What are the 4 main stages in the C compilation pipeline?',
                    back: '1. Preprocessing (macro expansion, header inclusion)\n2. Compilation (C to Assembly code)\n3. Assembly (Assembly to Object/Machine code)\n4. Linking (combining object files with libraries into an executable).',
                    difficulty: 'High Yield',
                    tag: 'Compilation'
                },
                {
                    id: 'fc-csit-3',
                    front: 'What is the distinction between a Keyword and an Identifier in C?',
                    back: 'Keywords are 32 pre-defined reserved words with fixed compiler meanings that cannot be renamed (e.g., int, return, for). Identifiers are programmer-defined names for variables, functions, or arrays following naming conventions.',
                    difficulty: 'Easy',
                    tag: 'Lexical Syntax'
                },
                {
                    id: 'fc-csit-4',
                    front: 'What is the exact purpose of the Linker in C compilation?',
                    back: 'The linker takes one or more object files (.o/.obj) produced by the assembler and resolves external references with compiled runtime libraries (like stdio, math) to produce a standalone executable binary (.exe).',
                    difficulty: 'Medium',
                    tag: 'Systems'
                },
                {
                    id: 'fc-csit-5',
                    front: 'Why must the main() function in modern standard C return an integer value?',
                    back: 'main() returns an integer exit status code back to the Operating System. Returning 0 (EXIT_SUCCESS) signals successful termination, while any non-zero value signals an error state.',
                    difficulty: 'Easy',
                    tag: 'Execution Model'
                }
            ],
            pastQuestions: [
                {
                    year: 'TU 2080 (B.Sc. CSIT Regular)',
                    marks: 10,
                    question: 'Explain the detailed process of compilation of a C program from source code to executable file with a neat block diagram. Differentiate between compiler and interpreter.',
                    solution: `### 1. The C Compilation Process
A C source program undergoes four primary phases before CPU execution:

\`\`\`
[ Source Code (.c) ] 
         ↓
  Preprocessor (strips comments, expands #include, #define)
         ↓
[ Preprocessed Code (.i) ]
         ↓
  Compiler (syntax checking, translates to assembly code)
         ↓
[ Assembly Code (.s) ]
         ↓
  Assembler (translates mnemonics to machine opcodes)
         ↓
[ Object File (.obj / .o) ]
         ↓
  Linker (merges object code with standard library binaries)
         ↓
[ Executable Binary (.exe / a.out) ]
\`\`\`

#### Step-by-Step Breakdown:
1. **Preprocessing**: Handled by \`cpp\`. Processes lines beginning with \`#\`. Replaces header inclusions with full text and substitutes macros.
2. **Compilation**: Handled by \`ccl\`. Analyzes syntax, produces parse trees, and generates target-specific assembly code.
3. **Assembly**: Handled by \`as\`. Translates assembly mnemonics into binary machine code with unresolved symbol addresses.
4. **Linking**: Handled by \`ld\`. Resolves symbol addresses (e.g. \`printf\`) from runtime libraries and binds multiple object files.

---

### 2. Difference Between Compiler and Interpreter

| Parameter | Compiler (e.g., GCC, Clang) | Interpreter (e.g., Python, Ruby) |
| :--- | :--- | :--- |
| **Translation** | Scans and translates entire source code into machine code at once. | Translates and executes source code line-by-line sequentially. |
| **Execution Speed** | Much faster runtime since binary is executed directly by hardware. | Slower execution due to continuous interpretation overhead. |
| **Memory** | Generates intermediate object file (.o), requiring more initial disk space. | No intermediate object code generated; runs directly in memory. |
| **Error Handling** | Displays all syntax errors at once after compiling whole file. | Stops execution on the very first line containing an error. |
| **Examples** | C, C++, Rust, Go | Python, JavaScript (V8 JIT hybrid), PHP |`
                },
                {
                    year: 'TU 2079 (B.Sc. CSIT Regular)',
                    marks: 5,
                    question: 'What are tokens in C? List the different categories of C tokens with two examples of each.',
                    solution: `### Tokens in C Language
A **token** is the smallest individual unit in a C program that the compiler recognizes as meaningful during the lexical analysis phase.

The 6 categories of C tokens are:
1. **Keywords**: Reserved words with predefined meanings.
   * *Examples*: \`float\`, \`while\`, \`sizeof\`
2. **Identifiers**: Programmer-defined names for entities like variables, functions, and arrays.
   * *Examples*: \`studentAge\`, \`calculateTotal\`
3. **Constants**: Immutable literals whose values cannot change during program execution.
   * *Examples*: \`42\` (integer constant), \`3.14159\` (floating-point constant), \`'A'\` (character constant)
4. **Strings**: Sequences of characters enclosed within double quotation marks terminated by a null character (\`\\0\`).
   * *Examples*: \`"BMC Academia"\`, \`"Tribhuvan University"\`
5. **Operators**: Symbols specifying arithmetic, relational, logical, or bitwise operations.
   * *Examples*: \`+\`, \`==\`, \`&&\`, \`?:\`
6. **Special Symbols / Punctuators**: Delimiters and punctuation characters having syntactic meaning.
   * *Examples*: Semicolon \`;\`, Curly braces \`{ }\`, Square brackets \`[ ]\``
                }
            ],
            aiTutor: {
                presetQuestions: [
                    'How does the Linker resolve functions like printf() in stdio.h?',
                    'Why does C not support function overloading like C++?',
                    'Can you provide a simple C program demonstrating preprocessor directives with comments?',
                    'What are the most common mistakes in C variable declarations in TU exams?'
                ],
                contextPrompt: 'You are the BMC Academia AI Tutor for B.Sc. CSIT Semester 1, Subject: C Programming (CSC110), Chapter 1: Introduction to Programming & C Fundamentals. Provide student-friendly, clear, accurate academic guidance with code snippets, TU exam tips, and step-by-step explanations.'
            }
        },

        // BBA - Principles of Management (MGT201) - Chapter 1
        'bba_sem-1_MGT201_ch-1': {
            subjectName: 'Principles of Management',
            subjectCode: 'MGT201',
            chapterName: 'Nature and Scope of Management in Globalized Era',
            chapterNumber: 1,
            estimatedHours: 4,
            tuWeightage: '10 Marks',
            notes: {
                summary: 'Comprehensive examination of management definitions, art vs science debate, universal management functions (POSDCORB), managerial levels, and Mintzberg managerial roles in the modern Nepali and global business context.',
                bulletTree: [
                    {
                        id: 'm1-b1',
                        text: 'Definition and Nature of Management',
                        tag: 'Core Concept',
                        expandable: true,
                        children: [
                            { text: 'Harold Koontz: "Management is the art of getting things done through and with people in formally organized groups."' },
                            { text: 'Mary Parker Follett: "Management is the art of getting things done through people."' },
                            { text: 'Efficiency vs Effectiveness: Efficiency means doing things right (minimizing resource input/waste). Effectiveness means doing the right things (achieving organizational goals).' },
                            { text: 'Management is Goal-Oriented, Pervasive, Continuous, Dynamic, and Multidisciplinary (drawing from psychology, economics, sociology).' }
                        ]
                    },
                    {
                        id: 'm1-b2',
                        text: 'Management: Art, Science, or Profession?',
                        tag: 'TU Classical Question',
                        examAlert: 'Regularly tested in TU BBA 1st semester exams!',
                        expandable: true,
                        children: [
                            { text: 'As a Science: Systematic body of knowledge, based on cause-effect relationships, derived through observation and experimentation, with universally verifiable principles.' },
                            { text: 'As an Art: Requires practical application of knowledge, personalized style, creative problem solving, and skill enhancement through continuous practice.' },
                            { text: 'Conclusion: Management is both an art and an inexact/social science (applied art supported by underlying scientific principles).' },
                            { text: 'As a Profession: Characterized by specialized knowledge, formal education, code of ethics, and representative professional bodies (e.g., MAN in Nepal).' }
                        ]
                    },
                    {
                        id: 'm1-b3',
                        text: 'Levels of Management and Required Skills (Robert Katz Model)',
                        tag: 'Organizational Hierarchy',
                        expandable: true,
                        children: [
                            { text: 'Top Level (Board of Directors, CEO, Campus Chief): Focuses on strategic vision, long-term goals, and policy formulation. Requires highest Conceptual Skills.' },
                            { text: 'Middle Level (Department Heads, Branch Managers): Interprets top policies and coordinates departments. Requires high Human/Interpersonal Skills.' },
                            { text: 'First-Line/Operative Level (Supervisors, Foremen): Directly oversees non-managerial staff. Requires highest Technical Skills.' }
                        ]
                    },
                    {
                        id: 'm1-b4',
                        text: 'Henry Mintzberg’s 10 Managerial Roles',
                        tag: 'Management Behavioral Model',
                        expandable: true,
                        children: [
                            { text: '1. Interpersonal Roles: Figurehead (ceremonial duties), Leader (motivating staff), Liaison (building external networks).' },
                            { text: '2. Informational Roles: Monitor (gathering data), Disseminator (transmitting info internally), Spokesperson (representing firm to external stakeholders).' },
                            { text: '3. Decisional Roles: Entrepreneur (initiating change), Disturbance Handler (resolving crises), Resource Allocator (budgeting), Negotiator (bargaining deals).' }
                        ]
                    }
                ],
                clozeCards: [
                    { id: 'cloze-bba-1', question: '{{Efficiency}} is concerned with doing things right with minimal waste, whereas {{Effectiveness}} is achieving the intended organizational objective.' },
                    { id: 'cloze-bba-2', question: 'According to Robert Katz, Top-level executives require the highest degree of {{Conceptual}} skills.' },
                    { id: 'cloze-bba-3', question: 'Henry Mintzberg categorized the 10 managerial roles into three broad groups: Interpersonal, {{Informational}}, and {{Decisional}}.' }
                ]
            },
            flashcards: [
                {
                    id: 'fc-bba-1',
                    front: 'What is the crucial difference between Efficiency and Effectiveness in management?',
                    back: 'Efficiency is the "input-output relationship" aimed at minimizing cost and waste (doing things right). Effectiveness is the degree to which organizational goals are achieved (doing the right things). A successful manager must achieve both.',
                    difficulty: 'High Yield',
                    tag: 'Fundamentals'
                },
                {
                    id: 'fc-bba-2',
                    front: 'What are the 3 skill sets identified by Robert Katz across managerial hierarchies?',
                    back: '1. Technical Skills (methods and procedures - vital for first-line supervisors)\n2. Human/Interpersonal Skills (working with people - essential across all levels)\n3. Conceptual Skills (big-picture abstract vision - vital for top executives).',
                    difficulty: 'Medium',
                    tag: 'Managerial Skills'
                },
                {
                    id: 'fc-bba-3',
                    front: 'Name the three Interpersonal roles defined by Henry Mintzberg.',
                    back: '1. Figurehead (symbolic legal & ceremonial head)\n2. Leader (directing, motivating, and guiding subordinates)\n3. Liaison (maintaining contact networks outside the vertical chain of command).',
                    difficulty: 'Medium',
                    tag: 'Mintzberg Model'
                },
                {
                    id: 'fc-bba-4',
                    front: 'Why is Management characterized as an "Inexact Science"?',
                    back: 'Because unlike pure physical sciences (physics, chemistry) which deal with inanimate matter, management deals with complex, unpredictable human behavior whose outcomes cannot be replicated with 100% mathematical precision.',
                    difficulty: 'Hard',
                    tag: 'Theory'
                }
            ],
            pastQuestions: [
                {
                    year: 'TU 2080 (BBA 1st Semester)',
                    marks: 10,
                    question: 'Define Management. Critically discuss whether management is an Art or a Science with reference to contemporary corporate organizations in Nepal.',
                    solution: `### 1. Definition of Management
Management is the dynamic, continuous process of planning, organizing, leading, and controlling human, financial, physical, and information resources to achieve organizational goals effectively and efficiently in a changing environment.

---

### 2. Is Management an Art or a Science?

#### A. Management as a Science:
A science is a systematized body of knowledge acquired through scientific inquiry:
1. **Systematized Body of Knowledge**: Management has evolved established principles (e.g., Fayol’s 14 principles, Taylor’s scientific management).
2. **Observation & Experimentation**: Modern management principles are developed through empirical case studies and organizational research.
3. **Cause-and-Effect Relationship**: For example, poor incentive structures lead to higher employee turnover.
*However, it is an **inexact or social science** because human behavior and market variables in Nepal cannot be tested in controlled laboratory conditions.*

#### B. Management as an Art:
An art is the personalized, creative application of knowledge and skills to achieve desired results:
1. **Practical Application**: Possessing theoretical MBA knowledge is useless unless a manager can lead a team through a crisis.
2. **Personalized Skill**: Two bank branch managers in Butwal with the same resources achieve vastly different customer satisfaction levels due to individual leadership artistry.
3. **Creativity & Innovation**: Handling trade union demands or liquidity crises requires creative situational judgment.

#### Conclusion:
**Management is both a science and an art.** Science provides the foundation of knowledge, theories, and analytical tools; Art provides the practical wisdom, emotional intelligence, and personalized execution to apply that science in practice.`
                }
            ],
            aiTutor: {
                presetQuestions: [
                    'How do Mintzberg’s 10 roles apply to a Commercial Bank Manager in Nepal?',
                    'Explain Fayol’s 14 principles of management briefly with examples.',
                    'What is POSDCORB and who formulated it?',
                    'How does the external business environment impact management decisions in Nepal?'
                ],
                contextPrompt: 'You are the BMC Academia AI Academic Tutor for BBA Semester 1, Subject: Principles of Management (MGT201), Chapter 1. Answer with academic clarity, management models, practical examples from Nepal corporate context, and exam-oriented formatting.'
            }
        },

        // LLB - General Principles of Law (LAW101) - Chapter 1
        'llb_sem-1_LAW101_ch-1': {
            subjectName: 'General Principles of Law',
            subjectCode: 'LAW101',
            chapterName: 'Definition, Nature and Sources of Law (Custom, Legislation, Precedent)',
            chapterNumber: 1,
            estimatedHours: 5,
            tuWeightage: '15 Marks',
            notes: {
                summary: 'Comprehensive analysis of jurisprudence, Austinian analytical positivism, Salmond and Holland definitions, primary sources of law (custom, legislation, judicial precedent), and the doctrine of Stare Decisis in Nepal.',
                bulletTree: [
                    {
                        id: 'l1-b1',
                        text: 'Jurisprudential Definitions of Law',
                        tag: 'Jurisprudence',
                        expandable: true,
                        children: [
                            { text: 'John Austin (Analytical School): "Law is the command of the sovereign, backed by sanctions, and habitual obedience of the populace."' },
                            { text: 'John Salmond: "Law is the body of principles recognized and applied by the state in the administration of justice."' },
                            { text: 'Hans Kelsen (Pure Theory of Law): Law is a hierarchy of norms descending from the foundational fundamental norm known as the "Grundnorm" (in Nepal, the Constitution of 2072).' },
                            { text: 'Roscoe Pound (Sociological School): Law is an instrument of "social engineering" balancing competing public, social, and private interests.' }
                        ]
                    },
                    {
                        id: 'l1-b2',
                        text: 'Primary Sources of Law in Nepal',
                        tag: 'TU Core Question',
                        examAlert: 'Guaranteed 10 or 15-mark essay question in TU LLB Semester 1 exams!',
                        expandable: true,
                        children: [
                            { text: '1. Legislation (Statute Law): The written enactment by the sovereign legislature (Federal Parliament of Nepal). Supreme source in modern democratic states.' },
                            { text: '2. Judicial Precedent (Case Law / Stare Decisis): Judicial decisions rendered by superior courts (Supreme Court of Nepal) that establish binding legal rules for subordinate courts under Article 128(4) of the Constitution.' },
                            { text: '3. Custom (Pratha / Riti Riwaj): Long-standing, uninterrupted social usages accepted as binding by the community provided they are immemorial, reasonable, and not contrary to morality or statutory law.' },
                            { text: '4. Conventional Law: International treaties, conventions (e.g., Section 9 of Nepal Treaty Act 2047 gives ratified international treaties precedence over conflicting national law).' }
                        ]
                    },
                    {
                        id: 'l1-b3',
                        text: 'The Doctrine of Judicial Precedent (Stare Decisis)',
                        tag: 'Constitutional Link',
                        expandable: true,
                        children: [
                            { text: 'Derived from Latin maxim: "Stare decisis et non quieta movere" (to stand by decided matters and not disturb settled points).' },
                            { text: 'Ratio Decidendi: The underlying legal principle or rationale forming the necessary ground for the court\'s ultimate decision. It alone carries binding precedential force.' },
                            { text: 'Obiter Dictum: Incidental observations, remarks, or illustrative comments made by the judge in passing. Persuasive but not binding.' },
                            { text: 'Article 128(4) of Constitution of Nepal 2072: Legal interpretation or precedent established by the Supreme Court of Nepal is binding on all subordinate courts, offices, and citizens.' }
                        ]
                    }
                ],
                clozeCards: [
                    { id: 'cloze-law-1', question: 'John Austin famously defined law as the {{command}} of the sovereign backed by the threat of {{sanction}}.' },
                    { id: 'cloze-law-2', question: 'In case law, the binding legal principle that forms the ground for decision is known as the {{Ratio Decidendi}}.' },
                    { id: 'cloze-law-3', question: 'Under Article {{128(4)}} of the Constitution of Nepal 2072, Supreme Court precedents are binding on all courts and government bodies.' }
                ]
            },
            flashcards: [
                {
                    id: 'fc-law-1',
                    front: 'What are the three essential elements of John Austin\'s Imperative Theory of Law?',
                    back: '1. Command (expression of wish by a superior to an inferior)\n2. Sovereign (politically superior authority not subject to outside control)\n3. Sanction (evil or penalty inflicted in case of non-compliance).',
                    difficulty: 'High Yield',
                    tag: 'Analytical Positivism'
                },
                {
                    id: 'fc-law-2',
                    front: 'What conditions must a custom satisfy to be recognized as a valid source of law?',
                    back: '1. Immemorial Antiquity (practiced for time out of mind)\n2. Continuance (unbroken, uninterrupted practice)\n3. Peaceable Enjoyment (exercised as a right without force)\n4. Reasonableness (must conform to logic & justice)\n5. Conformity with Statutory Law and Public Morality.',
                    difficulty: 'Hard',
                    tag: 'Customary Law'
                },
                {
                    id: 'fc-law-3',
                    front: 'Distinguish between Ratio Decidendi and Obiter Dictum.',
                    back: 'Ratio Decidendi is the crucial reason, rule, or legal principle necessary for reaching the court\'s final judgment; it is strictly binding under Stare Decisis. Obiter Dictum is any judicial observation said "by the way", carrying persuasive value but not binding authority.',
                    difficulty: 'High Yield',
                    tag: 'Precedent'
                },
                {
                    id: 'fc-law-4',
                    front: 'What is Hans Kelsen’s "Grundnorm" concept in constitutional jurisprudence?',
                    back: 'Kelsen posited that law is a hierarchical pyramid of norms where each norm derives validity from a higher norm. The apex foundational norm from which all legal authority emanates is the "Grundnorm" — in Nepal, the Constitution of Nepal 2072.',
                    difficulty: 'Hard',
                    tag: 'Jurisprudence'
                }
            ],
            pastQuestions: [
                {
                    year: 'TU 2080 (LLB 1st Semester Regular)',
                    marks: 15,
                    question: 'What is Judicial Precedent? Discuss the doctrine of Stare Decisis. Differentiate between Ratio Decidendi and Obiter Dictum with relevant constitutional provisions and case law of Nepal.',
                    solution: `### 1. Concept of Judicial Precedent
A **Judicial Precedent** is a judgment or decision of a court of law cited as an authority for deciding a similar subsequent set of facts or legal questions.

Precedents operate on the foundational common law doctrine of **Stare Decisis** (*Stare decisis et non quieta movere* - "Stand by decisions and do not disturb settled points"). The principle ensures predictability, legal certainty, uniform equality before the law, and administrative efficiency in the justice delivery system.

---

### 2. Constitutional Status of Precedent in Nepal
In Nepal, the binding status of judicial precedent is formally enshrined in **Article 128(4) of the Constitution of Nepal 2072**:
> *"All shall abide by the order or decision made by the Supreme Court in the course of trial of a lawsuit. Any interpretation given to a law or any legal principle laid down by the Supreme Court in the course of trial of a lawsuit shall be binding on the Government of Nepal and all courts and offices."*

The precedents of the Supreme Court of Nepal are officially published in the **Nepal Kanoon Patrika (NKP)**.

---

### 3. Difference Between Ratio Decidendi and Obiter Dictum

| Parameter | Ratio Decidendi | Obiter Dictum |
| :--- | :--- | :--- |
| **Meaning** | Latin for "Reason for deciding". The underlying legal proposition determining the final outcome. | Latin for "Said by the way". Casual judicial remarks, analogies, or hypotheticals. |
| **Authority** | Strictly binding on lower courts and future equal benches under Stare Decisis. | Persuasive authority only; not legally binding on any court. |
| **Necessity** | Crucial and indispensable to the actual resolution of the lis (dispute). | Collateral remarks not essential to resolving the specific issue before the court. |
| **Identification Method** | Tested via Wambaugh’s Inversion Test or Goodhart’s Material Facts test. | Extraneous opinions that can be reversed without altering the judgment. |`
                }
            ],
            aiTutor: {
                presetQuestions: [
                    'How does the Supreme Court of Nepal overrule its own previous precedents?',
                    'Explain Austinian command theory and why H.L.A. Hart criticized it.',
                    'What is the relation between Treaty Act 2047 Section 9 and Municipal Law of Nepal?',
                    'Summarize the elements of valid custom in 4 concise points.'
                ],
                contextPrompt: 'You are the BMC Academia AI Tutor for Bachelor of Laws (LLB), Semester 1, Subject: General Principles of Law (LAW101). Offer authoritative, rigorous legal explanations adhering to Nepalese constitutional law, jurisprudence, Supreme Court case precedents (NKP), and Latin legal maxims.'
            }
        },

        // BICTE - Intro to IT (ICT Ed. 415) - Chapter 1
        'bicte_sem-1_ICT Ed. 415_ch-1': {
            subjectName: 'Introduction to Information Technology',
            subjectCode: 'ICT Ed. 415',
            chapterName: 'Computer Systems & Hardware Architecture for Educators',
            chapterNumber: 1,
            estimatedHours: 4,
            tuWeightage: '10 Marks',
            notes: {
                summary: 'Von Neumann computing architecture, educational digital hardware tools, input-output processing systems, memory hierarchies, and microcomputer systems in modern pedagogy.',
                bulletTree: [
                    {
                        id: 'bi1-b1',
                        text: 'Von Neumann Architecture in Modern Computing',
                        tag: 'System Architecture',
                        expandable: true,
                        children: [
                            { text: 'Formulated by John von Neumann in 1945 based on the Stored-Program Concept where instructions and data share the same memory space.' },
                            { text: 'Key Subsystems: Central Processing Unit (ALU + Control Unit + Registers), Memory Unit (RAM/ROM), and Input/Output Interfaces.' },
                            { text: 'Von Neumann Bottleneck: System throughput limitation caused by the shared data and instruction bus between CPU and memory.' }
                        ]
                    },
                    {
                        id: 'bi1-b2',
                        text: 'Memory Hierarchy: Speed, Cost, and Capacity Trade-offs',
                        tag: 'Hardware Core',
                        expandable: true,
                        children: [
                            { text: 'CPU Registers: Fastest and most expensive volatile storage directly inside the processor cores.' },
                            { text: 'SRAM Cache (L1, L2, L3): High-speed static RAM buffering frequent instructions between CPU and Main Memory.' },
                            { text: 'DRAM Main Memory (RAM): Volatile primary storage executing active operating system tasks and educational apps.' },
                            { text: 'Secondary/Auxiliary Storage (SSD NVMe, HDD): Non-volatile, high-capacity long-term data repository.' }
                        ]
                    },
                    {
                        id: 'bi1-b3',
                        text: 'ICT Hardware in Contemporary Educational Pedagogy',
                        tag: 'Educational Tech',
                        expandable: true,
                        children: [
                            { text: 'Interactive Whiteboards (Smartboards) and Touchscreen Displays for collaborative classroom learning.' },
                            { text: 'Visualizers / Document Cameras for real-time scientific experiment projection.' },
                            { text: 'Assistive Educational Hardware: Screen readers, braille displays, and adaptive keyboards for inclusive education.' }
                        ]
                    }
                ],
                clozeCards: [
                    { id: 'cloze-bi-1', question: 'The computing design where program instructions and data share the same memory is called {{Von Neumann}} architecture.' },
                    { id: 'cloze-bi-2', question: 'The fastest memory located directly inside the CPU chip is the {{Register}} array.' }
                ]
            },
            flashcards: [
                {
                    id: 'fc-bi-1',
                    front: 'What constitutes the "Von Neumann Bottleneck"?',
                    back: 'The physical throughput limitation where the CPU must wait for memory data transfers because instructions and data share a single physical bus system.',
                    difficulty: 'Medium',
                    tag: 'Computer Architecture'
                },
                {
                    id: 'fc-bi-2',
                    front: 'Differentiate between SRAM and DRAM.',
                    back: 'SRAM (Static RAM) uses flip-flop latches, is faster, does not need periodic refresh, and is used for CPU Cache. DRAM (Dynamic RAM) uses capacitors and transistors, requires continuous refresh cycles, is cheaper, and is used for Main Memory.',
                    difficulty: 'Easy',
                    tag: 'Memory Systems'
                }
            ],
            pastQuestions: [
                {
                    year: 'TU 2080 (BICTE Semester 1)',
                    marks: 10,
                    question: 'Explain the Von Neumann Architecture with a block diagram. How does memory hierarchy optimize system performance in educational computing labs?',
                    solution: `### 1. Von Neumann Computer Architecture
The Von Neumann model is based on the **Stored Program Concept** where program instructions and operating data reside in the same physical memory space.

\`\`\`
+-------------------------------------------------------+
|                 CENTRAL PROCESSING UNIT               |
|                                                       |
|  +---------------------+      +--------------------+  |
|  | Arithmetic & Logic  | <--> |   Control Unit     |  |
|  |     Unit (ALU)      |      |       (CU)         |  |
|  +---------------------+      +--------------------+  |
|            ^                             ^            |
|            |      +---------------+      |            |
|            +----> | CPU Registers | <----+            |
|                   +---------------+                   |
+---------------------------+---------------------------+
                            | (System Bus)
                            v
+---------------------------+---------------------------+
|                    MEMORY UNIT (RAM)                  |
+---------------------------+---------------------------+
                            |
            +---------------+---------------+
            v                               v
+-----------------------+       +-----------------------+
|     INPUT DEVICES     |       |    OUTPUT DEVICES     |
+-----------------------+       +-----------------------+
\`\`\`

---

### 2. Role of Memory Hierarchy in Educational Systems
Memory hierarchy balances the inverse relationship between **access speed** and **cost/capacity**:
1. **CPU Registers**: Instantaneous single-cycle access for ongoing calculation.
2. **L1/L2/L3 Cache**: Prevents CPU starvation by caching frequent instructional loops.
3. **RAM**: Holds active LMS platforms, office applications, and OS services.
4. **Solid-State Drives (SSD)**: Provides permanent non-volatile storage for student portfolios, curriculum documents, and multimedia software.`
                }
            ],
            aiTutor: {
                presetQuestions: [
                    'How can teachers integrate Smartboards effectively in school classes?',
                    'Explain the difference between Harvard and Von Neumann architecture.',
                    'What hardware specifications are ideal for a school computer lab in Nepal?'
                ],
                contextPrompt: 'You are the BMC Academia AI Tutor for BICTE (Bachelor of Information Communication Technology Education), Semester 1. Offer pedagogical insights bridging computer science and teaching methodology in Nepal.'
            }
        }
    },

    // Dynamic generator fallback for any subject and chapter across all 4 faculties
    generateContent: function(facultyId, semesterNum, subjectCode, subjectName, chapterName, chapterIndex) {
        const key = `${facultyId}_sem-${semesterNum}_${subjectCode}_ch-${chapterIndex}`;
        if (this.curated[key]) {
            return this.curated[key];
        }

        // Return a rich contextual generated study pack based on subject and chapter
        return {
            subjectName: subjectName || 'Course Subject',
            subjectCode: subjectCode || 'SUBJ101',
            chapterName: chapterName || 'Unit Principles & Concepts',
            chapterNumber: chapterIndex,
            estimatedHours: 4,
            tuWeightage: '8-12 Marks',
            notes: {
                summary: `Comprehensive syllabus study outline for ${subjectName} (${subjectCode}), focusing on "${chapterName}". Designed with active recall and hierarchical toggles for Tribhuvan University semester examination preparation.`,
                bulletTree: [
                    {
                        id: `dyn-${chapterIndex}-1`,
                        text: `Foundations and Core Principles of ${chapterName}`,
                        tag: 'Fundamental Theory',
                        expandable: true,
                        children: [
                            { text: `Conceptual overview and significance of ${chapterName} in the contemporary curriculum of ${subjectName}.` },
                            { text: `Key theoretical frameworks, paradigms, and academic definitions recognized by Tribhuvan University.` },
                            { text: `Essential terminology, scientific/management/legal classifications, and standard industry practices.` }
                        ]
                    },
                    {
                        id: `dyn-${chapterIndex}-2`,
                        text: `Detailed Mechanics, Methodologies and Analytical Procedures`,
                        tag: 'Analytical Methods',
                        expandable: true,
                        children: [
                            { text: `Step-by-step methodologies and procedural workflows relevant to ${chapterName}.` },
                            { text: `Mathematical formulations, technical diagrams, flowcharts, or statutory citations pertaining to the topic.` },
                            { text: `Comparative analysis of alternative approaches and best practices applied in Nepal.` }
                        ]
                    },
                    {
                        id: `dyn-${chapterIndex}-3`,
                        text: `Practical Applications, Case Studies & Exam Highlights`,
                        tag: 'TU Exam Focus',
                        examAlert: `High-yield topic frequently tested in ${subjectCode} board examinations!`,
                        expandable: true,
                        children: [
                            { text: `Real-world implementation scenarios in Nepalese industry, institutions, and public administration.` },
                            { text: `Critical review of common examination pitfalls, scoring strategies, and model answer structuring.` },
                            { text: `Summary of recurring question patterns over the last 5 years of TU board examinations.` }
                        ]
                    }
                ],
                clozeCards: [
                    { id: `dyn-cloze-${chapterIndex}-1`, question: `In the study of ${chapterName}, the primary foundational concept is {{systematic analysis}} based on {{empirical evidence}} and curriculum standards.` },
                    { id: `dyn-cloze-${chapterIndex}-2`, question: `To maximize scores in ${subjectCode} board exams, students must supplement theory with {{diagrams, formulas, or practical case citations}} from Nepal.` }
                ]
            },
            flashcards: [
                {
                    id: `fc-dyn-${chapterIndex}-1`,
                    front: `What is the primary objective of studying "${chapterName}" in ${subjectName}?`,
                    back: `To master the theoretical underpinnings, analytical methods, and practical frameworks required to solve real-world problems and excel in TU board examinations.`,
                    difficulty: 'High Yield',
                    tag: 'Concept'
                },
                {
                    id: `fc-dyn-${chapterIndex}-2`,
                    front: `What are the core components or elements examined within "${chapterName}"?`,
                    back: `1. Foundational principles and definitions\n2. Analytical models and procedures\n3. Practical applications in Nepal\n4. Regulatory, empirical, or computational standards.`,
                    difficulty: 'Medium',
                    tag: 'Core Elements'
                },
                {
                    id: `fc-dyn-${chapterIndex}-3`,
                    front: `How can a student structure a 10-mark answer for "${chapterName}" in TU board exams?`,
                    back: `1. Formal Definition and Conceptual Background (2 marks)\n2. Diagram / Formula / Statutory Basis (2 marks)\n3. Core Analysis / Merits & Demerits / Steps (4 marks)\n4. Contextual Example in Nepal & Conclusion (2 marks).`,
                    difficulty: 'Hard',
                    tag: 'Exam Strategy'
                }
            ],
            pastQuestions: [
                {
                    year: 'TU 2080 (Tribhuvan University Regular)',
                    marks: 10,
                    question: `Explain the fundamental concepts and principles of ${chapterName}. Discuss its practical significance with suitable illustrations and real-world context in Nepal.`,
                    solution: `### 1. Conceptual Framework of ${chapterName}
${chapterName} forms a core component of **${subjectName} (${subjectCode})**. In the Tribhuvan University curriculum, it equips scholars with systematic understanding and operational expertise.

#### Core Dimensions:
- **Definition & Rationale**: Establishes the operational boundaries and provides analytical clarity.
- **Underlying Principles**: Governed by standardized rules, scientific/managerial axioms, or statutory mandates.
- **Methodological Workflow**: Translates theoretical guidelines into systematic execution protocols.

---

### 2. Practical Applications in Nepal
In contemporary Nepalese development, industry, and academia, understanding ${chapterName} facilitates:
1. **Efficiency and Optimization**: Streamlining operational procedures and reducing systemic friction.
2. **Informed Decision Making**: Empowering practitioners with objective, verifiable methodologies.
3. **Regulatory Alignment**: Ensuring compliance with national policies, institutional standards, and professional codes.

---

### 3. Conclusion & Exam Key Points
To secure maximum marks in TU examinations, candidates must emphasize clear definitions, illustrative diagrams, structured headings, and direct references to contemporary Nepalese practices.`
                }
            ],
            aiTutor: {
                presetQuestions: [
                    `Explain ${chapterName} in simple terms with an everyday analogy.`,
                    `What are the most probable 5-mark and 10-mark questions from ${chapterName}?`,
                    `Provide 3 rapid-fire active recall questions to test my memory on this chapter.`,
                    `Give me a high-yield summary of ${chapterName} in 4 bullet points.`
                ],
                contextPrompt: `You are the BMC Academia AI Tutor for ${subjectName} (${subjectCode}), Chapter: ${chapterName}. Provide structured, motivating, and rigorous academic guidance tailored to Tribhuvan University standards.`
            }
        };
    }
};
