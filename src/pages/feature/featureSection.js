import { useState } from 'react';
import { Button, Box, Typography, TextField, Grid, Paper } from '@mui/material';
import AIImageGenerator from './aiImageGen';

const AIPlayground = () => {
  const [game, setGame] = useState(null);
  const [wordGuess, setWordGuess] = useState('');
  const [codingAnswer, setCodingAnswer] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  const wordOfTheDay = "AI"; // Simple word for word guessing game.
  const mathQuestion = "5 + 3 = ?"; // Simple math problem for math challenge.

  const startGame = (gameType) => {
    setGame(gameType);
    setResult('');
  };

  const handleSubmitWordGame = async () => {
    const isCorrect = wordGuess.toUpperCase() === wordOfTheDay;
    const resultMessage = isCorrect ? "You guessed it right! 🎉" : "Wrong guess. Try again. 😞";
    await sendEmail(resultMessage);
    setResult(resultMessage);
  };

  const handleSubmitCodingChallenge = async () => {
    const correctAnswer = "42"; // Simple coding problem: what is 6*7?
    const resultMessage = codingAnswer === correctAnswer ? "Correct! 🎉" : "Incorrect answer. 😞";
    await sendEmail(resultMessage);
    setResult(resultMessage);
  };

  const handleSubmitMathChallenge = async () => {
    const correctAnswer = "8"; // Correct answer to the math question "5 + 3"
    const resultMessage = mathAnswer === correctAnswer ? "Correct! 🎉" : "Incorrect answer. 😞";
    await sendEmail(resultMessage);
    setResult(resultMessage);
  };

  const sendEmail = async (message) => {
    if (!email) {
      alert('Please enter your email');
      return;
    }
    console.log(`Sending email to ${email} with message: ${message}`);
    // Here, you would use your email service to send the email
    // (e.g., SendGrid, Nodemailer, etc.)
    return true;
  };

  return (
    <>
    <Box sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
              🧠 AI Playground
          </Typography>

          <Grid container justifyContent="center" spacing={2}>
              {/* Game Selection */}
              <Grid item xs={12} md={8}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                      <Typography variant="h5" paragraph align="center">
                          Choose Your AI Game
                      </Typography>
                      <Grid container spacing={2} justifyContent="center">
                          <Grid item>
                              <Button variant="contained" onClick={() => startGame('wordGame')}>
                                  Word Guess Game
                              </Button>
                          </Grid>
                          <Grid item>
                              <Button variant="contained" onClick={() => startGame('codingChallenge')}>
                                  Coding Challenge
                              </Button>
                          </Grid>
                          <Grid item>
                              <Button variant="contained" onClick={() => startGame('mathChallenge')}>
                                  Math Challenge
                              </Button>
                          </Grid>
                      </Grid>
                  </Paper>
              </Grid>

              {/* Word Guess Game */}
              {game === 'wordGame' && (
                  <Grid item xs={12} md={8}>
                      <Paper elevation={3} sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom>
                              What’s the word of the day? Hint: It’s related to Artificial Intelligence.
                          </Typography>
                          <TextField
                              label="Your Guess"
                              variant="outlined"
                              fullWidth
                              value={wordGuess}
                              onChange={(e) => setWordGuess(e.target.value)}
                              sx={{ mb: 2 }} />
                          <Button variant="contained" onClick={handleSubmitWordGame}>
                              Submit Guess
                          </Button>
                      </Paper>
                  </Grid>
              )}

              {/* Coding Challenge */}
              {game === 'codingChallenge' && (
                  <Grid item xs={12} md={8}>
                      <Paper elevation={3} sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom>
                              Coding Challenge: What is 6 * 7?
                          </Typography>
                          <TextField
                              label="Your Answer"
                              variant="outlined"
                              fullWidth
                              value={codingAnswer}
                              onChange={(e) => setCodingAnswer(e.target.value)}
                              sx={{ mb: 2 }} />
                          <Button variant="contained" onClick={handleSubmitCodingChallenge}>
                              Submit Answer
                          </Button>
                      </Paper>
                  </Grid>
              )}

              {/* Math Challenge */}
              {game === 'mathChallenge' && (
                  <Grid item xs={12} md={8}>
                      <Paper elevation={3} sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom>
                              Solve: {mathQuestion}
                          </Typography>
                          <TextField
                              label="Your Answer"
                              variant="outlined"
                              fullWidth
                              value={mathAnswer}
                              onChange={(e) => setMathAnswer(e.target.value)}
                              sx={{ mb: 2 }} />
                          <Button variant="contained" onClick={handleSubmitMathChallenge}>
                              Submit Answer
                          </Button>
                      </Paper>
                  </Grid>
              )}

              {/* Email Submission Section */}
              {(game === 'wordGame' || game === 'codingChallenge' || game === 'mathChallenge') && (
                  <Grid item xs={12} md={8}>
                      <Paper elevation={3} sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom>
                              📧 Submit your Email to Receive Results
                          </Typography>
                          <TextField
                              label="Your Email"
                              variant="outlined"
                              fullWidth
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              sx={{ mb: 2 }} />
                          <Button variant="contained" color="secondary" fullWidth onClick={sendEmail}>
                              Receive Results via Email
                          </Button>
                      </Paper>
                  </Grid>
              )}

              {/* Game Result */}
              {result && (
                  <Grid item xs={12} md={8}>
                      <Paper elevation={3} sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom>
                              Your Result: {result}
                          </Typography>
                      </Paper>
                  </Grid>
              )}
          </Grid>
      </Box>

<AIImageGenerator />
      
      </>

  );
};

export default AIPlayground;
