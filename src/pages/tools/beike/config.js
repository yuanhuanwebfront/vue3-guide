export const configs = {
  '2024-07-24': {
    two_hold: 81,
    two_sell: 45,
    five_hold: 66,
    five_sell: 42,
    six_hold: 135,
    six_sell: 35,
  },
  '2024-07-25': {
    two_hold: 81,
    two_sell: 45,
    five_hold: 66,
    five_sell: 42,
    six_hold: 135,
    six_sell: 35,
  },
  '2024-07-27': {
    two_hold: 81,
    two_sell: 45,
    five_hold: 66,
    five_sell: 42,
    six_hold: 136,
    six_sell: 35,
  },
  '2024-07-28': {
    two_hold: 81,
    two_sell: 45,
    five_hold: 65,
    five_sell: 42,
    six_hold: 137,
    six_sell: 36,
  },
  '2024-07-29': {
    two_hold: 81,
    two_sell: 45,
    five_hold: 66,
    five_sell: 42,
    six_hold: 136,
    six_sell: 35,
  },
  '2024-07-30': {
    two_hold: 82,
    two_sell: 45,
    five_hold: 66,
    five_sell: 42,
    six_hold: 137,
    six_sell: 36,
  },
  '2024-08-02': {
    two_hold: 81,
    two_sell: 45,
    five_hold: 68,
    five_sell: 42,
    six_hold: 134,
    six_sell: 36,
  }
}


export function getDataByKey(key){

  let dataArr = [];

  Object.keys(configs).forEach(date => {

    dataArr.push(configs[date][key])

  })
  console.log(dataArr)
  return dataArr;

}