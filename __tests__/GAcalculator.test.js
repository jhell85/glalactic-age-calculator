/* eslint-disable no-undef */
import { Calculator } from "./../src/gaCalculator";
// These tests will only pass based on a date that is 35 years of age as of today, the date would need to be changed in Calculator() 2 lines down to todays date 35 years ago to pass the tests.  
describe('gaCalculator', () => {
  let calculator = new Calculator(1985,2,7);

  test('should return the age of the date entered', () => {
    let yearsOld = calculator.age();
    expect(yearsOld).toEqual(35);
  });
  test('should return the age in Mercury years',() => {
    let mercurianYears = calculator.mercury();
    expect(mercurianYears).toEqual(145);
  });
});