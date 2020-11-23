function QuestionsMarks(str) {

  for (i = 0; i < str.length; i++) {

    for (j = i; j < str.length; j++) {

      if (Number(str[i]) + Number(str[j]) === 10) {
        let quesArr = []

        for (x = i + 1; x < j; x++) {
          if (str[x] === '?') {
            quesArr.push(i)
            if (quesArr.length === 3) {
              return "true"
            }
          }
        }

      }
    }

  }

  return 'false'
}

// keep this function call here 








function QuestionsMarks(str) {

  let success = []

  for (i = 0; i < str.length; i++) {

    for (j = i; j < str.length - 1; j++) {

      if (Number(str[i]) + Number(str[j]) === 10) {
        let quesArr = []

        for (x = i + 1; x < j; x++) {
          if (str[x] === '?') {
            quesArr.push(i)
          }
        }

        if (quesArr.length === 3) {
          success.push(1)
        } else {
          success.push(i)
        }
      }
    }

  }

  if (!success.includes(0) && success.length > 0) {
    return "true"
  } else {
    return "false"
  }


}

// keep this function call here 