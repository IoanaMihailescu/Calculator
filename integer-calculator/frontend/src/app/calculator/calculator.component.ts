import { Component } from "@angular/core";
import { CalculatorService } from "../calculator.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent {
  displayValue: string = "";
  // Will hold the result of the calculation to be able to continue with the equations
  resultValue: string = "";
  currentOperator: string = "";
  firstOperand: number | null = null;
  // Flag if the displayValue should be replaced
  shouldReplaceDisplayValue: boolean = false;

  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operators: string[] = ["+", "-", "*"];

  constructor(private calculatorService: CalculatorService) {}

  /**
   * Displays a number to the display value when a button is clicked.
   * @param number - The number to be displayed as the display value
   */
  inputValue(number: number) {
    if (this.shouldReplaceDisplayValue) {
      this.displayValue = "";
      this.shouldReplaceDisplayValue = false;
    }
    this.displayValue += number.toString();
  }

  /**
   * Sets the current operator and stores the first operand.
   * Appends the operator to displayValue and clears resultValue if needed.
   * @param operator - The operator selected
   */
  inputOperator(operator: string) {
    /**
     * If there's a result (resultValue), it uses it as the firstOperand for the next
     * operation and clears resultValue
     * This permits calculations with the result after pressing =
     */
    if (this.resultValue) {
      this.firstOperand = parseFloat(this.resultValue);
      this.resultValue = "";
    }

    if (this.displayValue) {
      if (["+", "-", "*"].includes(this.displayValue.slice(-1))) {
        this.displayValue = this.displayValue.slice(0, -1);
      }
      this.displayValue += ` ${operator} `;
    }
    this.shouldReplaceDisplayValue = false;
  }

  /**
   * Calculates the result
   * Calls the CalculatorService to do the calculation and updates resultValue with the result from the backend.
   */
  calculate() {
    if (this.displayValue) {
      const parts = this.displayValue.split(" ");
      if (parts.length === 3) {
        const operand1 = parseFloat(parts[0]);
        const operator = parts[1];
        const operand2 = parseFloat(parts[2]);

        this.calculatorService
          .calculate(operand1, operand2, operator)
          .subscribe((response) => {
            this.resultValue = response.result.toString();
            // The result is stored in resultValue and displayed
            this.displayValue = this.resultValue;
            this.currentOperator = "";
            this.shouldReplaceDisplayValue = true;
          });
      }
    }
  }

  /**
   * Clears the display and resets the operators
   */
  clear() {
    this.displayValue = "";
    this.resultValue = "";
    this.currentOperator = "";
    this.firstOperand = null;
    this.shouldReplaceDisplayValue = false;
  }
}
