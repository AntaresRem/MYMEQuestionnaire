const questions = [
    { text: "I often think about what the future holds.", category: "Openness" },
    { text: "I like to think outside the box when solving problems.", category: "Openness" },
    { text: "I am interested in new and unusual ideas.", category: "Openness" },
    { text: "I enjoy engaging in imaginative activities.", category: "Openness" },
    { text: "I prefer novelty over familiarity in my daily routine.", category: "Openness" },
    { text: "I like to set specific goals and work steadily towards them.", category: "Openness" },
    { text: "I feel uneasy when things are left unfinished.", category: "Openness" },
    { text: "I prefer to organize my work and personal life to maintain structure.", category: "Openness" },
    { text: "I work well under pressure to meet deadlines.", category: "Openness" },
    { text: "I am methodical in the way I approach my tasks.", category: "Openness" },
    { text: "I enjoy being the center of attention in social situations.", category: "Openness" },
    { text: "I find energy in interacting with large groups of people.", category: "Openness" },
    { text: "I tend to initiate conversations with strangers.", category: "Openness" },
    { text: "I like to engage in lively discussions with friends and colleagues.", category: "Openness" },
    { text: "I enjoy being in busy, high-energy environments.", category: "Openness" },
    { text: "I often prioritize other people’s needs above my own.", category: "Openness" },
    { text: "I seek to maintain peace and avoid conflicts in my relationships.", category: "Openness" },
    { text: "I find satisfaction in helping others succeed.", category: "Openness" },
    { text: "I value empathy and understanding in my interactions with others.", category: "Openness" },
    { text: "I often put aside my own opinions to keep harmony in the group.", category: "Openness" },
    { text: "I frequently experience feelings of worry and unease.", category: "Conscientiousness" },
    { text: "I tend to dwell on negative events long after they occur.", category: "Conscientiousness" },
    { text: "I find it hard to relax when there are unresolved issues in my life.", category: "Conscientiousness" },
    { text: "I often feel tense or anxious in uncertain situations.", category: "Conscientiousness" },
    { text: "I am prone to experiencing mood swings.", category: "Conscientiousness" },
    { text: "I often question conventional wisdom and seek alternatives.", category: "Conscientiousness" },
    { text: "I enjoy learning new skills and mastering different tasks.", category: "Conscientiousness" },
    { text: "I find inspiration in artistic and creative works.", category: "Conscientiousness" },
    { text: "I enjoy engaging in intellectual conversations with others.", category: "Conscientiousness" },
    { text: "I like to spend time thinking about abstract concepts and ideas.", category: "Conscientiousness" },
    { text: "I feel satisfaction when I complete tasks well before the deadline.", category: "Conscientiousness" },
    { text: "I am diligent and focused in my work, rarely getting distracted.", category: "Conscientiousness" },
    { text: "I tend to create to-do lists to ensure productivity.", category: "Conscientiousness" },
    { text: "I strive to always meet my commitments and obligations.", category: "Conscientiousness" },
    { text: "I enjoy setting and achieving challenging goals.", category: "Conscientiousness" },
    { text: "I often seek out new social experiences.", category: "Conscientiousness" },
    { text: "I enjoy being around other people, even if I don’t know them well.", category: "Conscientiousness" },
    { text: "I feel more comfortable when I’m in the spotlight.", category: "Conscientiousness" },
    { text: "I often seek out opportunities to lead group activities.", category: "Conscientiousness" },
    { text: "I find myself volunteering to speak in front of groups.", category: "Conscientiousness" },
    { text: "I often find myself agreeing with others to avoid conflict.", category: "Extraversion" },
    { text: "I am quick to forgive others when they make mistakes.", category: "Extraversion" },
    { text: "I believe in giving people the benefit of the doubt.", category: "Extraversion" },
    { text: "I find it rewarding to help others overcome challenges.", category: "Extraversion" },
    { text: "I am sensitive to other people’s emotions and needs.", category: "Extraversion" },
    { text: "I tend to feel insecure about my abilities.", category: "Extraversion" },
    { text: "I often feel overwhelmed by stressful situations.", category: "Extraversion" },
    { text: "I find it hard to control my emotions when things go wrong.", category: "Extraversion" },
    { text: "I tend to overthink even simple problems.", category: "Extraversion" },
    { text: "I worry about things that are beyond my control.", category: "Extraversion" },
    { text: "I value independence and prefer making decisions on my own.", category: "Extraversion" },
    { text: "I tend to seek harmony in social situations and avoid confrontation.", category: "Extraversion" },
    { text: "I often think about the consequences of my actions before acting.", category: "Extraversion" },
    { text: "I prefer planning in advance rather than leaving things to chance.", category: "Extraversion" },
    { text: "I focus on immediate tasks and find it difficult to think about the future.", category: "Extraversion" },
    { text: "I enjoy discussing complex ideas and theories with others.", category: "Extraversion" },
    { text: "I prefer tasks that involve creative thinking over repetitive work.", category: "Extraversion" },
    { text: "I value the opinions of others and take them into account when making decisions.", category: "Extraversion" },
    { text: "I feel anxious when things are uncertain or out of control.", category: "Extraversion" },
    { text: "I find myself thinking deeply about philosophical questions.", category: "Extraversion" },
    { text: "I tend to be more relaxed and calm than stressed and anxious.", category: "Agreeableness" },
    { text: "I am more focused on the present than the future.", category: "Agreeableness" },
    { text: "I prefer to handle challenges alone rather than asking for help.", category: "Agreeableness" },
    { text: "I feel motivated when I work towards achieving a long-term goal.", category: "Agreeableness" },
    { text: "I often think about how my actions affect others emotionally.", category: "Agreeableness" },
    { text: "I enjoy discussing new and innovative ideas with others.", category: "Agreeableness" },
    { text: "I feel confident when leading a group of people.", category: "Agreeableness" },
    { text: "I often reflect on my own emotions to understand myself better.", category: "Agreeableness" },
    { text: "I tend to focus on practical, real-world solutions over abstract ideas.", category: "Agreeableness" },
    { text: "I find it easy to adapt to new situations and challenges.", category: "Agreeableness" },
    { text: "I feel stressed when things do not go as planned.", category: "Agreeableness" },
    { text: "I prefer following a structured approach to my work.", category: "Agreeableness" },
    { text: "I enjoy spending time thinking about how to improve myself.", category: "Agreeableness" },
    { text: "I tend to dwell on negative thoughts for long periods of time.", category: "Agreeableness" },
    { text: "I often focus on how my decisions will impact others around me.", category: "Agreeableness" },
    { text: "I enjoy being spontaneous and dislike rigid schedules.", category: "Agreeableness" },
    { text: "I feel anxious in social situations where I don’t know anyone.", category: "Agreeableness" },
    { text: "I focus on logic and facts when making important decisions.", category: "Agreeableness" },
    { text: "I prefer engaging in activities that challenge my creativity.", category: "Agreeableness" },
    { text: "I feel comfortable when my day is structured and predictable.", category: "Agreeableness" },
    { text: "I tend to feel more comfortable working in a team than working alone.", category: "Neuroticism" },
    { text: "I often think about how to improve systems and processes.", category: "Neuroticism" },
    { text: "I feel nervous when faced with a big decision.", category: "Neuroticism" },
    { text: "I often take the time to reflect on how my day went.", category: "Neuroticism" },
    { text: "I feel more energized after spending time alone than after socializing.", category: "Neuroticism" },
    { text: "I often seek out new experiences to challenge myself.", category: "Neuroticism" },
    { text: "I tend to worry about things even when there is no need to.", category: "Neuroticism" },
    { text: "I feel more comfortable when I have clear goals to work towards.", category: "Neuroticism" },
    { text: "I feel satisfied when I have completed a challenging task.", category: "Neuroticism" },
    { text: "I prefer to follow proven methods rather than trying something new.", category: "Neuroticism" },
    { text: "I find it easy to calm myself down when I feel stressed.", category: "Neuroticism" },
    { text: "I tend to focus on what is rather than what could be.", category: "Neuroticism" },
    { text: "I feel more comfortable when I have a clear plan in place.", category: "Neuroticism" },
    { text: "I often seek out feedback from others to improve my work.", category: "Neuroticism" },
    { text: "I prefer to work on tasks that require creative solutions.", category: "Neuroticism" },
    { text: "I feel comfortable making decisions based on emotions.", category: "Neuroticism" },
    { text: "I enjoy thinking about how to achieve future goals.", category: "Neuroticism" },
    { text: "I feel at ease in fast-paced environments.", category: "Neuroticism" },
    { text: "I prefer working with a team rather than individually.", category: "Neuroticism" },
    { text: "I feel comfortable when there is a clear plan to follow.", category: "Neuroticism" }
];


