const input = ['<   space   >space space space<    spa   c e>'];
const reg = /(<.+?>|\s)/g;
const temp = input[0].split(reg);

let result = [];
temp.map((x) => {
  if (reg.test(x)) {
    // 정규식.text(문자열) ==> 해당 정규식을 따르는 문자열은 true 반환
    result += x; // 이에 포함되면 그냥 문자열 넣기
  } else {
    // 정규식에 포함되지 않은 문자열 (<>과 공백 아닌 문자열)
    let a = x.split('').reverse().join(''); //뒤집어서
    result += a; //
  }
});

console.log(result);