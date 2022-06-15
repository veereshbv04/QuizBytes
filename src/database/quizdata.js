const questions = [
    {   
        id:1,
        category:"js quiz",
        questions:[
            {
                questionText:"JavaScript is a _ -side programming language",
                optionsText:[
                    {option:"Client", isCorrect:false},
                    {option:"Server", isCorrect:false},
                    {option:"Both", isCorrect:true},
                    {option:"None", isCorrect:false}
                ]
            },
            {
                questionText:"Which of the following will write the message,'Hello DataFlair!' in an alert box",
                optionsText:[
                    {option:"alert('Hello DataFlair!')", isCorrect:true},
                    {option:"a('Hello DataFlair!')", isCorrect:false},
                    {option:"msgAlert('Hello DataFlair!')", isCorrect:false},
                    {option:"alertBox('Hello DataFlair!')", isCorrect:false}
                ]
            },
            {
                questionText:"How do you find the minimum of x an y using JavaScript",
                optionsText:[
                    {option:"min(x,y)", isCorrect:false},
                    {option:"max(x,y)", isCorrect:false},
                    {option:"Math.min(x,y)", isCorrect:true},
                    {option:"Math.low(x,y)", isCorrect:false}
                ]
            },
            {
                questionText:"What is the output of 'console.log(typeof +'1')' ?",
                optionsText:[
                    {option:"Number", isCorrect:true},
                    {option:"Object", isCorrect:false},
                    {option:"String", isCorrect:false},
                    {option:"Nan", isCorrect:false}
                ]
            },
            {
                questionText: "What is the output of 'console.log(2 +'4')' ?",
                optionsText:[
                    {option:"24", isCorrect:true},
                    {option:"undefined", isCorrect:false},
                    {option:"error", isCorrect:false},
                    {option:"2", isCorrect:false}
                ]
            }
        ]
    },
    {
        id: 2,
        category: "html",
        questions: [{
                questionText: "What do you understand by HTML?",
                optionsText: [
                    {option: "HTML describes the structure of webpage",isCorrect: false},
                    {option: "HTML is standard markup language",   isCorrect: false},
                    {option: "It helps browser to view content",isCorrect: false},
                    {option: "All of the above",isCorrect: true}
                ]
            },
            {
                questionText: "who is father of HTML",
                optionsText: [
                    {option: "Rasmus Lerdorf",isCorrect: false},
                    {option: "Tim Berners-Lee",isCorrect: true},
                    {option: "James henry", isCorrect: false},
                    {option: "James WIlliam",isCorrect: false}
                ]
            },
            {
                questionText: "HTML Stands for",
                optionsText: [
                    {option: "HyperText Markup Language",   isCorrect: true},
                    {option: "Hypertext Machine Language",   isCorrect: false},
                    {option: "Hyper Text Making Language",   isCorrect: false},
                    {option: "Hyper Text Marking Language",   isCorrect: false}
                ]
            },
            {
                questionText: "Which is used to read HTML page and render it?",
                optionsText: [
                    {option: "Web Server",   isCorrect: false},
                    {option: "Web Network",   isCorrect: false},
                    {option: "Web Browser",   isCorrect: true},
                    {option: "Web Matrix",   isCorrect: false}
                ]
            },
             {
                questionText: "Which tag is used for inserting the largest heading in HTML?",
                optionsText: [
                    {option: "<h1>",   isCorrect: true},
                    {option: "<Header>",   isCorrect: false},
                    {option: "<head>",   isCorrect: false},
                    {option: "<main>",   isCorrect: false}
                ]
            }
        ]
    },
    {
        id: 3,
        category: "react",
        questions: [{
                questionText: "Everything in React is a __",
                optionsText: [
                    {option: "Component",isCorrect: true},
                    {option: "Module",   isCorrect: false},
                    {option: "Tags",isCorrect: false},
                    {option: "Divs",isCorrect: false}
                ]
            },
            {
                questionText: "What is Babel?",
                optionsText: [
                    {option: "A transpiler",isCorrect: false},
                    {option: "An interpreter",isCorrect: false},
                    {option: "Compiler", isCorrect: false},
                    {option: "Both Tranpiler and COmpiler ",isCorrect: true}
                ]
            },
            {
                questionText: "How many elements does a react component return ",
                optionsText: [
                    {option: "1 Element",   isCorrect: true},
                    {option: "10 Elements",   isCorrect: false},
                    {option: "6 Elements",   isCorrect: false},
                    {option: "2 Elements",   isCorrect: false}
                ]
            },
            {
                questionText: "What is ReactJS ",
                optionsText: [
                    {option: "Framework",   isCorrect: false},
                    {option: "Package",   isCorrect: false},
                    {option: "Module",   isCorrect: false},
                    {option: "Library",   isCorrect: true}
                ]
            },
            {
                questionText: "Who developed ReactJs ",
                optionsText: [
                    {option: "Microsoft",   isCorrect: false},
                    {option: "Oracle",   isCorrect: false},
                    {option: "Facebook",   isCorrect: true},
                    {option: "Google",   isCorrect: false}
                ]
            }
        ]
    },
    {
        id: 4,
        category: "science",
        questions: [{
                questionText: "What is the chemical formula for Water",
                optionsText: [
                    {option: "H2O",isCorrect: true},
                    {option: "H3O",   isCorrect: false},
                    {option: "W2o",isCorrect: false},
                    {option: "Li2O",isCorrect: false}
                ]
            },
            {
                questionText: "Which gas is abundant in Atmosphere",
                optionsText: [
                    {option: "Nitroger",isCorrect: true},
                    {option: "Oxygen",isCorrect: false},
                    {option: "Hydrogen", isCorrect: false},
                    {option: "Helium",isCorrect: false}
                ]
            },
            {
                questionText: "who developed Telephone",
                optionsText: [
                    {option: "Graham Bell",   isCorrect: true},
                    {option: "Lincon",   isCorrect: false},
                    {option: "David Williams",   isCorrect: false},
                    {option: "James WIlliam",   isCorrect: false}
                ]
            },
            {
                questionText: "Which organ requires the most Oxygen",
                optionsText: [
                    {option: "Brain",   isCorrect: true},
                    {option: "Heart",   isCorrect: false},
                    {option: "Skin",   isCorrect: false},
                    {option: "Lungs",   isCorrect: false}
                ]
            },
            {
                questionText: "Natural Source of Vitamin D is",
                optionsText: [
                    {option: "Onion",   isCorrect: false},
                    {option: "Sun Light",   isCorrect: true},
                    {option: "Air",   isCorrect: false},
                    {option: "Moon Light",   isCorrect: false}
                ]
            }
        ]
    },
    {
        id: 5,
        category: "information technology",
        questions: [{
                questionText: "CPU stand for",
                optionsText: [
                    {option: "Central Processing Unit",isCorrect: true},
                    {option: "Critical Processing Unit",   isCorrect: false},
                    {option: "Cruicial Processing Unit",isCorrect: false},
                    {option: "Center Processing Unit",isCorrect: false}
                ]
            },
            {
                questionText: "The acronym for PC stands for",
                optionsText: [
                    {option: "Private Computer",isCorrect: false},
                    {option: "Personal Computer",isCorrect: true},
                    {option: "Personal Compact", isCorrect: false},
                    {option: "Privacy Computer",isCorrect: false}
                ]
            },
            {
                questionText: "Complex scientific research is usually done by",
                optionsText: [
                    {option: "Mainframe COmpuet",   isCorrect: false},
                    {option: "Super Computer",   isCorrect: true},
                    {option: "Personal Computer",   isCorrect: false},
                    {option: "Mini Computer",   isCorrect: false}
                ]
            },
            {
                questionText: "The fastest supercomputer nowadays is",
                optionsText: [
                    {option: "Cray Titan",   isCorrect: false},
                    {option: "Cray Jaguar",   isCorrect: false},
                    {option: "Sunway TaihuLight",   isCorrect: true},
                    {option: "NUDT-Tianhe-2",   isCorrect: false}
                ]
            },{
                questionText: "Learning Management System is an application of IT in",
                optionsText: [
                    {option: "Finance",   isCorrect: false},
                    {option: "Web Blogging",   isCorrect: false},
                    {option: "Education",   isCorrect: true},
                    {option: "Healthcare",   isCorrect: false}
                ]
            }
        ]
    }
]

export {questions}