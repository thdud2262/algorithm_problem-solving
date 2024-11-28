/* JadenCase문자열 만들기
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. 
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요. 

제한 조건
- s는 길이 1 이상 200 이하인 문자열입니다.
- s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
- 숫자는 단어의 첫 문자로만 나옵니다.
- 숫자로만 이루어진 단어는 없습니다.
- 공백문자가 연속해서 나올 수 있습니다.
*/

function solution(s) {
  const stringArr = s.split(" ");
  const answer = [];

  for (let str of stringArr) {
    if (str.length > 0) {
      let oneStr = str[0].toUpperCase();
      let twoSrt = str.slice(1, str.length).toLowerCase();
      answer.push(oneStr + twoSrt);
    } else {
      answer.push("");
    }
  }
  return answer.join(" ");
}

console.log(solution("3people unFollowed me")); //"3people Unfollowed Me"
console.log(solution("for the last week")); //"For The Last Week"
console.log(solution("  hello   world  ")); // "  Hello   World  "
