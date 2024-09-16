import * as readline from 'readline-sync';

export default function askQuestion(question: string): string {
    return readline.question(question);
};