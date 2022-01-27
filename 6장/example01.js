/*
리팩터링을 할 때 절차를 쪼개는 이유는? -> 리팩터링 과정중 겉보기 동작을 유지하기 위함
*/

// 1단계 -> 겉보기 동작 유지, 코드 깨짐 없음
function xxNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = someCostomers.filter((c) => inNewEngland(c));