let currentQuestionIndex = 0;
let answers = [];

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});

function displayQuestion() {
    const questionCard = document.querySelector('.card');
    const questionText = document.getElementById('question-text');
    
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].text;
    }

    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit-container').style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';

    questionCard.classList.remove('flip');
}

function captureAnswer(score) {
    answers[currentQuestionIndex] = score;
    console.log(`Captured answer for question ${currentQuestionIndex + 1}: ${score}`);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        const questionCard = document.querySelector('.card');
        questionCard.classList.add('flip');
        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 600); // Wait for the flip transition to complete
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        const questionCard = document.querySelector('.card');
        questionCard.classList.add('flip');
        setTimeout(() => {
            currentQuestionIndex--;
            displayQuestion();
        }, 600); // Wait for the flip transition to complete
    }
}

function submitTest() {
    const chatHistory = document.getElementById('chat-history').value;

    // Process the answers and chat input to calculate the results
    let mbtiResult = calculateMBTI(answers);
    let bigFiveResult = calculateBigFive(answers);

    document.getElementById('mbti-result').textContent = "MBTI Result: " + mbtiResult;
    document.getElementById('big5-result').textContent = "Big Five Result: " + bigFiveResult;

    document.getElementById('submit-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function calculateMBTI(answers) {
    // Placeholder: Actual MBTI calculation logic based on answers
    return "INTP";  // Example result
}

function calculateBigFive(answers) {
    // Placeholder: Actual Big Five calculation logic based on answers
    return "Openness: High, Conscientiousness: Medium";  // Example result
}
