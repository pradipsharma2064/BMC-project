// ==========================================
// BMC ACADEMIA - COMPLETE SYLLABUS & CURRICULUM DATA
// Tribhuvan University - Butwal Multiple Campus
// Extracted from official syllabus archives
// ==========================================

const BMC_SYLLABUS = {
    faculties: [
        {
            id: 'csit',
            code: 'CSIT',
            name: 'B.Sc. Computer Science and Information Technology',
            shortName: 'B.Sc. CSIT',
            category: 'Institute of Science and Technology',
            badge: 'IOST • 4 Years (8 Semesters)',
            duration: '4 Years / 8 Semesters',
            totalCredits: 126,
            icon: '💻',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            bgGlow: 'rgba(59, 130, 246, 0.15)',
            description: 'Premier undergraduate program in computing blending theoretical computer science, software engineering, AI, and information technology under Tribhuvan University.',
            semesters: [
                {
                    semester: 1,
                    title: 'Semester I',
                    subjects: [
                        {
                            code: 'CSC110', name: 'C Programming', credits: 3, chapters: [
                                'Introduction to Programming & C Fundamentals',
                                'Data Types, Operators and Expressions',
                                'Control Flow: Decision Making and Branching',
                                'Functions & Modular Programming',
                                'Arrays and Strings',
                                'Pointers and Dynamic Memory Allocation',
                                'Structures, Unions and Enums',
                                'File Handling in C'
                            ]
                        },
                        {
                            code: 'CSC111', name: 'Digital Logic', credits: 3, chapters: [
                                'Number Systems, Codes and Logic Gates',
                                'Boolean Algebra & Gate-Level Minimization (K-Maps)',
                                'Combinational Logic Circuits: Adders, Mux, Decoders',
                                'Synchronous Sequential Logic: Flip-Flops & Registers',
                                'Counters, Shift Registers & Memory Units'
                            ]
                        },
                        {
                            code: 'CSC109', name: 'Introduction to Information Technology', credits: 3, chapters: [
                                'Computer Architecture & System Overview',
                                'Input/Output & Secondary Storage Technologies',
                                'Operating System Fundamentals & Software Types',
                                'Data Communication and Network Topologies',
                                'Internet Technologies, Cloud & Web Basics'
                            ]
                        },
                        {
                            code: 'MTH112', name: 'Mathematics I', credits: 3, chapters: [
                                'Functions, Limits and Continuity',
                                'Differentiation & Tangent Normal Lines',
                                'Applications of Derivatives: Maxima, Minima, Mean Value Theorems',
                                'Indefinite and Definite Integrals',
                                'Ordinary Differential Equations & Vectors'
                            ]
                        },
                        {
                            code: 'PHY113', name: 'Physics', credits: 3, chapters: [
                                'Periodic Motion, Wave Mechanics and Acoustics',
                                'Electromagnetism, Gauss Law and Maxwell Equations',
                                'Optics, Interference and Laser Physics',
                                'Modern Physics, Quantum Concepts and Semiconductors'
                            ]
                        }
                    ]
                },
                {
                    semester: 2,
                    title: 'Semester II',
                    subjects: [
                        {
                            code: 'CSC160', name: 'Discrete Structure', credits: 3, chapters: [
                                'Logic, Propositional Calculus and Predicates',
                                'Sets, Relations and Functions',
                                'Methods of Proof and Mathematical Induction',
                                'Graph Theory and Trees',
                                'Recurrence Relations & Combinatorics'
                            ]
                        },
                        {
                            code: 'MTH163', name: 'Mathematics II', credits: 3, chapters: [
                                'Linear Algebra: Matrices, Determinants, Systems of Linear Equations',
                                'Vector Spaces, Linear Transformations and Eigenvalues',
                                'Infinite Series and Power Series',
                                'Multivariable Calculus: Partial Derivatives & Double Integrals'
                            ]
                        },
                        {
                            code: 'CSC162', name: 'Microprocessor', credits: 3, chapters: [
                                'Introduction to Microprocessor & 8085 Internal Architecture',
                                '8085 Assembly Language Programming & Instruction Sets',
                                'Bus Architecture, Memory Interfacing and Timing Diagrams',
                                'Interrupts and I/O Interfacing (8255 PPI)',
                                'Overview of 8086 16-Bit Architecture'
                            ]
                        },
                        {
                            code: 'CSC161', name: 'Object Oriented Programming', credits: 3, chapters: [
                                'Principles of Object Orientation & C++ Basics',
                                'Classes, Objects, Constructors and Destructors',
                                'Operator Overloading and Type Conversions',
                                'Inheritance: Single, Multiple, Hierarchical and Virtual Bases',
                                'Polymorphism, Virtual Functions and Abstract Classes',
                                'Templates, Exception Handling and File Streams'
                            ]
                        },
                        {
                            code: 'STA164', name: 'Statistics I', credits: 3, chapters: [
                                'Descriptive Statistics & Measures of Central Tendency',
                                'Probability Theory, Conditional Probability and Bayes Theorem',
                                'Discrete Probability Distributions (Binomial, Poisson)',
                                'Continuous Distributions (Normal, Exponential)',
                                'Bivariate Data: Correlation and Linear Regression'
                            ]
                        }
                    ]
                },
                {
                    semester: 3,
                    title: 'Semester III',
                    subjects: [
                        {
                            code: 'CSC208', name: 'Computer Architecture', credits: 3, chapters: [
                                'Data Representation & Register Transfer Microoperations',
                                'Basic Computer Organization and Design',
                                'Central Processing Unit & Pipeline Processing',
                                'Computer Arithmetic & Fast Multipliers',
                                'Input-Output Organization & Cache Memory Systems'
                            ]
                        },
                        {
                            code: 'CSC209', name: 'Computer Graphics', credits: 3, chapters: [
                                'Graphics Hardware, Framebuffers and Scan Conversion',
                                'Line and Circle Drawing Algorithms (DDA, Bresenham)',
                                'Two-Dimensional Geometric Transformations & Clipping',
                                '3D Concepts, Projections and Hidden Surface Elimination',
                                'Illumination Models, Shading and OpenGL Basics'
                            ]
                        },
                        {
                            code: 'CSC206', name: 'Data Structure and Algorithm', credits: 3, chapters: [
                                'Introduction to DSA & Asymptotic Notation (Big-O)',
                                'Stacks, Queues and Recursion',
                                'Linked Lists: Singly, Doubly and Circular',
                                'Trees: Binary Trees, BST, AVL Trees and B-Trees',
                                'Graph Algorithms: BFS, DFS, Dijkstra, Prim, Kruskal',
                                'Sorting (Quick, Merge, Heap) and Searching Techniques'
                            ]
                        },
                        {
                            code: 'CSC207', name: 'Numerical Method', credits: 3, chapters: [
                                'Solutions of Nonlinear Equations (Bisection, Newton-Raphson)',
                                'Interpolation: Newton Forward/Backward, Lagrange',
                                'Numerical Differentiation and Integration (Trapezoidal, Simpson)',
                                'Solutions of Linear Systems: Gauss Elimination & LU Factorization',
                                'Numerical Solutions of Ordinary Differential Equations (RK4)'
                            ]
                        },
                        {
                            code: 'STA210', name: 'Statistics II', credits: 3, chapters: [
                                'Sampling Techniques & Central Limit Theorem',
                                'Estimation Theory: Point and Interval Estimates',
                                'Hypothesis Testing: Large and Small Sample Tests (Z, t-test)',
                                'Chi-Square Test and Goodness of Fit',
                                'Analysis of Variance (One-Way and Two-Way ANOVA)'
                            ]
                        }
                    ]
                },
                {
                    semester: 4,
                    title: 'Semester IV',
                    subjects: [
                        {
                            code: 'CSC261', name: 'Artificial Intelligence', credits: 3, chapters: [
                                'Introduction to AI & Intelligent Agents',
                                'Problem Solving & Search Algorithms (A*, Hill Climbing, Minimax)',
                                'Knowledge Representation, First Order Logic & Inference',
                                'Uncertainty, Probabilistic Reasoning & Bayesian Networks',
                                'Machine Learning Fundamentals & Neural Networks',
                                'Natural Language Processing & Computer Vision Basics'
                            ]
                        },
                        {
                            code: 'CSC258', name: 'Computer Networks', credits: 3, chapters: [
                                'OSI and TCP/IP Reference Models',
                                'Physical & Data Link Layer Protocols (Framing, Flow, Error Control)',
                                'Medium Access Sublayer (Ethernet, CSMA/CD, Wireless)',
                                'Network Layer, IPv4/IPv6 Addressing and Routing Algorithms',
                                'Transport Layer (TCP, UDP, Congestion Control)',
                                'Application Layer Protocols (DNS, HTTP, SMTP, DHCP)'
                            ]
                        },
                        {
                            code: 'CSC260', name: 'Database Management System', credits: 3, chapters: [
                                'Database System Architecture and Relational Data Model',
                                'Entity-Relationship (ER) & Extended ER Modeling',
                                'Relational Algebra and Advanced SQL',
                                'Database Normalization (1NF, 2NF, 3NF, BCNF)',
                                'Transaction Processing, Concurrency Control & Recovery'
                            ]
                        },
                        {
                            code: 'CSC259', name: 'Operating System', credits: 3, chapters: [
                                'OS Structures, Services and System Calls',
                                'Process Management, CPU Scheduling and Context Switching',
                                'Process Synchronization, Semaphores and Deadlocks',
                                'Memory Management: Paging, Segmentation and Virtual Memory',
                                'Storage Management, File Systems and Security'
                            ]
                        },
                        {
                            code: 'CSC257', name: 'Theory of Computation', credits: 3, chapters: [
                                'Finite Automata: DFA, NFA and Equivalence',
                                'Regular Expressions and Regular Grammars (Pumping Lemma)',
                                'Context-Free Grammars and Pushdown Automata (PDA)',
                                'Turing Machines & Chomsky Hierarchy',
                                'Decidability, Halting Problem and Computational Complexity'
                            ]
                        }
                    ]
                },
                {
                    semester: 5,
                    title: 'Semester V',
                    subjects: [
                        {
                            code: 'CSC316', name: 'Cryptography', credits: 3, chapters: [
                                'Classical Encryption Techniques & Modular Arithmetic',
                                'Symmetric Key Cryptography: DES, AES',
                                'Asymmetric Key Cryptography: RSA, Diffie-Hellman',
                                'Cryptographic Hash Functions and Digital Signatures',
                                'Network Security: TLS/SSL, IPsec and Firewalls'
                            ]
                        },
                        {
                            code: 'CSC314', name: 'Design and Analysis of Algorithm', credits: 3, chapters: [
                                'Algorithm Analysis Framework & Recurrence Solutions',
                                'Divide and Conquer Approach',
                                'Greedy Strategy & Optimal Substructure',
                                'Dynamic Programming Paradigm (LCS, Knapsack)',
                                'Backtracking, Branch and Bound, NP-Completeness'
                            ]
                        },
                        {
                            code: 'CSC317', name: 'Simulation and Modeling', credits: 3, chapters: [
                                'System Concepts, Models and Simulation Methodologies',
                                'Discrete Event System Simulation',
                                'Random Number Generators and Random Variate Generation',
                                'Input Modeling and Verification/Validation of Models',
                                'Simulation of Queuing and Inventory Systems'
                            ]
                        },
                        {
                            code: 'CSC315', name: 'System Analysis and Design', credits: 3, chapters: [
                                'Systems Development Life Cycle (SDLC) & Agile Methodologies',
                                'Requirements Determination, Fact-Finding and Feasibility',
                                'Structured Analysis: DFD, Data Dictionaries and Decision Tables',
                                'Object-Oriented Analysis using UML Diagrams',
                                'System Implementation, Testing and Quality Assurance'
                            ]
                        },
                        {
                            code: 'CSC318', name: 'Web Technology', credits: 3, chapters: [
                                'Modern HTML5, Semantic Elements and Accessibility',
                                'CSS3: Flexbox, Grid, Animations and Responsive Design',
                                'Client-Side JavaScript: DOM Manipulation, Async/Await and Fetch',
                                'Server-Side Programming with Node.js/PHP and Express',
                                'Database Integration, RESTful APIs and Web Security'
                            ]
                        },
                        {
                            code: 'CSC319', name: 'Elective I (Image Processing / Multimedia)', credits: 3, chapters: [
                                'Digital Image Fundamentals & Image Enhancement',
                                'Image Restoration, Filtering and Color Models',
                                'Multimedia Compression: JPEG, MPEG and Streaming Protocols'
                            ]
                        }
                    ]
                },
                {
                    semester: 6,
                    title: 'Semester VI',
                    subjects: [
                        {
                            code: 'CSC365', name: 'Computer Design and Construction', credits: 3, chapters: [
                                'Instruction Set Architecture & Microarchitecture',
                                'Pipelining and Instruction Level Parallelism',
                                'Superscalar Processors & Branch Prediction',
                                'Memory Hierarchy Design and Multiprocessors'
                            ]
                        },
                        {
                            code: 'CSC366', name: 'E-Governance', credits: 3, chapters: [
                                'Overview of E-Governance Models (G2C, G2B, G2G)',
                                'E-Governance Infrastructure in Nepal (National ID, Digital Nepal)',
                                'Security, Legal Framework & Electronic Transactions Act',
                                'M-Governance, Smart Cities and Citizen Service Portals'
                            ]
                        },
                        {
                            code: 'CSC367', name: 'NET Centric Computing', credits: 3, chapters: [
                                'C# Language Fundamentals and .NET Core Runtime',
                                'Object-Oriented Programming and Delegates in C#',
                                'ASP.NET Core Web API and MVC Architecture',
                                'Entity Framework Core and Database Migrations',
                                'Authentication, JWT Tokens and Microservices Basics'
                            ]
                        },
                        {
                            code: 'CSC364', name: 'Software Engineering', credits: 3, chapters: [
                                'Software Process Models: Waterfall, Spiral, Scrum, Kanban',
                                'Software Requirements Engineering & SRS Documentation',
                                'Software Architectural Design and Patterns',
                                'Software Testing: Unit, Integration, System and TDD',
                                'Software Maintenance, DevOps and CI/CD Pipelines'
                            ]
                        },
                        {
                            code: 'CSC368', name: 'Technical Writing', credits: 3, chapters: [
                                'Technical Writing Principles and Audience Analysis',
                                'Writing Technical Reports, Proposals and User Manuals',
                                'Research Methodology, Citation Styles (IEEE, APA)',
                                'Presentation Skills and Oral Defense Techniques'
                            ]
                        },
                        {
                            code: 'CSC369', name: 'Elective II (Data Science / Mobile App)', credits: 3, chapters: [
                                'Data Science Workflow: Pandas, NumPy, Visualization',
                                'Mobile Application Development with Flutter/React Native',
                                'State Management, Native APIs and App Publishing'
                            ]
                        }
                    ]
                },
                {
                    semester: 7,
                    title: 'Semester VII',
                    subjects: [
                        {
                            code: 'CSC409', name: 'Advanced Java Programming', credits: 3, chapters: [
                                'Java GUI with Swing and JavaFX',
                                'Event Handling and Multithreading in Java',
                                'Java Database Connectivity (JDBC) and ORM',
                                'Java Servlets, JSP and Spring Boot Framework',
                                'Building Enterprise REST APIs and Microservices'
                            ]
                        },
                        {
                            code: 'CSC410', name: 'Data Warehousing and Data Mining', credits: 3, chapters: [
                                'Data Warehousing Architecture, OLAP and Dimensional Modeling',
                                'ETL (Extract, Transform, Load) Concepts',
                                'Data Preprocessing and Association Rule Mining (Apriori)',
                                'Classification: Decision Trees, Naive Bayes, SVM',
                                'Clustering Techniques: K-Means, Hierarchical, DBSCAN'
                            ]
                        },
                        {
                            code: 'MGT411', name: 'Principles of Management', credits: 3, chapters: [
                                'Management Theory, Evolution and Functions',
                                'Planning, Strategic Management and Decision Making',
                                'Organizing, Organizational Structure and Culture',
                                'Leadership, Motivation Theories and Team Dynamics',
                                'Control Systems, Quality Management and Ethics'
                            ]
                        },
                        {
                            code: 'CSC412', name: 'Project Work', credits: 3, chapters: [
                                'Project Inception, Proposal Formulation and Defense',
                                'System Design, Prototyping and Implementation',
                                'Testing, Documentation and Final Project Presentation'
                            ]
                        },
                        {
                            code: 'CSC413', name: 'Elective III (Cloud Computing / Information Retrieval)', credits: 3, chapters: [
                                'Cloud Service Models: IaaS, PaaS, SaaS, AWS/Azure Basics',
                                'Information Retrieval Models, Search Engines and Vector Space'
                            ]
                        }
                    ]
                },
                {
                    semester: 8,
                    title: 'Semester VIII',
                    subjects: [
                        {
                            code: 'CSC461', name: 'Advanced Database', credits: 3, chapters: [
                                'Distributed Database Systems Architecture & Fragmentation',
                                'Object-Relational and Object-Oriented Databases',
                                'NoSQL Databases: MongoDB, Document and Key-Value Stores',
                                'Big Data Technologies: Hadoop, MapReduce and Spark',
                                'Database Security, Auditing and Backup Recovery'
                            ]
                        },
                        {
                            code: 'CSC462', name: 'Internship', credits: 3, chapters: [
                                'Industry Placement & Professional Ethics in IT',
                                'Real-World Software Engineering Experience',
                                'Internship Diary, Final Technical Report and Viva Voce'
                            ]
                        },
                        {
                            code: 'CSC463', name: 'Elective IV (Network Security / Advanced AI)', credits: 3, chapters: [
                                'Deep Learning, Convolutional Neural Networks and Transformers',
                                'Advanced Cybersecurity, Penetration Testing and Zero-Trust'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'bba',
            code: 'BBA',
            name: 'Bachelor of Business Administration',
            shortName: 'BBA',
            category: 'Faculty of Management',
            badge: 'FOM • 4 Years (8 Semesters)',
            duration: '4 Years / 8 Semesters',
            totalCredits: 120,
            icon: '📊',
            gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            bgGlow: 'rgba(16, 185, 129, 0.15)',
            description: 'Premier business management program cultivating leadership, financial acumen, strategic marketing, entrepreneurship, and organizational governance.',
            semesters: [
                {
                    semester: 1,
                    title: 'Semester I',
                    subjects: [
                        {
                            code: 'MTH201', name: 'Business Mathematics I', credits: 3, chapters: [
                                'Set Theory, Functions and Graphs in Business',
                                'Linear Equations, Matrices and Determinants in Economics',
                                'Differential Calculus: Marginal Cost, Marginal Revenue, Elasticity',
                                'Integral Calculus: Consumer and Producer Surplus',
                                'Financial Mathematics: Simple and Compound Interest, Annuities'
                            ]
                        },
                        {
                            code: 'ITC201', name: 'Computer and Information Technology Application', credits: 3, chapters: [
                                'Computer Systems & Hardware for Business',
                                'Spreadsheet Modeling: Advanced Excel for Financial Modeling',
                                'Database Fundamentals & Business Applications',
                                'Internet, E-Business & Cyber Security in Commerce'
                            ]
                        },
                        {
                            code: 'ENG201', name: 'English I', credits: 3, chapters: [
                                'Grammar Review & Vocabulary for Professional Contexts',
                                'Reading Comprehension & Critical Analysis of Business Texts',
                                'Paragraph and Essay Writing Strategies',
                                'Academic and Professional Communication'
                            ]
                        },
                        {
                            code: 'ECO201', name: 'Microeconomics', credits: 3, chapters: [
                                'Introduction to Economics, Scarcity and Choice',
                                'Theory of Demand and Supply, Market Equilibrium, Elasticity',
                                'Consumer Behavior: Utility Analysis and Indifference Curves',
                                'Theory of Production and Cost Analysis',
                                'Market Structures: Perfect Competition, Monopoly, Monopolistic Competition'
                            ]
                        },
                        {
                            code: 'MGT201', name: 'Principles of Management', credits: 3, chapters: [
                                'Nature and Scope of Management in Globalized Era',
                                'Evolution of Management Thought (Classical, Behavioral, Modern)',
                                'Planning Process, Strategic Planning and Decision Making',
                                'Organizational Structure, Authority, Delegation and Decentralization',
                                'Leadership, Motivation Theories and Managerial Control'
                            ]
                        }
                    ]
                },
                {
                    semester: 2,
                    title: 'Semester II',
                    subjects: [
                        {
                            code: 'MTH202', name: 'Business Mathematics II', credits: 3, chapters: [
                                'Linear Programming: Graphical and Simplex Methods',
                                'Transportation and Assignment Problems in Operations',
                                'Game Theory and Decision Trees',
                                'Multivariate Calculus and Constrained Optimization (Lagrangian)'
                            ]
                        },
                        {
                            code: 'ENG202', name: 'English II', credits: 3, chapters: [
                                'Advanced Reading & Analytical Writing',
                                'Business Proposals, Technical Reports and Memos',
                                'Oral Presentations, Speeches and Professional Etiquette'
                            ]
                        },
                        {
                            code: 'MGT202', name: 'Human Resource Management', credits: 3, chapters: [
                                'Strategic Human Resource Management Overview',
                                'Job Analysis, Job Design and Human Resource Planning',
                                'Recruitment, Selection and Onboarding in Nepalese Organizations',
                                'Training, Development and Performance Appraisal Systems',
                                'Compensation Management, Labor Relations and Grievance Handling'
                            ]
                        },
                        {
                            code: 'IT202', name: 'Introductory Database', credits: 3, chapters: [
                                'Relational Database Concepts in Enterprise Systems',
                                'Data Modeling with ER Diagrams',
                                'SQL Queries for Business Intelligence',
                                'Data Integrity, Security and Transaction Management'
                            ]
                        },
                        {
                            code: 'ECO202', name: 'Macro Economics', credits: 3, chapters: [
                                'National Income Accounting: GDP, GNP, National Income Measures',
                                'Classical and Keynesian Theories of Employment and Output',
                                'Money, Banking, Central Bank Policies and Inflation',
                                'Fiscal Policy, Public Debt and Government Budget in Nepal',
                                'International Trade, Balance of Payments and Exchange Rates'
                            ]
                        }
                    ]
                },
                {
                    semester: 3,
                    title: 'Semester III',
                    subjects: [
                        {
                            code: 'ENG203', name: 'Business Communication', credits: 3, chapters: [
                                'Foundations of Communication & Barriers in Modern Organizations',
                                'Cross-Cultural Business Communication',
                                'Writing Persuasive Letters, Inquiries and Executive Summaries',
                                'Interpersonal Skills, Negotiation and Meeting Management'
                            ]
                        },
                        {
                            code: 'FIN201', name: 'Business Finance', credits: 3, chapters: [
                                'Role and Scope of Financial Management in Firms',
                                'Time Value of Money (PV, FV, Annuities, Perpetuities)',
                                'Risk and Return Analysis: CAPM and Security Market Line',
                                'Bond and Stock Valuation Models',
                                'Cost of Capital: WACC Calculation'
                            ]
                        },
                        {
                            code: 'STT201', name: 'Business Statistics', credits: 3, chapters: [
                                'Descriptive Statistics for Managerial Decision Making',
                                'Probability Theory and Decision Analysis',
                                'Sampling Distributions and Central Limit Theorem',
                                'Hypothesis Testing: Large and Small Samples (Z and t tests)',
                                'Linear Regression, Correlation and Time Series Forecasting'
                            ]
                        },
                        {
                            code: 'ACC201', name: 'Financial Accounting', credits: 3, chapters: [
                                'Conceptual Framework of Accounting and GAAP/NFRS',
                                'The Accounting Cycle: Journal, Ledger, Trial Balance, Adjustments',
                                'Preparation of Financial Statements: Balance Sheet, Income Statement',
                                'Cash Flow Statement (Direct and Indirect Methods)',
                                'Accounting for Inventories, Depreciation and Receivables'
                            ]
                        },
                        {
                            code: 'ITC203', name: 'Management Information System', credits: 3, chapters: [
                                'Information Systems in Global Business Today',
                                'Enterprise Systems: ERP, SCM, CRM',
                                'E-Commerce Business Models and Payment Gateways',
                                'Business Intelligence, Data Analytics and Decision Support Systems'
                            ]
                        }
                    ]
                },
                {
                    semester: 4,
                    title: 'Semester IV',
                    subjects: [
                        {
                            code: 'PSY201', name: 'Basic Psychology', credits: 3, chapters: [
                                'Introduction to Psychology, Biological Bases of Behavior',
                                'Perception, Learning and Memory Mechanisms',
                                'Personality Theories and Assessment in Workplace',
                                'Emotion, Stress Management and Emotional Intelligence'
                            ]
                        },
                        {
                            code: 'MGT206', name: 'Business Environment in Nepal', credits: 3, chapters: [
                                'Concept and Components of Business Environment',
                                'Economic Environment: Industrial Policy, Foreign Investment, WTO',
                                'Political and Legal Environment in Federal Nepal',
                                'Socio-Cultural Environment and Contemporary Business Challenges'
                            ]
                        },
                        {
                            code: 'MGT204', name: 'Business Law', credits: 3, chapters: [
                                'Law of Contract: Formation, Consideration, Legality and Discharge',
                                'Breach of Contract and Legal Remedies',
                                'Law of Agency, Bailment and Pledge',
                                'Company Law: Incorporation, Meetings, Directors and Winding Up',
                                'Arbitration Act and Dispute Settlement Mechanisms'
                            ]
                        },
                        {
                            code: 'ACC202', name: 'Cost and Management Accounting', credits: 3, chapters: [
                                'Cost Concepts, Classifications and Cost Sheet Preparation',
                                'Material, Labor and Overhead Costing',
                                'Cost-Volume-Profit (CVP) and Break-Even Analysis',
                                'Budgeting and Master Budget Preparation',
                                'Standard Costing and Variance Analysis'
                            ]
                        },
                        {
                            code: 'MKT201', name: 'Fundamentals of Marketing', credits: 3, chapters: [
                                'Marketing Concepts, Philosophy and Marketing Mix (4Ps/7Ps)',
                                'Marketing Environment and Customer Behavior Analysis',
                                'Market Segmentation, Targeting and Positioning (STP)',
                                'Product Life Cycle, New Product Development and Branding',
                                'Pricing Strategies, Distribution Channels and Integrated Promotion'
                            ]
                        }
                    ]
                },
                {
                    semester: 5,
                    title: 'Semester V',
                    subjects: [
                        {
                            code: 'FIN202', name: 'Basic Financial Management', credits: 3, chapters: [
                                'Capital Budgeting Techniques: NPV, IRR, Payback, Profitability Index',
                                'Capital Structure Theories: NI, NOI, MM Hypothesis and Trade-off',
                                'Dividend Policies and Dividend Relevance Theories',
                                'Working Capital Management: Cash, Inventory and Receivables'
                            ]
                        },
                        {
                            code: 'ACC203', name: 'Corporate Taxation in Nepal', credits: 3, chapters: [
                                'Tax System in Nepal, Income Tax Act 2058 Overview',
                                'Assessable Income from Business and Profession',
                                'Assessable Income from Employment and Investment',
                                'Value Added Tax (VAT) Concepts, Invoicing and Returns',
                                'Tax Administration, Audits, Penalties and TDS'
                            ]
                        },
                        {
                            code: 'MGT207', name: 'International Business', credits: 3, chapters: [
                                'Globalization and Drivers of International Trade',
                                'Theories of International Trade (Comparative Advantage, Heckscher-Ohlin)',
                                'Foreign Direct Investment (FDI) and Modes of Entry',
                                'Foreign Exchange Market and Hedging Techniques',
                                'International Trade Organizations: WTO, SAFTA, BIMSTEC'
                            ]
                        },
                        {
                            code: 'MGT205', name: 'Operation Management', credits: 3, chapters: [
                                'Operations Strategy and Productivity Measurement',
                                'Facility Location and Layout Planning',
                                'Supply Chain Management and Inventory Models (EOQ, JIT)',
                                'Quality Management: TQM, Six Sigma and ISO Standards',
                                'Project Scheduling: CPM and PERT Networks'
                            ]
                        },
                        {
                            code: 'SOC201', name: 'Sociology for Business', credits: 3, chapters: [
                                'Sociological Perspectives and Social Institutions in Nepal',
                                'Social Stratification: Caste, Class, Gender and Ethnicity',
                                'Social Change, Modernization and Corporate Social Responsibility'
                            ]
                        }
                    ]
                },
                {
                    semester: 6,
                    title: 'Semester VI',
                    subjects: [
                        {
                            code: 'RCH201', name: 'Business Research Methods', credits: 3, chapters: [
                                'Scientific Method and Nature of Business Research',
                                'Research Design: Exploratory, Descriptive, Causal',
                                'Data Collection Methods: Questionnaires, Interviews, Observation',
                                'Measurement, Scaling, Reliability and Validity',
                                'Data Analysis, Report Writing and Research Ethics'
                            ]
                        },
                        {
                            code: 'ITC206', name: 'E-Commerce', credits: 3, chapters: [
                                'E-Commerce Framework, B2B, B2C, C2C Models',
                                'Electronic Payment Systems: Digital Wallets, Fonepay, ConnectIPS',
                                'Digital Marketing, SEO, Social Commerce Strategies',
                                'Security Threats, Encryption and Legal Issues in E-Commerce'
                            ]
                        },
                        {
                            code: 'MGT210', name: 'Entrepreneurship', credits: 3, chapters: [
                                'Entrepreneurial Mindset, Innovation and Creativity',
                                'Opportunity Identification, Feasibility Study and Business Plan',
                                'Financing New Ventures: Venture Capital, Angel Investors, Crowdfunding',
                                'Managing Growth, Scaling and Startup Ecosystem in Nepal'
                            ]
                        },
                        {
                            code: 'SOC202', name: 'Nepalese Society and Politics', credits: 3, chapters: [
                                'Historical Evolution of Nepalese Society and Polity',
                                'Constitution of Nepal 2072: Federalism and Democratic Institutions',
                                'Socio-Economic Transformation and Governance in Nepal'
                            ]
                        },
                        {
                            code: 'MGT203', name: 'Organizational Behavior', credits: 3, chapters: [
                                'Foundations of Organizational Behavior (OB)',
                                'Individual Dynamics: Perception, Attitudes, Job Satisfaction',
                                'Group Dynamics, Teamwork and Interpersonal Communication',
                                'Power, Politics, Conflict Management and Negotiation',
                                'Organizational Culture, Change Management and Stress'
                            ]
                        }
                    ]
                },
                {
                    semester: 7,
                    title: 'Semester VII',
                    subjects: [
                        {
                            code: 'MGT209', name: 'Business Ethics and Social Responsibility', credits: 3, chapters: [
                                'Ethical Theories, Moral Reasoning and Values in Management',
                                'Corporate Governance, Board Responsibilities and Transparency',
                                'Corporate Social Responsibility (CSR) Framework and UN SDGs',
                                'Ethical Dilemmas in Marketing, Finance and Human Resources'
                            ]
                        },
                        {
                            code: 'SPEC-I', name: 'Specialization Course I (Finance / Marketing / HR)', credits: 3, chapters: [
                                'Specialization Core Domain Insights',
                                'Case Studies in Nepalese Corporate Sector',
                                'Strategic Decision Modeling'
                            ]
                        },
                        {
                            code: 'PRJ350', name: 'Summer Project', credits: 3, chapters: [
                                'Field Research Identification and Problem Statement',
                                'Empirical Data Collection in Nepalese Industry',
                                'Report Compilation, Data Analysis and Defense'
                            ]
                        }
                    ]
                },
                {
                    semester: 8,
                    title: 'Semester VIII',
                    subjects: [
                        {
                            code: 'MGT208', name: 'Business Strategy', credits: 3, chapters: [
                                'Strategic Management Concept and Strategic Intent',
                                'Environmental Scanning: PESTLE and Porter 5 Forces',
                                'Internal Analysis: VRIO, Value Chain and Core Competencies',
                                'Strategy Formulation: Corporate, Business and Functional Levels',
                                'Strategy Implementation, Balanced Scorecard and Strategic Control'
                            ]
                        },
                        {
                            code: 'MGT350', name: 'Internship', credits: 3, chapters: [
                                'Organizational Attachment (8-10 Weeks)',
                                'Hands-on Managerial Training in Banking/Corporate Sector',
                                'Internship Report Preparation and Viva Voce'
                            ]
                        },
                        {
                            code: 'SPEC-II', name: 'Specialization Course II', credits: 3, chapters: [
                                'Advanced Applied Concentration Modules',
                                'Industry Best Practices and Capstone Seminar'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'bicte',
            code: 'BICTE',
            name: 'Bachelor of Information Communication Technology Education',
            shortName: 'BICTE',
            category: 'Faculty of Education',
            badge: 'FOE • 4 Years (8 Semesters)',
            duration: '4 Years / 8 Semesters',
            totalCredits: 138,
            icon: '🎓',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
            bgGlow: 'rgba(139, 92, 246, 0.15)',
            description: 'Integrated teacher education program empowering future digital educators with computing sciences, instructional pedagogy, educational technologies, and school leadership.',
            semesters: [
                {
                    semester: 1,
                    title: 'Semester I',
                    subjects: [
                        {
                            code: 'Ed. 411', name: 'Fundamental of Education', credits: 3, chapters: [
                                'Meaning, Nature and Scope of Education',
                                'Philosophical Foundations: Idealism, Realism, Pragmatism, Constructivism',
                                'Sociological Foundations of Education and Social Change',
                                'Development of Modern Education in Nepal'
                            ]
                        },
                        {
                            code: 'ICT Ed. 415', name: 'Introduction to Information Technology', credits: 3, chapters: [
                                'Computer Systems & Hardware Architecture for Educators',
                                'Operating Systems, File Systems and Productivity Tools',
                                'Networking Basics, Internet and Educational Repositories',
                                'Information Society, Digital Literacy and Cyber Ethics'
                            ]
                        },
                        {
                            code: 'ICT Ed. 416', name: 'Programming Concept with C', credits: 3, chapters: [
                                'Algorithms, Flowcharts and Problem-Solving Techniques',
                                'C Data Types, Operators, Expressions and I/O Operations',
                                'Conditional Branching and Looping Constructs',
                                'Modular Programming: User-Defined Functions and Scope',
                                'Arrays, Strings and Basic File Operations'
                            ]
                        },
                        {
                            code: 'Eng. Ed. 411', name: 'English Language-I', credits: 3, chapters: [
                                'Linguistic Structures and Pedagogical Grammar',
                                'Reading Skills for Academic Purposes',
                                'Classroom Discourse and Instructional English'
                            ]
                        },
                        {
                            code: 'ने. शि. ४११', name: 'साधारण नेपाली-१', credits: 3, chapters: [
                                'नेपाली वर्णविचार र पदवर्ग',
                                'वाक्यगठन र व्यावहारिक लेखन',
                                'साहित्यिक विधा र शिक्षण सन्दर्भ'
                            ]
                        },
                        {
                            code: 'Math Ed. 416', name: 'Mathematics-I', credits: 3, chapters: [
                                'Sets, Relations, Functions and Algebraic Systems',
                                'Matrices, Determinants and Systems of Equations',
                                'Differential Calculus Fundamentals for Computing'
                            ]
                        }
                    ]
                },
                {
                    semester: 2,
                    title: 'Semester II',
                    subjects: [
                        {
                            code: 'Ed. 422', name: 'Developmental Psychology', credits: 3, chapters: [
                                'Human Growth and Development Principles',
                                'Physical, Cognitive, Emotional and Social Development in Adolescence',
                                'Piaget and Vygotsky Theories of Cognitive Development',
                                'Individual Differences and Inclusive Classroom Strategies'
                            ]
                        },
                        {
                            code: 'ICT Ed. 425', name: 'Digital Logics', credits: 3, chapters: [
                                'Number Systems, Base Conversions and Binary Codes',
                                'Logic Gates and Boolean Function Simplification (K-Maps)',
                                'Combinational Logic: Adders, Subtractors, Decoders, Encoders',
                                'Sequential Circuits: Latches, Flip-Flops and Counters'
                            ]
                        },
                        {
                            code: 'ICT Ed. 426', name: 'Object Oriented Programming with C++', credits: 3, chapters: [
                                'Object-Oriented Paradigms vs Procedural Programming',
                                'Classes, Objects, Constructors and Destructors',
                                'Operator Overloading and Function Overriding',
                                'Inheritance and Dynamic Polymorphism',
                                'Templates and Exception Handling in Educational Software'
                            ]
                        },
                        {
                            code: 'Eng. Ed. 421', name: 'English Language-II', credits: 3, chapters: [
                                'Advanced Reading and Academic Writing',
                                'Pedagogy of English Language Teaching',
                                'Lesson Planning and Educational Material Design'
                            ]
                        },
                        {
                            code: 'ने. शि. ४२१', name: 'साधारण नेपाली-२', credits: 3, chapters: [
                                'नेपाली भाषा शिक्षणका सिद्धान्त',
                                'भाषिक सीप (सुनाइ, बोलाइ, पढाइ, लेखाइ)',
                                'शैक्षिक सामग्री निर्माण र मूल्याङ्कन'
                            ]
                        },
                        {
                            code: 'Math Ed. 426', name: 'Mathematics-II', credits: 3, chapters: [
                                'Integral Calculus and Techniques of Integration',
                                'Vectors and Coordinate Geometry',
                                'Applications of Calculus in Science and Technology'
                            ]
                        }
                    ]
                },
                {
                    semester: 3,
                    title: 'Semester III',
                    subjects: [
                        {
                            code: 'Ed. 432', name: 'Learning Psychology', credits: 3, chapters: [
                                'Nature of Learning and Behavioral Theories (Pavlov, Skinner)',
                                'Cognitive and Social Learning Theories (Bandura, Bruner)',
                                'Motivation in Learning: Intrinsic, Extrinsic and Classroom Strategies',
                                'Transfer of Learning and Retention in Digital Classrooms'
                            ]
                        },
                        {
                            code: 'ICT Ed. 438', name: '21st Century Skills', credits: 3, chapters: [
                                '4Cs: Critical Thinking, Creativity, Collaboration, Communication',
                                'Digital Literacy, Media Literacy and Technology Fluency',
                                'Life and Career Skills: Flexibility, Leadership, Initiative'
                            ]
                        },
                        {
                            code: 'ICT Ed. 439', name: 'Computer Architecture and Organization', credits: 3, chapters: [
                                'Instruction Sets, Registers and Addressing Modes',
                                'ALU Design, Control Unit and Memory Hierarchies',
                                'Pipelining, Cache Architectures and I/O Interfacing'
                            ]
                        },
                        {
                            code: 'ICT Ed. 435', name: 'Data Structure and Algorithm', credits: 3, chapters: [
                                'Array Representations, Stacks and Queues',
                                'Linked List Implementations and Applications',
                                'Tree Structures, Binary Search Trees and Traversal',
                                'Sorting, Searching Algorithms and Asymptotic Complexity'
                            ]
                        },
                        {
                            code: 'ICT Ed. 437', name: 'Web Technology', credits: 3, chapters: [
                                'HTML5 Structure, CSS3 Styling and Responsive Web Design',
                                'Client-Side Scripting with JavaScript',
                                'Building Educational Web Portals and Interactive Learning Sites'
                            ]
                        },
                        {
                            code: 'Math Ed. 436', name: 'Probability and Statistics', credits: 3, chapters: [
                                'Data Representation, Central Tendency and Dispersion',
                                'Probability Distributions: Normal, Binomial, Poisson',
                                'Statistical Testing in Educational Research'
                            ]
                        }
                    ]
                },
                {
                    semester: 4,
                    title: 'Semester IV',
                    subjects: [
                        {
                            code: 'Ed. 442', name: 'Fundamentals of Curriculum', credits: 3, chapters: [
                                'Curriculum Concepts, Foundations and Criteria',
                                'Curriculum Design Models and Stakeholder Participation',
                                'National Curriculum Framework of Nepal (School Education)',
                                'Curriculum Implementation, Evaluation and Innovation'
                            ]
                        },
                        {
                            code: 'ICT Ed. 444', name: 'Educational Leadership in Digital Era', credits: 3, chapters: [
                                'Educational Administration, Vision and School Leadership',
                                'ICT Integration in Institutional Governance',
                                'Change Management, Capacity Building and Resource Mobilization'
                            ]
                        },
                        {
                            code: 'ICT Ed. 447', name: 'System Analysis and Design', credits: 3, chapters: [
                                'System Development Life Cycle (SDLC) for School Systems',
                                'Requirements Elicitation and Data Flow Diagrams (DFD)',
                                'Database Design, User Interface Design and System Testing'
                            ]
                        },
                        {
                            code: 'ICT Ed. 445', name: 'Operating System', credits: 3, chapters: [
                                'Process Scheduling, Multithreading and Concurrency',
                                'Deadlocks, Semaphores and Synchronization',
                                'Memory Management, Virtual Memory and Paging Systems',
                                'File Systems, Security and Linux in Educational Labs'
                            ]
                        },
                        {
                            code: 'ICT Ed. 446', name: 'Database Management System', credits: 3, chapters: [
                                'Relational Data Model, ER Modeling and Normalization',
                                'SQL Queries for School Information Systems',
                                'Transaction Processing, Recovery and Data Integrity'
                            ]
                        },
                        {
                            code: 'Math Ed. 442', name: 'Numerical Analysis', credits: 3, chapters: [
                                'Roots of Nonlinear Equations (Bisection, Newton Raphson)',
                                'Interpolation, Numerical Differentiation and Integration',
                                'Systems of Linear Equations and Numerical ODEs'
                            ]
                        }
                    ]
                },
                {
                    semester: 5,
                    title: 'Semester V',
                    subjects: [
                        {
                            code: 'Ed. 452', name: 'Assessment and Evaluation', credits: 3, chapters: [
                                'Concepts of Measurement, Assessment and Evaluation in Education',
                                'Formative vs Summative Assessment, Continuous Assessment System (CAS)',
                                'Standardized Testing, Test Construction and Item Analysis',
                                'Grading Systems, Authentic Assessment and E-Portfolios'
                            ]
                        },
                        {
                            code: 'ICT Ed. 455', name: 'Java Programming', credits: 3, chapters: [
                                'Java Fundamentals, Object-Oriented Principles and OOP Architecture',
                                'Exception Handling, Multithreading and Collections Framework',
                                'GUI Development with Swing/JavaFX for Educational Apps',
                                'JDBC and Database Connectivity'
                            ]
                        },
                        {
                            code: 'ICT Ed. 456', name: 'Data Communication and Network', credits: 3, chapters: [
                                'Transmission Media, Signals, Modulation and Multiplexing',
                                'Data Link Protocols, Ethernet and Wireless Networks',
                                'IP Addressing, Routing, TCP/UDP and Network Security in Schools'
                            ]
                        },
                        {
                            code: 'ICT Ed. 457', name: 'Software Engineering and Project Management', credits: 3, chapters: [
                                'Software Process Models: Agile, Waterfall and Scrum',
                                'Software Requirements Specification (SRS) for Education Systems',
                                'Project Scheduling, Cost Estimation and Quality Assurance'
                            ]
                        },
                        {
                            code: 'Math Ed. 452', name: 'Discrete Math', credits: 3, chapters: [
                                'Propositional Logic, Predicates and Proof Techniques',
                                'Graph Theory, Trees and Network Flow in Computing'
                            ]
                        }
                    ]
                },
                {
                    semester: 6,
                    title: 'Semester VI',
                    subjects: [
                        {
                            code: 'Ed. 462', name: 'Research Methods in Education', credits: 3, chapters: [
                                'Scientific Inquiry and Types of Educational Research (Action, Case, Survey)',
                                'Action Research for Classroom Teachers',
                                'Data Collection Instruments, Data Analysis and Research Ethics'
                            ]
                        },
                        {
                            code: 'ICT Ed. 465', name: 'Visual Programming with C#', credits: 3, chapters: [
                                '.NET Platform, C# Syntax and Object Orientation',
                                'Windows Forms / WPF Development for Educational Software',
                                'ADO.NET, LINQ and Data Binding'
                            ]
                        },
                        {
                            code: 'ICT Ed. 466', name: 'Computer Graphics', credits: 3, chapters: [
                                'Raster Scan Displays, Frame Buffers and Scan Conversion',
                                '2D and 3D Transformations, Clipping and Projections',
                                'Educational Visualizations, Animations and Virtual Learning'
                            ]
                        },
                        {
                            code: 'ICT Ed. 467', name: 'Digital Pedagogy and LMS', credits: 3, chapters: [
                                'Theories of Digital Learning: Connectivism and Blended Pedagogy',
                                'Learning Management Systems: Moodle, Google Classroom, Canvas',
                                'E-Content Authoring, Interactive Multimedia and Gamification'
                            ]
                        },
                        {
                            code: 'ICT Ed. 468', name: 'Network and Information Security', credits: 3, chapters: [
                                'Threats, Vulnerabilities and Cyber Hygiene in Schools',
                                'Cryptography, Symmetric/Asymmetric Encryption and Firewalls',
                                'Digital Safety, Data Privacy Laws and School ICT Policies'
                            ]
                        }
                    ]
                },
                {
                    semester: 7,
                    title: 'Semester VII',
                    subjects: [
                        {
                            code: 'Ed. 472', name: 'Research Project', credits: 3, chapters: [
                                'Problem Formulation in School Education',
                                'Empirical Investigation and Data Collection',
                                'Thesis Preparation, Academic Writing and Oral Presentation'
                            ]
                        },
                        {
                            code: 'ICT Ed. 477', name: 'Python Programming', credits: 3, chapters: [
                                'Python Syntax, Data Structures (Lists, Dictionaries, Sets)',
                                'Modular Code, Functional Programming and File Handling',
                                'Educational App Development with Python'
                            ]
                        },
                        {
                            code: 'ICT Ed. 478', name: 'Teaching Method in ICT', credits: 3, chapters: [
                                'Pedagogy of Computer Science and Information Technology',
                                'Laboratory Management, Project-Based Learning in Computing',
                                'Curriculum Analysis of Secondary School Computer Science in Nepal'
                            ]
                        },
                        {
                            code: 'ICT Ed. 473', name: 'Geographical Information System (GIS)', credits: 3, chapters: [
                                'Spatial Data Concepts, Coordinates and Map Projections',
                                'GIS Applications in Educational Planning and Resource Allocation'
                            ]
                        },
                        {
                            code: 'ICT Ed. 474', name: 'Multimedia', credits: 3, chapters: [
                                'Audio, Video, Graphics and Animation Production for Learning',
                                'Multimedia Compression, Authoring Tools and Interactive Simulations'
                            ]
                        },
                        {
                            code: 'ICT Ed. 479', name: 'Capstone Project', credits: 3, chapters: [
                                'Full-Stack Educational Software or Learning Solution Development',
                                'Deployment, Usability Testing and Final Defense'
                            ]
                        }
                    ]
                },
                {
                    semester: 8,
                    title: 'Semester VIII',
                    subjects: [
                        {
                            code: 'ICT Ed. 482', name: 'Artificial Intelligence in Education', credits: 3, chapters: [
                                'Intelligent Tutoring Systems and Personalized Learning',
                                'Generative AI, Large Language Models in Curriculum & Pedagogy',
                                'Ethical AI, Data Privacy and Algorithmic Bias in Assessment'
                            ]
                        },
                        {
                            code: 'ICT Ed. 486', name: 'System Administration using Linux', credits: 3, chapters: [
                                'Linux Kernel, Shell Scripting and User Management',
                                'Managing DNS, Apache/Nginx, Mail and File Servers in Education',
                                'Lab Virtualization and System Monitoring'
                            ]
                        },
                        {
                            code: 'Ed 481', name: 'Classroom Pedagogy', credits: 3, chapters: [
                                'Student-Centered Instructional Strategies and Active Learning',
                                'Classroom Management, Collaborative Learning and Microteaching'
                            ]
                        },
                        {
                            code: 'ICT Ed. 484', name: 'Big Data and Data Analysis', credits: 3, chapters: [
                                'Big Data Dimensions, Educational Data Mining and Learning Analytics',
                                'Predictive Analytics for Student Retention and Performance'
                            ]
                        },
                        {
                            code: 'ICT Ed. 483', name: 'Cloud Computing', credits: 3, chapters: [
                                'Cloud Paradigms (IaaS, PaaS, SaaS) for Educational Institutions',
                                'Virtualization, Storage Buckets and Cloud Security'
                            ]
                        },
                        {
                            code: 'ICT Ed. 487', name: 'Teaching Practicum in ICT in Education', credits: 3, chapters: [
                                'School Attachment, Lesson Delivery and Field Mentorship',
                                'Practicum Portfolio, Reflective Journals and Evaluation'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'llb',
            code: 'LLB',
            name: 'Bachelor of Laws',
            shortName: 'LLB',
            category: 'Faculty of Law',
            badge: 'FOL • 5 Semesters / 3-5 Years',
            duration: '5 Semesters (3-5 Years Scheme)',
            totalCredits: 95,
            icon: '⚖️',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
            bgGlow: 'rgba(245, 158, 11, 0.15)',
            description: 'Rigorous legal education program cultivating jurisprudential mastery, constitutional advocacy, criminal litigation, procedural craftsmanship, and human rights advocacy.',
            semesters: [
                {
                    semester: 1,
                    title: 'Semester I',
                    subjects: [
                        {
                            code: 'LAW101', name: 'General Principles of Law', credits: 3, chapters: [
                                'Definition, Nature and Sources of Law (Custom, Legislation, Precedent)',
                                'Schools of Jurisprudence: Natural, Analytical, Historical, Sociological',
                                'Rights, Duties, Ownership and Possession Concepts',
                                'Rule of Law, Separation of Powers and Constitutionalism'
                            ]
                        },
                        {
                            code: 'LAW102', name: 'General Concepts of Law', credits: 3, chapters: [
                                'Classification of Law: Substantive vs Procedural, Civil vs Criminal',
                                'Administration of Justice: Theories of Punishment and Justice Systems',
                                'Legal Personality: Corporations, Status and State Authority'
                            ]
                        },
                        {
                            code: 'LAW103', name: 'Theories of Logic', credits: 3, chapters: [
                                'Propositional Logic and Deductive vs Inductive Reasoning',
                                'Syllogisms and Fallacies in Legal Argumentation',
                                'Legal Reasoning, Statutory Construction and Precedent Analysis'
                            ]
                        },
                        {
                            code: 'LAW104', name: 'History of Nepal', credits: 3, chapters: [
                                'Ancient Legal Systems of Nepal: Kirat, Licchavi and Malla Periods',
                                'Unification Era, Muluki Ain 1910 and Rana Jurisprudence',
                                'Constitutional and Legal Evolution Post-2007 BS in Nepal'
                            ]
                        },
                        {
                            code: 'LAW105', name: 'Political Theory and Thoughts', credits: 3, chapters: [
                                'State, Sovereignty, Liberty, Equality and Justice Theories',
                                'Western Political Thinkers: Plato, Aristotle, Hobbes, Locke, Rousseau',
                                'Eastern Political Philosophies: Kautilya, Manusmriti and Vedic Jurisprudence'
                            ]
                        },
                        {
                            code: 'LAW106', name: 'Economics', credits: 3, chapters: [
                                'Micro & Macroeconomic Concepts Relevant to Law and Regulation',
                                'Law and Economics: Economic Analysis of Property, Contract and Tort Law',
                                'Nepalese Economy, Public Finance and Fiscal Regulations'
                            ]
                        },
                        {
                            code: 'LAW107', name: 'Sociology', credits: 3, chapters: [
                                'Sociological Perspectives and Social Institutions in Nepal',
                                'Social Stratification, Law as an Instrument of Social Change',
                                'Social Problems: Caste Discrimination, Gender Inequality and Human Rights'
                            ]
                        },
                        {
                            code: 'LAW108', name: 'Fundamental Management', credits: 3, chapters: [
                                'Principles of Management and Administrative Organizational Functions',
                                'Court Management, Judicial Administration and Case Flow Management'
                            ]
                        },
                        {
                            code: 'LAW109', name: 'Clinical Works', credits: 3, chapters: [
                                'Introduction to Clinical Legal Education and Community Advocacy',
                                'Legal Aid Services, Client Counseling and Legal Fact-Gathering'
                            ]
                        }
                    ]
                },
                {
                    semester: 2,
                    title: 'Semester II',
                    subjects: [
                        {
                            code: 'LAW201', name: 'Criminal Law', credits: 3, chapters: [
                                'Foundational Elements of Crime: Actus Reus and Mens Rea',
                                'Inchoate Crimes: Abetment, Conspiracy and Attempt',
                                'General Exceptions, Self-Defense and Insanity under National Penal Code 2074',
                                'Offenses Against the Person: Homicide, Assault and Bodily Harm',
                                'Offenses Against Property: Theft, Robbery, Extortion and Fraud'
                            ]
                        },
                        {
                            code: 'LAW202', name: 'Sociology of Law', credits: 3, chapters: [
                                'Law and Society Interaction: Legal Pluralism and Indigenous Legal Systems',
                                'Social Justice, Legal Consciousness and Access to Justice in Nepal',
                                'Empirical Legal Research and Dispute Resolution Dynamics'
                            ]
                        },
                        {
                            code: 'LAW203', name: 'Principles and Rules of Procedural Law', credits: 3, chapters: [
                                'Civil Procedure Code 2074: Jurisdiction, Plaint, Summons and Written Statement',
                                'Interim Relief, Injunctions and Execution of Decrees',
                                'Criminal Procedure Code 2074: FIR, Investigation, Arrest, Bail and Charge Sheet',
                                'Fair Trial Principles, Due Process and Witness Protection'
                            ]
                        },
                        {
                            code: 'LAW204', name: 'Legislative Principles and Law Making Process', credits: 3, chapters: [
                                'Principles of Legislation (Benthamite Utility and Public Interest)',
                                'Parliamentary Law Making Process in Federal and Provincial Assemblies of Nepal',
                                'Subordinate/Delegated Legislation and Legislative Scrutiny'
                            ]
                        },
                        {
                            code: 'LAW205', name: 'International Relations and Diplomacy', credits: 3, chapters: [
                                'Theories of International Relations (Realism, Liberalism, Constructivism)',
                                'Diplomatic Law: Vienna Convention on Diplomatic and Consular Relations',
                                'Foreign Policy of Nepal and Non-Alignment Strategy'
                            ]
                        },
                        {
                            code: 'LAW206', name: 'International Organizations', credits: 3, chapters: [
                                'Charter of the United Nations: Organs, Powers and Security Council',
                                'International Court of Justice (ICJ) Jurisdiction and Advisory Opinions',
                                'Regional Organizations: SAARC, BIMSTEC, ASEAN, European Union'
                            ]
                        },
                        {
                            code: 'LAW207', name: 'Legal English', credits: 3, chapters: [
                                'Legal Terminology, Maxims and Case Law Analysis in English',
                                'Drafting Legal Agreements, Notices and Pleadings in English'
                            ]
                        },
                        {
                            code: 'LAW208', name: 'Legal Nepali', credits: 3, chapters: [
                                'नेपाली कानुनी शब्दावली र मुलुकी देवानी/फौजदारी संहिताका पारिभाषिक पदहरू',
                                'फिरादपत्र, प्रतिउत्तरपत्र र फैसला लेखन शैली'
                            ]
                        },
                        {
                            code: 'LAW209', name: 'Clinical Course', credits: 3, chapters: [
                                'Legal Aid Clinic Operations, Jail Visits and Pro Bono Counseling',
                                'Drafting Legal Petitions and Interviewing Litigants'
                            ]
                        }
                    ]
                },
                {
                    semester: 3,
                    title: 'Semester III',
                    subjects: [
                        {
                            code: 'LAW301', name: 'Constitutional Law and Constitutionalism', credits: 3, chapters: [
                                'Constitutionalism, Rule of Law and Judicial Review Principles',
                                'Constitution of Nepal 2072: Fundamental Rights and Duties (Articles 16-48)',
                                'Writ Jurisdictions: Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto',
                                'Federal Structure: Powers of Federal, Provincial and Local Governments',
                                'Judiciary System: Supreme Court, High Courts and District Courts'
                            ]
                        },
                        {
                            code: 'LAW302', name: 'Law of Evidence', credits: 3, chapters: [
                                'Evidence Act 2031: Relevancy, Admissibility and Weight of Evidence',
                                'Oral Evidence, Documentary Evidence and Electronic Evidence',
                                'Burden of Proof, Standard of Proof and Presumptions of Law',
                                'Estoppel, Privileged Communications and Examination of Witnesses'
                            ]
                        },
                        {
                            code: 'LAW303', name: 'Public International Law', credits: 3, chapters: [
                                'Nature, Basis and Sources of International Law (Article 38 ICJ Statute)',
                                'State Recognition, Succession, State Responsibility and Territory',
                                'Law of Treaties (Vienna Convention 1969)',
                                'International Law of the Sea and Rights of Landlocked States (Nepal Context)'
                            ]
                        },
                        {
                            code: 'LAW304', name: 'International Human Rights Law', credits: 3, chapters: [
                                'Universal Declaration of Human Rights (UDHR 1948)',
                                'International Covenants: ICCPR, ICESCR and UN Treaty Bodies',
                                'National Human Rights Commission (NHRC) of Nepal and Human Rights Remedies'
                            ]
                        },
                        {
                            code: 'LAW305', name: 'Principles of Interpretation', credits: 3, chapters: [
                                'General Clauses Act and Principles of Statutory Construction',
                                'Primary Rules of Interpretation: Literal, Golden and Mischief Rules',
                                'Harmonious Construction, Purposive Interpretation and Internal/External Aids'
                            ]
                        },
                        {
                            code: 'LAW306', name: 'Legal Research', credits: 3, chapters: [
                                'Doctrinal and Non-Doctrinal Legal Research Methodologies',
                                'Case Law Analysis, Ratio Decidendi and Obiter Dicta Identification',
                                'Legal Citation Standards (Nepal Law Reports - NLR, Bluebook)'
                            ]
                        },
                        {
                            code: 'LAW307', name: 'Professional Ethics', credits: 3, chapters: [
                                'Advocates Act 2049 and Nepal Bar Council Code of Conduct',
                                'Duties of Advocates to Court, Clients, Opponents and Colleagues',
                                'Contempt of Court and Disciplinary Proceedings'
                            ]
                        },
                        {
                            code: 'LAW308', name: 'Clinical Legal Education (Civil Moot Court)', credits: 3, chapters: [
                                'Moot Court Problem Analysis, Memorial Drafting and Oral Arguments',
                                'Civil Court Observation and Trial Advocacy Skills'
                            ]
                        },
                        {
                            code: 'LAW309', name: 'Clinical Work', credits: 3, chapters: [
                                'Practical Dispute Resolution, Community Mediation and Outreach'
                            ]
                        }
                    ]
                },
                {
                    semester: 4,
                    title: 'Semester IV',
                    subjects: [
                        {
                            code: 'LAW401', name: 'Administrative Law', credits: 3, chapters: [
                                'Nature and Scope of Administrative Law and Delegated Legislation',
                                'Principles of Natural Justice: Audi Alteram Partem and Rule Against Bias',
                                'Administrative Discretion and Judicial Control of Administrative Actions',
                                'Ombudsman, Commission for the Investigation of Abuse of Authority (CIAA)'
                            ]
                        },
                        {
                            code: 'LAW402', name: 'Contract Law', credits: 3, chapters: [
                                'National Civil Code 2074: Essentials of a Valid Contract and Consideration',
                                'Free Consent: Coercion, Undue Influence, Fraud, Misrepresentation, Mistake',
                                'Void and Voidable Agreements, Quasi-Contracts and Contingent Contracts',
                                'Discharge of Contract, Breach of Contract and Damages'
                            ]
                        },
                        {
                            code: 'LAW403', name: 'Company Law', credits: 3, chapters: [
                                'Companies Act 2063: Formation, MOA, AOA and Corporate Veil Doctrine',
                                'Corporate Governance, Duties of Directors and Shareholder Protection',
                                'Winding Up, Insolvency and Securities Board of Nepal (SEBON) Regulation'
                            ]
                        },
                        {
                            code: 'LAW404', name: 'Advanced Jurisprudence', credits: 3, chapters: [
                                'Modern Trends in Legal Theory: Critical Legal Studies, Feminist Jurisprudence',
                                'Constitutional Jurisprudence, Judicial Activism and PIL in Nepal',
                                'Concept of Justice: John Rawls, Amartya Sen and Restorative Justice'
                            ]
                        },
                        {
                            code: 'LAW405', name: 'Elective I (International Trade Law and Arbitration)', credits: 3, chapters: [
                                'WTO Agreements, GATT, GATS, TRIPS and Cross-Border Contracts',
                                'Arbitration Act 2055: Domestic and International Commercial Arbitration'
                            ]
                        },
                        {
                            code: 'LAW406', name: 'Elective II (Criminology and Penology)', credits: 3, chapters: [
                                'Theories of Crime Causation (Biological, Psychological, Sociological)',
                                'Penology: Theories of Punishment, Prison Reforms and Probation/Parole'
                            ]
                        },
                        {
                            code: 'LAW407', name: 'Elective III (Laws on Good Governance)', credits: 3, chapters: [
                                'Right to Information (RTI) Act 2064, Transparency and Citizen Charters',
                                'Anti-Corruption Legal Framework and Whistleblower Protection'
                            ]
                        },
                        {
                            code: 'LAW408', name: 'Elective IV (Environmental Law)', credits: 3, chapters: [
                                'Environment Protection Act 2076: EIA, Climate Justice and Polluter Pays',
                                'Biodiversity Conservation, Forest Law and National Parks of Nepal'
                            ]
                        },
                        {
                            code: 'LAW409', name: 'Clinical Legal Education (Criminal Moot Court)', credits: 3, chapters: [
                                'Criminal Case Preparation, Examination-in-Chief, Cross-Examination',
                                'Bail Applications, Arguments on Charge and Sentencing'
                            ]
                        }
                    ]
                },
                {
                    semester: 5,
                    title: 'Semester V',
                    subjects: [
                        {
                            code: 'LAW501', name: 'Labor Law', credits: 3, chapters: [
                                'Labor Act 2074: Employment Categories, Working Hours, Leaves and Wages',
                                'Occupational Safety, Health and Workplace Harassment Laws',
                                'Trade Union Act 2049: Collective Bargaining, Strikes and Dispute Resolution',
                                'Social Security Act 2074 and Contribution-Based Social Security'
                            ]
                        },
                        {
                            code: 'LAW502', name: 'Private International Law', credits: 3, chapters: [
                                'Choice of Law, Domicile, Nationality and Renvoi Doctrine',
                                'Jurisdiction in Transnational Disputes and Recognition of Foreign Judgments',
                                'Cross-Border Marriages, Succession and Commercial Contracts'
                            ]
                        },
                        {
                            code: 'LAW503', name: 'Legal Philosophy', credits: 3, chapters: [
                                'Ontology and Epistemology of Law',
                                'Morality and Law: Hart-Fuller and Devlin Debates',
                                'Legal Realism, Post-Modernism and Deconstruction in Law'
                            ]
                        },
                        {
                            code: 'LAW504', name: 'International Humanitarian Law and Conflict Resolution', credits: 3, chapters: [
                                'Geneva Conventions 1949 and Additional Protocols (Jus in Bello)',
                                'Protection of Civilians, Prisoners of War and Cultural Property',
                                'Transitional Justice in Nepal: Truth and Reconciliation Commission (TRC)'
                            ]
                        },
                        {
                            code: 'LAW505', name: 'Agrarian Law', credits: 3, chapters: [
                                'Land Act 2021: Land Ceilings, Tenancy Rights (Moha) and Guthi Law',
                                'Land Acquisition, Compensation, Survey and Land Revenue Administration'
                            ]
                        },
                        {
                            code: 'LAW506', name: 'Conservation Law', credits: 3, chapters: [
                                'Wildlife Protection Act, CITES and Natural Resource Conservation',
                                'River Basin Management, Water Rights and Forest Jurisprudence'
                            ]
                        },
                        {
                            code: 'LAW507', name: 'Elective I (Law of Intellectual Property Rights)', credits: 3, chapters: [
                                'Patent, Design and Trademark Act: Infringement and Remedies',
                                'Copyright Act 2059: Authorship, Fair Use, Digital Piracy and TRIPS'
                            ]
                        },
                        {
                            code: 'LAW508', name: 'Dissertation + Internship', credits: 3, chapters: [
                                'Substantial Legal Thesis Writing on Contemporary Nepalese Jurisprudence',
                                'Court/Law Firm Attachment, Litigation Practice and Viva Voce'
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
