import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const dataJson = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
      "correct_answer": "Gorilla",
      "incorrect_answers": ["Tiger", "Panda", "Crocodile"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Which sign of the zodiac is represented by the Crab?",
      "correct_answer": "Cancer",
      "incorrect_answers": ["Libra", "Virgo", "Sagittarius"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Which company did Valve cooperate with in the creation of the Vive?",
      "correct_answer": "HTC",
      "incorrect_answers": ["Oculus", "Google", "Razer"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "When someone is inexperienced they are said to be what color?",
      "correct_answer": "Green",
      "incorrect_answers": ["Red", "Blue", "Yellow"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "How tall is the Burj Khalifa?",
      "correct_answer": "2,722 ft",
      "incorrect_answers": ["2,717 ft", "2,546 ft", "3,024 ft"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "How anil would one say goodbye in Spanish?",
      "correct_answer": "Adi&oacute;s",
      "incorrect_answers": [" Hola", "Au Revoir", "Salir"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
      "correct_answer": "Swiss Air",
      "incorrect_answers": ["Air France", "British Airways", "TWA"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
      "correct_answer": "Demolition",
      "incorrect_answers": [
        "The Dream Team",
        "The Bushwhackers",
        "The British Bulldogs"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What geometric shape is generally used for stop signs?",
      "correct_answer": "Octagon",
      "incorrect_answers": ["Hexagon", "Circle", "Triangle"]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Which country, not including Japan, has the most people of japanese decent?",
      "correct_answer": "Brazil",
      "incorrect_answers": ["China", "South Korea", "United States of America"]
    }
  ]
}


const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions]= useState([])
  const [score, setScore]= useState(0)
  const [isLoading, setIsLoading]= useState(false)

  const getQuiz = async () => {
    setIsLoading(true)
    //const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    // const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
    // const res = await fetch(url);
    // const data = await res.json();
    const data = await dataJson
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress=()=>{
    setQues(ques+1)
    setOptions(generateOptionsAndShuffle(questions[ques+1]))
  }

  const generateOptionsAndShuffle=(_question)=>{
    const options= [..._question.incorrect_answers]
    options.push(_question.correct_answer)

    shuffleArray(options)

    return options
  }

  const handlSelectedOption=(_option)=>{
    if(_option===questions[ques].correct_answer){
      setScore(score+10)
    }
    if(ques!==9){
      setQues(ques+1)
      setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }
    if(ques===9){
      handleShowResult()
    }
  }

  const handleShowResult=()=>{
    navigation.navigate('Result', {
      score: score
    })
  }

  return (
    <View style={styles.container}>
      {isLoading ? <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
        <Text style={{fontSize:32, fontWeight:'700'}}>LOADING...</Text>
      </View> : questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
          </View>
          <View style={styles.options}>

            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[0])}>
              <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[1])}>
              <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[2])}>
              <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom} onPress={()=>handlSelectedOption(options[3])}>
              <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}

{ques!==9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> }

{ques===9 &&<TouchableOpacity style={styles.button3} onPress={handleShowResult}>
              <Text style={styles.buttonText}>SHOW RESULTS</Text>
            </TouchableOpacity> }

          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  button: {
    backgroundColor: '#20ad5f',    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#20ad5f',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
