import { v4 as uuid } from "uuid";

export const quizQuestion: {
    id: string;
    question: string;
    options: string[];
    correctOption: string;
}[] = [
    {   
        id: uuid(),
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctOption: "Paris",
    },
    {   
        id: uuid(),
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
        correctOption: "Harper Lee",
    },
    {
        id: uuid(),
        question: "What is the chemical symbol for water?",
        options: ["O2", "CO2", "H2O", "H2SO4"],
        correctOption: "H2O",
    },
    {
        id: uuid(),
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctOption: "Mars",
    },
    {
        id: uuid(),
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctOption: "Leonardo da Vinci",
    },
    {
        id: uuid(),
        question: "What is the phenomenon known as sonoluminescence?",
        options: [
            "The emission of light from a material when it is heated to extreme temperatures",
            "The emission of light from a material when it is subjected to high pressure sound waves",
            "The emission of light from a material when it is exposed to strong magnetic fields",
            "The emission of light from a material when it is irradiated with ultraviolet radiation"
        ],
        correctOption: "The emission of light from a material when it is subjected to high pressure sound waves",
    },
    {
        id: uuid(),
        question: "What is the purpose of a Faraday cage?",
        options: [
            "To protect electronic devices from electromagnetic interference",
            "To generate electricity from atmospheric disturbances",
            "To shield against cosmic rays",
            "To filter out harmful radiation from nuclear reactions"
        ],
        correctOption: "To protect electronic devices from electromagnetic interference",
    },
    {
        id: uuid(),
        question: "What is the 'MPemba effect'?",
        options: [
            "The tendency of certain materials to change color at different temperatures",
            "The observation that hot water freezes faster than cold water under certain conditions",
            "The phenomenon where sound waves travel faster through denser materials",
            "The behavior of certain metals to exhibit magnetic properties at high temperatures"
        ],
        correctOption: "The observation that hot water freezes faster than cold water under certain conditions",
    },
    {
        id: uuid(),
        question: "What is a 'tardigrade'?",
        options: [
            "A subatomic particle with unusual properties",
            "A type of extremophile microorganism capable of surviving extreme conditions",
            "A theoretical construct in quantum mechanics",
            "A type of exotic matter found in space-time anomalies"
        ],
        correctOption: "A type of extremophile microorganism capable of surviving extreme conditions",
    },
    {
        id: uuid(),
        question: "What is the Leidenfrost effect?",
        options: [
            "The phenomenon of electric charge accumulation on an insulating material",
            "The behavior of fluids on a heated surface where they form vapor layers",
            "The reaction between certain chemicals producing luminescent glow",
            "The phenomenon of light bending around massive objects in space"
        ],
        correctOption: "The behavior of fluids on a heated surface where they form vapor layers",
    },
];