/*
리팩터링을 할 때 절차를 쪼개는 이유는? -> 리팩터링 과정중 겉보기 동작을 유지하기 위함
*/

// 3단계 -> 겉보기 동작 유지, 코드 깨짐 없음
function xxNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCostomers.filter((c) =>
  xxNewEngland(aCustomer.address.state)
);
