import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let pubQuestions = questions.map((quest: Question) => ({ ...quest }));
    pubQuestions = pubQuestions.filter(
        (quest: Question): boolean => quest.published
    );

    return pubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let emptyQuestions = questions.map((quest: Question) => ({ ...quest }));
    emptyQuestions = questions.filter(
        (quest: Question): boolean =>
            !(
                quest.body === "" &&
                quest.expected === "" &&
                quest.options.length === 0
            )
    );
    return emptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    let sameIdQuestions = questions.map((quest: Question) => ({ ...quest }));
    sameIdQuestions = sameIdQuestions.filter(
        (quest: Question): boolean => quest.id === id
    );
    if (sameIdQuestions.length === 0) {
        return null;
    }
    return sameIdQuestions[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let lessQuestions = questions.map((quest: Question) => ({ ...quest }));
    lessQuestions = lessQuestions.filter(
        (quest: Question): boolean => !(quest.id === id)
    );
    return lessQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const questionNames = questions2.map(
        (quest: Question): string => quest.name
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const score = questions2.reduce(
        (pointsTot: number, quest: Question) => pointsTot + quest.points,
        0
    );
    return score;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(
        getPublishedQuestions(
            questions.map((quest: Question) => ({ ...quest }))
        )
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    let CSV = questions2.reduce(
        (list: string, quest: Question) =>
            list +
            quest.id.toString() +
            "," +
            quest.name +
            "," +
            quest.options.length.toString() +
            "," +
            quest.points.toString() +
            "," +
            quest.published.toString() +
            "\n",
        ""
    );
    CSV = ("id,name,options,points,published\n" + CSV).trim();
    return CSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const answers = questions2.map(
        (quest: Question): Answer => ({
            questionId: quest.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const pubQuestions = questions2.map((quest: Question) => ({
        id: quest.id,
        name: quest.name,
        body: quest.body,
        type: quest.type,
        options: quest.options,
        points: quest.points,
        expected: quest.expected,
        published: true
    }));
    return pubQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const allSame = questions2.reduce(
        (same: boolean, quest: Question) =>
            same && quest.type === questions2[0].type,
        true
    );
    return allSame;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const moreQuestions = [...questions2, makeBlankQuestion(id, name, type)];
    return moreQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const idx = questions2.reduce(
        (i: number, quest: Question) =>
            quest.id === targetId ? questions2.indexOf(quest) : i,
        -1
    );
    questions2[idx].name = newName;
    return questions2;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const questions2 = questions.map((quest: Question) => ({ ...quest }));
    const idx = questions2.reduce(
        (i: number, quest: Question) =>
            quest.id === targetId ? questions2.indexOf(quest) : i,
        -1
    );
    const oldType = questions2[idx].type;
    questions2[idx].type = newQuestionType;
    if (oldType === "multiple_choice_question") {
        questions2[idx].options = [];
    }
    return questions2;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const questions2 = questions.map((quest: Question) => ({
        ...quest,
        options: [...quest.options]
    }));
    const idx = questions2.reduce(
        (i: number, quest: Question) =>
            quest.id === targetId ? questions2.indexOf(quest) : i,
        -1
    );
    if (targetOptionIndex === -1) {
        questions2[idx].options = [...questions2[idx].options, newOption];
    } else {
        console.log(questions2[idx].options);
        questions2[idx].options.splice(targetOptionIndex, 1, newOption);
        console.log(questions2[idx].options);
    }
    return questions2;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const questions2 = questions.map((quest: Question) => ({
        ...quest,
        options: [...quest.options]
    }));
    const idx = questions2.reduce(
        (i: number, quest: Question) =>
            quest.id === targetId ? questions2.indexOf(quest) : i,
        -1
    );
    const newQuest = duplicateQuestion(newId, questions2[idx]);
    questions2.splice(idx + 1, 0, newQuest);
    return questions2;
}
