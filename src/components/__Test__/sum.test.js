import { Sum } from "../Sum"



test("Sum function should calculate sum of two functions", () => {

     const result = Sum(4,3);
      
     //Assertion
     expect(result).toBe(7)

})