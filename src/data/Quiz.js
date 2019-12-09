

const myData = [
    {
        Q: "the act, process, or profession of studying an activity \n(such as a procedure, a business, or a physiological function) \ntypically by mathematical means in order to define its goals or purposes and to discover operations and procedures for accomplishing them most efficiently.",
        A: "Systems analysis "
    },
    {
        Q:"What is gold-plating?",
        A:"Adding unnecessary or excessively complex functionality into a product, without customer approval"
    },
    {
        Q:"Which software development model is most known for deploying pair programming",
        A:"Extreme programming"
    },
    {
        Q:"This model follows a series of phases, one by one, with no return to prior phases.\nThe product is specified, designed, developed, and released in that order, with no opportunity to revisit earlier phases.",
        A:"Waterfall"
    },
    {
        Q:"Which software development model involves a technique to organize and track project progress visually using a board or signboard?",
        A:"Kanban"
    },
    {
        Q:" Which software development model is based on the following seven principles? \n1. Eliminate waste \n2. Amplify learning \n3. Decide as late as possible \n4. Deliver as fast as possible \n5. Empower the team \n6. Build quality in \n7. See the whole",
        A:"Lean"
    },
    {
        Q:"Which software development model uses the following techniques? \nSprint planning (to set expectations for the sprint)\nShort daily meetings (to ensure work is aligned with sprint expectations)\nSprint review (to gain feedback on completed work)\nSprint retrospective (to identify what to do better in the future)",
        A:"Scrum"
    },
    {
        Q:"With which software development model does the emphasis fall on getting all the requirements specified correctly at the beginning of the process and not changing them afterwards.",
        A:"Linear"
    },
    {
        Q:"When you describe a hypothetical generic person to serve as a stand-in for a group of users who have similar characteristics and needs, and you list what they think, see, feel, and do, what are you describing?",
        A:"User persona"
    },
    {
        Q:"What is the following text an example of? \nAs Catbert the Consultants Manager, I want to screen an engineering candidate, so I know their skills.",
        A:"User story"
    },
    {
        Q:"The name of a Use Case is always written as:",
        A:" Verb Noun (example: Request Chemical)"
    },
    {
        Q:"Which component of a Use Case describes the state after the Use Case has successfully completed?",
        A:"Postcondition"
    },
    {
        Q:"When you describe a hypothetical generic person to serve as a stand-in for a group of users who have similar characteristics and needs, and you list what they think, see, feel, and do, what are you describing? ",
        A:"User persona"
    },
    {
        Q:"What is the following text an example of? \nAs Catbert the Consultants Manager, I want to screen an engineering candidate, so I know their skills.",
        A:"User story"
    },
    {
        Q:"What is UML?",
        A:" A modeling language used to visualize different aspects of software development"
    },
    {
        Q:"Which diagram shows in matrix form all combinations of values of a set of conditions and the expected system action?",
        A:"Decision table"
    },
    {
        Q:"Which type of diagram shows the user-interface elements with which the user can interact and the navigations permitted between them?",
        A:"Dialog map"
    },
    {
        Q:"In a Data Flow Diagram, how should the arrows be labeled",
        A:"With a noun that shows data that flows to or from a process or data store"
    },
    {
        Q:"In a State Transition Diagram, how should the arrows be labeled?",
        A:"With an event or condition that causes a change in state"
    },
    {
        Q:"What problem does the following business rule have, as written? Requests to board a pet for fewer than two days do not require a security deposit. Requests for more than two days do require a security deposit.",
        A:"The boundary values are unclear."
    },
    {
        Q:"What type of requirement uses the following format?<optional precondition> <optional trigger event> the system shall <expected system response> Example: If the requested chemical is found in the chemical stockroom, the system shall display a list of all containers of the chemical that are currently in the stockroom. ",
        A:"Functional requirement"
    },
    {
        Q:"Which part of an SRS document defines the composition of data structures and the meaning, data type, length, format, and allowed values for the data elements that make up those structures?",
        A:" Data dictionary"
    },
    {
        Q:"Which part of an SRS document describes the context and origin of the product being specified in the SRS?",
        A:"Product perspective"
    },
    {
        Q:"A description of a quality or characteristic that a system must exhibit; how well the software will perform",
        A:"Non-functional requirement"
    },
    {
        Q:"A high-level enterprise objective; a reason why the software is being developed",
        A:"Business requirement"
    },
    {
        Q:"A task that a purchaser or customer of the product must be able to perform with the software",
        A:"User requirement,"
    },
    {
        Q:"A description of a behavior that a system will exhibit under specific conditions; what the software will do ",
        A:"Functional requirement"
    },
    {
        Q:"What does stakeholder refer to in Vision and Scope documents?",
        A:"A person with an interest or concern in the software being developed, the business, product, or project"
    },
    {
        Q:"What is meant by \"elicit requirements\"?",
        A:"Evoke, draw out, gather requirements"
    },
    {
        Q:"What is the general word that systems analysts use for a restriction that is imposed on the choices available to the software developer for the design and construction of a product?",
        A:"Constraint"
    },
    {
        Q:"Which requirement is better written?\n A: The user shall be able to toggle between displaying and hiding all XML tags in the document being edited with the activation of a specific triggering mechanism. The display shall change in 0.1 seconds or less. \n\nB: When the user clicks the correct button, the XML Editor should switch between displaying and hiding nonprinting characters instantaneously with a user interface that is obvious to the end user.",
        A:"The answer is A"
    },
    {
        Q:"Which software engineering activity includes the task of evaluating information received from users to distinguish user tasks, functional requirements, quality expectations, business rules, and suggested solutions?",
        A:"Analyze requirements"
    },
    {
        Q:"Which type of requirement is defined as \n\"a policy, guideline, standard, or regulation that defines or constrains some aspect of the organization or enterprise that will use the software?\" ",
        A:"Business rule"
    },
    {
        Q:"Which systems analysis specification is written using the following form?\nFor [target customer] who [statement of the need or opportunity], the [product name] is a [product category] that [major capabilities, key benefit, compelling reason to buy or use]. Unlike [primary competitive alternative], our product [statement of primary differentiation].",
        A:"Product vision"
    },
    {
        Q:"What term is used to refer to the quantity of instances of a particular data entity relating to another entity, where the possible quantities are one-to-one, one-to-many, and many-to-many?",
        A:"Cardinality"
    },
    {
        Q:"Which answer best explains why we collect data requirements?",
        A:"To ensure data formats, variable names, and valid values are specified"
    },
    {
        Q:"Which of the following is a required component of a typical software development Test Plan?",
        A:"A Test Suite"
    },
    {
        Q:"What does the git init command do?",
        A:"Sets up a new local Git repository for your current directory"
    },
    {
        Q:"What does the git add . command do?",
        A:"Adds all files in the current directory to the current Git repository"
    },
    {
        Q:"What is the difference between Git and GitHub?",
        A:"Git is a revision control system. GitHub is a hosting service for Git repositories."
    },
    {
        Q:"What distinguishes agile from the waterfall methodology for software development? ",
        A:"Agile welcomes changing requirements, even late in development, whereas waterfall does not."
    },
    {
        Q:"When agile developers talk about sustainable development, what do they mean?",
        A:"The software sponsors, developers, and users should be able to maintain a constant pace indefinitely."
    },
    {
        Q:"Which item does agile development value more?\nA: Individuals and interactions \nB: Processes and tools",
        A:"Individuals and interactions"
    },
    {
        Q:"Which item does agile development value more? \nA: Working Software\nB: Comprehensive documentation ",
        A:"Working Software "
    },
    {
        Q:"Which item does agile development value more?\nA: Contract negotiation\nB: Customer collaboration",
        A:"Customer collaboration"
    },
    {
        Q:"In order to recognize tasks that can't be completed before another task is completed, or at least partially completed, what do software planning tools typically allow you to track? ",
        A:"Dependencies"
    },
    {
        Q:"What does milestone mean?",
        A:" An internal checkpoint used to measure progress during a project"
    },
    {
        Q:"What is analysis paralysis?",
        A:"A problem where a software development team gets stalled trying to do a compete job of analyzing requirements, leading to stagnation of the project"
    },
    {
        Q:"What does \"creeping user requirements\" refer to?",
        A:"Allowing the scope of a project to grow based on additional, unplanned user requirements"
    },
    {
        Q:"What is gold-plating?",
        A:" Adding unnecessary or excessively complex functionality into a product, without customer approval"
    },
    {
        Q:"Which systems analysis technique uses this format:\n\nAs a [user persona],\n\nI want to [do something],\n\nso that I can [realize a reward]",
        A:"User story"
    },
    {
        Q:"Which software development model is most known for deploying pair programming?",
        A:"Extreme programming"
    },
    {
        Q:"Which software development model is based on the following seven principles?\n1. Eliminate waste \n2. Amplify learning \n3. Decide as late as possible \n4. Deliver as fast as possible \n5. Empower the team \n6. Build quality in \n7. See the whole",
        A:"Lean"
    },
    {
        Q:"This model follows a series of phases, one by one, with no return to prior phases. The product is specified, designed, developed, and released in that order, with no opportunity to revisit earlier phases",
        A:"Waterfall"
    },
    {
        Q:"Which software development model uses the following techniques?\n*Sprint planning (to set expectations for the sprint)\n*Short daily meetings (to ensure work is aligned with sprint expectations)\n*Sprint review (to gain feedback on completed work)\n*Sprint retrospective (to identify what to do better in the future)",
        A:"Scrum"
    },
    {
        Q:"Which software development models have the drawback that the client does not see the finished product until everything is virtually complete?",
        A:"Waterfall and V-Model"
    },
    {
        Q:"With which software development model does the emphasis fall on early and continuous delivery so that there is enough opportunity for close collaboration and feedback to improve the product?",
        A:"Agile"
    },
    {
        Q:"With which software development model does the emphasis fall on getting all the requirements specified correctly at the beginning of the process and not changing them afterwards.",
        A:"Linear"
    },
    {
        Q:"With which software development model does the emphasis fall on transparency so that everyone can see every part of the project, from inside the team and outside the team?",
        A:"Scrum"
    },
    {
        Q:"A description of a quality or characteristic that a system must exhibit; how well the software will perform",
        A:"Non-functional requirement"
    },
    {
        Q:"A description of a behavior that a system will exhibit under specific conditions; what the software will do",
        A:"Functional requirement,"
    },
    {
        Q:"A high-level enterprise objective; a reason why the software is being developed",
        A:"Business requirement"
    },
    {
        Q:"A task that a purchaser or customer of the product must be able to perform with the software",
        A:"User requirement"
    },
    {
        Q:"Number the following software engineering tasks from 1 to 7 according to the order in which they should be accomplished for a traditional software engineering project, with 1 being the first task and 7 the last. ",
        A:"1. Determine business requirements \n2.Write a Vision and Scope document \n3. Develop use cases, user stories, and UML diagrams \n4. Determine detailed functional and non-functional requirements  \n5. Write a Software Requirements Specification \n6. Write code \n7. Test code "
    },
    {
        Q:"How is scope handled in agile projects?",
        A:"The correct answer is: Development is performed in iterations, and the scope of each iteration consists of user stories selected from a dynamic product backlog, based on relative priority and estimated delivery capacity of the team for each time period."
    },
    {
        Q:"What is meant by \"elicit requirements\"?",
        A:"Evoke, draw out, gather requirements"
    },
    {
        Q:"What is the general word that systems analysts use for a restriction that is imposed on the choices available to the software developer for the design and construction of a product?",
        A:"Constraint"
    },
    {
        Q:"Which software engineering activity includes the task of evaluating information received from users to distinguish user tasks, functional requirements, quality expectations, business rules, and suggested solutions?",
        A:"Analyze requirements"
    },
    {
        Q:"Which systems analysis document specifies the purpose of the product, business objectives, success metrics, risks, dependencies, and the breadth or size of the project along with the features that are scheduled for each release?",
        A:"Vison and Scope"
    },
    {
        Q:"For [target customer] who [statement of the need or opportunity], the [product name] is a [product category] that [major capabilities, key benefit, compelling reason to buy or use]. Unlike [primary competitive alternative], our product [statement of primary differentiation].",
        A:"Product vision"
    },
    {
        Q:"Which type of requirement is defined as \"a policy, guideline, standard, or regulation that defines or constrains some aspect of the organization or enterprise that will use the software?\" ",
        A:"Business rule"
    },
    {
        Q:"Why is it important to specify non-functional requirements?",
        A:"The correct answer is: Non-functional requirements let the systems analyst specify how well the software should work in terms of performance, robustness, and usability."
    },
    {
        Q:"Which requirement is better written?",
        A:"The correct answer is: The user shall be able to toggle between displaying and hiding all XML tags in the document being edited with the activation of a specific triggering mechanism. The display shall change in 0.1 seconds or less."
    },
    {
        Q:"Which requirement is better written?",
        A:"The correct answer is: The software must allow the user to select and print an image from the gallery."
    },
    {
        Q:"Which type of software requirement specifies how easy it is to learn and to use the software?",
        A:"Non-functional"
    },
    {
        Q:"Which systems analysis technique specifies requirements in terms of a primary actor, secondary actors, trigger, preconditions, postconditions, and normal flow?",
        A:"Use case"
    },
    {
        Q:"As Catbert the Consultants Manager, I want to screen an engineering candidate, so I know their skills.",
        A:"User story"
    },
    {
        Q:"The name of a Use Case is always written as:",
        A:"Verb Noun (example: Request Chemical)"
    },
    {
        Q:"Who plays the role of Product Owner in agile software development projects?",
        A:"The correct answer is: A team member who defines the product’s vision, represents the user to the team, and develops and prioritizes contents of the product backlog"
    },
    {
        Q:"When classifying users, what is meant by a \"disfavored user class\"?",
        A:"Users who are not supposed to use the product for legal, security, or safety reasons"
    },
    {
        Q:"When you describe a hypothetical generic person to serve as a stand-in for a group of users who have similar characteristics and needs, and you list what they think, see, feel, and do, what are you describing? ",
        A:"User persona"
    },
    {
        Q:"Which component of a Use Case describes the state after the Use Case has successfully completed?",
        A:"Postcondition"
    },
    {
        Q:"Shows the sequence of circumstances that an object in a system goes through in response to events",
        A:"Activity diagram"
    },
    {
        Q:"Identifies objects outside the system that exchange data with the system",
        A:"Context diagram"
    },
    {
        Q:"Depicts a process proceeding from one action to another",
        A:"State transition diagram"
    },
    {
        Q:"Shows sequential steps of a business process, divided into columns",
        A:"Swimlane"
    },
    {
        Q:"Identifies an actor and their interactions with a system to achieve a goal",
        A:"Use case diagram"
    },
    {
        Q:"Identifies processes, data stores, external entities, and data movement among them",
        A:"Data flow diagram "
    },
    {
        Q:"When designing software, which portions of the design benefit most from models?",
        A:"The most complex and riskiest portions of the design"
    },
    {
        Q:"Which type of diagram shows the user-interface elements with which the user can interact and the navigations permitted between them?",
        A:"Dialog map"
    },
    {
        Q:"In a Context Diagram, how should the arrows be labeled?",
        A:"With a noun that shows data that flows to or from a system or external entity"
    },
    {
        Q:"In a State Transition Diagram, how should the arrows be labeled?",
        A:"With an event or condition that causes a change in state"
    },
    {
        Q:"In a Data Flow Diagram, how should the arrows be labeled?",
        A:"With a noun that shows data that flows to or from a process or data store"
    },
    {
        Q:"You are developing a State Transition Diagram for a dental office system. Which of the following is the best label for an arrow that goes from the Appointment Pending state to the Appointment Scheduled state?",
        A:"Patient accepts suggested appointment date and time"
    },
    {
        Q:"<optional precondition> <optional trigger event> the system shall <expected system response>\n\n\nExample: If the requested chemical is found in the chemical stockroom, the system shall display a list of all containers of the chemical that are currently in the stockroom.",
        A:"Functional requirement"
    },
    {
        Q:"The <user class or actor name> shall be able to <do something> <to some object> <qualifying conditions, response time, or quality statement>\n\n\nExample: The Chemist shall be able to reorder any chemical they have ordered in the past by retrieving and editing the order details.",
        A:"Functional requirement"
    },
    {
        Q:"Which statement is the best advice for writing a Software Requirements Specification?",
        A:"Write requirements in complete sentences using proper grammar, spelling, and punctuation."
    },
    {
        Q:"Which part of an SRS document defines the composition of data structures and the meaning, data type, length, format, and allowed values for the data elements that make up those structures?",
        A:"Data dictionary"
    },




]



//diagarm questions 
//question 5 quiz 3 is a
//questions 2 , 3, and 4 quiz 4 
//questions 1,2 quiz 5
//questions 1,3,4 quiz 6 
//questions 1,2 quiz 7 
//question 4 quiz 9 
//questions 7, 9, 19, 32, 40-45, 53,54 midterm


//TODO
//need questins with pictures from quizzes 


export const pickQuestion = (index) => {
    return myData[index%myData.length];
}

export const shuffle = () => {
    let array = myData;
    for (let i = array.length -1; i>0; i--){
        let j = Math.floor(Math.random()* (i+1));
        [array[i], array[j]] = [array[j],array[i]]
    }
}

export const start = () => {return myData[0]}
export const numQuestions = () => {return myData.length}


  